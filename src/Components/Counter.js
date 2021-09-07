import {useState} from 'react';

function Counter() {

    const[blueWins, changeBlueWins] = useState(0)
    const[redWins, changeRedWins] = useState(0)

    return(

        <div>

            Blue has won {blueWins} times
            <br/>
            Red has won {redWins} times
            <br/> 

        <button onClick = {() => changeBlueWins(blueWins+1)}>

            Blue wins

        </button>
        <br/>
        <button onClick = {() => changeRedWins(redWins+1)}>

            Red wins

        </button>
        </div>


    );

}

export default Counter;
