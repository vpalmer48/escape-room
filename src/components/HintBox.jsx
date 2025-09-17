import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';

export default function HintBox({hint1, hint2, hint3, solution}) {
    const [value, setValue] = React.useState('1');
    const [showHint1, setShowHint1] = React.useState(false);
    const [showHint2, setShowHint2] = React.useState(false);
    const [showHint3, setShowHint3] = React.useState(false);
    const [showSolution, setShowSolution] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleHint1Click = () => {
    setShowHint1(true);

  }
  const handleHint2Click = () => {
    setShowHint2(true);
    
  }
  const handleHint3Click = () => {
    setShowHint3(true);
    
  }
  const handleSolutionClick = () => {
    setShowSolution(true);
    
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Hint One" value="1" />
            <Tab label="Hint Two" value="2" />
            <Tab label="Hint Three" value="3" />
            <Tab label="Solution" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
            {!showHint1 && <Button variant="outlined" onClick={handleHint1Click}>Show Hint 1!</Button>}
            {showHint1 && <p>{hint1}</p>}
        </TabPanel>
        <TabPanel value="2">
            {!showHint2 && <Button variant="outlined" onClick={handleHint2Click}>Show Hint 2!</Button>}
            {showHint2 && <p>{hint2}</p>}
        </TabPanel>
        <TabPanel value="3">
            {!showHint3 && <Button variant="outlined" onClick={handleHint3Click}>Show Hint 3!</Button>}
            {showHint3 && <p>{hint3}</p>}
        </TabPanel>
        <TabPanel value="4">
            {!showSolution && <Button variant="outlined" onClick={handleSolutionClick}>Show Solution!</Button> }
            {showSolution && <p>{solution}</p>}
        </TabPanel>
      </TabContext>
    </Box>
  );
}