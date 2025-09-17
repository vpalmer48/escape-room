import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import HintBox from '../components/HintBox';
import LightTheDots from '../components/LightTheDots';

function Puzzle5() {

    const hint1 = "What order are the lights on a stoplight? Use that as a clue to determine which numbers/letters are correct as well as the order.";
    const hint2 = "Clicking thorugh the buttons, how many of the outputs are Red, Yellow, or Green. How many are real numbers? Use that as a hint to the order";
    const hint3 = "Only 3 letters map to a red, yellow, or green number. Use those 3 letters and the corresponding 3 letters to put together the license plate. remember stoplights go red, yellow, green."
    const solution = "683-JKP";

        const correctAnswer="683-JKP"
        const [selectValue1, setSelectValue1] = React.useState('000');
        const [selectValue2, setSelectValue2] = React.useState('AAA');

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
            <div>
                <h2>Puzzle 5: Which is our car?</h2>
                <main>
                    <p>You unlock the app and see that your car is assigned and ready for pickup</p>
                    <p>Luckily, you're Avis Preferred, so you get to skip the super duper long line and grab your car</p>
                    <p>Except, as you look at the grid, you see next to your name "Stoplight Test" instead of a spot number.</p>
                    <p> Clicking in the app, a grid appears with a button for each letter in the alphabet. </p>
                    <p> Clicking on the buttons seems to make something appear below. </p>
                    <p> Use this menu to identify what the license plate on your car is </p>
                    < LightTheDots />
                    {/* Make a UI where there are 26 buttons that then cause "LEDs" to light up RGB */}
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="NumberBox" label="Number" variant="outlined" value={selectValue1} onChange={handleChange1} />
                        <TextField id="LetterBox" label="Letters" variant="outlined" value={selectValue2} onChange={handleChange2} />
                        <Button variant="outlined" onClick={checkAnswer}>Check the answer!</Button>
                    </Box>
                    {incorrectValue && <p>Incorrect Guesses so far: {incorrectValueList}</p>}
                    < HintBox hint1={hint1} hint2={hint2} hint3={hint3} solution={solution}/>
                </main>
            </div>
        )
    }

export default Puzzle5;