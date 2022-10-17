import { useRouter } from "next/router";
import BlurImage from "../../components/BlurImage";
import { supabase } from "../../utils/supabaseClient";

export async function getServerSideProps(context){
    
    const { data: imageList} = await supabase
    .from('images')
    .select('*');

    const { data: clubData} = await supabase
    .from('clubs')
    .select('*')
    .eq('clubName', context.query.id);

    const {data: upcomingList} = await supabase
    .from('upcomingEvent')
    .select('eventName, dateOn, venue')
    .eq('clubName', context.query.id);

    const {data: pastEventsList} = await supabase
    .from('events')
    .select('*')
    .eq('clubName', context.query.id);

    return{
        props: {
            images: imageList,
            clubInfo: clubData[0],
            upcomingEvents: upcomingList,
            oldEvents: pastEventsList,
        },
    }
}

export default function clubPage({ images, clubInfo, upcomingEvents, oldEvents }){

    const router = useRouter();
    const { id } = router.query;

    return(
        <div className="bg-mainColor h-full fixed">
            <nav className='p-2 mb-10'>
                <ul className='text-whiteAlternate font-montserrat float-left text-2xl m-1.5 ml-6'>
                  <li className='float-left ml-3 mr-3'><a href='/clubs/clubList' className='hover:text-blueAlternate1 transition duration-300'>Back</a></li>
                </ul>
                <span className='text-whiteAlternate hover:text-blueAlternate1 text-4xl font-montserrat font-bold float-left transition duration-300'>{clubInfo.clubName}</span>
            </nav>
            <div className="grid grid-cols-2 bg-bg-3 py-4 px-4 bg-cover">
                <div className="overflow-y-scroll h-[650px] bg-black rounded-3xl mx-4 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
                    <div className='text-whiteAlternate text-2xl font-montserrat float-left m-2 p-2 transition duration-300'>
                          {clubInfo.mainText} 
                    </div>
                    <div>
                        <span className='text-whiteAlternate hover:text-gold text-2xl font-montserrat font-bold mx-8 transition duration-300'>Social Media</span>
                        <div className='text-whiteAlternate hover:text-blueAlternate1 text-2xl font-montserrat m-6 p-2 transition duration-300'>
                          <a href={clubInfo.instagram} target="_blank">Instagram</a> 
                        </div>
                        <div className='text-whiteAlternate hover:text-blueAlternate1 text-2xl font-montserrat m-6 p-2 transition duration-300'>
                          Email: {clubInfo.email}
                        </div>
                    </div>
                    <div>
                        <span className='text-whiteAlternate hover:text-gold text-2xl font-montserrat font-bold mx-8 transition duration-300'>Upcoming Events</span>
                        {upcomingEvents.map((ev) => (
                            <a href="https://vtop.vit.ac.in/vtop/login" target="_blank">
                                <div className='text-whiteAlternate hover:text-blueAlternate1 text-2xl font-montserrat m-6 p-2 transition duration-300'>{ev.eventName}, on {ev.dateOn}, at {ev.venue}.</div>
                            </a>
                        ))}
                    </div> 
                    <div>
                        <span className='text-whiteAlternate hover:text-gold text-2xl font-montserrat font-bold mx-8 transition duration-300'>Past Events</span>
                        {oldEvents.map((ev) => (
                            <a href={"/events/" + ev.eventName}>    
                                <div className='text-whiteAlternate hover:text-blueAlternate1 text-2xl font-montserrat m-6 p-2 transition duration-300'>{ev.eventName}, on {ev.eventDate}, at {ev.venue}.</div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="overflow-y-scroll bg-black overflow-x-clip h-[650px] mr-8 mb-8 px-24 py-4 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
                        {images.map((image) => (
                            <BlurImage key={image.id} image={image}/>
                        ))}
                </div>
            </div>
        </div>
    );
}