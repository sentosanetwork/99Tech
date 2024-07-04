import React from 'react';

interface SwapButtonProps {
  onClick: () => void;
}

const SwapButton: React.FC<SwapButtonProps> = ({ onClick }) => {
  return (
    <button className="swap-button" onClick={onClick}>
      Swap
    </button>
  );
};

export default SwapButton;
