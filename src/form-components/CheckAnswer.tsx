import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [feedback, setFeedback] = useState<string>("❌");

    const updateAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
        const answer = event.target.value;
        setUserAnswer(answer);
        if (
            answer.trim().toLowerCase() === expectedAnswer.trim().toLowerCase()
        ) {
            setFeedback("✔️");
        } else {
            setFeedback("❌");
        }
    };
    return (
        <div>
            <Form.Group controlId="formAnswer">
                <Form.Label>Answer: </Form.Label>
                <Form.Control
                    type="text"
                    value={userAnswer}
                    onChange={updateAnswer}
                />
            </Form.Group>
            <h3>Check Answer</h3>
            <p>{feedback}</p>
        </div>
    );
}
