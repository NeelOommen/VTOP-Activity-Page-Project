export default function EventCard({ clubName, eventName, evDate }){
    return(
        <a href={'/events/'+eventName}>
            <div className='inline-block bg-slate-900 h-[400px] w-[600px] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-2xl p-4 mx-8 my-8 transform hover:scale-110 transition duration-300'>
              <div className='mt-4 font-montserrat text-white py-4'>
                <div className='relative p-2 rounded-2xl w-fit bg-blueAlternate1 my-4'>
                  <div className='font-bold text-6xl'>{eventName}</div>
                </div>
                <div className='relative p-2 rounded-2xl w-fit bg-gold my-4'>
                  <div className="text-4xl">{clubName}</div>
                </div>
                <div className='relative p-2 rounded-2xl w-fit bg-green my-4'>
                  <div className="text-4xl">{evDate}</div>
                </div>
              </div>
            </div>
        </a>
    );
}