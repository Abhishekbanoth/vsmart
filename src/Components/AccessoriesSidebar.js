import React from 'react';

const AccessoriesSidebar = ({ onItemClick }) => {
    const accessoriesItems = [
        '1 Modular',
        'Ethernet Port',
        'Telephone Port',
        'TV Port',
        '2 Modular',
        '2 Switch',
        '2 Switch(1-16A)',
        '2 Switch(1-2way)',
        '2 Switch(2-16A)',
        'Bell',
        'Curtain',
        '3 Pin Socket',
        '6 Amp Socket',
        '16 Amp Socket',
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

    // Function to define the behavior for each item
    const handleItemClick = (item) => {
        switch (item) {
            case '2 Modular':
                // Define functionality for '2 Modular'
                onItemClick(item, 2); // 2 circles for 2 Modular
                break;
            case '4 Modular':
                // Define functionality for '4 Modular'
                onItemClick(item, 4); // 4 circles for 4 Modular
                break;
            case '6 Modular':
                // Define functionality for '6 Modular'
                onItemClick(item, 6); // 6 circles for 6 Modular
                break;
            case '8 Modular':
                // Define functionality for '8 Modular'
                onItemClick(item, 8); // 8 circles for 8 Modular
                break;
            case '4 Switch ':
                // Define functionality for '4 Switch'
                onItemClick(item, 2); // 4 circles for 4 Switch
                break;
            case '2 Switch ':
                // Define functionality for '4 Switch'
                onItemClick(item, 1); // 2 circles for 2 Switch
                break;
            case '2 Switch(1-16A)':
                // Define functionality for '2 Switch'
                onItemClick(item, 1); // 2 circles for 2 Switch
                break;
            case '2 Switch(1-2way)':
                // Define functionality for '2 Switch'
                onItemClick(item, 1); // 2 circles for 2 Switch
                break;
            case '2 Switch(2-16A)':
                // Define functionality for '2 Switch'
                onItemClick(item, 1); // 2 circles for 2 Switch
                break;
            case 'Bell':
                // Define functionality for 'Bell'
                onItemClick(item, 1); // 1 circle for Bell
                break;
            case 'Curtain':
                // Define functionality for 'Curtain'
                onItemClick(item, 1); // 1 circle for Curtain
                break;
            case '3 Pin Socket':
                // Define functionality for '3 Pin Socket'
                onItemClick(item, 1); // 1 circle for 3 Pin Socket
                break;
            case '6 Amp Socket':
                // Define functionality for '3 Pin Socket'
                onItemClick(item, 1); // 1 circle for 3 Pin Socket
                break;
            case '16 Amp Socket':
                // Define functionality for '3 Pin Socket'
                onItemClick(item, 1); // 1 circle for 3 Pin Socket
                break;
            case '2 Dimmer (Phase cut)':
                // Define functionality for '2 Dimmer (Phase cut)'
                onItemClick(item, 2); // 2 circles for 2 Dimmer (Phase cut)
                break;
            // Add similar cases for other items with custom functionality
            default:
                onItemClick(item, 0); // Default: do nothing
        }
    };

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
                        onClick={() => handleItemClick(item)} // Use handleItemClick for each item
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
        overflowY: 'auto',
        maxHeight: '65vh',
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