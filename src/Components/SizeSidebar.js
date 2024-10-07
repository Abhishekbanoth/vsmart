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
        marginTop: "60px",
        marginLeft: "0",
        borderBottom: '2px solid #ddd',
    },
    sidebarItem: {
        padding: '8px 12px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
};

export default SizeSidebar;
