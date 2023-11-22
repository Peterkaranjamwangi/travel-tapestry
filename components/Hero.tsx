import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Carousel from './Carousel'



const Hero = () => {
  return (
    <section className=" max-container padding-container flex flex-col gap-3 py-3 pb-2 md:gap-20 xl:flex-row">
      <div className="hero-map"/>

      {/* left  */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image 
          src="/camp.svg"
          alt="camp"
          width="50"
          height="50"
          className="absolute lef-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />

        <h1 className="bold-52 lg:bold-88">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, aperiam. Quibusdam rem atque eos, in dolorem laborum! Earum nihil magnam ipsum, porro totam praesentium dolorum.  
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center">
              <svg className="w-4 h-4 lg:w-6 lg:h-6 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <p className="ms-2 text-md lg:text-l font-bold text-gray-900 dark:text-white">4.95</p>
              <span className="w-1 h-1 lg:w-2 lg:h-2 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <a href="#" className="text-md lg:text-l font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>
          </div>
        </div>

        <div className="w-full flex-col flex gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Download App" 
            variant="btn_green"  
          />
          <Button 
            type="button" 
            title="How we work?" 
            icon="/play.svg"
            variant="btn_white_text"  
          />
        </div>


      </div>

      <div className="relative flex flex-1 max-w-full items-star">
        <div className="relative z-20 flex-col max-w-full max-h-full gap-8">
        </div>
      </div>
    </section>
  )
}

export default Hero