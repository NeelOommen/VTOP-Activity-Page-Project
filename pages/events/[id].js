import { supabase } from "../../utils/supabaseClient";
import { useRouter } from "next/router";
import BlurImage from "../../components/BlurImage";
import CommentComponent from "../../components/CommentComponent";
import { useState } from "react";

export async function getServerSideProps(context){
    
    const { data: imageData } = await supabase
    .from('images')
    .select('*')
    .order('id');

    const { data: dateData } = await supabase
    .from('events')
    .select('*')
    .eq('eventName',context.query.id);

    const { data: commentData } = await supabase
    .from('comments')
    .select('*')
    .eq('eventName', context.query.id) 

    return{
        props: {
            images: imageData,
            dateInfo: dateData[0],
            comments: commentData,
            event_name: context.query.id,
        },
    }
}

export default function eventPage({ images,dateInfo,comments,event_name }) {

    const router = useRouter();
    const { id } = router.query;
    const [comm, setComm] = useState('');

    const addComment = async (comment_text) => {
        const { error } = await supabase
        .from('comments')
        .insert({comment_body: comment_text, eventName: event_name})
    }

    return (
        <div className="bg-mainColor overflow-y-clip">
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
                <div className="h-screen columns-2 w-full">
                    <div className="relative float-left mx-1 left-0 w-[750px] h-screen py-2 sm:py-2 mt-6 overflow-y-auto">
                        <div className='relative py-1 rounded-2xl w-fit bg-highlighter hover:bg-blueAccent2 mb-2 mt-4 mx-4 transition duration-300'>    
                            <div className='text-whiteAlternate text-4xl font-montserrat font-bold transition duration-300 mt-2 mx-4'>{id}</div>
                                <div className='text-whiteAlternate text-2xl font-montserrat mt-2 mx-4 p-2 transition duration-300'>
                                    Hosted on: {dateInfo.eventDate}, by&nbsp;
                                <a href={"/clubs/" + dateInfo.clubName} className="font-bold text-linkHighlight hover:text-linkActiveHighlight transition duration-300">
                                    {dateInfo.clubName}
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
                            {images.map((image) => (
                                <BlurImage key={image.id} image={image} />
                            )
                            )
                            }
                        </div>
                    </div>
                    <div className="left-1/2 float-left mt-6 py-2 ml-4 overflow-y-auto w-[750px] overflow-x-clip">
                        <div className='text-whiteAlternate text-4xl font-montserrat font-bold transition duration-300 mt-2'>Comments</div>
                        <form className="my-4">
                            <input type="text" className="w-[500px] bg-blueAccent1 text-white pr-4" value={comm}
                            onChange={(e)=>{
                                setComm(e.target.value);
                            }}/>
                            <button className="bg-whiteAlternate rounded-lg inline-block my-4 p-2 ml-4 text-blueAccent2" onClick={() => addComment(comm)}>Post Comment!</button>
                        </form>
                        {comments.map((comment) => (
                            <CommentComponent key={comment.id} comment_info={comment}/>
                        )
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

