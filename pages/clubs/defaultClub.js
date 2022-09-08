import Head from 'next/head'

export default function defaultClub() {
    return (
        <div>
          <Head>
            <title>Club Page unavailable</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <div className='bg-mainColor w-full h-screen'>
                <div className='text-center p-12'>
                    <div className='text-blueAlternate1 font-montserrat text-6xl font-bold'>The club pages are currently unavailable.</div>
                    <br /><br />
                    <a href="/" className='font-montserrat text-2xl text-whiteAlternate hover:text-blueAlternate1 transition duration-300'>Return to home page</a>
                </div>
            </div>
          </main>
        </div>
    )
}