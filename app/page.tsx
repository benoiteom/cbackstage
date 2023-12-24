import Image from 'next/image'

function ImageWithBorders({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <div>
      <div className='absolute top-[-4px] left-[-4px] w-[40px] h-[40px] border-t border-l border-white' />
      <div className='absolute bottom-[-4px] right-[-4px] w-[40px] h-[40px] border-b border-r border-white' />
      <div className="p-2 rounded-sm drop-shadow-[0_0_0.3rem_#b1afaf70]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority
          className='rounded-md'
        />
      </div>
    </div>
  )
}

function EventCard({ name, description='', imageSrc='' }: { name: string, description?: string, imageSrc?: string }) {
  return (
    <div className='relative w-60'>
      <div className='absolute top-4 left-4 h-5 w-5 bg-orange-400 rounded-full blur-lg' />
      <div className='p-4 m-4 bg-[#ffffff90] rounded-xl drop-shadow-[0_0_0.3rem_#b1afaf70]'>
        <p className="font-bold">{name}</p>
        { description ? <p className='mt-2'>{description}</p> : null }
        { imageSrc ? 
          <div>
            <Image
              src={imageSrc}
              alt='Cindy Event Picture'
              width='240'
              height='100'
              className='mt-3 rounded-xl'
            />
          </div>
        : <div /> }
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:pt-24">

      {/* HEADER */}
      <div className="w-full flex place-items-center justify-around flex-wrap pb-4">
        <div className="p-8 my-14 mx-8 lg:max-w-[600px] md:max-w-[400px] sm:max-w-full bg-[#ffffff90] rounded-xl drop-shadow-[0_0_0.3rem_#ffffff70]">
          <h1 className='text-[36px] font-bold'>Cindy Baker</h1>
          <div className='h-[1px] w-3/4 bg-gray-200 my-8' />
          <p>Some example summary of whatever you want people to know about you can go here. The rest of this 
            is just placeholder for now yay. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat vulputate sollicitudin. In hac habitasse platea dictumst. Aliquam sit amet tortor at odio vehicula sollicitudin eu et risus. Morbi convallis metus luctus ipsum lacinia, sed auctor lacus condimentum. Donec blandit vitae erat et pretium.</p>
        </div>

        <div className="mx-8 relative before:absolute before:h-[300px] before:w-[480px] before:-translate-x-3/4 before:-translate-y-1/3 before:rounded-full before:bg-gradient-conic before:from-gray-200 before:to-green-200 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[200px] after:w-[280px] after:translate-x-[70%] after:-translate-y-3/4 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <ImageWithBorders
            src="/egot.jpg"
            alt="Cindy Baker with an Egot Award"
            width={280}
            height={37}
          />
        </div>
      </div>

      {/* CONTENT: EVENT CARDS */}
      <div className="lg:max-h-[505px] md:max-h-[650px] sm:max-h-[900px] flex flex-col flex-wrap place-items-center justify-start px-6 my-20">
        <EventCard
          name="Times Square Ball Drop"
          imageSrc='/new_years.jpg'
        />
        <EventCard
          name="Emmy's"
          description='Backstage work with performers'
        />
        <EventCard
          name="Grammy's"
        />
        <EventCard
          name="Macy's Thanksgiving Day Parade"
        />
        <EventCard
          name="Rockefeller Center Christmas Tree Lighting"
        />
        <EventCard
          name="The Tony Awards"
        />
        <EventCard
          name="Super Bowl Halftime Show"
          description='Managing artists behind the scenes'
        />
        <EventCard
          name="Critic Choice Documentary Awards"
        />
        <EventCard
          name="National Magazine Awards"
        />
        <EventCard
          name="Glamour Women of the Year Awards"
        />
        <EventCard
          name="The Oscars"
          imageSrc='/oscars.jpg'
        />
        <EventCard
          name="Creative Fashion Design Awards"
        />
      </div>

      <div className='flex justify-around flex-wrap gap-8 w-full max-w-[1080px] mt-10 mb-10'>
        <div className="relative mb-20 after:absolute after:-z-20 after:h-[280px] after:w-[340px] after:translate-x-1/2 after:translate-y-[-250px] after:bg-gradient-conic after:from-pink-200 after:via-pink-200 after:blur-2xl after:content-[''] before:absolute before:-z-20 before:h-[240px] before:w-[240px] before:translate-x-[-100px] before:translate-y-[0px] before:bg-gradient-radial before:from-yellow-100 before:via-orange-100 before:to-red-100 before:blur-2xl before:content-['']">
          <ImageWithBorders
            src="/oscars_2.jpg"
            alt="Cindy Baker at the Oscars"
            width={280}
            height={37}
          />
        </div>
        <div className="relative mb-20 after:absolute after:-z-20 after:h-[280px] after:w-[340px] after:translate-x-1/3 after:translate-y-[-100px] after:bg-gradient-conic after:from-purple-100 after:via-purple-200 after:blur-2xl after:content-[''] before:absolute before:-z-20 before:h-[240px] before:w-[240px] before:translate-x-[-100px] before:translate-y-[-140px] before:bg-gradient-radial before:from-blue-100 before:via-blue-100 before:to-red-100 before:blur-2xl before:content-['']">
          <ImageWithBorders
            src="/egot_2.jpg"
            alt="Cindy Baker with her Egot award"
            width={280}
            height={37}
          />
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex flex-wrap place-items-center justify-around w-5/6 mb-8 px-4 py-6 bg-[#ffffffee] rounded-2xl drop-shadow-[0_0_8px_#b1afaf40]">
        <div className='text-center p-4'>
          <p className='font-bold'>Contact</p>
          <p>an-email-address@gmail.com</p>
        </div>
        <div className='text-center p-4'>
          <p className='font-bold'>Social Media</p>
          <p>facebook icon / linkedin</p>
        </div>
      </div>
    </main>
  )
}
