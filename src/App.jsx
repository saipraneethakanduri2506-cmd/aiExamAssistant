
import { useState } from "react";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const menuItems = [
    "Dashboard",
    "AI Tutor",
    "My Performance",
    "Study Recommendations",
    "My Profile",
  ];

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-icon">✦</span>
          <h2>StudyMate AI</h2>
        </div>

        <p className="menu-label">LEARNING SPACE</p>

        <nav>
          {menuItems.map((item) => (
            <button
              key={item}
              className={`nav-item ${
                activePage === item ? "active" : ""
              }`}
              onClick={() => setActivePage(item)}
            >
              {item === "Dashboard" && "⌂"}
              {item === "AI Tutor" && "✧"}
              {item === "My Performance" && "▥"}
              {item === "Study Recommendations" && "◎"}
              {item === "My Profile" && "◉"}
              <span>{item}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="avatar">S</div>
          <div>
            <strong>Student</strong>
            <p>Personal learning space</p>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">YOUR PERSONAL AI LEARNING PARTNER</p>
            <h1>{activePage}</h1>
          </div>
          <div className="header-badge">✦ AI Powered</div>
        </header>

        {activePage === "Dashboard" && (
          <>
            <section className="welcome-section">
              <div>
                <p className="welcome-tag">YOUR LEARNING JOURNEY</p>
                <h2>Learn smarter, one topic at a time.</h2>
                <p>
                  Understand concepts, practise questions, and discover
                  the topics you should focus on next.
                </p>
                <button
                  className="primary-button"
                  onClick={() => setActivePage("AI Tutor")}
                >
                  Start learning <span>→</span>
                </button>
              </div>

              <div className="welcome-art" aria-hidden="true">
                <div className="orbit orbit-one"></div>
                <div className="orbit orbit-two"></div>
                <div className="book-illustration">✧</div>
                <div className="floating-card card-one">✦ Learn</div>
                <div className="floating-card card-two">✓ Improve</div>
              </div>
            </section>

            <section className="section-heading">
              <div>
                <h2>Your learning space</h2>
                <p>Everything you need to make progress.</p>
              </div>
            </section>

            <section className="feature-grid">
              <button
                className="feature-card tutor-card"
                onClick={() => setActivePage("AI Tutor")}
              >
                <div className="feature-icon purple">✧</div>
                <h3>AI Tutor</h3>
                <p>
                  Ask questions and receive explanations tailored to
                  your learning needs.
                </p>
                <span className="card-link">Ask a question →</span>
              </button>

              <button
                className="feature-card performance-card"
                onClick={() => setActivePage("My Performance")}
              >
                <div className="feature-icon blue">▥</div>
                <h3>My Performance</h3>
                <p>
                  Review your attempts, accuracy, and understanding
                  of different topics.
                </p>
                <span className="card-link">View performance →</span>
              </button>

              <button
                className="feature-card recommendation-card"
                onClick={() => setActivePage("Study Recommendations")}
              >
                <div className="feature-icon orange">◎</div>
                <h3>Study Recommendations</h3>
                <p>
                  Find topics to revise and get suggestions based on
                  your answers.
                </p>
                <span className="card-link">Explore topics →</span>
              </button>
            </section>

            <section className="bottom-note">
              <span className="note-icon">✦</span>
              <div>
                <h3>Built around your progress</h3>
                <p>
                  Your learning journey will become more personalized
                  as you practise and answer questions.
                </p>
              </div>
            </section>
          </>
        )}

        {activePage !== "Dashboard" && (
          <section className="placeholder-section">
            <div className="placeholder-icon">✧</div>
            <h2>{activePage}</h2>
            <p>
              This section is ready for the next development step.
              We will connect it to your Spring Boot backend.
            </p>
            <button
              className="primary-button"
              onClick={() => setActivePage("Dashboard")}
            >
              ← Back to dashboard
            </button>
          </section>
        )}

        <footer className="page-footer">
          StudyMate AI · Learn at your own pace.
        </footer>
      </main>
    </div>
  );
}

export default App;
