import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import logo from './assets/logo.png'

const Landing = () => {
    const [hoveredButton, setHoveredButton] = useState(null);


    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <div style={styles.logo}>
                    <img
                        src={logo}
                        alt="vsmart"
                        style={styles.logoImage}
                    />
                </div>
            </header>

            <main style={styles.content}>
                <h1 style={styles.title}>Create Your Own Panel</h1>
                <p style={styles.subtitle}>Smart Home Choice of Smart People.</p>
                <div style={styles.buttonGroup}>
                    {/* EDGE Button */}
                    <Link to="/home"> {/* Navigate to Home */}
                        <button
                            style={{
                                ...styles.button,
                                ...(hoveredButton === "edge" && styles.buttonHover),
                            }}
                            onMouseEnter={() => setHoveredButton("edge")}
                            onMouseLeave={() => setHoveredButton(null)}
                        >
                            EDGE
                        </button>
                    </Link>

                    {/* COLOR Button */}
                    <Link to="/devara"> {/* Navigate to Home */}
                        <button
                            style={{
                                ...styles.button,
                                ...(hoveredButton === "color" && styles.buttonHover),
                            }}
                            onMouseEnter={() => setHoveredButton("color")}
                            onMouseLeave={() => setHoveredButton(null)}
                        >
                            COLOR
                        </button>
                    </Link>
                </div>
            </main>
        </div>
    );
};
const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
    },
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        backgroundColor: "#f5f5f5",
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.5)",
    },
    logo: {
        display: "flex",
        alignItems: "center",
        marginLeft: "10px",
    },
    logoImage: {
        height: "67px",
        marginRight: "10px",
        padding: '10px 10px'
    },
    content: {
        marginTop: "170px",
    },
    title: {
        fontSize: "39px",
        marginBottom: "0",
    },
    subtitle: {
        fontSize: "20px",
        color: "#b77979",
        fontWeight: "400",
        marginBottom: "30px",
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
    },
    button: {
        background: "linear-gradient(145deg, #d1d9de, #f0f8fb)", // Light gradient background
        border: "1px solid #c1c8cc", // Subtle border
        padding: "15px 30px",
        fontSize: "18px",
        color: "#333",
        borderRadius: "12px", // Rounded corners
        cursor: "pointer",
        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(255, 255, 255, 0.7)", // 3D shadow with light and dark sides
        transition: "all 0.3s ease",
        width: "150px",
        textAlign: "center",
    },
    buttonHover: {
        boxShadow: "6px 6px 15px rgba(0, 0, 0, 0.2), -6px -6px 15px rgba(255, 255, 255, 0.8)", // More defined shadow on hover
        transform: "translateY(-3px)", // Lift effect on hover
    },
};
export default Landing;
