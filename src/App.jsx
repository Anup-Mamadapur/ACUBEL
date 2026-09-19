import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./App.css";

const occasions = [
  { icon: "🎂", name: "Birthday" },
  { icon: "🎓", name: "Graduation" },
  { icon: "💼", name: "First Job" },
  { icon: "❤️", name: "Anniversary" },
  { icon: "💍", name: "Wedding" },
  { icon: "🪔", name: "Festival" },
  { icon: "✨", name: "Other" },
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

function LandingPage({ onStart }) {
  return (
    <>
      <header className="navbar">
        <div className="brand">ACUBEL</div>

        <nav className="nav-links">
          <a href="#how-it-works">How it works</a>
          <a href="#occasions">Occasions</a>
          <a href="#partners">For Partners</a>
        </nav>

        <button className="nav-cta" onClick={onStart}>
          Send a Gift
        </button>
      </header>

      <main>
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
                Send stocks and ETFs as a simple digital gift — meaningful
                today, built for the future.
              </p>

              <div className="hero-actions">
                <button className="primary-btn" onClick={onStart}>
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

                <div className="gift-occasion">🎂 Birthday</div>

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
              [
                "04",
                "Invest",
                "The recipient claims it through the partner platform.",
              ],
            ].map(([number, title, text]) => (
              <motion.div
                className="step-card"
                key={number}
                whileHover={{ y: -5 }}
              >
                <div className="step-number">{number}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section occasions-section" id="occasions">
          <div className="section-heading">
            <div className="eyebrow">FOR EVERY MILESTONE</div>
            <h2>Make the occasion worth remembering.</h2>
          </div>

          <div className="occasion-grid">
            {occasions
              .filter((occasion) => occasion.name !== "Other")
              .map((occasion) => (
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

      <footer className="footer">
        <div>
          <div className="brand">ACUBEL</div>
          <p>Give a gift that can become wealth.</p>
        </div>

        <div className="footer-right">
          <span>Prototype — no real investments are processed.</span>
        </div>
      </footer>
    </>
  );
}

function CreateGift({ onBack }) {
  const [step, setStep] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [recipientPhone, setRecipientPhone] = useState("");
  const [giftAmount, setGiftAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const presetAmounts = [100, 500, 1000, 2500];

  const finalAmount =
    giftAmount === "custom" ? customAmount : giftAmount;

  const canContinueAmount =
    finalAmount !== "" &&
    Number(finalAmount) > 0;

  return (
    <motion.main
      className="create-gift-page"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35 }}
    >
      <div className="create-topbar">
        <button className="create-logo" onClick={onBack}>
          ACUBEL
        </button>

        <div className="step-counter">{step} / 6</div>
      </div>

      <div className="progress-track">
        <motion.div
          className="progress-fill"
          animate={{ width: `${(step / 6) * 100}%` }}
          transition={{ duration: 0.35 }}
        />
      </div>

      <AnimatePresence mode="wait">
        {/* STEP 1 */}
        {step === 1 && (
          <motion.div
            key="occasion"
            className="create-content"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.25 }}
          >
            <div className="create-heading">
              <div className="eyebrow">CREATE YOUR GIFT</div>

              <h2>What are you celebrating?</h2>

              <p>
                Choose an occasion to make your investment gift feel personal.
              </p>
            </div>

            <div className="create-occasions">
              {occasions.map((occasion) => {
                const isSelected =
                  selectedOccasion === occasion.name;

                return (
                  <motion.button
                    className={`create-occasion-card ${
                      isSelected ? "selected" : ""
                    }`}
                    key={occasion.name}
                    onClick={() =>
                      setSelectedOccasion(occasion.name)
                    }
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="create-occasion-icon">
                      {occasion.icon}
                    </span>

                    <span>{occasion.name}</span>
                  </motion.button>
                );
              })}
            </div>

            <div className="create-bottom">
              <button className="back-btn" onClick={onBack}>
                ← Back
              </button>

              <button
                className="continue-btn"
                disabled={!selectedOccasion}
                onClick={() => {
                  if (selectedOccasion) setStep(2);
                }}
              >
                Continue <span>→</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <motion.div
            key="recipient"
            className="create-content"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.25 }}
          >
            <div className="create-heading">
              <div className="eyebrow">
                STEP 2 · {selectedOccasion.toUpperCase()}
              </div>

              <h2>Who are you gifting it to?</h2>

              <p>
                We'll create a gift link that you can share directly with
                them.
              </p>
            </div>

            <div className="recipient-form">
              <label>
                Recipient name
                <span>*</span>

                <input
                  type="text"
                  placeholder="e.g. Rahul"
                  value={recipientName}
                  onChange={(e) =>
                    setRecipientName(e.target.value)
                  }
                />
              </label>

              <label>
                Email <small>optional</small>

                <input
                  type="email"
                  placeholder="rahul@example.com"
                  value={recipientEmail}
                  onChange={(e) =>
                    setRecipientEmail(e.target.value)
                  }
                />
              </label>

              <label>
                Phone number <small>optional</small>

                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={recipientPhone}
                  onChange={(e) =>
                    setRecipientPhone(e.target.value)
                  }
                />
              </label>

              <div className="share-note">
                <span>🔗</span>

                <div>
                  <strong>
                    You can simply share the gift link.
                  </strong>

                  <p>
                    Email and phone details are optional in this prototype.
                  </p>
                </div>
              </div>
            </div>

            <div className="create-bottom">
              <button
                className="back-btn"
                onClick={() => setStep(1)}
              >
                ← Back
              </button>

              <button
                className="continue-btn"
                disabled={!recipientName.trim()}
                onClick={() => {
                  if (recipientName.trim()) setStep(3);
                }}
              >
                Continue <span>→</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <motion.div
            key="amount"
            className="create-content"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.25 }}
          >
            <div className="create-heading">
              <div className="eyebrow">
                STEP 3 · {selectedOccasion.toUpperCase()}
              </div>

              <h2>How much would you like to gift?</h2>

              <p>
                Choose an amount that feels right for the occasion.
              </p>
            </div>

            <div className="gift-context">
              <span>
                {occasions.find(
                  (item) => item.name === selectedOccasion
                )?.icon}
              </span>

              <strong>{selectedOccasion}</strong>

              <span className="context-separator">•</span>

              <span>{recipientName}</span>
            </div>

            <div className="amount-section">
              <div className="amount-grid">
                {presetAmounts.map((amount) => {
                  const selected =
                    giftAmount === String(amount);

                  return (
                    <motion.button
                      key={amount}
                      className={`amount-card ${
                        selected ? "selected" : ""
                      }`}
                      onClick={() => {
                        setGiftAmount(String(amount));
                        setCustomAmount("");
                      }}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      ₹{amount.toLocaleString("en-IN")}
                    </motion.button>
                  );
                })}

                <motion.button
                  className={`amount-card ${
                    giftAmount === "custom" ? "selected" : ""
                  }`}
                  onClick={() => setGiftAmount("custom")}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Custom amount
                </motion.button>
              </div>

              {giftAmount === "custom" && (
                <motion.div
                  className="custom-amount-box"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <label>
                    Enter amount

                    <div className="amount-input-wrap">
                      <span>₹</span>

                      <input
                        type="number"
                        min="1"
                        placeholder="e.g. 1500"
                        value={customAmount}
                        onChange={(e) =>
                          setCustomAmount(e.target.value)
                        }
                      />
                    </div>
                  </label>
                </motion.div>
              )}

              <div className="prototype-note">
                <span>ⓘ</span>

                <p>
                  This is a prototype. No real payment or investment
                  transaction will occur.
                </p>
              </div>
            </div>

            <div className="create-bottom">
              <button
                className="back-btn"
                onClick={() => setStep(2)}
              >
                ← Back
              </button>

              <button
                className="continue-btn"
                disabled={!canContinueAmount}
                onClick={() => {
                  if (canContinueAmount) setStep(4);
                }}
              >
                Continue <span>→</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}

function App() {
  const [page, setPage] = useState(
    window.location.pathname === "/create-gift" ? "create" : "home"
  );

  useEffect(() => {
    const handlePopState = () => {
      setPage(window.location.pathname === "/create-gift" ? "create" : "home");
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const openCreateGift = () => {
    window.history.pushState({}, "", "/create-gift");
    setPage("create");
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    window.history.pushState({}, "", "/");
    setPage("home");
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {page === "home" ? (
          <LandingPage key="home" onStart={openCreateGift} />
        ) : (
          <CreateGift key="create" onBack={goHome} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;