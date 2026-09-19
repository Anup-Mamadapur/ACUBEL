import { motion } from "motion/react";
import "./App.css";

const occasions = [
  { icon: "🎂", name: "Birthday" },
  { icon: "🎓", name: "Graduation" },
  { icon: "💼", name: "First Job" },
  { icon: "❤️", name: "Anniversary" },
  { icon: "💍", name: "Wedding" },
  { icon: "🪔", name: "Festival" },
];

const features = [
  {
    title: "Simple gifting",
    text: "Choose an amount, an investment, and a message.",
  },
  {
    title: "Made for moments",
    text: "Turn birthdays, graduations and milestones into investment gifts.",
  },
  {
    title: "Built for platforms",
    text: "A gifting layer designed for brokers, banks and fintechs.",
  },
];

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">ACUBEL</div>

        <nav className="nav-links">
          <a href="#how-it-works">How it works</a>
          <a href="#occasions">Occasions</a>
          <a href="#partners">For Partners</a>
        </nav>

        <button className="nav-cta">Send a Gift</button>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="eyebrow">THE GIFTING LAYER FOR INVESTING</div>

              <h1>
                Give a gift that
                <span> can become wealth.</span>
              </h1>

              <p className="hero-text">
                Send stocks and ETFs as a simple digital gift —
                meaningful today, built for the future.
              </p>

              <div className="hero-actions">
                <button className="primary-btn">
                  Send an Investment Gift
                  <span>→</span>
                </button>

                <a href="#how-it-works" className="secondary-btn">
                  See how it works
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="gift-visual"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="glow"></div>

            <div className="phone">
              <div className="phone-top">
                <span>ACUBEL</span>
                <span>•••</span>
              </div>

              <div className="gift-card">
                <div className="gift-label">INVESTMENT GIFT</div>

                <div className="gift-amount">₹1,000</div>

                <div className="gift-to">
                  <span>FOR</span>
                  <strong>Rahul</strong>
                </div>

                <div className="gift-occasion">
                  🎂 Birthday
                </div>

                <div className="gift-investment">
                  <span>Investment</span>
                  <strong>Nifty 50 ETF</strong>
                </div>

                <div className="gift-message">
                  “Something for your future.”
                </div>
              </div>

              <button className="phone-button">Claim Gift</button>
            </div>
          </motion.div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section" id="how-it-works">
          <div className="section-heading">
            <div className="eyebrow">HOW IT WORKS</div>
            <h2>As easy as sending a gift.</h2>
            <p>
              ACUBEL turns an investment into a simple, personal digital gift.
            </p>
          </div>

          <div className="steps">
            {[
              ["01", "Choose", "Pick an occasion, amount and investment."],
              ["02", "Personalize", "Add a message and make it yours."],
              ["03", "Send", "Share the gift through a link or WhatsApp."],
              ["04", "Invest", "The recipient claims it through the partner platform."],
            ].map(([number, title, text]) => (
              <motion.div
                className="step-card"
                key={number}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="step-number">{number}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* OCCASIONS */}
        <section className="section occasions-section" id="occasions">
          <div className="section-heading">
            <div className="eyebrow">FOR EVERY MILESTONE</div>
            <h2>Make the occasion worth remembering.</h2>
          </div>

          <div className="occasion-grid">
            {occasions.map((occasion) => (
              <motion.div
                className="occasion-card"
                key={occasion.name}
                whileHover={{ y: -6 }}
              >
                <div className="occasion-icon">{occasion.icon}</div>
                <span>{occasion.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section className="section">
          <div className="feature-grid">
            {features.map((feature, index) => (
              <motion.div
                className="feature-card"
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="feature-dot"></div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* B2B */}
        <section className="partner-section" id="partners">
          <div className="partner-content">
            <div className="eyebrow">FOR BROKERS & FINTECHS</div>

            <h2>
              Add investment gifting
              <span> to your platform.</span>
            </h2>

            <p>
              ACUBEL provides the gifting layer — from gift creation and
              personalization to recipient claims and analytics.
            </p>

            <button className="primary-btn">
              Partner with ACUBEL
              <span>→</span>
            </button>
          </div>

          <div className="partner-box">
            <div className="partner-line">
              <span>User</span>
              <b>→</b>
              <span>ACUBEL</span>
              <b>→</b>
              <span>Financial Partner</span>
            </div>

            <div className="partner-tags">
              <span>Gift creation</span>
              <span>Gift links</span>
              <span>QR</span>
              <span>Analytics</span>
              <span>APIs</span>
              <span>White-label</span>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <div className="brand">ACUBEL</div>
          <p>Give a gift that can become wealth.</p>
        </div>

        <div className="footer-right">
          <span>Prototype — no real investments are processed.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;