import React, { useState } from 'react';

const ColorChanger = ({ changeBackgroundColor }) => {
    const [customColor, setCustomColor] = useState('#ffffff'); // Default custom color

    const handleCustomColorChange = (e) => {
        const selectedColor = e.target.value;
        setCustomColor(selectedColor); // Update the custom color
        changeBackgroundColor(selectedColor); // Change the background color
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px',marginBottom:'0' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                <button style={{ ...styles.colorButton, backgroundColor: 'black' }} onClick={() => changeBackgroundColor('black')} />
                <button style={{ ...styles.colorButton, backgroundColor: 'white', border: '1px solid #ccc' }} onClick={() => changeBackgroundColor('white')} />
                <button style={{ ...styles.colorButton, backgroundColor: '#a8a8a8' }} onClick={() => changeBackgroundColor('#a8a8a8')} />
                <button style={{ ...styles.colorButton, backgroundColor: '#4b4c8c' }} onClick={() => changeBackgroundColor('#4b4c8c')} />
                <button style={{ ...styles.colorButton, backgroundColor: '#c4ac7c' }} onClick={() => changeBackgroundColor('#c4ac7c')} />
            </div>

            {/* Custom Color Picker */}
            <div style={{ marginTop: '20px' }}>
                <label htmlFor="colorPicker" style={{ marginRight: '10px' }}>Pick a custom color:</label>
                <input 
                    type="color" 
                    id="colorPicker" 
                    value={customColor} 
                    onChange={handleCustomColorChange} 
                    style={styles.colorPicker} 
                />
            </div>
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
    colorPicker: {
        width: '40px',
        height: '40px',
        cursor: 'pointer',
        borderRadius: '5px',
        border: '1px solid #ccc'
    }
};

export default ColorChanger;
