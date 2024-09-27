import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequestedAttempts(event.target.value);
    };

    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGainAttempts = () => {
        const requested = parseInt(requestedAttempts, 10);
        if (!isNaN(requested) && requested > 0) {
            setAttemptsLeft(attemptsLeft + requested);
            setRequestedAttempts("");
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleInputChange}
                placeholder="Request attempts"
            />
            <div>
                <button
                    onClick={handleUseAttempt}
                    disabled={attemptsLeft === 0}
                >
                    Use
                </button>
                <button onClick={handleGainAttempts}>Gain</button>
            </div>
        </div>
    );
}
