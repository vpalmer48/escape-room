import React from 'react';
import ThreeDigitBox from '../components/ThreeDigitBox';
import HintBox from '../components/HintBox';

function Puzzle9 () {
    const hint1 = "To start, you have 3 equations which is what's necessary to solve for 3 variables. Solve for cocktails, pastries, and lobster first. Then combine them until you get 45.";
    const hint2 = "Cocktail = 7, Pastry = 4, and lobster = 10. Since the numbers cannot be more than 4, I'd write out each option until you exceed the count.";
    const hint3 = "By doing the math, you'll find out the there is only one combination where you can get 48 exactly. 2*7+2*4+2*10 = 42 which is 6 away from 48; And 10 -4 = 6... "
    const solution = "213";
        return (
            <div>
                <h2>Puzzle 9: What do I want to eat?</h2>
                <main>
                    <p>As we sit down at the all-inclusive dinner, the waiter tells you that you get a $48 credit. </p>
                    <p> Of course, as with the theme of this cruise, instead of giving you the price a la carte, you instead get a list of price combinations </p>
                    <p> Using the following combinations, what would you be able to get with $40 without going over or under </p>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', width: '750px' }}>
                        <p>2 cocktails + 2 pastries = 22</p>
                        <p> 2 cocktails + 1 pastry + 2 lobsters = 38</p>
                        <p> 4 cocktails + 1 lobster = 38</p>
                    </div>
                    <p> You have to get at least one of each but you can't get more than 4 of anything.</p>
                    <p>Format your answer as number of cocktails, number of pastries, and number of lobster </p>
                    < ThreeDigitBox correctAnswer="213" />
                    < HintBox hint1={hint1} hint2={hint2} hint3={hint3} solution={solution}/>
                </main>
            </div>
        )
    }

export default Puzzle9;