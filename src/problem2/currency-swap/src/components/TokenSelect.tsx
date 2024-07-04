import React from 'react';

interface Token {
    symbol: string;
    name: string;
    price: string;
    image: string;
}

interface TokenSelectProps {
    label: string;
    tokens: Token[];
    selectedToken: string;
    onSelectToken: (tokenSymbol: string) => void;
}

const TokenSelect: React.FC<TokenSelectProps> = ({ label, tokens, selectedToken, onSelectToken }) => {
    return (
        <div className="token-select">
            <label>{label}</label>
            <div className="select-container">
                <select value={selectedToken} onChange={(e) => onSelectToken(e.target.value)}>
                    <option value="">Select a token</option>
                    {tokens.map((token) => (
                        <option key={token.symbol} value={token.symbol}>
                            {token.name} : {Number(token.price).toFixed(2)} $
                        </option>
                    ))}
                </select>
                {selectedToken && (
                    <div className="token-info">
                        <img src={tokens.find((token) => token.symbol === selectedToken)?.image} alt="Token" className="token-image" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default TokenSelect;
