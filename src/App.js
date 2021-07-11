import { useState } from "react";
import "./styles.css";

export default function App() {
  var [result, setResult] = useState("");

  function checkHandler(event) {
    event.preventDefault();

    let diff, percent, msg;

    let body = document.querySelector("body");
    let initialPrice = document.querySelector("#initial-price").value;
    let quantity = document.querySelector("#quantity").value;
    let currentPrice = document.querySelector("#current-price").value;

    // convert to number *IMP*
    initialPrice = Number(initialPrice);
    quantity = Number(quantity);
    currentPrice = Number(currentPrice);

    if (initialPrice > 0 && quantity > 0 && currentPrice > 0) {
      if (initialPrice > currentPrice) {
        // loss
        diff = initialPrice - currentPrice;
        percent = (diff / initialPrice) * 100;

        msg = `You have incurred ${percent.toFixed(1)}% loss worth Rs.${(
          diff * quantity
        ).toFixed(1)} 😞`;

        if (percent > 50) {
          body.style.backgroundColor = "rgb(255, 83, 83)";
        } else {
          body.style.backgroundColor = "rgb(170, 183, 255)";
        }
      } else if (currentPrice > initialPrice) {
        // profit
        diff = currentPrice - initialPrice;
        percent = (diff / initialPrice) * 100;

        msg = `You have gained ${percent.toFixed(1)}% profit worth Rs.${(
          diff * quantity
        ).toFixed(1)} 😀`;

        if (percent > 50) {
          body.style.backgroundColor = "rgb(83, 255, 106)";
        } else {
          body.style.backgroundColor = "rgb(170, 183, 255)";
        }
      } else {
        // no profit or loss
        msg = "You're still! 😐";
        body.style.backgroundColor = "rgb(170, 183, 255)";
      }
    } else {
      msg = "Enter appropriate values to get the result 🙄";
    }

    setResult(msg);
  }

  return (
    <div className="App">
      <h1>Stocks Yay or Nay?</h1>
      <p>Wanna know if your stock gained profit or loss? Let's dive in!</p>

      <form>
        <input
          type="number"
          id="initial-price"
          placeholder="Initial Stock Price"
          required
          autoFocus
        ></input>
        <input
          type="number"
          id="quantity"
          placeholder="Quantity of Stock"
          required
        ></input>
        <input
          type="number"
          id="current-price"
          placeholder="Current Stock Price"
          required
        ></input>

        <button
          type="submit"
          className="check-btn"
          onClick={(event) => checkHandler(event)}
        >
          Check
        </button>
      </form>

      <div id="result">{result}</div>
    </div>
  );
}
