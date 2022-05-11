import React, {useState} from 'react';
import axios from "axios";

const JokeRandom = () => {

    const [joke, setJoke] = useState('');

    const getJoke = () => {
        axios.get('https://api.chucknorris.io/jokes/random')
            .then(response => {
                console.log(response.data.value)
                setJoke(response.data.value)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="jokeRandom">{joke}</div>
            <button onClick={getJoke}>ADD</button>
        </div>
    );
};

export default JokeRandom;