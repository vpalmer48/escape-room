import React from 'react';
import ThreeDigitBox from '../components/ThreeDigitBox';
import HintBox from '../components/HintBox';

function Puzzle2() {
    const hint1 = "Thinking in terms of a map, follow the directions to identify what number is formed. They may not be vertical. Pull out a map if needed";
    const hint2 = "It's a straight line from Denver to Philly, Then a round curve to get to the places on our road trip. It's not a 6.";
    const hint3 = "I don't have another hint unfortunately :(";
    const solution = "981";

        return (
            <div>
                <h2>Puzzle 2: What's the PIN for the cruise app?</h2>
                <main>
                    <p>"To help me remember the pin, I made up some riddles about trips we've gone on," Victoria says</p>
                    <p>1) When you visited me for Labor Day Weekend, you flew from DEN to PHL, through NY to North NH, back down through CT and NJ before driving back to PHL. </p>
                    <p>2) When we did our trip to Yellowstone, we did a trip around both the North and South loops. </p>
                    <p>3) For most of our trips, we fly from DEN to the destination and straight back. </p>
                    <p> Can you try the pin to make sure it works in the app? </p>
                    < ThreeDigitBox correctAnswer="981" />
                    < HintBox hint1={hint1} hint2={hint2} hint3={hint3} solution={solution}/>
                </main>
            </div>
        )
    }

export default Puzzle2;