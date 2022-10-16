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
            dateInfo: dateData,
        },
    }
}

export default function eventPage({ images,dateInfo }) {

    const router = useRouter();
    const { id } = router.query;

    return (
        <div className="bg-mainColor h-screen">
            <nav className='p-2 mb-10'>
                <ul className='text-whiteAlternate font-montserrat float-left text-2xl m-1.5 ml-6'>
                  <li className='float-left ml-3 mr-3'><a href='/' className='hover:text-blueAlternate1 transition duration-300'>Back</a></li>
                </ul>
                <span className='text-whiteAlternate hover:text-blueAlternate1 text-4xl font-montserrat font-bold float-left transition duration-300'>{id}</span>
            </nav>
            <div>
            <span className='text-whiteAlternate hover:text-blueAlternate1 text-2xl font-montserrat float-left m-6 p-2 transition duration-300'>Hosted on: {dateInfo[0].eventDate}</span>
            </div>
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24">
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {images.map((image) => (
                        <BlurImage key={image.id} image={image} />
                    )
                    )
                    }
                </div>
            </div>
        </div>
    );
}

