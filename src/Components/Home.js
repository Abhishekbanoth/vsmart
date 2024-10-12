import React, { useState } from 'react';
import './Home.css';
import { useDrop } from 'react-dnd';
import bellImage from './assets/Bell.png';
import CurtainImg from './assets/Curtain.png';
import AccessoriesSidebar from './AccessoriesSidebar';
import AMP6Socketimg from './assets/6AMPSocket.png';
import Pin3Socketimg from './assets/3PinSocket.png';
import Ethernetimg from './assets/Ethernet.png';
import Telimg from './assets/Tel.png';
import Laptopimg from './assets/Laptop.png'
import AMP16Socketimg from './assets/16AMPSocket.png'
import Fanimg from './assets/Fan Default.png';
import Dimmerimg from './assets/Dimmer Default.png'
import deleteIcon from './assets/delete.png'
import ColorChanger from './ColorChanger';
import BorderChanger from './BorderChanger';
import IconsSidebar from './IconsSidebar';
import MaterialSidebar from './MaterialSizebar';
import SizeSidebar from './SizeSidebar';
import NavBar from './Navbar';

const Size = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showMaterialSidebar, setShowMaterialSidebar] = useState(false);
    const [showSizeSidebar, setShowSizeSidebar] = useState(false);
    const [showAccessoriesSidebar, setShowAccessoriesSidebar] = useState(false);
    const [showIconsSidebar, setShowIconsSidebar] = useState(false);
    const [showGlassColors, setShowGlassColors] = useState(false);
    const [showFrame, setShowFrame] = useState(false);
    const [selectedModule, setSelectedModule] = useState(null);
    const [selecteditem, setSelecteditem] = useState(null);
    const [droppedIcons, setDroppedIcons] = useState([null, null]);
    const [addedItems, setAddedItems] = useState([]);
    const [showBellImage, setShowBellImage] = useState(false);
    const [showCurtainImage, setShowCurtainImage] = useState(false);
    const [showAMP6Image, setShowAMP6Image] = useState(false);
    const [showAMP16Image, setShowAMP16Image] = useState(false);
    const [showPIN3Image, setShowPIN3Image] = useState(false);
    const [showEthernetImage, setShowEthernetImage] = useState(false);
    const [showTelImage, setShowTelImage] = useState(false);
    const [showLaptopImage, setShowLaptopImage] = useState(false);
    const [showFanImage, setShowFanImage] = useState(false);
    const [showDimmerImage, setShowDimmerImage] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('');
    const [borderColor, setBorderColor] = useState('');
    const [droppedFanIcons, setDroppedFanIcons] = useState([null, null]);
    const [droppedDimmerIcons, setDroppedDimmerIcons] = useState([null, null]);

    const moduleLimits = { module2: 1, module4: 3, module6: 4, module8: 5, module12: 8, };

    const handleModuleClick = (moduleSize) => {
        setSelectedModule(moduleSize);
        setSelecteditem('')
        setAddedItems([]);
        setDroppedIcons([null, null]);
        setDroppedFanIcons([null, null]);
        setShowBellImage(false);
        setShowCurtainImage(false);
        setShowPIN3Image(false);
        setShowAMP16Image(false);
        setShowAMP6Image(false);
        setShowEthernetImage(false);
        setShowTelImage(false);
        setShowLaptopImage(false);
        setShowFanImage(false);
        setShowDimmerImage(false);
    };

    const handleMaterialClick = () => {
        setIsVisible(!isVisible);
        setShowMaterialSidebar(true);
        setShowSizeSidebar(false);
        setShowAccessoriesSidebar(false);
        setShowGlassColors(false);
        setShowFrame(false);
        setShowIconsSidebar(false);
    };

    const handleSizeClick = () => {
        setShowMaterialSidebar(false);
        setShowSizeSidebar(true);
        setIsVisible(false);
        setShowAccessoriesSidebar(false);
        setShowGlassColors(false);
        setShowFrame(false);
        setShowIconsSidebar(false);
    };

    const handleAccessoriesClick = () => {
        setShowMaterialSidebar(false);
        setShowAccessoriesSidebar(true);
        setIsVisible(false);
        setShowSizeSidebar(false);
        setShowGlassColors(false);
        setShowFrame(false);
        setShowIconsSidebar(false);
    };

    const handleIconsClick = () => {
        setShowMaterialSidebar(false);
        setShowIconsSidebar(true);
        setIsVisible(false);
        setShowSizeSidebar(false);
        setShowAccessoriesSidebar(false);
        setShowGlassColors(false);
        setShowFrame(false);
    };

    const handleGlassColorClick = () => {
        setShowMaterialSidebar(false);
        setShowGlassColors(!showGlassColors);
        setIsVisible(false);
        setShowSizeSidebar(false);
        setShowAccessoriesSidebar(false);
        setShowFrame(false);
        setShowIconsSidebar(false);
    };

    const handleFrameClick = () => {
        setShowMaterialSidebar(false);
        setShowFrame(true);
        setIsVisible(false);
        setShowSizeSidebar(false);
        setShowAccessoriesSidebar(false);
        setShowGlassColors(false);
        setShowIconsSidebar(false);
    };

    const changeBackgroundColor = (color) => {
        setBackgroundColor(color);
    };

    const changeBorderColor = (color) => {
        setBorderColor(color);
    };

    const handleAccessoryClick = (item) => {
        let maxAllowedPairs = moduleLimits[selectedModule];
        let totalPairsAdded = addedItems.length;
        setSelecteditem(item);

        switch (item) {

            case 'Ethernet Port':
                if (totalPairsAdded < maxAllowedPairs) {
                    setShowEthernetImage(true);
                    setAddedItems((prevItems) => [...prevItems, ...Array(1).fill('Ethernet Port')])
                } else {
                    alert(`You can only add ${maxAllowedPairs} pair(s) for ${selectedModule}.`);
                }
                break;

            case 'Telephone Port':
                if (totalPairsAdded < maxAllowedPairs) {
                    setShowTelImage(true);
                    setAddedItems((prevItems) => [...prevItems, ...Array(1).fill('Telephone Port')])
                } else {
                    alert(`You can only add ${maxAllowedPairs} pair(s) for ${selectedModule}.`);
                }
                break;

            case 'TV Port':
                if (totalPairsAdded < maxAllowedPairs) {
                    setShowLaptopImage(true);
                    setAddedItems((prevItems) => [...prevItems, ...Array(1).fill('TV Port')])
                } else {
                    alert(`You can only add ${maxAllowedPairs} pair(s) for ${selectedModule}.`);
                }
                break;

            case 'Bell':
                if (totalPairsAdded < maxAllowedPairs) {
                    setShowBellImage(true);
                    setAddedItems((prevItems) => [...prevItems, ...Array(1).fill('Bell')])
                } else {
                    alert(`You can only add ${maxAllowedPairs} pair(s) for ${selectedModule}.`);
                } break;

            case 'Curtain':
                if (totalPairsAdded < maxAllowedPairs) {
                    setShowCurtainImage(true);
                    setAddedItems((prevItems) => [...prevItems, ...Array(1).fill('Curtain')])
                } else {
                    alert(`You can only add ${maxAllowedPairs} pair(s) for ${selectedModule}.`);
                }
                break;

            case '3 Pin Socket':
                if (totalPairsAdded < maxAllowedPairs) {
                    setShowPIN3Image(true);
                    setAddedItems((prevItems) => [...prevItems, ...Array(1).fill('3 Pin Socket')])
                } else {
                    alert(`You can only add ${maxAllowedPairs} pair(s) for ${selectedModule}.`);
                }
                break;

            case '6 Amp Socket':
                if (totalPairsAdded < maxAllowedPairs) {
                    setShowAMP6Image(true);
                    setAddedItems((prevItems) => [...prevItems, ...Array(1).fill('6 Amp Socket')])
                } else {
                    alert(`You can only add ${maxAllowedPairs} pair(s) for ${selectedModule}.`);
                }
                break;

            case '16 Amp Socket':
                if (totalPairsAdded < maxAllowedPairs) {
                    setShowAMP16Image(true);
                    setAddedItems((prevItems) => [...prevItems, ...Array(1).fill('16 Amp Socket')])
                } else {
                    alert(`You can only add ${maxAllowedPairs} pair(s) for ${selectedModule}.`);
                }
                break;

            case '2 Switch':
            case '2 Switch(1-16A)':
            case '2 Switch(1-2way)':
            case '2 Switch(2-16A)':
                if (selectedModule === 'module2' && totalPairsAdded >= 1) {
                    alert(`You can only add 1 pair for ${selectedModule}.`);
                    return;
                }
                if (totalPairsAdded + 1 <= maxAllowedPairs) {
                    setAddedItems((prevItems) => [...prevItems, ...Array(1).fill(item)]);
                } else {
                    alert(`You can only add ${maxAllowedPairs} pair(s) for ${selectedModule}.`);
                } break;

            case '4 Switch':
                if (totalPairsAdded + 2 <= maxAllowedPairs) {
                    setAddedItems((prevItems) => [...prevItems, ...Array(2).fill(item)]); // Add 2 pairs
                } else {
                    alert(`You can only add ${maxAllowedPairs} pair(s) for ${selectedModule}.`);
                }
                break;

            case '4 Scene Controller': // New case for 4 Scene Controller
                if (totalPairsAdded + 2 <= maxAllowedPairs) {
                    setAddedItems((prevItems) => [...prevItems, ...Array(2).fill(item)]); // Add 2 pairs
                } else {
                    alert(`You can only add ${maxAllowedPairs} pair(s) for ${selectedModule}.`);
                }
                break;

            case '6 Switch':
                if (totalPairsAdded + 3 <= maxAllowedPairs) {
                    setAddedItems((prevItems) => [...prevItems, ...Array(3).fill(item)]); // Add 3 pairs
                } else {
                    alert(`You can only add ${maxAllowedPairs} pair(s) for ${selectedModule}.`);
                }
                break;

            case '8 Switch':
                if (totalPairsAdded + 4 <= maxAllowedPairs) {
                    setAddedItems((prevItems) => [...prevItems, ...Array(4).fill(item)]); // Add 4 pairs
                } else {
                    alert(`You can only add ${maxAllowedPairs} pair(s) for ${selectedModule}.`);
                }
                break;

            case '10 Switch':
                if (totalPairsAdded + 5 <= maxAllowedPairs) {
                    setAddedItems((prevItems) => [...prevItems, ...Array(5).fill(item)]); // Add 5 pairs
                } else {
                    alert(`You can only add ${maxAllowedPairs} pair(s) for ${selectedModule}.`);
                }
                break;

            case '4 Switch + 1 Fan':
                maxAllowedPairs = maxAllowedPairs + 1
                if (totalPairsAdded + 5 <= maxAllowedPairs + 1) {
                    setShowFanImage(true);
                    setShowDimmerImage(true);
                    setAddedItems((prevItems) => [...prevItems, ...Array(0).fill('4 Switch + 1 Fan')])
                    setAddedItems((prevItems) => [...prevItems, ...Array(2).fill(item)]); // Add 5 pairs
                } else {
                    alert(`You can only add ${maxAllowedPairs} pair(s) for ${selectedModule}.`);
                }
                break;

            case '4 Switch + 2 Fan':
                if (totalPairsAdded + 4 <= maxAllowedPairs) {
                    setShowFanImage(true);
                    setShowDimmerImage(true);
                    setAddedItems((prevItems) => [...prevItems, ...Array(0).fill('4 Switch + 2 Fan')])
                    setAddedItems((prevItems) => [...prevItems, ...Array(2).fill(item)]);
                    setShowFanImage(true);
                    setShowDimmerImage(true);
                } else {
                    alert(`You can only add ${maxAllowedPairs} pair(s) for ${selectedModule}.`);
                } break;

            case '6 Switch + 1 Fan':
                maxAllowedPairs = maxAllowedPairs + 1
                if (totalPairsAdded + 5 <= maxAllowedPairs) {
                    setShowFanImage(true);
                    setShowDimmerImage(true);
                    setAddedItems((prevItems) => [...prevItems, ...Array(0).fill('6 Switch + 1 Fan')])
                    setAddedItems((prevItems) => [...prevItems, ...Array(3).fill(item)]); // Add 5 pairs
                } else {
                    alert(`You can only add ${maxAllowedPairs} pair(s) for ${selectedModule}.`);
                }
                break;

            case '6 Switch + 2 Fan':
                if (totalPairsAdded + 5 <= maxAllowedPairs) {
                    setShowFanImage(true);
                    setShowDimmerImage(true);
                    setAddedItems((prevItems) => [...prevItems, ...Array(0).fill('6 Switch + 2 Fan')])
                    setAddedItems((prevItems) => [...prevItems, ...Array(3).fill(item)]); // Add 5 pairs
                    setShowFanImage(true);
                    setShowDimmerImage(true);
                } else {
                    alert(`You can only add ${maxAllowedPairs} pair(s) for ${selectedModule}.`);
                }
                break;

            default:
                alert(`This accessory is not available for ${selectedModule}`);
        }
    };

    const moduleStyles = {
        module2: {
            main: { height: '41vh', width: '23vw' },
            inner: { height: '146px', width: '140px' },
        },
        module4: {
            main: { height: '41vh', width: '37vw' },
            inner: { height: '146px', width: '330px' },
        },
        module6: {
            main: { height: '41vh', width: '49vw' },
            inner: { height: '146px', width: '452px' },
        },
        module8: {
            main: { height: '41vh', width: '58vw' },
            inner: { height: '146px', width: '565px' },
        },
        module12: {
            main: { height: '69.99vh', width: '49.384vw' },
            inner: { height: '146px', width: '452px' },
            innermost: { height: '146px', width: '452px', marginTop: '10px' },
        },
    };

    const handleDeleteItem = (index) => {
        const itemToRemove = addedItems[index];
        switch (itemToRemove) {
            case 'Bell':
                setShowBellImage(false);
                break;
            case 'Curtain':
                setShowCurtainImage(false);
                break;
            case 'Ethernet Port':
                setShowEthernetImage(false);
                break;
            case 'Telephone Port':
                setShowTelImage(false);
                break;
            case 'TV Port':
                setShowLaptopImage(false);
                break;
            case '3 Pin Socket':
                setShowPIN3Image(false);
                break;
            case '6 Amp Socket':
                setShowAMP6Image(false);
                break;
            case '16 Amp Socket':
                setShowAMP16Image(false);
                break;
            case '4 Switch + 1 Fan':
            case '4 Switch + 2 Fan':
            case '6 Switch + 1 Fan':
            case '6 Switch + 2 Fan':
                setShowFanImage(false);
                setShowDimmerImage(false);
                break;
            default:
                break;
        }
        setAddedItems((prevItems) => {
            const newItems = prevItems.filter((_, i) => i !== index);
            return newItems;
        });
    };

    const renderAccessoryImage = (imageSrc, altText, visibility, style, index) => {
        if (!visibility) return null;
        const itemIndex = addedItems.indexOf(altText); return (
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '0px',
                    margin: '0 10px',
                    zIndex: '1',
                }}>
                <img src={imageSrc} alt={altText} style={style} />
                <img
                    src={deleteIcon}
                    alt="Delete Icon"
                    onClick={() => handleDeleteItem(itemIndex)}
                    style={{
                        position: 'absolute', height: '18px', width: '18px', borderTopRadius: '2px', marginTop: '127px', marginLeft: '35px', zIndex: '1'
                    }} />
            </div>
        );
    };
    const handleDelete = (index) => {
        setDroppedIcons((prev) => {
            const newDroppedIcons = [...prev];
            newDroppedIcons[index] = null;
            return newDroppedIcons;
        });
    };

    const DimmerDropArea = ({ index, currentImage, onDrop, onDelete, altText }) => {
        const [, drop] = useDrop(() => ({
            accept: 'icon',
            drop: (item) => onDrop(item, index),
        }));

        const dropAreaStyles = {
            width: '40px',
            height: currentImage ? '40px' : '150px',
            marginTop: '-65px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
        };

        return (
            <div ref={drop} style={{
                width: '30px',
                height: '30px',
                marginTop: '65px',
            }}>
                {currentImage ? (
                    <>
                        <img
                            src={currentImage.src}
                            alt="Dropped icon"
                            style={{
                                width: '40px',
                                height: '40px',
                            }}
                        />
                        <img
                            src={deleteIcon}
                            alt="Delete Icon"
                            onClick={onDelete}
                            style={{
                                position: 'relative',
                                top: '-55px',
                                left: '-15px',
                                width: '15px',
                                height: '15px',
                                cursor: 'pointer',
                                zIndex: '2',
                            }}
                        />
                    </>
                ) : (
                    <img
                        src={Dimmerimg}  // default dimmer image
                        alt="Dimmer"
                        style={dropAreaStyles}
                    />
                )}
            </div>
        );
    };

    const handleDimmerDrop = (item, index) => {
        setDroppedDimmerIcons((prevIcons) => {
            const newIcons = [...prevIcons];
            newIcons[index] = item;
            return newIcons;
        });
    };

    const handleDimmerDelete = (index) => {
        setDroppedDimmerIcons((prevIcons) => {
            const newIcons = [...prevIcons];
            newIcons[index] = null;
            return newIcons;
        });
        setShowDimmerImage(true);
    };

    const handleFanDrop = (item, index) => {
        setDroppedFanIcons((prevIcons) => {
            const newIcons = [...prevIcons];
            newIcons[index] = item;
            return newIcons;
        });
    };

    const handleFanDelete = (index) => {
        setDroppedFanIcons((prevIcons) => {
            const newIcons = [...prevIcons];
            newIcons[index] = null;
            return newIcons;
        });
        setShowFanImage(true);
    };

    const FanDropArea = ({ index, currentImage, onDrop, onDelete, altText }) => {
        const [, drop] = useDrop(() => ({
            accept: 'icon',
            drop: (item) => onDrop(item, index),
        }));

        return (
            <div ref={drop} style={{
                width: '30px',
                height: '30px',
                marginTop: '65px',
            }}>
                {currentImage ? (
                    <>
                        <img
                            src={currentImage.src}
                            alt="Dropped icon"
                            style={{
                                width: '40px',
                                height: '40px',
                            }}
                        />
                        <img
                            src={deleteIcon}
                            alt="Delete Icon"
                            onClick={onDelete}
                            style={{
                                position: 'relative',
                                top: '-55px',
                                left: '-15px',
                                width: '15px',
                                height: '15px',
                                cursor: 'pointer',
                                zIndex: '2',
                            }}
                        />
                    </>
                ) : (
                    <img
                        src={Fanimg}
                        alt="Fan"
                        style={{ width: '30px', height: '30px', marginRight: '30px' }}
                    />
                )}
            </div>
        );
    };

    const CircleDropArea = ({ index, onDelete }) => {
        const isDropped = !!droppedIcons[index];
        const [, drop] = useDrop(() => ({
            accept: 'icon',
            drop: (item) => handleDrop(item, index),
            collect: (monitor) => ({
                isOver: monitor.isOver(),
            }),
        }));

        return (
            <div ref={drop} style={{
                width: '30px',
                height: '30px',
                border: isDropped ? 'transparent' : '2px solid rgb(77, 184, 231)',
                borderRadius: '50%',
                margin: '6px',
            }}>
                {droppedIcons[index] ? (
                    <>
                        <img src={droppedIcons[index].src} alt={`Dropped icon ${index + 1}`} style={{
                            width: '40px',
                            height: '40px',
                        }} />
                        <img src={deleteIcon} alt='delete' onClick={onDelete} style={{
                            position: 'relative',
                            top: '-55px',
                            left: '-15px',
                            width: '15px',
                            height: '15px',
                            cursor: 'pointer',
                            zIndex: '2',
                        }} />
                    </>
                ) : (""
                )}
            </div>
        );
    };

    const handleDrop = (item, index) => {
        setDroppedIcons((prev) => {
            const newDroppedIcons = [...prev];
            newDroppedIcons[index] = item;
            return newDroppedIcons;
        });
    };

    const handleDownload = () => {
        console.log('Download button clicked');
        const printableContent = document.getElementById('printable-area').innerHTML;
        const originalContent = document.body.innerHTML;

        document.body.innerHTML = printableContent;
        window.print();
        document.body.innerHTML = originalContent;
    };

    return (
        <div>
            <NavBar
                handleMaterialClick={handleMaterialClick}
                handleSizeClick={handleSizeClick}
                handleAccessoriesClick={handleAccessoriesClick}
                handleGlassColorClick={handleGlassColorClick}
                handleFrameClick={handleFrameClick}
                handleIconsClick={handleIconsClick}
            />

            {showMaterialSidebar && <MaterialSidebar />}
            {showSizeSidebar && <SizeSidebar onModuleClick={handleModuleClick} />}
            {showAccessoriesSidebar && <AccessoriesSidebar onItemClick={handleAccessoryClick} />}
            {showGlassColors && <ColorChanger changeBackgroundColor={changeBackgroundColor} />}
            {showFrame && <BorderChanger changeBorderColor={changeBorderColor} />}
            {showIconsSidebar && <IconsSidebar />}

            {selectedModule && (
                <div id="printable-area" className="module2-container">
                    <div className="module2-maincontainer" style={{ ...moduleStyles[selectedModule].main, backgroundColor, borderColor }}>
                        <div className="module2-innercontainer" style={{ ...moduleStyles[selectedModule].inner, backgroundColor }}>
                            <div
                                className="circle-pair-container"
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                    gap: '6px',
                                }}>

                                {renderAccessoryImage(bellImage, "Bell", showBellImage, {
                                    width: '60px', height: '60px', marginTop: '40px'
                                }, addedItems.indexOf('Bell'))}

                                {renderAccessoryImage(CurtainImg, "Curtain", showCurtainImage, {
                                    width: '30px', height: '80px', marginTop: '35px',
                                }, addedItems.indexOf('Curtain'))}

                                {renderAccessoryImage(Pin3Socketimg, "3 Pin Socket", showPIN3Image, {
                                    width: '80px', height: '100px', marginTop: '25px',
                                }, addedItems.indexOf('3 Pin Socket'))}

                                {renderAccessoryImage(AMP16Socketimg, "16 Amp Socket", showAMP16Image, {
                                    width: '80px', height: '100px', marginTop: '25px',
                                }, addedItems.indexOf('16 Amp Socket'))}

                                {renderAccessoryImage(AMP6Socketimg, "6 Amp Socket", showAMP6Image, {
                                    width: '80px', height: '100px', marginTop: '25px',
                                }, addedItems.indexOf('6 Amp Socket'))}

                                {renderAccessoryImage(Ethernetimg, "Ethernet Port", showEthernetImage, {
                                    width: '60px', height: '120px', marginTop: '15px',
                                }, addedItems.indexOf('Ethernet Port'))}

                                {renderAccessoryImage(Telimg, "Telephone Port", showTelImage, {
                                    width: '60px', height: '115px', marginTop: '15px',
                                }, addedItems.indexOf('Telephone Port'))}

                                {renderAccessoryImage(Laptopimg, "TV Port", showLaptopImage, {
                                    width: '60px', height: '100px', marginTop: '25px',
                                }, addedItems.indexOf('TV Port'))}

                                {selecteditem.includes('2 Fan') && (
                                    <>
                                        {showDimmerImage && (
                                            <DimmerDropArea
                                                index={0}
                                                currentImage={droppedDimmerIcons[0]}
                                                onDrop={handleDimmerDrop}
                                                onDelete={() => handleDimmerDelete(0)}
                                            />
                                        )}
                                        {showFanImage && (
                                            <FanDropArea
                                                index={0}
                                                currentImage={droppedFanIcons[0]}
                                                onDrop={handleFanDrop}
                                                onDelete={() => handleFanDelete(0)}
                                            />
                                        )}
                                    </>
                                )}
                                {addedItems.filter(item => item !== 'Bell' && item !== 'Curtain' && item !== '3 Pin Socket' && item !== '16 Amp Socket' && item !== '6 Amp Socket' && item !== 'Ethernet Port' && item !== 'Telephone Port' && item !== 'TV Port')
                                    .slice(0, moduleLimits[selectedModule] * 2).map((item, index) => (
                                        <>
                                            <div
                                                className="circle-pair"
                                                key={index}
                                                style={{ margin: '5px 0px', zIndex: '1', }}
                                            >
                                                <div style={{ marginBottom: '30px' }}>
                                                    <CircleDropArea index={index} onDelete={() => handleDelete(index)} />
                                                </div>
                                                <CircleDropArea index={index + 15} onDelete={() => handleDelete(index + 15)} />

                                            </div>
                                            <div className="delete-icon-container" style={{ position: 'relative' }}>
                                                <img
                                                    src={deleteIcon}
                                                    alt="Delete Icon"
                                                    className="delete-icon"
                                                    key={`delete-${index}`}
                                                    onClick={() => handleDeleteItem(index)}
                                                    style={{ height: '14px', width: '14px', borderTopRadius: '2px', marginTop: '132px', zIndex: '1', }} /></div></>))}
                                {showFanImage && (
                                    <FanDropArea
                                        index={1}
                                        currentImage={droppedFanIcons[1]}
                                        onDrop={handleFanDrop}
                                        onDelete={() => handleFanDelete(1)}
                                    />
                                )}
                                {showDimmerImage && (
                                    <DimmerDropArea
                                        index={1}
                                        currentImage={droppedDimmerIcons[1]}
                                        onDrop={handleDimmerDrop}
                                        onDelete={() => handleDimmerDelete(1)}
                                    />
                                )}
                            </div>
                        </div>

                        {selectedModule === 'module12' && (
                            <div className="module2-innercontainer" style={moduleStyles[selectedModule].innermost}>
                                <div
                                    className="circle-pair-container"
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                        gap: '10px',
                                        marginLeft: '40px',
                                    }}>
                                    {addedItems.slice(moduleLimits[selectedModule] * 2).map((item, index) => (
                                        <>
                                            <div
                                                className="circle-pair"
                                                key={index}
                                                style={{ margin: '70px 27px', }}>
                                                <div className="circle" ></div>
                                                <div className="circle"></div>
                                            </div>
                                            <div className="delete-icon-container " style={{ position: 'relative', }}>
                                                <img
                                                    src={deleteIcon}
                                                    alt="Delete Icon"
                                                    className="delete-icon"
                                                    key={`delete-${index}`}
                                                    onClick={() => handleDeleteItem(index)}
                                                    style={{ height: '18px', width: '18px', borderTopRadius: '2px', marginTop: '128px', position: 'absolute' }}
                                                />
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="printable-content">
                        <table border="1" style={{ marginTop: '5px ', marginLeft: '250px', borderCollapse: 'collapse' }}>
                            <tbody>
                                <tr>
                                    <td>Panel</td>
                                    <td>Edge</td>
                                </tr>
                                <tr>
                                    <td>Material</td>
                                    <td>Glass</td>
                                </tr>
                                <tr>
                                    <td>Module</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>Frame</td>
                                    <td>Rosegold</td>
                                </tr>
                                <tr>
                                    <td>Quantity</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Glass Color</td>
                                    <td>RoyalBlue</td>
                                </tr>
                                <tr>
                                    <td>Accessories-4</td>
                                    <td>6 Switch + 2 Fan</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>)}
            <button style={{
                display: 'flex',
                position: 'fixed',
                right: '20px',
                bottom: '20px',
                textAlign: 'center',
                textDecoration: 'none',
                fontSize: '16px',
                margin: ' 8px 2px',
                cursor: 'pointer',
                borderRadius: '5px',
                letterSpacing: '1px',
                fontWeight: '600',
                outline: 'none',
                border: 'none',
                padding: ' 8px 20px',
                background: '#ce2b65',
                color: '#fff',
            }}
                onClick={handleDownload}>Download</button>
        </div>
    );
};
export default Size;
