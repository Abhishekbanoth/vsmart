import React, { useState } from 'react';
import materialLogo from './assets/material.png';
import sizeLogo from './assets/size.png';
import accessories from './assets/accessories.png';
import frame from './assets/frame.png';
import glasscolor from './assets/glasscolor.png';
import icons from './assets/icons.png';
import { Link } from "react-router-dom"; // Import Link

const SizeSidebar = ({ onModuleClick }) => {
    return (
        <sidebar style={styles.sidebar}>
            {[2, 4, 6, 8, 12].map(size => (
                <li key={size} style={styles.sidebarItem} onClick={() => onModuleClick(size)}>
                    {`${size} Module`}
                </li>
            ))}
        </sidebar>
    );
};

const AccessoriesSidebar = () => {
    const accessoriesItems = [
        '2 Modular',
        '2 Switch',
        '2 Switch(1-16A)',
        '2 Switch(1-2way)',
        '2 Switch(2-16A)',
        'Bell',
        'Curtain',
        '3 Pin Socket',
        '2 Dimmer (Phase cut)',
        '4 Scene Controller',
        '4 Modular',
        '4 Switch',
        '4 Switch + 1 Fan',
        '6 Switch',
        '6 Modular',
        '8 Switch',
        '6 Switch + 1 Fan',
        '4 Switch + 2 Fan',
        '8 Modular',
        '10 Switch',
        '6 Switch + 2 Fan'
    ];

    return (
        <ul style={styles.sidebar}>
            {accessoriesItems.map((item, index) => {
                const isModular = item.includes('Modular');
                return (
                    <li 
                        key={index} 
                        style={{
                            ...styles.sidebarItem,
                            backgroundColor: isModular ? '#ba265a' : 'transparent', // Apply pink background for modular items
                            color: isModular ? 'white' : 'black', // Change text color based on background
                        }}
                    >
                        {item}
                    </li>
                );
            })}
        </ul>
    );
};

const ColorChanger = () => {
    const [backgroundColor, setBackgroundColor] = useState('black');

    const changeColor = (color) => {
        setBackgroundColor(color);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                <button style={{ ...styles.colorButton, backgroundColor: 'black' }} onClick={() => changeColor('black')} />
                <button style={{ ...styles.colorButton, backgroundColor: 'white', border: '1px solid #ccc' }} onClick={() => changeColor('white')} />
                <button style={{ ...styles.colorButton, backgroundColor: '#a8a8a8' }} onClick={() => changeColor('#a8a8a8')} />
                <button style={{ ...styles.colorButton, backgroundColor: '#4b4c8c' }} onClick={() => changeColor('#4b4c8c')} />
                <button style={{ ...styles.colorButton, backgroundColor: '#c4ac7c' }} onClick={() => changeColor('#c4ac7c')} />
            </div>
            <div style={{ ...styles.colorBox, backgroundColor }}></div>
        </div>
    );
};



