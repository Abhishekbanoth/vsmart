import React, { useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from './Navbar';
import SizeSidebar from './SizeSidebar';
import AccessoriesSidebar from './AccessoriesSidebar';
import ColorChanger from './ColorChanger';
import BorderChanger from './BorderChanger';  
import IconsSidebar from './IconsSidebar'; // Import IconsSidebar
import MaterialSidebar from './MaterialSizebar';

const Home = () => {
    const [hoveredButton, setHoveredButton] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [showMaterialSidebar,setShowMaterialSidebar]=useState(false)
    const [showSizeSidebar, setShowSizeSidebar] = useState(false);
    const [showAccessoriesSidebar, setShowAccessoriesSidebar] = useState(false);
    const [showIconsSidebar, setShowIconsSidebar] = useState(false); // New state for IconsSidebar
    const [selectedModule, setSelectedModule] = useState(null);
    const [showGlassColors, setShowGlassColors] = useState(false);
    const [showFrame, setShowFrame] = useState(false);  

    const handleMaterialClick = () => {
        setIsVisible(!isVisible);
        setShowMaterialSidebar(true)
        setShowSizeSidebar(false);
        setShowAccessoriesSidebar(false);
        setShowGlassColors(false);
        setShowFrame(false);
        setShowIconsSidebar(false); // Hide IconsSidebar
    };

    const handleSizeClick = () => {
        setShowMaterialSidebar(false)
        setShowSizeSidebar(true);
        setIsVisible(false);
        setShowAccessoriesSidebar(false);
        setShowGlassColors(false);
        setShowFrame(false);
        setShowIconsSidebar(false); // Hide IconsSidebar
    };

    const handleAccessoriesClick = () => {
        setShowMaterialSidebar(false)
        setShowAccessoriesSidebar(true);
        setIsVisible(false);
        setShowSizeSidebar(false);
        setShowGlassColors(false);
        setShowFrame(false);
        setShowIconsSidebar(false); // Hide IconsSidebar
    };

    const handleIconsClick = () => {
        setShowMaterialSidebar(false)
        setShowIconsSidebar(true); // Show IconsSidebar
        setIsVisible(false);
        setShowSizeSidebar(false);
        setShowAccessoriesSidebar(false);
        setShowGlassColors(false);
        setShowFrame(false);
    };

    const handleGlassColorClick = () => {
        setShowMaterialSidebar(false)
        setShowGlassColors(!showGlassColors);
        setIsVisible(false);
        setShowSizeSidebar(false);
        setShowAccessoriesSidebar(false);
        setShowFrame(false);
        setShowIconsSidebar(false); // Hide IconsSidebar
    };

    const handleFrameClick = () => {
        setShowMaterialSidebar(false)
        setShowFrame(true);
        setIsVisible(false);
        setShowSizeSidebar(false);
        setShowAccessoriesSidebar(false);
        setShowGlassColors(false);
        setShowIconsSidebar(false); // Hide IconsSidebar
    };

    const handleModuleClick = (moduleSize) => {
        setSelectedModule(moduleSize);
    };

    const calculateScreenSize = (module) => {
        if (!module) return {};
        const fixedHeight = '200px';
        let width = `${100 * Math.ceil(module / 2)}px`; 
        return {
            width: width,
            height: fixedHeight,
            gridTemplateColumns: `repeat(${Math.min(module, 4)}, 1fr)`,
        };
    };

    const renderModuleBox = () => {
        if (selectedModule === 12) {
            return (
                <>
                    <div style={{ ...styles.moduleBox, ...calculateScreenSize(6) }}>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} style={styles.innerBox}>
                                {`Module ${index + 1}`}
                            </div>
                        ))}
                    </div>
                    <div style={{ ...styles.moduleBox, ...calculateScreenSize(6) }}>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index + 6} style={styles.innerBox}>
                                {`Module ${index + 7}`}
                            </div>
                        ))}
                    </div>
                </>
            );
        } else {
            return (
                <div id="maindiv" style={{ ...styles.moduleBox, ...calculateScreenSize(selectedModule) }}>
                    {Array.from({ length: selectedModule }).map((_, index) => (
                        <div key={index} style={styles.innerBox}>
                            {`Module ${index + 1}`}
                        </div>
                    ))}
                </div>
            );
        }
    };

    return (
        <div style={styles.container}>
            <NavBar
                handleMaterialClick={handleMaterialClick}
                handleSizeClick={handleSizeClick}
                handleAccessoriesClick={handleAccessoriesClick}
                handleGlassColorClick={handleGlassColorClick}
                handleFrameClick={handleFrameClick}  // Pass the new frame handler
                handleIconsClick={handleIconsClick}  // Pass the new icons handler
            />

            {showMaterialSidebar && <MaterialSidebar/>}
            {showSizeSidebar && <SizeSidebar onModuleClick={handleModuleClick} />}
            {showAccessoriesSidebar && <AccessoriesSidebar />}
            {showGlassColors && <ColorChanger />}
            {showFrame && <BorderChanger />}
            {showIconsSidebar && <IconsSidebar />} {/* Render IconsSidebar when visible */}

            <main style={styles.content}>
                <h1 style={styles.title}>Create Your Own Panel</h1>
                <p style={styles.subtitle}>Smart Home Choice of Smart People.</p>

                <div style={styles.buttonGroup}>
                    <Link to="/home">
                        <button
                            style={{
                                ...styles.button,
                                ...(hoveredButton === "edge" && styles.buttonHover),
                            }}
                            onMouseEnter={() => setHoveredButton("edge")}
                            onMouseLeave={() => setHoveredButton(null)}
                            aria-label="Go to EDGE panel"
                        >
                            EDGE
                        </button>
                    </Link>
                    <Link to="/home">
                        <button
                            style={{
                                ...styles.button,
                                ...(hoveredButton === "color" && styles.buttonHover),
                            }}
                            onMouseEnter={() => setHoveredButton("color")}
                            onMouseLeave={() => setHoveredButton(null)}
                            aria-label="Go to Color panel"
                        >
                            Color
                        </button>
                    </Link>
                    
                </div>

                {/* Ensure renderModuleBox is called here */}
                {renderModuleBox()}
            </main>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 'auto',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: 'white',
        margin: 0,
        padding: 0,
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
    moduleBox: {
        display: 'grid',
        gap: '10px',
        backgroundColor: '#000',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '30px',
        border: '5px solid blue'
    },
    innerBox: {
        backgroundColor: 'black',
        height: '90%', // Adjust height based on outer box
        width: '90%', // Adjust width based on outer box
        margin: 'auto', // Centering the inner box
        textAlign: 'center',
        lineHeight: '50px',
        borderRadius: '5px',
        border: '2px solid white',
    },
    sidebar: {
        position: 'absolute',
        top: '70px',
        left: '0px',
        width: '300px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #dcdcdc',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        padding: '10px',
        overflowY: 'auto',
        maxHeight: '500px', // Set a max height for scrolling
        listStyleType: 'none', // Remove bullets
        margin: 0, // Remove default margin
        paddingLeft: 0, // Remove default padding
        marginTop:"60px",
        marginLeft:"0"

    },
    sidebarItem: {
        padding: '8px 12px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: '#eaeaea',
        },
    },
};

export default Home;
