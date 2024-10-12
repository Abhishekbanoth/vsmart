import React from 'react';

const SizeSidebar = ({ onModuleClick }) => {
    return (
        
        <div className="sidebar" style={styles.sidebar}>
                    <div className="sidebar-item" style={styles.sidebarItem} onClick={() => onModuleClick('module2')}>2 Modules</div>
                    <div className="sidebar-item" style={styles.sidebarItem} onClick={() => onModuleClick('module4')}>4 Modules</div>
                    <div className="sidebar-item" style={styles.sidebarItem} onClick={() => onModuleClick('module6')}>6 Modules</div>
                    <div className="sidebar-item" style={styles.sidebarItem} onClick={() => onModuleClick('module8')}>8 Modules</div>
                    <div className="sidebar-item" style={styles.sidebarItem} onClick={() => onModuleClick('module12')}>12 Modules</div>
                </div>
    );
};

const styles = {
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
        marginTop: "30px",
    },
    sidebarItem: {
        padding: '10px',
        textAlign: 'center',
        backgroundColor: '#fff',
        color: '#333',
        borderBottom: '1px solid #e0e0e0',
        cursor: 'pointer',
        
    },
};

export default SizeSidebar;
