import React, { useState, useEffect } from "react";
import { getTokenPrices } from "../utils/api";
import TokenSelect from "./TokenSelect";
import AmountInput from "./AmountInput";
import SwapButton from "./SwapButton";
import "../styles.css";

const CurrencySwapForm: React.FC = () => {
  const [fromToken, setFromToken] = useState("");
  const [toToken, setToToken] = useState("");
  const [amount, setAmount] = useState("");
  const [tokens, setTokens] = useState<
    { symbol: string; name: string; image: string; price: string }[]
  >([]);
  const [error, setError] = useState("");

  const [tokenA, setTokenA] = useState<string>("");
  const [tokenB, setTokenB] = useState<string>("");
  const [outcomePrice, setOutcomePrice] = useState<number | null>(null);
  const [amountIn, setAmountIn] = useState<number>(0);
  const [amountOut, setAmountOut] = useState<number | null>(null);

  const handleTokenASelect = (tokenSymbol: string) => {
    setTokenA(tokenSymbol);
    calculateOutcomePrice(tokenSymbol, tokenB);
  };

  const handleTokenBSelect = (tokenSymbol: string) => {
    setTokenB(tokenSymbol);
    calculateOutcomePrice(tokenA, tokenSymbol);
  };

  const handleAmountInputChange = (value: string) => {
    const inputAmount = parseFloat(value);
    setAmountIn(inputAmount);
    if (outcomePrice !== null) {
      calculateAmountOut(inputAmount, outcomePrice);
    }
  };

  const calculateOutcomePrice = (
    tokenSymbolA: string,
    tokenSymbolB: string
  ) => {
    // Example calculation: Just multiplying token prices for demonstration
    const tokenAPrice = tokens.find(
      (token) => token.symbol === tokenSymbolA
    )?.price;
    const tokenBPrice = tokens.find(
      (token) => token.symbol === tokenSymbolB
    )?.price;

    if (tokenAPrice !== null && tokenBPrice !== null) {
      const calculatedPrice = Number(tokenAPrice) * Number(tokenBPrice);
      setOutcomePrice(calculatedPrice);
      if (amountIn !== 0) {
        calculateAmountOut(amountIn, calculatedPrice);
      }
    } else {
      setOutcomePrice(null);
      setAmountOut(null);
    }
  };

  const calculateAmountOut = (amountIn: number, outcomePrice: number) => {
    const calculatedAmountOut = amountIn * outcomePrice;
    setAmountOut(calculatedAmountOut);
  };

  useEffect(() => {
    async function fetchTokenData() {
      const data = await getTokenPrices();
      const tokenList = data.map((token: any) => ({
        price: token.price,
        symbol: token.currency,
        name: token.currency, // You can replace this with the actual token name from a database or API
        image: `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${token.currency}.svg`, // Adjust path as needed
      }));
      console.log(tokenList);
      setTokens(tokenList);
    }
    fetchTokenData();
  }, []);

  const handleSwap = () => {
    if (!fromToken || !toToken || !amount) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    // Simulate API call
    setTimeout(() => {
      alert("Swap successful");
    }, 1000);
  };

  return (
    <div className="form-container">
      <h2>Currency Swap Form</h2>
      <div className="token-selectors">
        <TokenSelect
          label=""
          tokens={tokens}
          selectedToken={tokenA}
          onSelectToken={handleTokenASelect}
        />
        <TokenSelect
          label=""
          tokens={tokens}
          selectedToken={tokenB}
          onSelectToken={handleTokenBSelect}
        />
      </div>
      {/* {outcomePrice !== null && (
        <div className="outcome-price">
          <label>Outcome Price:</label>
          <span>{Number(outcomePrice).toFixed(2)} USD</span>
        </div>
      )} */}
      <div className="amount-input">
        <label>Amount In:</label>
        <input
          type="number"
          value={amountIn}
          onChange={(e) => handleAmountInputChange(e.target.value)}
        />
      </div>
      {amountOut !== null && (
        <div className="amount-output">
          <label>Outcome: </label>
          <span>{Number(amountOut).toFixed(2)} {tokenB}</span>
        </div>
      )}
      <SwapButton onClick={handleSwap} />
    </div>
  );
};

export default CurrencySwapForm;
