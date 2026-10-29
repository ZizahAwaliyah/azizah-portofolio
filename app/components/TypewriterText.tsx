"use client";

import { useEffect, useState } from "react";

type Chunk = {
  text: string;
  className?: string;
};

type Line = Chunk[];

type Props = {
  lines: Line[];
  charDelay?: number;
  startDelay?: number;
  lineBreakDelay?: number;
  onComplete?: () => void;
};

export default function TypewriterText({
  lines,
  charDelay = 55,
  startDelay = 200,
  lineBreakDelay = 150,
  onComplete,
}: Props) {
  const [lineIdx, setLineIdx] = useState(0);
  const [chunkIdx, setChunkIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Reduced motion: show everything instantly
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setLineIdx(lines.length);
      setDone(true);
      onComplete?.();
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    let elapsed = startDelay;

    lines.forEach((line, li) => {
      line.forEach((chunk, ci) => {
        for (let ch = 1; ch <= chunk.text.length; ch++) {
          const li_ = li;
          const ci_ = ci;
          const ch_ = ch;
          timers.push(
            setTimeout(() => {
              setLineIdx(li_);
              setChunkIdx(ci_);
              setCharIdx(ch_);
            }, elapsed)
          );
          elapsed += charDelay;
        }
      });
      if (li < lines.length - 1) {
        elapsed += lineBreakDelay;
      }
    });

    // Mark done
    timers.push(
      setTimeout(() => {
        setDone(true);
        onComplete?.();
      }, elapsed + 100)
    );

    return () => timers.forEach(clearTimeout);
  }, [lines, charDelay, startDelay, lineBreakDelay, onComplete]);

  return (
    <>
      {lines.map((line, li) => {
        // Only render lines up to current
        if (li > lineIdx) return null;

        return (
          <span key={li} className="type-line">
            {line.map((chunk, ci) => {
              if (li < lineIdx) {
                // Previous line, show full
                return (
                  <span key={ci} className={chunk.className}>
                    {chunk.text}
                  </span>
                );
              }
              if (ci < chunkIdx) {
                return (
                  <span key={ci} className={chunk.className}>
                    {chunk.text}
                  </span>
                );
              }
              if (ci === chunkIdx) {
                const visible = chunk.text.slice(0, charIdx);
                const isTypingHere = !done && li === lineIdx && ci === chunkIdx;
                return (
                  <span key={ci} className={chunk.className}>
                    {visible}
                    {isTypingHere && (
                      <span className="type-cursor" aria-hidden="true" />
                    )}
                  </span>
                );
              }
              return null;
            })}
            {li < lines.length - 1 && <br />}
          </span>
        );
      })}
    </>
  );
}
