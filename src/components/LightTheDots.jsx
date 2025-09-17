import Stack from '@mui/material/Stack';
import * as React from 'react';
import CircleDot from './CircleDot';
import LED from './LED';

export default function LightTheDots() {

    const [selectedLetter, setSelectedLetter] = React.useState('');
    const [ledPatternArray, setLedPatternArray] = React.useState([0,0,0,0,0,0,0])
    const [LEDColor, setLEDColor] = React.useState('black');

    const handleClick = (event) => {
        setSelectedLetter(event.target.innerHTML);
        const letterValue = event.target.innerHTML;
        handleLetterColor(letterValue);
        handleLetterMatrix(letterValue);
    };

    const handleLetterColor = (letterValue) => {
        if(letterValue === "A" || letterValue === "G" || letterValue === "P" || letterValue === "V") {
            setLEDColor("green");
        }
        if(letterValue === "B" || letterValue === "J" || letterValue === "Q" || letterValue === "W") {
            setLEDColor("red");
        }
        if(letterValue === "C" || letterValue === "K" || letterValue === "R" || letterValue === "X") {
            setLEDColor("yellow");
        }
        if(letterValue === "D" || letterValue === "L" || letterValue === "S" || letterValue === "Y") {
            setLEDColor("blue");
        }
        if(letterValue === "E" || letterValue === "M" || letterValue === "T" || letterValue === "Z") {
            setLEDColor("purple");
        }
        if(letterValue === "F" || letterValue === "H" || letterValue === "N" || letterValue === "U")  {
            setLEDColor("pink");
        }
    }

    const handleLetterMatrix = (letterValue) => {
        if(letterValue === "A") {
            setLedPatternArray([0,0,0,0,0,0,0])
        }
        if(letterValue === "B") {
            setLedPatternArray([1,0,0,1,0,0,1])
        }
        if(letterValue === "C") {
            setLedPatternArray([1,1,0,0,1,0,1])
        }
        if(letterValue === "D") {
            setLedPatternArray([1,1,1,0,1,1,1])
        }
        if(letterValue === "E") {
            setLedPatternArray([1,1,0,1,1,0,1])
        }
        if(letterValue === "F") {
            setLedPatternArray([1,1,0,1,1,0,0])
        }
        if(letterValue === "G") {
            setLedPatternArray([0,1,1,0,1,1,0])
        }
        if(letterValue === "H") {
            setLedPatternArray([0,1,1,1,1,1,0])
        }
        // Letter 1
        if(letterValue === "J") {
            setLedPatternArray([1,1,0,1,1,1,1]);
        }
        // Letter 2
        if(letterValue === "K") {
            setLedPatternArray([1,1,1,1,1,1,1]);
        }
        if(letterValue === "L") {
            setLedPatternArray([1,0,1,1,1,0,1])
        }
        if(letterValue === "M") {
            setLedPatternArray([1,0,1,1,0,1,0])
        }
        if(letterValue === "N") {
            setLedPatternArray([1,1,1,1,0,1,0])
        // Letter 3
        }
        if(letterValue === "P") {
            setLedPatternArray([1,0,1,1,0,1,1]);
        }
        if(letterValue === "Q") {
            setLedPatternArray([1,0,1,1,0,0,0])
        }
        if(letterValue === "R") {
            setLedPatternArray([1,1,1,1,1,1,0])
        }
        if(letterValue === "S") {
            setLedPatternArray([1,1,0,1,0,1,1])
        }
        if(letterValue === "T") {
            setLedPatternArray([0,0,1,0,0,1,0])
        }
        if(letterValue === "U") {
            setLedPatternArray([0,1,1,0,1,1,1])
        }
        if(letterValue === "V") {
            setLedPatternArray([0,0,1,1,0,1,0])
        }
        if(letterValue === "W") {
            setLedPatternArray([0,1,0,0,0,1,1])
        }
        if(letterValue === "X") {
            setLedPatternArray([0,1,1,1,1,1,0])
        }
        if(letterValue === "Y") {
            setLedPatternArray([1,0,1,0,0,1,0])
        }
        if(letterValue === "Z") {
            setLedPatternArray([0,1,1,1,0,1,0])
        }
    }
    
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column',  alignItems: 'center' }}>
        <Stack spacing={2} direction="row">
          <CircleDot letter="A" selectedLetter={selectedLetter} handleClick={handleClick}/>  
          <CircleDot letter="B" selectedLetter={selectedLetter} handleClick={handleClick}/>
          <CircleDot letter="C" selectedLetter={selectedLetter} handleClick={handleClick}/> 
          <CircleDot letter="D" selectedLetter={selectedLetter} handleClick={handleClick}/>  
          <CircleDot letter="E" selectedLetter={selectedLetter} handleClick={handleClick}/>  
          <CircleDot letter="F" selectedLetter={selectedLetter} handleClick={handleClick}/>  
          <CircleDot letter="G" selectedLetter={selectedLetter} handleClick={handleClick}/>  
          <CircleDot letter="H" selectedLetter={selectedLetter} handleClick={handleClick}/>  
        </Stack>
        <Stack spacing={2} direction="row">
          <CircleDot letter="J" selectedLetter={selectedLetter} handleClick={handleClick}/>  
          <CircleDot letter="K" selectedLetter={selectedLetter} handleClick={handleClick}/>
          <CircleDot letter="L" selectedLetter={selectedLetter} handleClick={handleClick}/> 
          <CircleDot letter="M" selectedLetter={selectedLetter} handleClick={handleClick}/>  
          <CircleDot letter="N" selectedLetter={selectedLetter} handleClick={handleClick}/>  
          <CircleDot letter="P" selectedLetter={selectedLetter} handleClick={handleClick}/>  
          <CircleDot letter="Q" selectedLetter={selectedLetter} handleClick={handleClick}/>  
          <CircleDot letter="R" selectedLetter={selectedLetter} handleClick={handleClick}/>  
        </Stack>
        <Stack spacing={2} direction="row">
          <CircleDot letter="S" selectedLetter={selectedLetter} handleClick={handleClick}/>  
          <CircleDot letter="T" selectedLetter={selectedLetter} handleClick={handleClick}/>
          <CircleDot letter="U" selectedLetter={selectedLetter} handleClick={handleClick}/> 
          <CircleDot letter="V" selectedLetter={selectedLetter} handleClick={handleClick}/>  
          <CircleDot letter="W" selectedLetter={selectedLetter} handleClick={handleClick}/>  
          <CircleDot letter="X" selectedLetter={selectedLetter} handleClick={handleClick}/>  
          <CircleDot letter="Y" selectedLetter={selectedLetter} handleClick={handleClick}/>  
          <CircleDot letter="Z" selectedLetter={selectedLetter} handleClick={handleClick}/>  
        </Stack>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column',  alignItems: 'center' }}>
        <LED color={LEDColor} ledPatternArray={ledPatternArray}/>
    </div>
    </>

  );
}