import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const isCorrect = selectedOption.trim() === expectedAnswer.trim();

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select value={selectedOption} onChange={handleChange}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <h4>{isCorrect ? "✔️ Correct" : "❌ Incorrect"}</h4>
        </div>
    );
}
