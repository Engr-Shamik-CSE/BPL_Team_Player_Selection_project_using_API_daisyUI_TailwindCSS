import { useState } from 'react';
import { User } from 'lucide-react';
import { Flag } from 'lucide-react';

const Player = ({player, setAvailableBalance, availableBalance }) => {
    console.log("player component is here", player);
    const [isSelected, setIsSelected] = useState(false);

    return (        
        <div className=''>
            {/* card design start*/}
            <div className="card bg-base-100 w-full shadow-sm transform hover:-translate-y-2 transition duration-300 ease-in-out hover:shadow-2xl">
                <figure className='p-7 pb-0 md:pb-7'>
                    <img className='rounded-lg w-full h-100 lg:h-140 object-cover border border-[#d4d4d4] hover:shadow-lg'
                        src={player.image}
                        alt="player image" />
                </figure>
                <div className="card-body">
                    {/* name  */}
                    <h2 className="card-title text-base md:text-2xl"> <span> <User className='w-5 h-5 rounded-3xl border-0' /> </span> {player.name}</h2>
                    {/* flag  */}
                    <div className='flex justify-between items-center pb-4 border-b border-base-300  text-xs md:text-sm'>
                        <div className='flex gap-2'>
                            <Flag className=' w-5 h-5 rounded-3xl border-0 text-[#989898]'/>
                            <span>{player.country}</span>
                        </div>
                        <div>
                            <button className="btn  text-xs md:text-md ">{player?.role}</button>
                        </div>

                    </div>
                    {/* rating  */}
                    <h2 className="text-sm md:text-sm font-semibold">rating {player?.rating}</h2>
                    {/* bowling and batting  */}
                    <div className='flex justify-between text-xs md:text-sm'>
                        <div>
                            <span className=' font-semibold'>{player?.battingStyle}</span>
                        </div>
                        <div>
                            <span className='  font-normal'>{player?.bowlingStyle}</span>
                        </div>
                    </div>
                    {/* price and choose player button  */}
                    <div className='flex justify-between items-center'>
                        <div>
                            <span className='text-xs md:text-sm  font-semibold'>Price: {player.price}</span>
                        </div>
                        <div>
                            <button 
                            disabled={isSelected} 
                            onClick={()=>{
                                if(availableBalance < player.price.split("USD").join("").split(",").join("")) 
                                    return alert("Your balance is low!!!")

                                setIsSelected(true)
                                setAvailableBalance(availableBalance - player.price.split("USD").join("").split(",").join("")) 
                            }} 
                            className="btn text-xs md:text-sm "> { isSelected===true ? "Selected":"Choose Player"}</button>
                        </div>
                    </div>
                    {/* end of price and choose player button  */}
                </div>
            </div>
            {/* card design end  */}
        </div>
    );
};

export default Player;