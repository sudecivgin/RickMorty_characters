import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const repliks = [
  "Wubba Lubba Dub Dub!",
  "Get Schwifty!",
  "I'm Pickle Rick!",
  "Nobody exists on purpose. Nobody belongs anywhere. We're all going to die.",
  "Sometimes science is more art than science.",
  "Grass tastes bad.",
  "Existence is pain to a Meeseeks, Jerry!",
  "You’re young, you have your whole life ahead of you, and your anal cavity is still taut yet malleable.",
  "What, so everyone's supposed to sleep every single night now? You realize that nighttime makes up half of all time?",
];

const PortalPage = () => {
  const [showReplik, setShowReplik] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }

    const startReplikTimer = setTimeout(() => {
      setShowReplik(true);
    }, 4000);

    return () => clearTimeout(startReplikTimer);
  }, []);

  useEffect(() => {
    if (!showReplik) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < repliks.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [showReplik]);

  return (
    <div style={styles.fullscreen}>
      <button style={styles.backButton} onClick={() => navigate(-1)}>
        ← Back
      </button>

      {!showReplik && (
        <div style={styles.portalContainer}>
          <div className="spiral" />
        </div>
      )}
{showReplik && (
  <>
    <div style={styles.quotesHeader}>Rick & Morty Sayings</div>

    <p style={styles.replikText} className="fade-in">
      "{repliks[currentIndex]}"
    </p>
  </>
)}

{/* Portal kısmını burada yaptım */}
      <style>{`
        .spiral {
          width: 300px;
          height: 300px;
          border: 6px solid transparent;
          border-top: 6px solid rgb(0, 228, 110);
          border-right: 6px solid rgb(0, 228, 110);
          border-radius: 50%;
          animation: spin 4s ease-in-out forwards;
          box-shadow:
            0 0 15px rgb(0, 228, 110),
            0 0 30px rgb(0, 228, 110),
            0 0 60px rgb(0, 228, 110),
            0 0 90px rgb(0, 228, 110);
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: rotate(1080deg) scale(4);
            opacity: 0;
          }
        }

        .fade-in {
          animation: fadeInZoom 1s ease-in-out;
        }

        @keyframes fadeInZoom {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  fullscreen: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    flexDirection: "column",
    overflow: "hidden",
    fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
    
  },
  portalContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
quotesHeader: {
    color: "rgb(0, 228, 110)",
    fontFamily:
      "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 2,
    opacity: 0.8,
    userSelect: "none",
    textAlign: "center",
  },

  replikText: {
      marginTop: 60,  

    fontSize: 24,
    fontWeight: "bold",
    fontFamily:
      "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
    color: "rgb(0, 228, 110)",
    textAlign: "center",
    zIndex: 100,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "rgb(0, 228, 110)",
    border: "none",
    borderRadius: 8,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    padding: "8px 14px",
    cursor: "pointer",
    zIndex: 10000,
    fontFamily:
      "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
  },
  rickImage: {
    position: "absolute",
    bottom: 0,
    left: 20,
    height: "40vh",
    zIndex: 2,
    filter: "drop-shadow(0 0 10px #00ff7b)",
  },
  mortyImage: {
    position: "absolute",
    bottom: 0,
    right: 20,
    height: "38vh",
    zIndex: 2,
    filter: "drop-shadow(0 0 10px #00ff7b)",
  },
};

export default PortalPage;
