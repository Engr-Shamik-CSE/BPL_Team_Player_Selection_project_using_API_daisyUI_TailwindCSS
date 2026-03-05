import React from 'react';
import { Trash2 } from 'lucide-react';
const SelectedCard = ({selectedPlayer, removePlayer }) => {
    
    const handleRemove = ()=>{
        removePlayer(selectedPlayer);
    }

    return (
        <div>
            <div className='flex m-3 justify-between items-center p-3 pr-8 border rounded-4xl border-gray-300'>
                <div className='flex items-center gap-5'>
                    <img className='w-25 h-25  object-fill rounded-3xl' src={selectedPlayer.image} alt="" />
                    <div className='text-xs md:text-base'>
                        <p className='font-bold'>{selectedPlayer.name}</p>
                        <p>{selectedPlayer.battingStyle}</p>
                    </div>
                </div>
                <div>
                    <button onClick={handleRemove} className='hover:shadow-2xl'>
                        <Trash2 color="#8B0000" size={30} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SelectedCard;