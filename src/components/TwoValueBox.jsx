import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import * as React from 'react';
import SelectBox from './SelectBox';
import { useNavigate } from 'react-router-dom';

function TwoValueBox({correctAnswer, array1, array2, label1, label2 }) {
    const [selectValue1, setSelectValue1] = React.useState('');
    const [selectValue2, setSelectValue2] = React.useState('');
    const [answerValue, setAnswerValue] = React.useState('');
    const [incorrectValue, setIncorrectValue] = React.useState(false);
    const [incorrectValueList, setIncorrectValueList] = React.useState("");

    const handleChange1 = (event) => {
        setSelectValue1(event.target.value);
    };

    const handleChange2 = (event) => {
        setSelectValue2(event.target.value);
    };

    React.useEffect(() => {
        setAnswerValue(`${selectValue1}-${selectValue2}`);
      }, [selectValue1, selectValue2]);

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
                    <SelectBox labelName={label1} labelId="valueOne" optionArray={array1} handleChange={handleChange1} selectValue={selectValue1} />
                    <SelectBox labelName={label2} labelId="valueTwo" optionArray={array2} handleChange={handleChange2} selectValue={selectValue2} />
                    <Button variant="outlined" onClick={checkAnswer}>Check the answer!</Button>
                </Stack>
                {incorrectValue && <p>Incorrect Guesses so far: {incorrectValueList}</p>}
            </div>
        )
    }

export default TwoValueBox;