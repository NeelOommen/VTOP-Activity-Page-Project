import { useState } from "react";

export default function PastEvent(){
    const [evNameForm, setEvName] = useState('');
    const [clubNameForm, setClubName] = useState('');
    const [dateForm, setDate] = useState('');
    const [venueForm, setVenue] = useState('');

    return(
        <div className="w-auto h-screen clear-both">
            <div className='text-whiteAlternate hover:text-blueAlternate1 mx-4 text-4xl font-montserrat mt-2 font-bold transition duration-300'>Add Past Event Details</div>
            <form className="px-4">
                <label for='evNameElement' className="text-whiteAlternate hover:text-blueAlternate1 text-xl mt-2 font-montserrat transition duration-300 block">Event Name</label>
                <input
                    type='text'
                    id='evNameElement'
                    name='evNameElement'
                    className="w-[500px] bg-blueAccent1 block text-white pr-4"
                    value={evNameForm}
                    onChange={(e)=>{
                        setEvName(e.target.value);
                    }}
                />
                <label for='clubNameElement' className="block text-whiteAlternate hover:text-blueAlternate1 text-xl mt-2 font-montserrat transition duration-300">Club Name</label>
                <input
                    type='text'
                    id='clubNameElement'
                    name='clubNameElement'
                    className="w-[500px] bg-blueAccent1 block text-white pr-4"
                    value={clubNameForm}
                    onChange={(e)=>{
                        setClubName(e.target.value);
                    }}
                />
                <label for='clubNameElement' className="block text-whiteAlternate hover:text-blueAlternate1 text-xl mt-2 font-montserrat transition duration-300">Event Date (YYYY-MM-DD)</label>
                <input
                    type='text'
                    id='clubNameElement'
                    name='clubNameElement'
                    className="w-[500px] bg-blueAccent1 block text-white pr-4"
                    value={dateForm}
                    onChange={(e)=>{
                        setDate(e.target.value);
                    }}
                />
                <label for='clubNameElement' className="block text-whiteAlternate hover:text-blueAlternate1 text-xl mt-2 font-montserrat transition duration-300">Venue</label>
                <input
                    type='text'
                    id='clubNameElement'
                    name='clubNameElement'
                    className="w-[500px] bg-blueAccent1 block text-white pr-4"
                    value={venueForm}
                    onChange={(e)=>{
                        setVenue(e.target.value);
                    }}
                />
                <button className="bg-whiteAlternate rounded-lg my-4 p-2 text-blueAccent2 hover:bg-blueAccent2 hover:text-whiteAlternate transition duration-300 block">Add Event Details</button>
            </form>
        </div>
    );
}