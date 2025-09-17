import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectBox({ labelName, labelId, optionArray, selectValue, handleChange }) {

    const menuItems = optionArray.map((item, index) => (
    <MenuItem key={index} value={item}>
        {item}
    </MenuItem>
    ));

    return (
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <InputLabel id={labelId}>{labelName}</InputLabel>
            <Select
            labelId={labelId}
            id="simple-select"
            value={selectValue}
            label={labelId}
            onChange={handleChange}
            >
             {menuItems}
            </Select>
        </FormControl>
        </Box>
    );
}

export default SelectBox;