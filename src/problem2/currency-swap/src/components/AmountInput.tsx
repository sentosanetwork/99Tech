import React from 'react';

interface AmountInputProps {
  value: string;
  onChange: (value: string) => void;
}

const AmountInput: React.FC<AmountInputProps> = ({ value, onChange }) => {
  return (
    <div className="amount-input">
      <label>Amount</label>
      <input type="number" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default AmountInput;
