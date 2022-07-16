import React from 'react'
import TypeAnimation from 'react-type-animation'

const Hero = () => {
  return (
    // main hero container
    <section className="w-full h-[90vh] flex flex-col sm:flex-row sm:w-11/12  s:pt-6 sm:justify-center">
      <div className=" w-2/3 mr-5 sm:w-6/12 self-center text-center sm:text-left">
        {/*text side */}
        <TypeAnimation
          cursor={true}
          sequence={['Ball?', 3500, 'Drinks?', 3500, 'Crew?', 3500]}
          wrapper="p"
          repeat={Infinity}
          className="text-5xl w-full font-extrabold sm:text-6xl "
        />
        <p className="text-5xl w-full font-extrabold sm:text-6xl ">Thats us.</p>
        <p className="mt-2 mb:4 sm:my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          veritatis et accusantium deserunt atque molestias, molestiae assumenda
          id, praesentium unde temporibus nihil modi expedita corporis autem
          libero sunt natus aspernatur!
        </p>
      </div>
      {/* text container of hero div ends */}
      {/* image section */}
      <div className="self-center">
        <img
          className=" w-full h-auto shadow-xl object-fill my-5 mx-auto block"
          src="/images/Friendly.jpeg"
          alt="Group of friendly people laughing"
        />
      </div>
      {/* image section ends */}
    </section>
  )
}

export default Hero
