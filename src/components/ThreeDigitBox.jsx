import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import * as React from 'react';
import SelectBox from './SelectBox';
import { useNavigate } from 'react-router-dom';

function ThreeDigitBox({correctAnswer}) {
    const arrayValues=[0,1,2,3,4,5,6,7,8,9];

    const [selectValue1, setSelectValue1] = React.useState('0');
    const [selectValue2, setSelectValue2] = React.useState('0');
    const [selectValue3, setSelectValue3] = React.useState('0');
    const [answerValue, setAnswerValue] = React.useState('000');
    const [incorrectValue, setIncorrectValue] = React.useState(false);
    const [incorrectValueList, setIncorrectValueList] = React.useState("");

    const handleChange1 = (event) => {
        setSelectValue1(event.target.value);
    };

    const handleChange2 = (event) => {
        setSelectValue2(event.target.value);
    };

    const handleChange3 = (event) => {
        setSelectValue3(event.target.value);
    };

    React.useEffect(() => {
        setAnswerValue(`${selectValue1}${selectValue2}${selectValue3}`);
      }, [selectValue1, selectValue2, selectValue3]);

    const navigate = useNavigate();

    const checkAnswer = () => {
        if (answerValue === correctAnswer) {
            navigate(`/${answerValue}`);
        }
        
        setIncorrectValue(true);
        let wrongAnswerList = `${answerValue},${incorrectValueList}`;
        let fixedList = wrongAnswerList.replace(/,$/, "");
        setIncorrectValueList(`${fixedList}`)
        
    }

        return (
            <div style={{ display: 'flex', flexDirection: 'column',  alignItems: 'center' }}>
                <Stack spacing={2} direction="row">
                    <SelectBox labelName="Digit One" labelId="digitOne" optionArray={arrayValues} handleChange={handleChange1} selectValue={selectValue1} />
                    <SelectBox labelName="Digit Two" labelId="digitTwo" optionArray={arrayValues} handleChange={handleChange2} selectValue={selectValue2} />
                    <SelectBox labelName="Digit Three" labelId="digitThree" optionArray={arrayValues} handleChange={handleChange3} selectValue={selectValue3} />
                    <Button variant="outlined" onClick={checkAnswer}>Check the answer!</Button>
                </Stack>
                {incorrectValue && <p>Incorrect Guesses so far: {incorrectValueList}</p>}
            </div>
        )
    }

export default ThreeDigitBox;