import React from 'react';
import materialLogo from './assets/material.png';
import sizeLogo from './assets/size.png';
import accessories from './assets/accessories.png';
import frame from './assets/frame.png';
import glasscolor from './assets/glasscolor.png';
import icons from './assets/icons.png';

const NavBar = ({
    handleMaterialClick,
    handleSizeClick,
    handleAccessoriesClick,
    handleGlassColorClick,
    handleFrameClick,
    handleIconsClick 
}) => {
    return (
        <header style={styles.navbar}>
            <div style={styles.navItem} onClick={handleMaterialClick}>
                <img src={materialLogo} alt="Material" style={styles.navIcon} />
                Material
            </div>
            <div style={styles.navItem} onClick={handleSizeClick}>
                <img src={sizeLogo} alt="Size" style={styles.navIcon} />
                Size
            </div>
            <div style={styles.navItem} onClick={handleAccessoriesClick}>
                <img src={accessories} alt="Accessories" style={styles.navIcon} />
                Accessories
            </div>
            <div style={styles.navItem} onClick={handleIconsClick}> 
                <img src={icons} alt="Icons" style={styles.navIcon} />
                Icons
            </div>
            <div style={styles.navItem} onClick={handleGlassColorClick}>
                <img src={glasscolor} alt="Glass Colors" style={styles.navIcon} />
                Glass Colors
            </div>
            <div style={styles.navItem} onClick={handleFrameClick}>
                <img src={frame} alt="Frame" style={styles.navIcon} />
                Frame
            </div>
        </header>
    );
};
const styles = {
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
};

export default NavBar;
