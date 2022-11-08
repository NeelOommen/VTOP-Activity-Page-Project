import { useState } from "react";
import NewEvent from "../components/NewEvent";
import PastEvent from "../components/PastEvent";

export default function adminPage(){
    const [compState, setState] = useState(true);

    function setcomponent(comp){
      if(comp == 0){
        setState(true);
      }
      else{
        setState(false);
      }
    }

    return(
        <div className='bg-mainColor h-screen w-full'>
            <nav className='p-4 mb-10'>
            <span className='text-whiteAlternate hover:text-blueAlternate1 text-4xl font-montserrat font-bold float-left transition duration-300'>VIT Vellore Events</span>
            <ul className='text-whiteAlternate font-montserrat float-left text-2xl m-1.5 ml-6'>
              <li className='float-left ml-3 mr-3'><a href='/clubs/clubList' className='hover:text-blueAlternate1 transition duration-300'>Clubs</a></li>
              <li className='float-left ml-3 mr-3'><a href='/events/eventList' className='hover:text-blueAlternate1 transition duration-300'>Events</a></li>
            </ul>
            <a href='/' className='text-whiteAlternate hover:text-blueAlternate1 font-montserrat float-right text-2xl m-1.5 transition duration-300'>Back</a>
          </nav>
          <div className="bg-mainColor border-t-2 border-t-whiteAlternate">
            <div className="w-1/4 h-screen float-left border-r-2 border-r-whiteAlternate">
              <ul className='text-whiteAlternate font-montserrat text-2xl m-1.5 ml-6'>
                <li className='ml-3 mr-3 my-4 hover:text-blueAlternate1 transition duration-300'><button onClick={()=>{setcomponent(0)}}>Past Event</button></li>
                <li className='ml-3 mr-3 my-4 hover:text-blueAlternate1 transition duration-300'><button onClick={()=>{setcomponent(1)}}>Future Event</button></li>
              </ul>
            </div>
            <div className="w-3/4 h-screen float-left border-l-2 border-l-whiteAlternate">
              {
                compState?<PastEvent />:<NewEvent />
              }
            </div>
          </div>
        </div>
    );
}