import React, { useState } from "react";
import { Form } from "react-bootstrap";

// Define the colors with their names and hex codes
const colors = [
    { name: "Red", code: "#FF0000" },
    { name: "Green", code: "#00FF00" },
    { name: "Blue", code: "#0000FF" },
    { name: "Yellow", code: "#FFFF00" },
    { name: "Orange", code: "#FFA500" },
    { name: "Purple", code: "#800080" },
    { name: "Pink", code: "#FFC0CB" },
    { name: "Brown", code: "#A52A2A" },
];

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>(colors[0].code); // Initialize with the first color

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value); // Update selected color
    };

    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {colors.map((color) => (
                    <Form.Check
                        key={color.code}
                        type="radio"
                        label={color.name}
                        value={color.code}
                        checked={selectedColor === color.code}
                        onChange={handleColorChange}
                        inline // Make radio buttons inline
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    marginTop: "20px",
                    padding: "20px",
                    backgroundColor: selectedColor,
                    color: "#FFFFFF", // Set text color for visibility
                }}
            >
                {/* Change the text to display the hex code of the selected color */}
                {selectedColor}
            </div>
        </div>
    );
}
