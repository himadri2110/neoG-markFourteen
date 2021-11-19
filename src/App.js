import React, { useState } from "react";
import "./styles.css";
import stocks from "./stocks.svg";

export default function App() {
  const [result, setResult] = useState("");

  const [initialPrice, setInitialPrice] = useState(0);
  const [stockQuantity, setStockQuantity] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);

  const [backgroundColor, setBackgroundColor] = useState("rgb(170, 183, 255)");

  function checkHandler(event) {
    event.preventDefault();

    let diff = 0,
      percent = 0,
      msg;

    if (initialPrice > currentPrice) {
      // loss
      diff = initialPrice - currentPrice;
      percent = (diff / initialPrice) * 100;

      msg = `You have incurred ${percent.toFixed(1)}% loss worth Rs.${(
        diff * stockQuantity
      ).toFixed(1)} 😞`;

      if (percent > 50) {
        setBackgroundColor("rgb(255, 94, 94)");
      } else {
        setBackgroundColor("rgb(170, 183, 255)");
      }
    } else if (currentPrice > initialPrice) {
      // profit
      diff = currentPrice - initialPrice;
      percent = (diff / initialPrice) * 100;

      msg = `You have gained ${percent.toFixed(1)}% profit worth Rs.${(
        diff * stockQuantity
      ).toFixed(1)} 😀`;

      if (percent > 50) {
        setBackgroundColor("rgb(83, 255, 106)");
      } else {
        setBackgroundColor("rgb(170, 183, 255)");
      }
    } else {
      // no profit or loss
      msg = "You're still! 😐";
      setBackgroundColor("rgb(170, 183, 255)");
    }
    setResult(msg);
  }

  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      <header>
        <h1>Stocks Yay or Nay?</h1>
        <div>
          <a
            href="https://github.com/himadri2110/neoG-markFourteen"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
        </div>
      </header>

      <main>
        <div className="wrapper">
          <p>Wanna know if your stock gained profit or loss?</p>
          <p>Let's dive in!</p>

          <form onSubmit={(event) => checkHandler(event)}>
            <input
              type="number"
              id="initial-price"
              placeholder="Initial Stock Price*"
              required
              autoFocus
              min="1"
              onChange={(e) => setInitialPrice(Number(e.target.value))}
            ></input>
            <input
              type="number"
              id="quantity"
              placeholder="Quantity of Stock*"
              required
              min="1"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
            ></input>
            <input
              type="number"
              id="current-price"
              placeholder="Current Stock Price*"
              required
              min="1"
              onChange={(e) => setCurrentPrice(Number(e.target.value))}
            ></input>

            <button type="submit" className="check-btn">
              Check
            </button>
          </form>

          <div id="result">{result}</div>
        </div>

        <div className="stock_img">
          <img src={stocks} alt="Stocks" className="stocks" />
        </div>
      </main>

      <footer>
        <a
          href="https://himadrishah.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          Himadri Shah
        </a>

        <span className="social-links">
          <a
            href="https://github.com/himadri2110"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/himadri2110/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/himadri2110"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </span>
      </footer>
    </div>
  );
}
