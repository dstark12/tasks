import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [left, setLeft] = useState<number>(1);
    const [right, setRight] = useState<number>(2);
    const [state, setState] = useState<string>("");
    function checkWin(left: number, right: number) {
        if (left === right && left === 1) {
            setState("Lose");
        } else if (left === right) {
            setState("Win");
        }
    }
    function leftRoll() {
        const newL = d6();
        setLeft(newL);
        checkWin(newL, right);
    }
    function rightRoll() {
        const newR = d6();
        setRight(newR);
        checkWin(left, newR);
    }
    return (
        <div>
            <span data-testid="left-die">Left Die: {left}</span>
            <span data-testid="right-die">Right Die: {right}</span>
            <p>{state}</p>
            <Button onClick={leftRoll}>{"Roll Left"}</Button>
            <Button onClick={rightRoll}>{"Roll Right"}</Button>
        </div>
    );
}
