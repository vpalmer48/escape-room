import React from 'react';
import ThreeDigitBox from '../components/ThreeDigitBox';
import HintBox from '../components/HintBox';

function Puzzle1() {
    const hint1 = "Assembly the puzzle by putting together the states of the US. From there, look for any patterns that might match the clue's envelope.";
    const hint2 = "The colors of each letter in MAP correspond to colors of letters you'll see on the assembled map.";
    const hint3 = "The unscrambled letters on the assembled map that correspond to the color of the 'M' will be your first letter. Repeat for each letter.";
    const solution = "720";

        return (
            <div>
                <h2>Puzzle 1: Where are we going?</h2>
                <main style={{ display: 'flex', flexDirection: 'column',  alignItems: 'center' }}>
                    <p>Victoria hands you a bag of scraps. </p>
                    <p> "I think I wrote down the 3 digit cruise confirmation number on some of these scrap pieces of paper.</p>
                    <p> Can you piece them together and let me know what flight we should be on?"</p>
                    < ThreeDigitBox correctAnswer="720" />
                    < HintBox hint1={hint1} hint2={hint2} hint3={hint3} solution={solution}/>
                </main>
            </div>
        )
    }

export default Puzzle1;