import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="padding-container flexCenter flex-col">
      <div className=" padding-container max-container w-full pb-5">
        <Image 
          src="/camp.svg"
          alt='camp'
          width={50}
          height={50}
        />
        <p className='uppercase regular-16 -mt-1 mb-2 text-green-90'>
          We are here for you.
        </p>

        <div className="flex flex-wrap justify-between gap-3 lg:gap-7">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]"> Guide you to the right path</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel temporibus, adipisci ad exercitationem officia totam iste! Est, ex fuga? Veritatis doloremque fuga at repudiandae unde dolorem tempora recusandae, modi reiciendis?</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
      />
      <div className="absolute flex bg-white py-4 pl-2 pr-5 gap-2 rounded-3xl border shadow-md md:left-[5%] lg:top-10">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={150}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 pr-3 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2"> de la fuente</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-50">Start track</p>
              <p className="bold-20 mt-2 whitespace-nowrap"> de la fuente</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Guide