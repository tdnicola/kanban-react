import React from 'react';

export default ({ 
    loginView,
    toggleLogin
}) => (

    <div className='loginView'>

        <div className="informationView">
            Paroxysm of global death take root and flourish finite but unbounded worldlets circumnavigated rich in mystery. Extraplanetary made in the interiors of collapsing stars the sky calls to us muse about the ash of stellar alchemy cosmic fugue? Made 
            in the interiors of collapsing stars the sky calls to us courage of our questions gathered by gravity network of wormholes vastness is bearable only through love? Kindling the energy hidden in matter the sky calls to us something incredible is 
            waiting to be known descended from astronomers dispassionate extraterrestrial observer kindling the energy hidden in matter and billions upon billions upon billions upon billions upon billions upon billions upon billions.
        </div>

        <div className="credentials">
            <input placeholder='email'/>
            <br></br>
            <input placeholder='password'/>
            <br></br>

            Please Login or Register
            <button onClick={e => toggleLogin(e)}>Login</button>
        </div>

    </div>
)