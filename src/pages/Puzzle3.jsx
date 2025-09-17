import React from 'react';
import TwoValueBox from '../components/TwoValueBox';
import HintBox from '../components/HintBox';

function Puzzle3() {
    const timeOfDeparture=["1415", "1440", "1500", "1530", "1550"];
    const gate=["2","3","4","5","6"];

    const hint1 = "This is a logic grid puzzle. Try lining this up so that you have two grids along the horizontal (destination, gate) + two grids along the vertical (time, gate)";
    const hint2 = "If you'd like a visual: https://www.sporcle.com/games/Smeddlesboy/logic5; Tampa = Barcelona, Miami = New York, Orlando = Zurich, Paris == Fort Lauderdale, Stockholm = Key West";
    const hint3 = "Based on clue 1, how many times are exactly 20 minutes apart. Use that to start the puzzle. Similarly, clue 3 maps time to flight. From there, you know what flight is the last flight which answers clue 5. Continue like that!"
    const solution = "1415-4";

        return (
            <div>
                <h2>Puzzle 3: Who are we flying?</h2>
                <main style={{ display: 'flex', flexDirection: 'column',  alignItems: 'center' }}>
                    <p>Now that you've found your passports and driven to the airport, it's time to board your plane.</p>
                    <p> But which plane is your plane?</p>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', width: '750px' }}>
                        <p>1. The Miami flight is leaving exactly 20 minutes after the flight that left from gate 5</p>
                        <p>2. The gate number of the Orlando flight is higher than the gate number of the 1415 flight.</p>
                        <p>3. The gate number of the 1415 flight is higher than the gate number of the 1500 to Fort Lauderdale </p>
                        <p>4. The Tampa flight leaves from gate 4, and doesn't leave at 1440</p>
                        <p>5. The last two flights to leave are Key west flight and the flight from gate 3.</p>
                    </div>
                    <p> If we're flying into Tampa, what time are we leaving and what gate?</p>
                    < TwoValueBox correctAnswer="1415-4" array1={timeOfDeparture} array2={gate} label1="Gate" label2="Time"/>
                    < HintBox hint1={hint1} hint2={hint2} hint3={hint3} solution={solution}/>
                </main>
            </div>
        )
    }

export default Puzzle3;