function Home() {
    const [hoveredButton, setHoveredButton] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [showSizeSidebar, setShowSizeSidebar] = useState(false);
    const [showAccessoriesSidebar, setShowAccessoriesSidebar] = useState(false);
    const [selectedModule, setSelectedModule] = useState(null);
    const [showGlassColors, setShowGlassColors] = useState(false); // State for showing Glass Colors


    const handleClick = () => {
        setIsVisible(!isVisible);
        setShowSizeSidebar(false);
        setShowAccessoriesSidebar(false);
        setShowGlassColors(false); 
    };

    const handleSizeClick = () => {
        setShowSizeSidebar(true);
        setIsVisible(false);
        setShowAccessoriesSidebar(false);
        setShowGlassColors(false);
    };

    const handleAccessoriesClick = () => {
        setShowAccessoriesSidebar(true);
        setIsVisible(false);
        setShowSizeSidebar(false);
        setShowGlassColors(false);
    };

    const handleGlassColorClick = () => {
        setShowGlassColors(!showGlassColors); // Toggle Glass Colors
        setIsVisible(false);
        setShowSizeSidebar(false);
        setShowAccessoriesSidebar(false);
    };

    const handleModuleClick = (moduleSize) => {
        setSelectedModule(moduleSize);
    };

    // Calculate dynamic size for module display
    const calculateScreenSize = (module) => {
        if (!module) return {};
        const fixedHeight = '200px'; // Fixed height for module box
        let width = `${100 * Math.ceil(module / 2)}px`; // Adjust width based on the number of modules
        return {
            width: width,
            height: fixedHeight, // Keep height fixed
            gridTemplateColumns: `repeat(${Math.min(module, 4)}, 1fr)`,
        };
    };

    // Determine layout based on selected module size
    const renderModuleBox = () => {
        if (selectedModule === 12) {
            return (
                <>
                    <div
                        style={{
                            ...styles.moduleBox,
                            ...calculateScreenSize(6), // For the first half (6 modules)
                        }}
                    >
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} style={styles.innerBox}>
                                {`Module ${index + 1}`}
                            </div>
                        ))}
                    </div>
                    <div
                        style={{
                            ...styles.moduleBox,
                            ...calculateScreenSize(6), // For the second half (6 modules)
                        }}
                    >
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
                <div
                    id="maindiv"
                    style={{
                        ...styles.moduleBox,
                        ...calculateScreenSize(selectedModule),
                    }}
                >
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
            {/* Navigation Bar */}
            <header style={styles.navbar}>
                <div style={styles.navItem} onClick={handleClick}>
                    <img src={materialLogo} alt="Material" style={styles.navIcon} />
                    Material
                    
                </div>
                <div>{isVisible && (
                        <div style={styles.sidebar}>
                            <div style={styles.sidebarItem}>Glass</div>
                            <div style={styles.sidebarItem}>Acrylic</div>
                        </div>
                    )}</div>

                <div style={styles.navItem} onClick={handleSizeClick}>
                    <img src={sizeLogo} alt="Size" style={styles.navIcon} />
                    Size
                </div>
                <div style={styles.navItem} onClick={handleAccessoriesClick}>
                    <img src={accessories} alt="Accessories" style={styles.navIcon} />
                    Accessories
                </div>
                <div style={styles.navItem} onClick={handleClick}>
                    <img src={icons} alt="Icons" style={styles.navIcon} />
                    Icons
                </div>
                <div style={styles.navItem} onClick={handleGlassColorClick}>
                    <img src={glasscolor} alt="Glass Colors" style={styles.navIcon} />
                    GlassColors
                </div>
                <div style={styles.navItem} onClick={handleClick}>
                    <img src={frame} alt="Frame" style={styles.navIcon} />
                    Frame
                </div>
            </header>

            {/* Size Sidebar */}
            {showSizeSidebar && <SizeSidebar onModuleClick={handleModuleClick} />}
            {/* Accessories Sidebar */}
            {showAccessoriesSidebar && <AccessoriesSidebar />}
            {showGlassColors && <ColorChanger />}

            {/* Main Content */}
            <main style={styles.content}>
                <h1 style={styles.title}>Create Your Own Panel</h1>
                <p style={styles.subtitle}>Smart Home Choice of Smart People.</p>
                <div style={styles.buttonGroup}>
                    {/* EDGE Button */}
                    <Link to="/edge"> {/* Navigate to EDGE page */}
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

                    {/* COLOR Button */}
                    <Link to="/color"> {/* Navigate to COLOR page */}
                        <button
                            style={{
                                ...styles.button,
                                ...(hoveredButton === "color" && styles.buttonHover),
                            }}
                            onMouseEnter={() => setHoveredButton("color")}
                            onMouseLeave={() => setHoveredButton(null)}
                            aria-label="Go to COLOR panel"
                        >
                            COLOR
                        </button>
                    </Link>
                </div>
            </main>

            {/* Module Box Display */}
            {selectedModule && renderModuleBox()}
        </div>
    );
}

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
    navbar: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: '#f2f2f2',
        padding: '20px 0',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid #dcdcdc',
    },
    navItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '16px',
        color: '#bcbcbc',
        width: '100px',
        height: '60px',
        padding: '6px 20px',
        backgroundColor: '#f2f2f2',
        borderRadius: '10px',
        cursor: 'pointer',
        border: '1px solid #cccccc',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease',
        position: 'relative',
    },
    navIcon: {
        width: '30px',
        height: '30px',
        marginBottom: '5px',
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
            backgroundColor: '#e9e9e9',
        },
        display:'flex',
        flexDirection: 'column',

        alignItems:'center'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        flexGrow: 1,
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: '18px',
        color: '#555',
    },
    buttonGroup: {
        display: 'flex',
        gap: '20px',
        margin: '20px 0',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
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
    colorButton: {
        width: '40px', 
        height: '40px', 
        margin: '0 5px', 
        cursor: 'pointer', 
        borderRadius: '5px' 
    },
    colorBox: {
        width: '300px', 
        height: '200px', 
        marginTop: '20px', 
        border: '5px solid black', 
        borderRadius: '10px' },
};

export default Home;
