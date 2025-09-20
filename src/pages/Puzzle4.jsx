import React from 'react';
import ThreeDigitBox from '../components/ThreeDigitBox';
import HintBox from '../components/HintBox';

function Puzzle4() {

    const hint1 = "Ask Victoria for the crossword solution if you cannot solve all of the grey boxes on the crossword; Not all are numbers";
    const hint2 = "Using the values in the grey boxes, follow the instructions in the clue to calculate the numbers you'll need to enter.";
    const hint3 = "1st digit: half of (6*7+8)/5 = 5; 2nd digit = (11-10) - (x)^0 = 0; 3rd digit = 4^3/2 +1 = 9"
    const solution = "509";

        return (
            <div>
                <h2>Puzzle 4: Unlocking the Rental Car App</h2>
                <main style={{ display: 'flex', flexDirection: 'column',  alignItems: 'center' }}>
                    <p>In an effort to provide a 2nd layer of security, Avis now allows users to input personal hints to guess a randoom pin.</p>
                    <p>These hints are arranged into a crossword with highlighted letters to allow users to get their 3 digit pin upon crossword completion. </p>
                    <p> While you're sitting bored on the plan anyways, you decide to try to finish the crossword puzzle so you can get the car immediately.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', width: '750px' }}>
                        <p>1st Digit: (5) of ((20)*(83)+(4681))/73</p>
                        <p>2nd Digit: ((18)-(reverse of 62)) - x^(35) </p>
                        <p>3rd Digit: sqrt((76)^(48)) + (70)</p>
                    </div>
                    < ThreeDigitBox correctAnswer="509" />
                    < HintBox hint1={hint1} hint2={hint2} hint3={hint3} solution={solution}/>
                </main>
            </div>
        )
    }

export default Puzzle4;