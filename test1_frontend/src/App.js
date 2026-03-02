import React, { useMemo, useState } from "react";
import "./App.css";

/**
 * Inline icons (SVG) to match the small yellow header icons shown in the design.
 * Kept minimal and consistent sizing (14–16px).
 */
function UploadIcon({ className }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3v10m0-10 4 4m-4-4-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 14v4a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChoiceIcon({ className }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 6h13M8 12h13M8 18h13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3.5 6.3 4.6 7.4 6.7 5.3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 12.3 4.6 13.4 6.7 11.3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 18.3 4.6 19.4 6.7 17.3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ConfigIcon({ className }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7h10M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M6 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

// PUBLIC_INTERFACE
function App() {
  const [outputType, setOutputType] = useState("Document");

  const outputOptions = useMemo(
    () => [
      {
        title: "Document",
        description: "Generate a doc with key content and summary.",
      },
      {
        title: "Presentation",
        description: "Generate slides with headings and talking points.",
      },
      {
        title: "Interactive Demo",
        description: "Build an interactive experience for exploration.",
      },
    ],
    []
  );

  return (
    <div className="fp">
      {/* Top nav exists in screenshot but is not the main focus; implement a thin header bar. */}
      <header className="fp-topbar" aria-label="Top navigation">
        <div className="fp-topbar__left">
          <span className="fp-topbar__brandDot" aria-hidden="true" />
          <span className="fp-topbar__brand">Demo on Demand</span>
        </div>
        <nav className="fp-topbar__nav" aria-label="Primary">
          <a className="fp-topbar__link" href="#home">
            Home
          </a>
          <a className="fp-topbar__link" href="#analysis">
            Analysis
          </a>
          <a className="fp-topbar__link" href="#activity">
            Use Activity
          </a>
          <a className="fp-topbar__link" href="#docs">
            Docs
          </a>
          <a className="fp-topbar__link" href="#output">
            Output
          </a>
        </nav>
        <div className="fp-topbar__right" aria-label="User actions">
          <span className="fp-topbar__pill">dev</span>
        </div>
      </header>

      <main className="fp-main">
        <section className="fp-container" aria-label="Upload Documents & Configure">
          <div className="fp-titleBlock">
            <h1 className="fp-title">Upload Documents &amp; Configure</h1>
            <p className="fp-subtitle">
              Start by adding your product documents or URLs
            </p>
          </div>

          {/* Card 1 */}
          <section className="fp-card" aria-label="Upload Product Documents">
            <div className="fp-card__header">
              <UploadIcon className="fp-card__icon" />
              <div className="fp-card__headerText">Upload Product Documents</div>
            </div>

            <button type="button" className="fp-dropzone">
              <div className="fp-dropzone__title">
                Drop files here or click to browse
              </div>
              <div className="fp-dropzone__subtitle">
                Supported: PDF, DOCX, TXT, URL
              </div>
            </button>
          </section>

          {/* Card 2 */}
          <section className="fp-card" aria-label="Choose Output Type">
            <div className="fp-card__header">
              <ChoiceIcon className="fp-card__icon" />
              <div className="fp-card__headerText">Choose Output Type</div>
            </div>

            <div className="fp-options" role="radiogroup" aria-label="Output type">
              {outputOptions.map((opt) => {
                const selected = opt.title === outputType;
                return (
                  <button
                    key={opt.title}
                    type="button"
                    className={`fp-optionCard ${selected ? "is-selected" : ""}`}
                    role="radio"
                    aria-checked={selected}
                    onClick={() => setOutputType(opt.title)}
                  >
                    <div className="fp-optionCard__title">{opt.title}</div>
                    <div className="fp-optionCard__desc">{opt.description}</div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Card 3 */}
          <section className="fp-card" aria-label="Configuration">
            <div className="fp-card__header">
              <ConfigIcon className="fp-card__icon" />
              <div className="fp-card__headerText">Configuration</div>
            </div>

            <div className="fp-formGrid">
              <label className="fp-field">
                <span className="fp-label">Access Key ID</span>
                <input className="fp-input" placeholder="Enter access key id" />
              </label>

              <label className="fp-field">
                <span className="fp-label">Secret Access Key</span>
                <input
                  className="fp-input"
                  type="password"
                  placeholder="Enter secret access key"
                />
              </label>

              <label className="fp-field">
                <span className="fp-label">Your Organization</span>
                <input className="fp-input" placeholder="e.g. Acme Inc." />
              </label>

              <div className="fp-field">
                <span className="fp-label">Environment</span>
                <div className="fp-pillRow" aria-label="Environment selection">
                  <span className="fp-tagPill">
                    <span className="fp-tagPill__text">dev</span>
                    <span className="fp-tagPill__x" aria-hidden="true">
                      ×
                    </span>
                  </span>
                </div>
              </div>

              <label className="fp-field">
                <span className="fp-label">Demo Title</span>
                <input className="fp-input" placeholder="Add a demo title" />
              </label>

              <label className="fp-field">
                <span className="fp-label">Purpose</span>
                <input className="fp-input" placeholder="Add a purpose" />
              </label>

              <label className="fp-field">
                <span className="fp-label">Client Type</span>
                <select className="fp-input fp-select" defaultValue="">
                  <option value="" disabled>
                    Select client type
                  </option>
                  <option>Enterprise</option>
                  <option>Mid-market</option>
                  <option>SMB</option>
                </select>
              </label>

              <label className="fp-field">
                <span className="fp-label">Target Type (optional)</span>
                <select className="fp-input fp-select" defaultValue="">
                  <option value="" disabled>
                    Target (optional)
                  </option>
                  <option>Buyer</option>
                  <option>Engineer</option>
                  <option>Executive</option>
                </select>
              </label>
            </div>
          </section>

          <div className="fp-ctaRow">
            <button type="button" className="fp-cta">
              Continue to Use Activity <span aria-hidden="true">→</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
