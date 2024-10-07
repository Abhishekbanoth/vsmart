import React, { useState } from 'react';
import sizeLogo from './assets/size.png';

const Size = () => {
    const [selectedModule, setSelectedModule] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleModulebar = () => {
        setShowDropdown(!showDropdown);
    };

    const handleModuleClick = (moduleSize) => {
        setSelectedModule(moduleSize);
        setShowDropdown(false); // Close dropdown after selection
    };

    // Dynamic styles based on selected module
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

    // Inline styles for various components
    const styles = {
        module2Container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        },
        module2MainContainer: {
            backgroundColor: 'black',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            borderRadius: '2px',
            border: '5px solid rgb(196, 192, 192)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        module2InnerContainer: {
            border: 'solid 1px rgb(255, 255, 255)',
            backgroundColor: '#151414',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '10px 0',
        },
        sidebar: {
            position: 'fixed',
            top: '100px',
            left: '0',
            width: '20vw',
            backgroundColor: '#f5f5f5',
            borderRadius: '0 10px 10px 0',
            boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
            padding: '10px 0',
            zIndex: 5,
        },
        sidebarItem: {
            padding: '10px',
            textAlign: 'center',
            backgroundColor: '#fff',
            color: '#333',
            borderBottom: '1px solid #e0e0e0',
            cursor: 'pointer',
        },
        navItem: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '16px',
            color: '#bcbcbc',
            cursor: 'pointer',
        },
        navIcon: {
            width: '24px',
            height: '24px',
            marginBottom: '5px',
        },
    };

    return (
        <>
            <div className="navItem" onClick={handleModulebar} style={styles.navItem}>
                <img src={sizeLogo} alt="Size Icon" style={styles.navIcon} />
                <span>Size</span>
            </div>

            {showDropdown && (
                <div style={styles.sidebar}>
                    <div style={styles.sidebarItem} onClick={() => handleModuleClick('module2')}>2 Modules</div>
                    <div style={styles.sidebarItem} onClick={() => handleModuleClick('module4')}>4 Modules</div>
                    <div style={styles.sidebarItem} onClick={() => handleModuleClick('module6')}>6 Modules</div>
                    <div style={styles.sidebarItem} onClick={() => handleModuleClick('module8')}>8 Modules</div>
                    <div style={styles.sidebarItem} onClick={() => handleModuleClick('module12')}>12 Modules</div>
                </div>
            )}

            {selectedModule && (
                <div style={styles.module2Container}>
                    <div style={{ ...styles.module2MainContainer, ...moduleStyles[selectedModule].main }}>
                        <div style={{ ...styles.module2InnerContainer, ...moduleStyles[selectedModule].inner }}></div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Size;
