import React from 'react';

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
        '6 Switch + 2 Fan',
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
        maxHeight: '65vh', // Set a max height for scrolling
        listStyleType: 'none', // Remove bullets
        margin: 0, // Remove default margin
        paddingLeft: 0, // Remove default padding
        marginTop: "60px",
        marginLeft: "0",
        

    },
    sidebarItem: {
        cursor: 'pointer',
        ':hover': {
            backgroundColor: '#e9e9e9',
        },
        display: 'flex',
        flexDirection: 'column',
        padding: '10px 50px',
        borderBottom: '1px solid #ddd',
        alignItems: 'center',
        
    },
};

export default AccessoriesSidebar;
