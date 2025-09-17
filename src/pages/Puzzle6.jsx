import React from 'react';
import ThreeDigitBox from '../components/ThreeDigitBox';
import HintBox from '../components/HintBox';

function Puzzle6() {

    const hint1 = "Look for something in the box that looks like a hotel bed. Try putting the clothes you see on the bed. Notice anything weird?";
    const hint2 = "There are two categories: Type of clothing item + color. However, only one of these consistently follows the rules. Count the number of items in each group";
    const hint3 = "The bed is magnetic + certain clothing items are magnetic as well. With those magnetic clothes, count the number of each color that stick."
    const solution = "642";

        return (
            <div>
                <h2>Puzzle 6: One day to relax in town before the cruise! Which dock are we?</h2>
                <main>
                    <p>After a relatively uneventful drive to the city of Port Canaveral, you arrive at your hotel.</p>
                    <p>You pull out your suitcase and ask Victoria, "Which dock are we going to tomorrow?" </p>
                    <p>Sheepishly, she says, "I can't remember of the top of my head. BUT I know that I had packaged my suitcase to help me remember!"</p>
                    <p> You ask Victoria for any clues and she says "All I know was I liked that the numbers were in descending order. You know, biggest first." </p>
                    <p> With a chuckle only a person on vacation can manage in a situation like this, you start trying to figure out the dock number. </p>
                    < ThreeDigitBox correctAnswer="642" />
                    < HintBox hint1={hint1} hint2={hint2} hint3={hint3} solution={solution}/>
                </main>
            </div>
        )
    }

export default Puzzle6;