import React from 'react';

export default ({ 
    loginView,
    toggleLogin
}) => (

    <div className='loginView'>
        
            Please Login or Register
            <button onClick={e => toggleLogin(e)}>Login</button>

    </div>
)