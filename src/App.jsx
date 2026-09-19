import { useEffect, useState } from "react";
import QRCode from "qrcode";
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
              <div className="eyebrow">
                THE GIFTING LAYER FOR INVESTING
              </div>

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

        <section
          className="section occasions-section"
          id="occasions"
        >
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
                  <div className="occasion-icon">
                    {occasion.icon}
                  </div>

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
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
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
            <div className="eyebrow">
              FOR BROKERS & FINTECHS
            </div>

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
          <span>
            Prototype — no real investments are processed.
          </span>
        </div>
      </footer>
    </>
  );
}

function CreateGift({ onBack }) {
  const [step, setStep] = useState(1);

  const [selectedOccasion, setSelectedOccasion] =
    useState("");

  const [recipientName, setRecipientName] =
    useState("");

  const [recipientEmail, setRecipientEmail] =
    useState("");

  const [recipientPhone, setRecipientPhone] =
    useState("");

  const [giftAmount, setGiftAmount] =
    useState("");

  const [customAmount, setCustomAmount] =
    useState("");

  const [selectedInvestment, setSelectedInvestment] =
    useState("");

  const [senderName, setSenderName] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [giftDesign, setGiftDesign] =
    useState("Classic");

  const [giftId, setGiftId] =
    useState("");

  const [giftLink, setGiftLink] =
    useState("");

  const [qrCodeUrl, setQrCodeUrl] =
    useState("");

  const [giftGenerated, setGiftGenerated] =
    useState(false);

  const presetAmounts = [100, 500, 1000, 2500];

  const investments = [
    {
      icon: "📈",
      name: "Nifty 50 ETF",
      category: "Broad-market ETF",
      description:
        "Market-linked investment representing exposure to large Indian companies.",
    },
    {
      icon: "🪙",
      name: "Gold ETF",
      category: "Gold ETF",
      description:
        "Market-linked investment representing exposure to gold.",
    },
    {
      icon: "🏢",
      name: "Individual Stock",
      category: "Individual stock",
      description:
        "Choose a company you'd like to gift.",
    },
  ];

  const finalAmount =
    giftAmount === "custom"
      ? customAmount
      : giftAmount;

  const canContinueAmount =
    finalAmount !== "" &&
    Number(finalAmount) > 0;

  const canContinuePersonalize =
    senderName.trim().length > 0 &&
    message.trim().length > 0;

  const generateGift = async () => {
    const id =
      "ACB-" +
      Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase();

    const link =
      `${window.location.origin}/gift/${id}`;

    const giftData = {
      giftId: id,
      recipientName,
      recipientEmail,
      recipientPhone,
      senderName,
      occasion: selectedOccasion,
      amount: Number(finalAmount),
      investment: selectedInvestment,
      message,
      design: giftDesign,
      status: "CREATED",
    };

    localStorage.setItem(
      `acubel-gift-${id}`,
      JSON.stringify(giftData)
    );

    setGiftId(id);
    setGiftLink(link);
    setGiftGenerated(true);

    try {
      const qr = await QRCode.toDataURL(link, {
        width: 220,
        margin: 2,
      });

      setQrCodeUrl(qr);
    } catch (error) {
      console.error(
        "QR generation failed:",
        error
      );
    }
  };

  return (
    <motion.main
      className="create-gift-page"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35 }}
    >
      <div className="create-topbar">
        <button
          className="create-logo"
          onClick={onBack}
        >
          ACUBEL
        </button>

        <div className="step-counter">
          {step} / 6
        </div>
      </div>

      <div className="progress-track">
        <motion.div
          className="progress-fill"
          animate={{
            width: `${(step / 6) * 100}%`,
          }}
          transition={{ duration: 0.35 }}
        />
      </div>

      <AnimatePresence mode="wait">

        {/* STEP 1 — OCCASION */}

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
              <div className="eyebrow">
                CREATE YOUR GIFT
              </div>

              <h2>
                What are you celebrating?
              </h2>

              <p>
                Choose an occasion to make your
                investment gift feel personal.
              </p>
            </div>

            <div className="create-occasions">
              {occasions.map((occasion) => {
                const isSelected =
                  selectedOccasion === occasion.name;

                return (
                  <motion.button
                    className={`create-occasion-card ${
                      isSelected
                        ? "selected"
                        : ""
                    }`}
                    key={occasion.name}
                    onClick={() =>
                      setSelectedOccasion(
                        occasion.name
                      )
                    }
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="create-occasion-icon">
                      {occasion.icon}
                    </span>

                    <span>
                      {occasion.name}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            <div className="create-bottom">
              <button
                className="back-btn"
                onClick={onBack}
              >
                ← Back
              </button>

              <button
                className="continue-btn"
                disabled={!selectedOccasion}
                onClick={() => {
                  if (selectedOccasion) {
                    setStep(2);
                  }
                }}
              >
                Continue <span>→</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 2 — RECIPIENT */}

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
                STEP 2 ·{" "}
                {selectedOccasion.toUpperCase()}
              </div>

              <h2>
                Who are you gifting it to?
              </h2>

              <p>
                We'll create a gift link that you
                can share directly with them.
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
                    setRecipientName(
                      e.target.value
                    )
                  }
                />
              </label>

              <label>
                Email{" "}
                <small>optional</small>

                <input
                  type="email"
                  placeholder="rahul@example.com"
                  value={recipientEmail}
                  onChange={(e) =>
                    setRecipientEmail(
                      e.target.value
                    )
                  }
                />
              </label>

              <label>
                Phone number{" "}
                <small>optional</small>

                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={recipientPhone}
                  onChange={(e) =>
                    setRecipientPhone(
                      e.target.value
                    )
                  }
                />
              </label>

              <div className="share-note">
                <span>🔗</span>

                <div>
                  <strong>
                    You can simply share the
                    gift link.
                  </strong>

                  <p>
                    Email and phone details are
                    optional in this prototype.
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
                disabled={
                  !recipientName.trim()
                }
                onClick={() => {
                  if (
                    recipientName.trim()
                  ) {
                    setStep(3);
                  }
                }}
              >
                Continue <span>→</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 3 — AMOUNT */}

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
                STEP 3 ·{" "}
                {selectedOccasion.toUpperCase()}
              </div>

              <h2>
                How much would you like to gift?
              </h2>

              <p>
                Choose an amount that feels right
                for the occasion.
              </p>
            </div>

            <div className="gift-context">
              <span>
                {
                  occasions.find(
                    (item) =>
                      item.name ===
                      selectedOccasion
                  )?.icon
                }
              </span>

              <strong>
                {selectedOccasion}
              </strong>

              <span className="context-separator">
                •
              </span>

              <span>
                {recipientName}
              </span>
            </div>

            <div className="amount-section">
              <div className="amount-grid">
                {presetAmounts.map((amount) => {
                  const selected =
                    giftAmount ===
                    String(amount);

                  return (
                    <motion.button
                      key={amount}
                      className={`amount-card ${
                        selected
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => {
                        setGiftAmount(
                          String(amount)
                        );
                        setCustomAmount("");
                      }}
                      whileHover={{ y: -4 }}
                      whileTap={{
                        scale: 0.98,
                      }}
                    >
                      ₹
                      {amount.toLocaleString(
                        "en-IN"
                      )}
                    </motion.button>
                  );
                })}

                <motion.button
                  className={`amount-card ${
                    giftAmount === "custom"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setGiftAmount("custom")
                  }
                  whileHover={{ y: -4 }}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  Custom amount
                </motion.button>
              </div>

              {giftAmount === "custom" && (
                <motion.div
                  className="custom-amount-box"
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
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
                          setCustomAmount(
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </label>
                </motion.div>
              )}

              <div className="prototype-note">
                <span>ⓘ</span>

                <p>
                  This is a prototype. No real
                  payment or investment
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
                  if (canContinueAmount) {
                    setStep(4);
                  }
                }}
              >
                Continue <span>→</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 4 — INVESTMENT */}

        {step === 4 && (
          <motion.div
            key="investment"
            className="create-content"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.25 }}
          >
            <div className="create-heading">
              <div className="eyebrow">
                STEP 4 · CHOOSE INVESTMENT
              </div>

              <h2>
                What would you like to gift?
              </h2>

              <p>
                Choose the investment you'd like
                to put behind your gift.
              </p>
            </div>

            <div className="gift-context">
              <span>
                {
                  occasions.find(
                    (item) =>
                      item.name ===
                      selectedOccasion
                  )?.icon
                }
              </span>

              <strong>
                {selectedOccasion}
              </strong>

              <span className="context-separator">
                •
              </span>

              <span>
                {recipientName}
              </span>

              <span className="context-separator">
                •
              </span>

              <strong>
                ₹
                {Number(
                  finalAmount
                ).toLocaleString("en-IN")}
              </strong>
            </div>

            <div className="investment-list">
              {investments.map(
                (investment) => {
                  const selected =
                    selectedInvestment ===
                    investment.name;

                  return (
                    <motion.button
                      key={investment.name}
                      className={`investment-card ${
                        selected
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        setSelectedInvestment(
                          investment.name
                        )
                      }
                      whileHover={{ y: -4 }}
                      whileTap={{
                        scale: 0.99,
                      }}
                    >
                      <div className="investment-icon">
                        {investment.icon}
                      </div>

                      <div className="investment-info">
                        <div className="investment-title-row">
                          <h3>
                            {investment.name}
                          </h3>

                          {selected && (
                            <span className="selected-check">
                              ✓
                            </span>
                          )}
                        </div>

                        <span className="investment-category">
                          {investment.category}
                        </span>

                        <p>
                          {investment.description}
                        </p>

                        <span className="market-label">
                          Market-linked
                        </span>
                      </div>
                    </motion.button>
                  );
                }
              )}
            </div>

            <div className="investment-disclaimer">
              <span>ⓘ</span>

              <p>
                Demo choices only. ACUBEL is not
                recommending any particular
                investment in this prototype. No
                real investment will be made.
              </p>
            </div>

            <div className="create-bottom">
              <button
                className="back-btn"
                onClick={() => setStep(3)}
              >
                ← Back
              </button>

              <button
                className="continue-btn"
                disabled={!selectedInvestment}
                onClick={() => {
                  if (selectedInvestment) {
                    setStep(5);
                  }
                }}
              >
                Continue <span>→</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 5 — PERSONALIZE */}

        {step === 5 && (
          <motion.div
            key="personalize"
            className="create-content personalize-content"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.25 }}
          >
            <div className="create-heading">
              <div className="eyebrow">
                STEP 5 · PERSONALIZE
              </div>

              <h2>
                Make it personal.
              </h2>

              <p>
                Add a message they'll remember.
              </p>
            </div>

            <div className="personalize-layout">
              <div className="personalize-form">

                <label>
                  From
                  <span>*</span>

                  <input
                    type="text"
                    placeholder="e.g. Anup"
                    value={senderName}
                    onChange={(e) =>
                      setSenderName(
                        e.target.value
                      )
                    }
                  />
                </label>

                <label>
                  Message
                  <span>*</span>

                  <textarea
                    rows="5"
                    maxLength="180"
                    placeholder="Something for your future..."
                    value={message}
                    onChange={(e) =>
                      setMessage(
                        e.target.value
                      )
                    }
                  />

                  <div className="character-count">
                    {message.length} / 180
                  </div>
                </label>

                <div className="design-section">
                  <div className="design-label">
                    Gift design
                  </div>

                  <div className="design-options">
                    {[
                      "Classic",
                      "Birthday",
                      "Celebration",
                      "Minimal",
                    ].map((design) => (
                      <button
                        key={design}
                        className={`design-option ${
                          giftDesign === design
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          setGiftDesign(design)
                        }
                      >
                        {design}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="live-preview-wrap">
                <div className="preview-label">
                  LIVE PREVIEW
                </div>

                <motion.div
                  className={`mini-gift-card design-${giftDesign.toLowerCase()}`}
                  key={giftDesign}
                  initial={{
                    opacity: 0.6,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <div className="mini-gift-top">
                    <span>ACUBEL</span>
                    <span>
                      INVESTMENT GIFT
                    </span>
                  </div>

                  <div className="mini-gift-amount">
                    ₹
                    {Number(
                      finalAmount || 0
                    ).toLocaleString("en-IN")}
                  </div>

                  <div className="mini-gift-recipient">
                    <small>FOR</small>

                    <strong>
                      {recipientName ||
                        "Recipient"}
                    </strong>
                  </div>

                  <div className="mini-gift-occasion">
                    {
                      occasions.find(
                        (item) =>
                          item.name ===
                          selectedOccasion
                      )?.icon
                    }{" "}
                    {selectedOccasion ||
                      "Occasion"}
                  </div>

                  <div className="mini-gift-investment">
                    <small>
                      INVESTMENT
                    </small>

                    <strong>
                      {selectedInvestment ||
                        "Investment"}
                    </strong>
                  </div>

                  <div className="mini-gift-message">
                    “
                    {message ||
                      "Something for your future..."}
                    ”
                  </div>

                  <div className="mini-gift-from">
                    From{" "}
                    {senderName || "You"}
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="create-bottom">
              <button
                className="back-btn"
                onClick={() => setStep(4)}
              >
                ← Back
              </button>

              <button
                className="continue-btn"
                disabled={
                  !canContinuePersonalize
                }
                onClick={() => {
                  if (
                    canContinuePersonalize
                  ) {
                    setStep(6);
                  }
                }}
              >
                Continue <span>→</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 6 — PREVIEW & GENERATE */}

        {step === 6 && (
          <motion.div
            key="preview"
            className="create-content preview-content"
            initial={{
              opacity: 0,
              x: 25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -25,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            {!giftGenerated ? (
              <>
                <div className="create-heading">
                  <div className="eyebrow">
                    STEP 6 · FINAL CHECK
                  </div>

                  <h2>
                    Ready to send your gift?
                  </h2>

                  <p>
                    Review everything once before
                    generating your investment gift.
                  </p>
                </div>

                <div className="final-preview-layout">
                  <div className="final-card-wrap">
                    <div className="preview-label">
                      GIFT PREVIEW
                    </div>

                    <div
                      className={`final-gift-card design-${giftDesign.toLowerCase()}`}
                    >
                      <div className="final-gift-top">
                        <span>ACUBEL</span>
                        <span>
                          INVESTMENT GIFT
                        </span>
                      </div>

                      <div className="final-gift-amount">
                        ₹
                        {Number(
                          finalAmount
                        ).toLocaleString("en-IN")}
                      </div>

                      <div className="final-gift-for">
                        <small>FOR</small>

                        <strong>
                          {recipientName}
                        </strong>
                      </div>

                      <div className="final-gift-occasion">
                        {
                          occasions.find(
                            (item) =>
                              item.name ===
                              selectedOccasion
                          )?.icon
                        }{" "}
                        {selectedOccasion}
                      </div>

                      <div className="final-gift-investment">
                        <small>
                          INVESTMENT
                        </small>

                        <strong>
                          {selectedInvestment}
                        </strong>
                      </div>

                      <div className="final-gift-message">
                        “{message}”
                      </div>

                      <div className="final-gift-from">
                        From {senderName}
                      </div>
                    </div>
                  </div>

                  <div className="final-summary">
                    <div className="summary-header">
                      <span>
                        YOUR GIFT
                      </span>
                    </div>

                    <div className="summary-row">
                      <span>
                        Occasion
                      </span>

                      <strong>
                        {selectedOccasion}
                      </strong>
                    </div>

                    <div className="summary-row">
                      <span>
                        Recipient
                      </span>

                      <strong>
                        {recipientName}
                      </strong>
                    </div>

                    <div className="summary-row">
                      <span>
                        Amount
                      </span>

                      <strong>
                        ₹
                        {Number(
                          finalAmount
                        ).toLocaleString(
                          "en-IN"
                        )}
                      </strong>
                    </div>

                    <div className="summary-row">
                      <span>
                        Investment
                      </span>

                      <strong>
                        {selectedInvestment}
                      </strong>
                    </div>

                    <div className="summary-divider"></div>

                    <button
                      className="edit-summary-btn"
                      onClick={() =>
                        setStep(1)
                      }
                    >
                      Edit gift
                    </button>

                    <button
                      className="generate-btn"
                      onClick={generateGift}
                    >
                      Generate Gift 🎁
                      <span>→</span>
                    </button>

                    <p className="generate-note">
                      Prototype only. No real
                      payment or investment
                      transaction will occur.
                    </p>
                  </div>
                </div>

                <div className="create-bottom">
                  <button
                    className="back-btn"
                    onClick={() =>
                      setStep(5)
                    }
                  >
                    ← Back
                  </button>
                </div>
              </>
            ) : (
              <motion.div
                className="generated-state"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
              >
                <div className="success-icon">
                  ✓
                </div>

                <div className="eyebrow">
                  GIFT CREATED
                </div>

                <h2>
                  Your investment gift is ready.
                </h2>

                <p>
                  Share the gift link with{" "}
                  {recipientName}.
                </p>

                <div className="generated-layout">
                  <div
                    className={`final-gift-card compact design-${giftDesign.toLowerCase()}`}
                  >
                    <div className="final-gift-top">
                      <span>ACUBEL</span>
                      <span>
                        INVESTMENT GIFT
                      </span>
                    </div>

                    <div className="final-gift-amount">
                      ₹
                      {Number(
                        finalAmount
                      ).toLocaleString(
                        "en-IN"
                      )}
                    </div>

                    <div className="final-gift-for">
                      <small>FOR</small>

                      <strong>
                        {recipientName}
                      </strong>
                    </div>

                    <div className="final-gift-occasion">
                      {
                        occasions.find(
                          (item) =>
                            item.name ===
                            selectedOccasion
                        )?.icon
                      }{" "}
                      {selectedOccasion}
                    </div>

                    <div className="final-gift-investment">
                      <small>
                        INVESTMENT
                      </small>

                      <strong>
                        {selectedInvestment}
                      </strong>
                    </div>

                    <div className="final-gift-message">
                      “{message}”
                    </div>

                    <div className="final-gift-from">
                      From {senderName}
                    </div>
                  </div>

                  <div className="share-panel">
                    <div className="gift-id-label">
                      GIFT ID
                    </div>

                    <div className="gift-id">
                      {giftId}
                    </div>

                    <div className="status-badge">
                      ● GIFT CREATED — PROTOTYPE
                    </div>

                    {qrCodeUrl && (
                      <div className="qr-box">
                        <img
                          src={qrCodeUrl}
                          alt="Gift QR code"
                        />
                      </div>
                    )}

                    <div className="gift-link-box">
                      {giftLink}
                    </div>

                    <button
                      className="generate-btn full-width"
                      onClick={() => {
                        const text =
                          `I sent you an investment gift through ACUBEL 🎁 ${giftLink}`;

                        window.open(
                          `https://wa.me/?text=${encodeURIComponent(
                            text
                          )}`,
                          "_blank"
                        );
                      }}
                    >
                      Share on WhatsApp
                      <span>↗</span>
                    </button>

                    <button
                      className="copy-link-btn"
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(
                            giftLink
                          );

                          alert(
                            "Gift link copied."
                          );
                        } catch {
                          alert(
                            "Unable to copy the link."
                          );
                        }
                      }}
                    >
                      Copy Gift Link
                    </button>
                  </div>
                </div>

                <div className="generated-disclaimer">
                  <span>ⓘ</span>

                  <p>
                    This is an ACUBEL prototype. The
                    gift has not resulted in a real
                    payment, securities transfer, or
                    investment.
                  </p>
                </div>

                <button
                  className="back-btn generated-back"
                  onClick={onBack}
                >
                  ← Back to ACUBEL
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}

function RecipientGift({ giftId, onBack }) {
  const [gift, setGift] = useState(null);

  useEffect(() => {
    const savedGift = localStorage.getItem(
      `acubel-gift-${giftId}`
    );

    if (savedGift) {
      try {
        setGift(JSON.parse(savedGift));
      } catch {
        setGift(null);
      }
    } else {
      setGift({
        giftId,
        recipientName: "Rahul",
        senderName: "Anup",
        occasion: "Birthday",
        amount: 1000,
        investment: "Nifty 50 ETF",
        message: "Something for your future.",
        design: "Classic",
        status: "CREATED",
      });
    }
  }, [giftId]);

  if (!gift) {
    return (
      <main className="recipient-page">
        <div className="recipient-loading">
          We couldn't find this gift.
        </div>

        <button
          className="back-btn recipient-back"
          onClick={onBack}
        >
          ← Back to ACUBEL
        </button>
      </main>
    );
  }

  return (
    <motion.main
      className="recipient-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="recipient-topbar">
        <button
          className="create-logo"
          onClick={onBack}
        >
          ACUBEL
        </button>

        <span className="recipient-gift-id">
          {gift.giftId}
        </span>
      </header>

      <div className="recipient-layout">
        <motion.div
          className="recipient-intro"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="recipient-icon">
            🎁
          </div>

          <div className="eyebrow">
            YOU RECEIVED AN INVESTMENT GIFT
          </div>

          <h1>
            Something meaningful
            <span> came your way.</span>
          </h1>

          <p>
            {gift.senderName} sent you an
            investment gift for your{" "}
            {gift.occasion.toLowerCase()}.
          </p>
        </motion.div>

        <motion.div
          className="recipient-card-area"
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
        >
          <div className="preview-label">
            YOUR GIFT
          </div>

          <div
            className={`recipient-gift-card design-${gift.design.toLowerCase()}`}
          >
            <div className="recipient-gift-top">
              <span>ACUBEL</span>
              <span>
                INVESTMENT GIFT
              </span>
            </div>

            <div className="recipient-gift-amount">
              ₹
              {Number(
                gift.amount
              ).toLocaleString("en-IN")}
            </div>

            <div className="recipient-gift-for">
              <small>FOR</small>

              <strong>
                {gift.recipientName}
              </strong>
            </div>

            <div className="recipient-gift-occasion">
              🎁 {gift.occasion}
            </div>

            <div className="recipient-gift-investment">
              <small>
                INVESTMENT
              </small>

              <strong>
                {gift.investment}
              </strong>
            </div>

            <div className="recipient-gift-message">
              “{gift.message}”
            </div>

            <div className="recipient-gift-from">
              From {gift.senderName}
            </div>
          </div>

          <motion.button
            className="recipient-claim-btn"
            whileHover={{ y: -3 }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() =>
              alert(
                "Claim flow coming next. No real investment will occur."
              )
            }
          >
            Claim Your Gift
            <span>→</span>
          </motion.button>

          <p className="recipient-disclaimer">
            This is an ACUBEL prototype. No
            real payment, securities transfer, or
            investment is being processed.
          </p>
        </motion.div>
      </div>

      <button
        className="back-btn recipient-back"
        onClick={onBack}
      >
        ← Back to ACUBEL
      </button>
    </motion.main>
  );
}

function App() {
  const getPageFromPath = () => {
    const path = window.location.pathname;

    if (path === "/create-gift") {
      return "create";
    }

    if (path.startsWith("/gift/")) {
      return "recipient";
    }

    return "home";
  };

  const getGiftIdFromPath = () => {
    const path = window.location.pathname;

    if (path.startsWith("/gift/")) {
      return path.split("/gift/")[1];
    }

    return "";
  };

  const [page, setPage] =
    useState(getPageFromPath);

  const [giftIdFromPath, setGiftIdFromPath] =
    useState(getGiftIdFromPath);

  useEffect(() => {
    const handlePopState = () => {
      setPage(getPageFromPath());
      setGiftIdFromPath(
        getGiftIdFromPath()
      );
    };

    window.addEventListener(
      "popstate",
      handlePopState
    );

    return () =>
      window.removeEventListener(
        "popstate",
        handlePopState
      );
  }, []);

  const openCreateGift = () => {
    window.history.pushState(
      {},
      "",
      "/create-gift"
    );

    setPage("create");
    setGiftIdFromPath("");

    window.scrollTo(0, 0);
  };

  const goHome = () => {
    window.history.pushState(
      {},
      "",
      "/"
    );

    setPage("home");
    setGiftIdFromPath("");

    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      <AnimatePresence mode="wait">

        {page === "home" ? (
          <LandingPage
            key="home"
            onStart={openCreateGift}
          />
        ) : page === "create" ? (
          <CreateGift
            key="create"
            onBack={goHome}
          />
        ) : (
          <RecipientGift
            key="recipient"
            giftId={giftIdFromPath}
            onBack={goHome}
          />
        )}

      </AnimatePresence>
    </div>
  );
}

export default App;