import React from 'react';

const MaterialSidebar = () => {
    const materialItems = [
        'Glass',
        'Acrylic'
    ];

    return (
        <ul style={styles.sidebar}>
            {materialItems.map((item, index) => {
                const isModular = item.includes('Modular');
                return (
                    <li
                        key={index}
                        style={{
                            ...styles.sidebarItem,
                            backgroundColor: isModular ? '#ba265a' : 'transparent',
                            color: isModular ? 'white' : 'black',
                        }}
                    >
                        {item}
                    </li>
                );
            })}
        </ul>
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
        paddingLeft: 0, // Remove default padding
        marginTop:"60px",
        marginLeft:"0",
        

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
};

export default MaterialSidebar;
