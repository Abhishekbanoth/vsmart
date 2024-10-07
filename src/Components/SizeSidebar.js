import React from 'react';

const SizeSidebar = ({ onModuleClick }) => {
    return (
        <div style={styles.sidebar}>
            <ul style={{ padding: 0, margin: 0 }}> {/* Added ul to wrap the list items */}
                {[2, 4, 6, 8, 12].map(size => (
                    <li key={size} style={styles.sidebarItem} onClick={() => onModuleClick(size)}>
                        {`${size} Module`}
                    </li>
                ))}
            </ul>
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
