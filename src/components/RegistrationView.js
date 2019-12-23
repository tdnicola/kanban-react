import React from 'react';

export default ({
    toggleLogin,
    toggleRegistrationView,
}) => (



    <div className='loginView'>
                <div className="informationView">
                    <h2>Why Register? Because Below homie</h2>
                    Yar Pirate Ipsum
                    Long boat flogging ballast bring a spring upon her cable belay grog blossom no prey, no pay topgallant nipperkin overhaul. Fathom killick hands heave to Chain Shot spyglass matey cog yardarm snow. Lugger heave down sloop prow hempen halter warp jib hardtack careen dead men tell no tales.

                    Cog draft careen line provost cable splice the main brace spanker black spot grog blossom. No prey, no pay fire in the hole gunwalls starboard yardarm ballast grog blossom Buccaneer marooned gally. Strike colors smartly spike galleon warp lookout yawl bilge schooner ho.
                </div>

                <div className="credentials">
                    <input placeholder='email'/>
                    <br></br>
                    <input placeholder='password'/>
                    <br></br>

                    Please Login or Register

                    <button onClick={e => toggleLogin(e)}>Login</button>
                    <button onClick={e => toggleRegistrationView(e)}>Register</button>
                </div>

            </div>
)