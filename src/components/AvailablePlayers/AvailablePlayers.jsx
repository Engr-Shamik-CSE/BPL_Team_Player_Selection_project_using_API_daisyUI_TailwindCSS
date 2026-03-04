import React, { use } from 'react';
import Player from '../Player/Player';

const AvailablePlayers = ({ playersPromise, setAvailableBalance , availableBalance }) => {
    const players = use(playersPromise);
    console.log(players);
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-9 py-5'>

            {
                players.map( player=> <Player 
                    key={player.id}
                    player={player}
                    setAvailableBalance={setAvailableBalance} 
                    availableBalance = {availableBalance} ></Player>)
            }

        </div>
    );
};

export default AvailablePlayers;