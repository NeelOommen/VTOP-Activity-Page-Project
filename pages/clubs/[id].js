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

    return{
        props: {
            images: imageList,
            clubInfo: clubData[0],
            upcomingEvents: upcomingList,
        },
    }
}

export default function clubPage({ images, clubInfo, upcomingEvents }){

    const router = useRouter();
    const { id } = router.query;

    return(
        <div className="bg-mainColor h-screen">
            <nav className='p-2 mb-10'>
                <ul className='text-whiteAlternate font-montserrat float-left text-2xl m-1.5 ml-6'>
                  <li className='float-left ml-3 mr-3'><a href='/' className='hover:text-blueAlternate1 transition duration-300'>Back</a></li>
                </ul>
                <span className='text-whiteAlternate hover:text-blueAlternate1 text-4xl font-montserrat font-bold float-left transition duration-300'>{clubInfo.clubName}</span>
            </nav>
            <div className="grid grid-cols-2 overflow-y-clip fixed">
                <div>
                    <div className='text-whiteAlternate text-2xl font-montserrat float-left m-6 p-2 transition duration-300'>
                          {clubInfo.clubText} 
                    </div>
                    <div>
                        <span className='text-whiteAlternate hover:text-gold text-2xl font-montserrat font-bold mx-8 transition duration-300'>Social Media</span>
                        <div className='text-whiteAlternate hover:text-blueAlternate1 text-2xl font-montserrat m-6 p-2 transition duration-300'>
                          <a href={clubInfo.instagram}>Instagram</a> 
                        </div>
                        <div className='text-whiteAlternate hover:text-blueAlternate1 text-2xl font-montserrat m-6 p-2 transition duration-300'>
                          Email: {clubInfo.email}
                        </div>
                    </div>
                    <div>
                        <span className='text-whiteAlternate hover:text-gold text-2xl font-montserrat font-bold mx-8 transition duration-300'>Upcoming Events</span>
                        {upcomingEvents.map((ev) => (
                            <div className='text-whiteAlternate hover:text-blueAlternate1 text-2xl font-montserrat m-6 p-2 transition duration-300'>{ev.eventName}, on {ev.dateOn}, at {ev.venue}.</div>
                        ))}
                    </div>
                </div>
                <div className="overflow-y-scroll bg-blueAlternate1 overflow-x-clip h-[650px] mr-8 mb-8 px-32 py-4 rounded-3xl">
                        {images.map((image) => (
                            <BlurImage key={image.id} image={image}/>
                        ))}
                </div>
            </div>
        </div>
    );
}