import React, { useState } from "react";

const BorderChanger = () => {
    const [selectedColor, setSelectedColor] = useState("gold"); // default border color

    const colors = [
        { name: "BLACK", value: "black" },
        { name: "GREY", value: "grey" },
        { name: "SILVER", value: "silver" },
        { name: "GOLD", value: "gold" },
        { name: "ROSE GOLD", value: "rosybrown" }
    ];

    const styles = {
        container: {
            padding: "20px",
            display: "flex",
            alignItems: "center",
        },
        colorSelector: {
            marginRight: "50px",
        },
        colorBox: (color) => ({
            width: "50px",
            height: "50px",
            marginBottom: "10px",
            cursor: "pointer",
            border: selectedColor === color ? "3px solid red" : "1px solid grey",
            backgroundColor: color,
        }),
        textarea: {
            width: "200px",
            height: "100px",
            marginTop: "20px",
            border: "1px solid grey",
            borderRadius: "5px",
        },
        previewBox: {
            width: "500px",
            height: "200px",
            border: `5px solid ${selectedColor}`, // Dynamic border color
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.colorSelector}>
                {colors.map((color) => (
                    <div
                        key={color.name}
                        onClick={() => setSelectedColor(color.value)}
                        style={styles.colorBox(color.value)}
                    ></div>
                ))}
                <textarea
                    placeholder="Additional information..."
                    style={styles.textarea}
                ></textarea>
            </div>

            <div style={styles.previewBox}>
            </div>
        </div>
    );
};

export default BorderChanger;
