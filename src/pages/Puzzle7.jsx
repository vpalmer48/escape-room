import React from 'react';
import ThreeDigitBox from '../components/ThreeDigitBox';
import HintBox from '../components/HintBox';

function Puzzle7() {

    const hint1 = "Looking at the picture, it seems like the cruise ship in the chip fits perfectly over the images on the printed page.";
    const hint2 = "Tracing AROUND the chip after aligning the ship on the picture seems to reveal some slightly overlapping numbers";
    const hint3 = "I don't have a third clue. I feel like the other two are pretty straightforward."
    const solution = "126";

        return (
            <div>
                <h2>Puzzle 7: What room are we?</h2>
                <main>
                    <p>You're finally on the cruise ship! And it's beautiful!!</p>
                    <p>You want to grab your room key and settle in for the afternoon before it's time for dinner </p>
                    <p>You ask Victoria for the room number and once again, she instead gives you a riddle </p>
                    <p> this time the riddle is in the form of a picture with cruise ships + a little circle with a cruise ship cutout </p>
                    <p>She says "This time it's on purpose. I wanted to help you find your way AROUND the ship"</p>
                    <p> With that fun little pun, what door do you want to try? </p>
                    < ThreeDigitBox correctAnswer="126" />
                    < HintBox hint1={hint1} hint2={hint2} hint3={hint3} solution={solution}/>
                </main>
            </div>
        )
    }

export default Puzzle7;