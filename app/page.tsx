import Image from "next/image";
import Projects from "./components/Projects";
import Reveal from "./components/Reveal";
import TypewriterText from "./components/TypewriterText";

export default function Home() {
  return (
    <>
      {/* NAV */}
      <header className="topnav">
        <a href="#top" className="logo">
          A<span className="logo-dot"></span>A
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#experience">Experience</a>
        </nav>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-contact-btn"
        >
          Resume (CV) <span className="dot"></span>
        </a>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div>
            <h1>
              <TypewriterText
                startDelay={300}
                charDelay={55}
                lineBreakDelay={200}
                lines={[
                  [
                    { text: "Turning" },
                    { text: " " },
                    { text: "Data", className: "serif-italic" },
                  ],
                  [{ text: "Into Insight." }],
                  [
                    { text: "Ideas Into " },
                    { text: "Impact", className: "accent-word" },
                    { text: "." },
                  ],
                ]}
              />
            </h1>
            <p className="hero-sub">
              Informatics Engineering student at Universitas Hasanuddin with a
              strong interest in data analytics, business intelligence, and the
              digital finance industry.
            </p>
            <div className="hero-cta-row">
              <a href="#contact" className="cta-pill">
                Get in Touch <span className="arrow-circle">→</span>
              </a>
              <div className="hero-stats">
                <span className="hero-stats-pill">
                  <strong>GPA 3.80</strong> · 7th Semester
                </span>
              </div>
            </div>
          </div>

          <div className="hero-photo-zone">
            <div className="photo-bg-shape"></div>
            <div className="photo-bg-accent"></div>
            <Image
              src="/azizah.png"
              alt="Azizah Awaliyah"
              width={760}
              height={960}
              className="hero-photo"
              priority
            />
            <span className="role-pill r1">Data Analyst</span>
            <span className="role-pill r2">AI / ML</span>
            <span className="role-pill r3">Business Analyst</span>
            <span className="role-pill r4">Tech Product</span>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[
              "Data Analytics",
              "Business Intelligence",
              "Machine Learning",
              "Digital Product Development",
              "Data Analytics",
              "Business Intelligence",
              "Machine Learning",
              "Digital Product Development",
            ].map((text, i) => (
              <div className="marquee-item" key={i}>
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <Reveal>
        <section className="about" id="about">
          <div className="about-shape-left"></div>
          <div className="about-shape-right"></div>
          <h2>
            I like making{" "}
            <span className="serif-italic">simple yet meaningful</span>
            <br />
            data analysis.
          </h2>
          <div className="about-prose">
            <p>
              I enjoy working through the full analytics workflow, from
              pulling data together and engineering features, to building
              models and presenting findings that help teams make better
              decisions. My goal is to balance clean technical execution
              with a solid grasp of the business behind the numbers.
            </p>
            <p>
              My internship at Telkomsel helped me translate operational
              needs into practical, data-driven solutions. In class, I
              worked on customer churn analysis in e-commerce, social media
              sentiment analysis, and a comparative case study on FinTech
              disruption featuring GoPay and Blu by BCA. These projects
              deepened my understanding of Indonesia&apos;s digital banking
              industry.
            </p>
            <p>
              Beyond the classroom, I take on coordinating roles in student
              committees and serve as a liaison officer at international
              conferences. These experiences round out my technical skills
              with strong communication and cross-disciplinary teamwork.
            </p>
          </div>
          <div className="about-social">
            <span className="about-social-label">Follow me :</span>
            <a
              href="https://www.linkedin.com/in/azizahawaliyah"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/ZizahAwaliyah"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="https://instagram.com/azizahaa_"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://wa.me/6281343710687"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>
            <a
              href="mailto:azizahawaliyahjijah@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </section>
        </Reveal>

        {/* PROJECTS */}
        <Reveal>
        <Projects />
        </Reveal>

        {/* SKILLS */}
        <Reveal>
        <section className="skills-section" id="skills">
          <h2>
            Skills that <span className="serif-italic">fuel</span>
            <br />
            my passion.
          </h2>
          <div className="skill-cards">
            <div className="skill-card c1">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 3v18h18" />
                  <path d="M18 17V9" />
                  <path d="M13 17V5" />
                  <path d="M8 17v-3" />
                </svg>
              </div>
              <h3>Data Analytics</h3>
              <p>
                Extracting insight from raw data: integrating multiple sources,
                cleaning, exploring, and visualizing data to support decisions.
              </p>
              <div className="skill-tools">
                <span>Python</span>
                <span>SQL</span>
                <span>Pandas</span>
                <span>Excel</span>
                <span>Matplotlib</span>
              </div>
            </div>

            <div className="skill-card c2">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
              <h3>Business Intelligence</h3>
              <p>
                Translating findings into business narrative: comparative
                analysis, strategic frameworks, and industry context —
                especially digital banking.
              </p>
              <div className="skill-tools">
                <span>Comparative Analysis</span>
                <span>Stakeholder Impact</span>
                <span>FinTech Regulation</span>
              </div>
            </div>

            <div className="skill-card c3">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="5" r="2" />
                  <circle cx="5" cy="12" r="2" />
                  <circle cx="19" cy="12" r="2" />
                  <circle cx="8" cy="19" r="2" />
                  <circle cx="16" cy="19" r="2" />
                  <path d="M12 7v3" />
                  <path d="M10.5 11.5l-3.5-.5" />
                  <path d="M13.5 11.5l3.5-.5" />
                  <path d="M10.5 14l-2 3.5" />
                  <path d="M13.5 14l2 3.5" />
                </svg>
              </div>
              <h3>Machine Learning</h3>
              <p>
                Predictive modeling and pattern exploration: classification,
                clustering, and text analysis with supervised &amp;
                unsupervised approaches.
              </p>
              <div className="skill-tools">
                <span>Scikit-learn</span>
                <span>Logistic Regression</span>
                <span>Random Forest</span>
                <span>K-Means</span>
                <span>NLP</span>
              </div>
            </div>

            <div className="skill-card c4">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3>Digital Product Development</h3>
              <p>
                Building digital product frontends from prototype to
                ready-to-use interfaces; comfortable collaborating across teams
                with modern workflows.
              </p>
              <div className="skill-tools">
                <span>React / Next.js</span>
                <span>Tailwind CSS</span>
                <span>Figma</span>
                <span>Git</span>
              </div>
            </div>

            <div className="skill-card c5">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3>Communication &amp; Collaboration</h3>
              <p>
                Translating complex analysis into clear narratives for diverse
                audiences, from technical peers to non-technical stakeholders;
                comfortable working across functions and cultures.
              </p>
              <div className="skill-tools">
                <span>Communication</span>
                <span>Public Relations</span>
                <span>Teamwork</span>
                <span>Cross-disciplinary</span>
              </div>
            </div>

            <div className="skill-card c6">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <polyline points="17 11 19 13 23 9" />
                </svg>
              </div>
              <h3>Leadership &amp; Coordination</h3>
              <p>
                Experienced coordinating teams and multi-stakeholder events;
                comfortable with planning, execution, and solving problems
                under tight timelines.
              </p>
              <div className="skill-tools">
                <span>Leadership</span>
                <span>Event Management</span>
                <span>Problem Solving</span>
                <span>Time Management</span>
              </div>
            </div>
          </div>
        </section>
        </Reveal>

        {/* CERTIFICATIONS */}
        <Reveal>
        <section className="certifications-section" id="certifications">
          <div className="section-head">
            <h2>Certifications</h2>
            <span className="see-all">Verified on Dicoding</span>
          </div>
          <div className="cert-grid">
            <a
              href="https://www.dicoding.com/certificates/GRX5WVQ9RZ0M"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card ct1"
            >
              <div className="cert-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <div className="cert-info">
                <span className="cert-issuer">Dicoding × Google Developers</span>
                <h3 className="cert-title">Memulai Pemrograman dengan Python</h3>
                <div className="cert-meta">
                  <span>60 jam</span>
                  <span>·</span>
                  <span>Juni 2026</span>
                </div>
              </div>
              <span className="cert-link">Verify ↗</span>
            </a>

            <a
              href="https://www.dicoding.com/certificates/RVZK0V8KNZD5"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card ct2"
            >
              <div className="cert-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <div className="cert-info">
                <span className="cert-issuer">Dicoding</span>
                <h3 className="cert-title">
                  Belajar Dasar Structured Query Language (SQL)
                </h3>
                <div className="cert-meta">
                  <span>11 jam</span>
                  <span>·</span>
                  <span>Juni 2026</span>
                </div>
              </div>
              <span className="cert-link">Verify ↗</span>
            </a>

            <a
              href="https://www.dicoding.com/certificates/1RXYW51O3ZVM"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card ct3"
            >
              <div className="cert-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <div className="cert-info">
                <span className="cert-issuer">Dicoding × Google Cloud</span>
                <h3 className="cert-title">Belajar Dasar AI</h3>
                <div className="cert-meta">
                  <span>10 jam</span>
                  <span>·</span>
                  <span>Juni 2026</span>
                </div>
              </div>
              <span className="cert-link">Verify ↗</span>
            </a>
          </div>
        </section>
        </Reveal>

        {/* EXPERIENCE */}
        <Reveal>
        <section className="experience" id="experience">
          <div className="section-head">
            <h2>Experience</h2>
            <a href="#contact" className="see-all">
              Get in Touch →
            </a>
          </div>
          <div className="exp-list">
            <div className="exp-row">
              <div className="exp-period">Apr — Jul 2026</div>
              <div className="exp-main">
                <h4>Loyalty &amp; Retention Operations · Intern</h4>
                <div className="exp-org">Telkomsel, Sulawesi Region</div>
              </div>
              <span className="exp-tag">Industry Internship</span>
            </div>
            <div className="exp-row">
              <div className="exp-period">Nov 2025</div>
              <div className="exp-main">
                <h4>Liaison Officer · PIMNAS 38</h4>
                <div className="exp-org">
                  National event participant support — 85.95% satisfaction rate
                </div>
              </div>
              <span className="exp-tag">National</span>
            </div>
            <div className="exp-row">
              <div className="exp-period">Aug 2024 — Sep 2025</div>
              <div className="exp-main">
                <h4>Liaison Officer · RITECH 2025</h4>
                <div className="exp-org">
                  International conference — social media &amp; VIP guest
                  management
                </div>
              </div>
              <span className="exp-tag">International</span>
            </div>
            <div className="exp-row">
              <div className="exp-period">July 2025</div>
              <div className="exp-main">
                <h4>Event Coordinator · ColorFit 2025</h4>
                <div className="exp-org">
                  End-to-end event planning and execution
                </div>
              </div>
              <span className="exp-tag">Event</span>
            </div>
            <div className="exp-row">
              <div className="exp-period">Dec 2024 — Apr 2025</div>
              <div className="exp-main">
                <h4>PR Coordinator · Recursion 1.0</h4>
                <div className="exp-org">
                  25,000+ profile visits, 808 participants from 69 universities
                </div>
              </div>
              <span className="exp-tag">Campus</span>
            </div>
            <div className="exp-row">
              <div className="exp-period">Dec 2024 — Jun 2025</div>
              <div className="exp-main">
                <h4>Education Division · OKIF FT-UH</h4>
                <div className="exp-org">
                  Research &amp; dissemination of scholarships and competitions
                </div>
              </div>
              <span className="exp-tag">Organization</span>
            </div>
          </div>
        </section>
        </Reveal>

        {/* CTA */}
        <Reveal>
        <section className="cta-band" id="contact">
          <h2>
            Let&apos;s collaborate. <br />
            Turn your data{" "}
            <span className="serif-italic">into insight</span>.
          </h2>
          <a
            href="mailto:azizahawaliyahjijah@gmail.com"
            className="cta-pill-light"
          >
            Email Me <span className="arrow-circle">→</span>
          </a>
        </section>
        </Reveal>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <h3>
            Azizah<span style={{ color: "#86EFCB" }}>.</span>Awaliyah
          </h3>
          <p>
            Informatics Engineering student at Universitas Hasanuddin —
            interested in data, business intelligence, and digital finance.
          </p>
        </div>
        <div className="footer-col">
          <h5>Navigation</h5>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Contact</h5>
          <ul>
            <li>
              <a href="mailto:azizahawaliyahjijah@gmail.com">Email</a>
            </li>
            <li>
              <a
                href="https://wa.me/6281343710687"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=Makassar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Makassar, ID
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Social</h5>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/azizahawaliyah"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ZizahAwaliyah"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/azizahaa_"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-copy">
          <span>© 2026 Azizah Awaliyah</span>
          <span>Crafted with attention to detail.</span>
        </div>
      </footer>
    </>
  );
}

