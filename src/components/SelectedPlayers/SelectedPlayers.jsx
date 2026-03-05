import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';


const SelectedPlayers = ({purchashedPlayers, removePlayer }) => {
    // console.log("PurchaedPlayer Component",purchashedPlayers);
    return (
        <div>
            <div className='w-11/12 md:w-10/12  mx-auto border border-gray-100 rounded-4xl mt-5 p-5 '>
            {
                purchashedPlayers.map(selectedPlayer=><SelectedCard 
                    key={selectedPlayer.id}
                    selectedPlayer={selectedPlayer}
                    removePlayer={removePlayer}
                    ></SelectedCard>)
            }
            </div>
           
        </div>
    );
};

export default SelectedPlayers;