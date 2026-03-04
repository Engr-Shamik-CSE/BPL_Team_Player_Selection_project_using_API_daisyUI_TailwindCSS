// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
// import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import { Suspense, useState } from 'react';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';


const playersPromise = fetch('./playersData.json')
  .then(res => res.json());

function App() {

  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(8000000);


  return (
    <>
      <Navbar
        availableBalance={availableBalance}
      ></Navbar>

      <div className='w-11/12  mx-auto lg:w-10/12  flex justify-between items-center  pt-5'>
        <h1 className='font-bold text-lg'>Available Players</h1>
        <div>
          <button onClick={() => setToggle(true)}
            className={`px-4 py-2 border border-gray-300 rounded-l-2xl border-r-0 ${toggle === true ? "bg-[#E7FE29] font-bold" : ""}`}>Available</button>

          <button onClick={() => setToggle(false)}
            className={`px-4 py-2 border border-gray-300 rounded-r-2xl border-l-0 ${toggle === false ? "bg-[#E7FE29] font-bold" : ""}`}>Selected <span> (0)</span></button>
        </div>
      </div>

      {
        toggle === true ? <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
          <AvailablePlayers
            playersPromise={playersPromise}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            ></AvailablePlayers>
        </Suspense>
          :
          <SelectedPlayers></SelectedPlayers>
      }




    </>
  )
}

export default App





