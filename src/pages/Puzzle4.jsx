import React from 'react';
import ThreeDigitBox from '../components/ThreeDigitBox';
import HintBox from '../components/HintBox';

function Puzzle4() {

    const hint1 = "This is a logic grid puzzle. Try lining this up so that you have two grids along the horizontal (destination, gate) + two grids along the vertical (time, gate)";
    const hint2 = "If you'd like a visual: https://www.sporcle.com/games/Smeddlesboy/logic5; Tampa = Barcelona, Miami = New York, Orlando = Zurich, Paris == Fort Lauderdale, Stockholm = Key West";
    const hint3 = "Based on clue 1, how many times are exactly 20 minutes apart. Use that to start the puzzle. Similarly, clue 3 maps time to flight. From there, you know what flight is the last flight which answers clue 5. Continue like that!"
    const solution = "1415-4";

        return (
            <div>
                <h2>Puzzle 4: Unlocking the Rental Car App</h2>
                <main>
                    <p>In an effort to provide a 2nd layer of security, Avis now allows users to input personal hints to guess a randoom pin.</p>
                    <p>These hints are arranged into a crossword with highlighted letters to allow users to get their 3 digit pin upon crossword completion. </p>
                    <p> While you're sitting bored on the plan anyways, you decide to try to finish the crossword puzzle so you can get the car immediately.</p>
                    {/* Make a crossword puzzle */}
                    < ThreeDigitBox correctAnswer="123" />
                    < HintBox hint1={hint1} hint2={hint2} hint3={hint3} solution={solution}/>
                </main>
            </div>
        )
    }

export default Puzzle4;