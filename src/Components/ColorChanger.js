import React, { useState } from 'react';

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

const styles = {
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

export default ColorChanger;
