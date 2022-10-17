export default function ClubCard({ clubName, clubText }){
    return(
        <a href={'/clubs/' + clubName}>
            <div className='inline-block bg-black h-[400px] w-[600px] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-2xl p-4 mx-8 transform hover:scale-110 transition duration-300 my-4'>
              <span className='text-whiteAlternate font-montserrat font-bold text-6xl'>{clubName}</span>
              <div className='mt-4 font-montserrat text-white'>
                {clubText}
              </div>
            </div>
        </a>
    );
} 