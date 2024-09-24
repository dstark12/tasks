import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [endButton, setend] = useState<boolean>(true);
    const [startenable, setstart] = useState<boolean>(false);
    function mulligan() {
        setAttempts(attempts + 1);
    }
    function start() {
        if (attempts !== 0) {
            setAttempts(attempts - 1);
            setstart(true);
            setend(false);
        }
    }
    function end() {
        setstart(false);
        setend(true);
    }
    return (
        <div>
            {attempts}
            <Button onClick={start} disabled={attempts === 0 || startenable}>
                {"Start Quiz"}
            </Button>
            <Button onClick={end} disabled={endButton}>
                {" "}
                {"Stop Quiz"}{" "}
            </Button>
            <Button onClick={mulligan} disabled={startenable}>
                {" "}
                Mulligan{" "}
            </Button>
        </div>
    );
}
