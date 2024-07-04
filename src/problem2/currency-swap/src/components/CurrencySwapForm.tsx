import React, { useState, useEffect } from 'react';
import { getTokenPrices } from '../utils/api';
import TokenSelect from './TokenSelect';
import AmountInput from './AmountInput';
import SwapButton from './SwapButton';
import '../styles.css';

const CurrencySwapForm = () => {
  const [fromToken, setFromToken] = useState('');
  const [toToken, setToToken] = useState('');
  const [amount, setAmount] = useState('');
  const [prices, setPrices] = useState<any>({});
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchPrices() {
      const data = await getTokenPrices();
      setPrices(data);
    }
    fetchPrices();
  }, []);

  const handleSwap = () => {
    if (!fromToken || !toToken || !amount) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    // Simulate API call
    setTimeout(() => {
      alert('Swap successful');
    }, 1000);
  };

  return (
    <div className="form-container">
      <h2>Currency Swap</h2>
      {error && <div className="error-message">{error}</div>}
      <TokenSelect label="From" tokens={Object.keys(prices)} selectedToken={fromToken} onSelectToken={setFromToken} />
      <TokenSelect label="To" tokens={Object.keys(prices)} selectedToken={toToken} onSelectToken={setToToken} />
      <AmountInput value={amount} onChange={setAmount} />
      <SwapButton onClick={handleSwap} />
    </div>
  );
};

export default CurrencySwapForm;
