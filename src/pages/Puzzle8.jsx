import React from 'react';
import TwoValueBox from '../components/TwoValueBox';
import HintBox from '../components/HintBox';

function Puzzle8() {

    const hint1 = "Most letters start by addressing the inhabitants in the room. Using that, can you solve for some other letters?";
    const hint2 = "If the letter starts with 'DEAR MATTHEW AND VICTORIA', what can you solve for";
    const hint3 = "As you translate the itinerary, look for what time dinner is scheduled for. That will be your answer."
    const solution = "06-55";

    const hours=["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const minutes=["00","05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
        return (
            <div>
                <h2>Puzzle 8: What time is dinner?</h2>
                <main>
                    <p>You settle into your room. Finally!</p>
                    <p> You look around the room for the daily itinerary. </p>
                    <p> You're looking for the time you can go get dinner. You find something that looks like a letter. </p>
                    <p> Unfortunately, it looks like the whole page is in some kind of code instead of normal letters.</p>
                    <p> Time to parse the agenda so you can make sure you don't miss anything fun! </p>
                    < TwoValueBox correctAnswer="06-55" array1={hours} array2={minutes} label1="Hour" label2="Minute"/>
                    < HintBox hint1={hint1} hint2={hint2} hint3={hint3} solution={solution}/>
                </main>
            </div>
        )
    }

export default Puzzle8;