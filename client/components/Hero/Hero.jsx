import React from 'react'
import Typed from 'react-typed'
import TypeAnimation from 'react-type-animation'

const Hero = () => {
  return (
    <section className="w-full h-[90vh] flex flex-col p-4 mx-auto sm:flex-row sm:w-10/12 my-5 sm:px-10 s:pt-6 sm:justify-center">
      <div className=" w-2/3 mr-5 sm:w-6/12 self-center text-center sm:text-left">
        {/*text side */}
        <Typed
          strings={['Ball?', 'Drinkups?', 'Crew?']}
          typeSpeed={300}
          backSpeed={300}
          loop
          className="text-4xl w-full font-extrabold sm:text-6xl "
        />
        <TypeAnimation
          cursor={true}
          sequence={['Ball?', 3500, 'Drinkups?', 3500, 'Crew?', 3500]}
          wrapper="p"
          repeat={Infinity}
          className="text-4xl w-full font-extrabold sm:text-6xl "
        />
        <p className="text-4xl w-full font-extrabold sm:text-6xl ">Thats us.</p>
        <p className="mt-2 mb:4 sm:my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          veritatis et accusantium deserunt atque molestias, molestiae assumenda
          id, praesentium unde temporibus nihil modi expedita corporis autem
          libero sunt natus aspernatur!
        </p>
      </div>
      <div className="self-center">
        <img
          className="shadow-xl object-fill my-5 mx-auto"
          src="/images/Friendly.jpeg"
          alt="Group of friendly people laughing"
        />
      </div>
    </section>
  )
}

export default Hero
