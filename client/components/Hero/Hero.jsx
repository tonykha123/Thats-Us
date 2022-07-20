import React from 'react'
import TypeAnimation from 'react-type-animation'

const Hero = () => {
  return (
    // main hero container
    <section className="w-full h-[110vh] flex flex-col sm:flex-row sm:w-11/12  s:pt-6 sm:justify-center">
      <div className=" w-2/3 mr-5 sm:w-6/12 self-center text-center sm:text-left mt-10">
        {/*text side */}
        <TypeAnimation
          cursor={true}
          sequence={['Ball?', 3500, 'Drinks?', 3500, 'Lunch?', 3500]}
          repeat={Infinity}
          className="text-5xl w-full font-extrabold sm:text-6xl text-[#00AEFF] bg-slate-100 "
        />
        <p className="text-5xl w-full font-extrabold sm:text-6xl ">Thats us.</p>
        <p className="mt-2 mb:4 sm:my-5 ">
          That's us is platform created by a group of friends for finding and
          building local communities. Anyone can use the app! That's us allows
          anyone to create ,share and find experiences with one another. From
          pickup basketball games, lunch gatherings, gaming competitons or just
          heading down to the pub, It can all be sorted out in a few clicks. Our
          mission is to connect our local communities through events.
        </p>
      </div>
      {/* text container of hero div ends */}
      {/* image section */}
      <div className="self-center">
        <img
          className=" w-full h-auto shadow-xl object-fill my-5 mx-auto block"
          src="/Images/Friendly.jpeg"
          alt="Group of friendly people laughing"
        />
      </div>
      {/* image section ends */}
    </section>
  )
}

export default Hero
