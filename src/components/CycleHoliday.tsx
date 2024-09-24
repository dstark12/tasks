import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type day = "🇺🇸" | "🎆" | "🎅" | "🦃" | "🐇";
    const [holiday, setHoliday] = useState<day>("🇺🇸");
    function alphabet() {
        if (holiday === "🇺🇸") {
            setHoliday("🎅");
        } else if (holiday === "🎅") {
            setHoliday("🐇");
        } else if (holiday === "🐇") {
            setHoliday("🎆");
        } else if (holiday === "🎆") {
            setHoliday("🦃");
        } else {
            setHoliday("🇺🇸");
        }
    }
    function year() {
        if (holiday === "🇺🇸") {
            setHoliday("🦃");
        } else if (holiday === "🦃") {
            setHoliday("🎅");
        } else if (holiday === "🎅") {
            setHoliday("🎆");
        } else if (holiday === "🎆") {
            setHoliday("🐇");
        } else {
            setHoliday("🇺🇸");
        }
    }
    return (
        <div>
            Holiday: {holiday}
            <Button onClick={alphabet}>{"Alphabet"}</Button>
            <Button onClick={year}>{"Year"}</Button>
        </div>
    );
}
