import React from 'react';

class Puzzle5 extends React.Component {

    render() {
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
                    {/* Make a UI where there are 26 buttons that then cause "LEDs" to light up RGB */}
                </main>
            </div>
        )
    }
}

export default Puzzle5;