import EventCard from "./eventCard";

export default function ClubEventScroll({ title }){
    return(
        <div>
            <div className='relative left-4 p-2 rounded-2xl w-[230px] bg-blueAlternate1 transform hover:scale-110 transition duration-300'>
                <span className='text-whiteAlternate font-montserrat text-4xl font-bold'>{ title }</span>
            </div>
            <div className='overflow-x-scroll overflow-y-hidden scrollbar-hide whitespace-nowrap relative'>
              <EventCard key={1} clubName={"something"}/>
              <EventCard key={2} clubName={"something"}/>
              <EventCard key={3} clubName={"something"}/>
              <EventCard key={4} clubName={"something"}/>
              <EventCard key={5} clubName={"something"}/>
              <EventCard key={6} clubName={"something"}/>
            </div>
        </div>
    );
}