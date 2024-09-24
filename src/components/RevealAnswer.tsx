import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [display, toDisplay] = useState<string>("");
    function reveal() {
        if (display === "") {
            toDisplay("42");
        } else {
            toDisplay("");
        }
    }
    return (
        <div>
            {display}
            <Button onClick={reveal}> Reveal Answer </Button>
        </div>
    );
}
