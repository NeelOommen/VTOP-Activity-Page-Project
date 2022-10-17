import { supabase } from "../../utils/supabaseClient";
import { useRouter } from "next/router";
import BlurImage from "../../components/BlurImage";

export async function getServerSideProps(context){
    
    const { data: imageData } = await supabase
    .from('images')
    .select('*')
    .order('id');

    const { data: dateData } = await supabase
    .from('events')
    .select('*')
    .eq('eventName',context.query.id);

    return{
        props: {
            images: imageData,
            dateInfo: dateData[0],
        },
    }
}

export default function eventPage({ images,dateInfo }) {

    const router = useRouter();
    const { id } = router.query;

    return (
        <div className="bg-mainColor">
             <nav className='p-4 mb-10'>
                <a href="/">
                    <span className='text-whiteAlternate hover:text-blueAlternate1 text-4xl font-montserrat font-bold float-left transition duration-300'>VIT Vellore Events</span>
                </a>
                <ul className='text-whiteAlternate font-montserrat float-left text-2xl m-1.5 ml-6'>
                    <li className='float-left ml-3 mr-3'>
                        <a href='/events/eventList' className='hover:text-blueAlternate1 transition duration-300'>Back</a>
                    </li>
                </ul>
            </nav>
            <div className="h-full overflow-x-hidden bg-bg-3 bg-fixed bg-cover overflow-y-clip">
                <div className='relative py-1 rounded-2xl w-fit bg-highlighter hover:bg-blueAccent2 mb-2 mt-4 mx-4 transition duration-300'>    
                    <div className='text-whiteAlternate text-4xl font-montserrat font-bold transition duration-300 mt-2 mx-4'>{id}</div>
                    <div className='text-whiteAlternate text-2xl font-montserrat mt-2 mx-4 p-2 transition duration-300'>
                        Hosted on: {dateInfo.eventDate}, by&nbsp;
                        <a href={"/clubs/" + dateInfo.clubName} className="font-bold text-linkHighlight hover:text-linkActiveHighlight transition duration-300">
                            {dateInfo.clubName}
                        </a>
                    </div>
                </div>
                <div className="max-w-full mx-auto py-2 px-4 sm:py-2 mt-6">
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
                        {images.map((image) => (
                            <BlurImage key={image.id} image={image} />
                        )
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

