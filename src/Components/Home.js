import React, { useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from './Navbar';
import SizeSidebar from './SizeSidebar'; // Make sure to customize this with the new dropdown logic
import AccessoriesSidebar from './AccessoriesSidebar';
import ColorChanger from './ColorChanger';
import BorderChanger from './BorderChanger';  
import IconsSidebar from './IconsSidebar'; 
import MaterialSidebar from './MaterialSizebar';

const Home = () => {
    const [hoveredButton, setHoveredButton] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [showMaterialSidebar,setShowMaterialSidebar]=useState(false);
    const [showSizeSidebar, setShowSizeSidebar] = useState(false);
    const [showAccessoriesSidebar, setShowAccessoriesSidebar] = useState(false);
    const [showIconsSidebar, setShowIconsSidebar] = useState(false); 
    const [selectedModule, setSelectedModule] = useState(null);
    const [showGlassColors, setShowGlassColors] = useState(false);
    const [showFrame, setShowFrame] = useState(false);

    // Dynamic styles based on selected module (moved from Size component)
    const moduleStyles = {
        module2: {
            main: { height: '330px', width: '260px' },
            inner: { height: '180px', width: '200px' },
        },
        module4: {
            main: { height: '360px', width: '500px' },
            inner: { height: '200px', width: '300px' },
        },
        module6: {
            main: { height: '360px', width: '800px' },
            inner: { height: '200px', width: '600px' },
        },
        module8: {
            main: { height: '360px', width: '1100px' },
            inner: { height: '240px', width: '800px' },
        },
        module12: {
            main: { height: '720px', width: '800px' },
            inner: { height: '200px', width: '600px' },
        },
    };

    const handleMaterialClick = () => {
        setIsVisible(!isVisible);
        setShowMaterialSidebar(true);
        setShowSizeSidebar(false);
        setShowAccessoriesSidebar(false);
        setShowGlassColors(false);
        setShowFrame(false);
        setShowIconsSidebar(false);
    };

    const handleSizeClick = () => {
        setShowMaterialSidebar(false);
        setShowSizeSidebar(true);
        setIsVisible(false);
        setShowAccessoriesSidebar(false);
        setShowGlassColors(false);
        setShowFrame(false);
        setShowIconsSidebar(false);
    };

    const handleAccessoriesClick = () => {
        setShowMaterialSidebar(false);
        setShowAccessoriesSidebar(true);
        setIsVisible(false);
        setShowSizeSidebar(false);
        setShowGlassColors(false);
        setShowFrame(false);
        setShowIconsSidebar(false);
    };

    const handleIconsClick = () => {
        setShowMaterialSidebar(false);
        setShowIconsSidebar(true);
        setIsVisible(false);
        setShowSizeSidebar(false);
        setShowAccessoriesSidebar(false);
        setShowGlassColors(false);
        setShowFrame(false);
    };

    const handleGlassColorClick = () => {
        setShowMaterialSidebar(false);
        setShowGlassColors(!showGlassColors);
        setIsVisible(false);
        setShowSizeSidebar(false);
        setShowAccessoriesSidebar(false);
        setShowFrame(false);
        setShowIconsSidebar(false);
    };

    const handleFrameClick = () => {
        setShowMaterialSidebar(false);
        setShowFrame(true);
        setIsVisible(false);
        setShowSizeSidebar(false);
        setShowAccessoriesSidebar(false);
        setShowGlassColors(false);
        setShowIconsSidebar(false);
    };

    const handleModuleClick = (moduleSize) => {
        setSelectedModule(moduleSize);
    };

    const renderModuleBox = () => {
        if (!selectedModule) return null; // If no module is selected, return nothing

        const currentStyles = moduleStyles[selectedModule];

        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div style={{ ...styles.moduleContainer, ...currentStyles.main }}>
                    <div style={{ ...styles.innerBox, ...currentStyles.inner }}></div>
                </div>
            </div>
        );
    };

    return (
        <div style={styles.container}>
            <NavBar
                handleMaterialClick={handleMaterialClick}
                handleSizeClick={handleSizeClick}
                handleAccessoriesClick={handleAccessoriesClick}
                handleGlassColorClick={handleGlassColorClick}
                handleFrameClick={handleFrameClick}
                handleIconsClick={handleIconsClick}
            />

            {showMaterialSidebar && <MaterialSidebar />}
            {showSizeSidebar && <SizeSidebar onModuleClick={handleModuleClick} />}
            {showAccessoriesSidebar && <AccessoriesSidebar />}
            {showGlassColors && <ColorChanger />}
            {showFrame && <BorderChanger />}
            {showIconsSidebar && <IconsSidebar />}

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

                {/* Render the module box */}
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
    moduleContainer: {
        backgroundColor: 'black',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            borderRadius: '2px',
            border: '5px solid rgb(196, 192, 192)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
    },
    innerBox: {
        border: 'solid 1px rgb(255, 255, 255)',
            backgroundColor: '#151414',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '10px 0',
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
