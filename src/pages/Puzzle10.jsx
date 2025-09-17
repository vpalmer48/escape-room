import React from 'react';
import ThreeDigitBox from '../components/ThreeDigitBox';
import HintBox from '../components/HintBox';

function Puzzle10() {
    const hint1 = "I love an Original Broadway Cast recording of a show I've just seen, or sometimes an Original London Cast. Maybe you can find one on Spotify";
    const hint2 = "On the official recording of &Juliet on Spotify, if you go to the timestamps next to the letters, are there any repeating words or sounds?";
    const hint3 = "Once you have the word associated with each letter, remember the name of the play. AND Juliet. Use that to order the numbers."
    const solution = "421";
        return (
            <div>
                <h2>Puzzle 10: Dinner and a show? </h2>
                <main>
                    <p>After dinner, you head to the theater to see "& Juliet"</p>
                    <p> Victoria described the musical as a "Jukebox musical" where they cover a bunch of songs</p>
                    <p> You watch the show and love it! However, when you get back to your room, you notice Victoria marked up the program.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', width: '750px' }}>
                        <p>I Want it That Way --- D-0:13, N-0:29 N-0:34, D-1:06, N-1:11</p>
                        <p>...Baby One More Time --- D-1:20</p>
                        <p>Show Me the Meaning of Being Lonely --- A-0:12</p>
                        <p>Show Me Love --- N-0:15,</p>
                        <p>Blow --- D-0:19</p>
                        <p>Teenage Dream/Break Free --- A-1:06, A-1:11</p>
                        <p>It's my life --- A-0:09</p>
                    </div>
                    <p> When you ask her about it, she shows you the safe and says, "I hid one last surprise for you in here." </p>
                    <p> Guess the code and open the safe to get your anniversary present</p>
                    
                    < ThreeDigitBox correctAnswer="421" />
                    < HintBox hint1={hint1} hint2={hint2} hint3={hint3} solution={solution}/>
                </main>
            </div>
        )
    }

export default Puzzle10;