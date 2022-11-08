export default function CommentComponent({ comment_info }){
    return(
        <div className="bg-black w-fit rounded-3xl p-1 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 my-4 pr-4">
            <div className='text-whiteAlternate text-lg font-montserrat mt-2 ml-4'>
                        Posted on: {comment_info.comment_date.slice(0,10)}
            </div>
            <div className='text-whiteAlternate text-xl font-montserrat font-bold ml-4 mb-4'>
                        {comment_info.comment_body}
            </div>
        </div>
    );
}