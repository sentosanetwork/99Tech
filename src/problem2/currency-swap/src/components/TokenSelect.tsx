import React from 'react';

interface TokenSelectProps {
  label: string;
  tokens: string[];
  selectedToken: string;
  onSelectToken: (token: string) => void;
}

const TokenSelect: React.FC<TokenSelectProps> = ({ label, tokens, selectedToken, onSelectToken }) => {
  return (
    <div className="token-select">
      <label>{label} Token</label>
      <select value={selectedToken} onChange={(e) => onSelectToken(e.target.value)}>
        <option value="">Select a token</option>
        {tokens.map((token) => (
          <option key={token} value={token}>{token}</option>
        ))}
      </select>
    </div>
  );
};

export default TokenSelect;
