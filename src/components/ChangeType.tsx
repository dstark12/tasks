import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );
    const [typeText, setTypeText] = useState("Short Answer");
    function ChangeQType() {
        if (questionType === "short_answer_question") {
            setQuestionType("multiple_choice_question");
            setTypeText("Multiple Choice");
        } else {
            setQuestionType("short_answer_question");
            setTypeText("Short Answer");
        }
    }
    return (
        <div>
            <p>{typeText}</p>
            <Button onClick={ChangeQType}> Change Type </Button>
        </div>
    );
}
