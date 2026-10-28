"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Project = {
  id: string;
  index: string;
  type: string;
  title: string;
  description: string;
  tags: string[];
  cover: string;
  github: string | null;
  modal: {
    period: string;
    role: string;
    tools: string[];
    fullDescription: string;
    results: string[];
  };
};

const projects: Project[] = [
  {
    id: "telkomsel",
    index: "01",
    type: "Internship · Industry",
    title: "Loyalty Dashboard — Telkomsel",
    description:
      "Supported loyalty & customer retention program analysis for Sulawesi Region; built a frontend dashboard prototype.",
    tags: ["Internship", "Customer Analysis", "Next.js"],
    cover: "/projects/telkomsel.png",
    github: null,
    modal: {
      period: "April — July 2026",
      role: "Loyalty & Retention Operations Intern",
      tools: ["Next.js", "React", "Tailwind CSS", "Data Analysis"],
      fullDescription:
        "During my internship at Telkomsel Region Sulawesi, I supported the Loyalty & Retention Operations team in analyzing customer behavior, identifying burning points, and developing keyword and loyalty program strategies. I also built a frontend prototype dashboard to help the team evaluate campaign performance.",
      results: [
        "Developed a working dashboard prototype using Next.js and Tailwind CSS",
        "Contributed to burning-point analysis for Region Sulawesi customers",
        "Supported keyword and loyalty program drafting for internal teams",
      ],
    },
  },
  {
    id: "fintech",
    index: "02",
    type: "Case Study · FinTech",
    title: "FinTech Case Study: GoPay & Blu by BCA",
    description:
      "Comparative analysis of FinTech disruption in Indonesia covering business models, impact, and regulations.",
    tags: ["Digital Banking", "Business Analysis", "GitHub ↗"],
    cover: "/projects/fintech.png",
    github: "https://github.com/ZizahAwaliyah/studi-kasus-fintech-indonesia",
    modal: {
      period: "2025",
      role: "Team Member (Group Project)",
      tools: ["Research", "Business Analysis", "Documentation"],
      fullDescription:
        "A comparative study on FinTech disruption in Indonesia, featuring GoPay and Blu by BCA as two distinct cases of digital finance transformation. The analysis covers business models, flywheel effects, stakeholder impact, security, and the Indonesian regulatory landscape (OJK, PBI, UU PDP).",
      results: [
        "21-page analytical report with comparative framework",
        "19-slide presentation summarizing key insights",
        "Mapped Indonesian FinTech regulations and sandbox mechanisms",
      ],
    },
  },
  {
    id: "churn",
    index: "03",
    type: "Analysis · Big Data",
    title: "E-Commerce Churn Prediction Analysis",
    description:
      "Integrated 5 Olist tables (119K rows), engineered features, and compared Logistic Regression vs Random Forest.",
    tags: ["Python", "Scikit-learn", "GitHub ↗"],
    cover: "/projects/churn.png",
    github: "https://github.com/ZizahAwaliyah/ecommerce-churn-analysis",
    modal: {
      period: "Semester 5 (2025)",
      role: "Project Manager (Team of 6)",
      tools: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
      fullDescription:
        "An end-to-end exploration project on customer churn behavior using the Olist Brazilian E-Commerce dataset. The pipeline covers data integration from 5 source tables, feature engineering (RFM-style features), and model comparison using Logistic Regression and Random Forest as proof of concept.",
      results: [
        "119,143 rows integrated from 5 relational tables",
        "4 engineered customer-level features",
        "Compared Logistic Regression and Random Forest baselines",
        "Documented methodological limitations transparently",
      ],
    },
  },
  {
    id: "sentimen",
    index: "04",
    type: "Text Analytics · SNA",
    title: "Sentiment & Network Analysis: TikTok Shop",
    description:
      "NLP pipeline on 1,281 tweets with lexicon-based sentiment, K-Means clustering, and Social Network Analysis.",
    tags: ["NLP", "NetworkX", "GitHub ↗"],
    cover: "/projects/sentimen.png",
    github: "https://github.com/ZizahAwaliyah/analisis-sentimen-tiktokshop",
    modal: {
      period: "Semester 5 (October 2025)",
      role: "Individual Project",
      tools: ["Python", "NLTK", "Scikit-learn", "NetworkX", "Gephi"],
      fullDescription:
        "A complete analytics pipeline exploring public conversations around TikTok Shop on platform X. The project combines lexicon-based sentiment analysis (validated with 100 manual labels), K-Means topic clustering, and Social Network Analysis to map community structure within the discussions.",
      results: [
        "1,281 tweets scraped over 31 days",
        "Lexicon sentiment validated against 100 manual labels",
        "5 topic clusters identified via K-Means + TF-IDF",
        "Social network graph exported to Gephi for community detection",
      ],
    },
  },
  {
    id: "ml",
    index: "05",
    type: "Data Science · ML",
    title: "Machine Learning Algorithms: End-to-End Implementation",
    description:
      "End-to-end implementation of four core ML algorithms (Clustering, Classification, Regression, Association Rules) across four different real-world datasets.",
    tags: ["Scikit-learn", "Clustering", "Classification", "Association Rules"],
    cover: "/projects/ml.png",
    github: null,
    modal: {
      period: "2026",
      role: "Individual Project",
      tools: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "mlxtend (Apriori)",
      ],
      fullDescription:
        "A comprehensive data science coursework project implementing four distinct machine learning algorithms, each applied to a different real-world dataset. The work covers the full data science workflow: data understanding, validation, cleaning, EDA, feature engineering, modeling, and evaluation. Every algorithm is also demonstrated through manual mathematical calculation to show how the models work internally.",
      results: [
        "Agglomerative Clustering on Mall Customer Dataset (200 rows) — 5 segments identified with Silhouette Score 0.5538",
        "Decision Tree on Iris Dataset (150 rows) — 90% accuracy; PetalLength & PetalWidth as most important features",
        "Logistic Regression on Breast Cancer Wisconsin Dataset (569 rows) — 97.37% accuracy, ROC-AUC 0.9964 for tumor classification",
        "Quantitative Association Rules on Drug Dataset (200 rows) — 3 clinically meaningful rules; strongest rule with 100% confidence & lift 2.20",
      ],
    },
  },
  {
    id: "ogd",
    index: "06",
    type: "Research · Big Data",
    title: "Open Government Data: Comparative Study of Canada, Mexico, and Turkey",
    description:
      "Cross-country technical analysis of Open Government Data portals, with a quantitative case study on Mexico's tourism dataset.",
    tags: ["Big Data", "Open Data", "Comparative Analysis"],
    cover: "/projects/ogd.png",
    github: null,
    modal: {
      period: "2024",
      role: "Individual Research Project",
      tools: [
        "Python 3",
        "Google Colab",
        "Pandas",
        "Matplotlib",
        "Seaborn",
      ],
      fullDescription:
        "A technical research project evaluating Open Government Data (OGD) implementations in three countries representing different maturity levels: Canada (high), Mexico (medium), and Turkey (low). The qualitative analysis uses the Linked Open Government Data (LOGD) life cycle framework, while the quantitative case study explores Mexico's tourism dataset to extract insights on travel trends, COVID-19 impact, and demographic patterns. The study closes with recommendations for improving Indonesia's OGD ecosystem.",
      results: [
        "Comparative evaluation across data format, metadata, data quality, licensing, API access, and feedback mechanisms",
        "Mexico tourism trend analysis (2016-2024) showing strong seasonality, sharp COVID-19 drop in 2020, and quick post-pandemic recovery",
        "Domestic vs international tourism comparison — domestic travel proved more resilient during the pandemic",
        "Top 10 tourism destinations analysis — Mexico City leads significantly over other hubs",
        "Three strategic recommendations for Indonesia: metadata standardization, API prioritization, and automated data validation",
      ],
    },
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    if (!activeProject) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const openProject = (project: Project) => {
    if (project.github) {
      // Opens github in new tab via <a> tag — handled directly
      return;
    }
    setActiveProject(project);
  };

  return (
    <>
      <section className="projects-section" id="projects">
        <div className="section-head">
          <h2>Latest Projects</h2>
          <a
            href="https://github.com/ZizahAwaliyah"
            target="_blank"
            rel="noopener noreferrer"
            className="see-all"
          >
            See All →
          </a>
        </div>
        <div className="project-grid">
          {projects.map((project) =>
            project.github ? (
              <a
                key={project.id}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <ProjectCardContent project={project} />
              </a>
            ) : (
              <button
                key={project.id}
                type="button"
                onClick={() => openProject(project)}
                className="project-card"
              >
                <ProjectCardContent project={project} />
              </button>
            )
          )}
        </div>
      </section>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}

function ProjectCardContent({ project }: { project: Project }) {
  return (
    <>
      <div className="project-visual">
        <Image
          src={project.cover}
          alt={project.title}
          width={1600}
          height={1000}
          className="project-cover-img"
        />
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="p-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        <div className="modal-cover">
          <Image
            src={project.cover}
            alt={project.title}
            width={1600}
            height={1000}
            className="modal-cover-img"
          />
        </div>
        <div className="modal-body">
          <span className="modal-type">{project.type}</span>
          <h3 id="modal-title" className="modal-title">
            {project.title}
          </h3>
          <div className="modal-meta">
            <div>
              <span className="modal-meta-label">Period</span>
              <span className="modal-meta-value">{project.modal.period}</span>
            </div>
            <div>
              <span className="modal-meta-label">Role</span>
              <span className="modal-meta-value">{project.modal.role}</span>
            </div>
          </div>
          <p className="modal-desc">{project.modal.fullDescription}</p>

          <h4 className="modal-section-title">Tools &amp; Technology</h4>
          <div className="modal-tools">
            {project.modal.tools.map((tool) => (
              <span key={tool} className="modal-tool">
                {tool}
              </span>
            ))}
          </div>

          <h4 className="modal-section-title">Key Outputs</h4>
          <ul className="modal-results">
            {project.modal.results.map((result, i) => (
              <li key={i}>{result}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
