
import React from 'react';
import Notes from './Notes.js';


const Home = (props) => {
    const {showAlter}=props;
    return (
        <div> 
            <Notes showAlter={showAlter} />
        </div>
    )
}

export default Home
