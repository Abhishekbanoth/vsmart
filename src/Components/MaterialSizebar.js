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

export default MaterialSidebar;
