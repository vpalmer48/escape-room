import React from 'react';

class Puzzle3 extends React.Component {

    render() {
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
                    
                    {/* New York = Miami */}
                    {/* Zurich = Orlando
                    Paris = Fort Lauderdale
                    Barcelona = Tampa
                    Stockholm = Key West */}

                    <p> If we're flying into Tampa, what time are we leaving and what gate?</p>
                    {/* https://www.sporcle.com/games/Smeddlesboy/logic5 */}
                </main>
            </div>
        )
    }
}

export default Puzzle3;