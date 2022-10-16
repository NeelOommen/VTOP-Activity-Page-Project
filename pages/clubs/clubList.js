import ClubCard from "../../components/ClubCard";
import { supabase } from "../../utils/supabaseClient";

export async function getStaticProps(){

    const {data: clubList} = await supabase
    .from('clubs')
    .select('*');

    return{
        props: {
            clubs: clubList,
        },
    }
}

export default function eventList({ clubs }) {
    return(
        <div className="bg-mainColor">
            <nav className='p-4 mb-10'>
                <span className='text-whiteAlternate hover:text-blueAlternate1 text-4xl font-montserrat font-bold float-left transition duration-300'>VIT Vellore Events</span>
                <ul className='text-whiteAlternate font-montserrat float-left text-2xl m-1.5 ml-6'>
                  <li className='float-left ml-3 mr-3'><a href='/events/eventList' className='hover:text-blueAlternate1 transition duration-300'>Events</a></li>
                </ul>
            </nav>
            <div className="bg-bg-1 h-full w-full py-4 bg-fixed bg-cover overflow-hidden grid grid-cols-2 px-8">
                {
                    clubs.map((club) => (
                        <ClubCard key={club.id} clubName={club.clubName} clubText={club.clubText}/>
                    ))
                }
            </div>
        </div>
    );
}