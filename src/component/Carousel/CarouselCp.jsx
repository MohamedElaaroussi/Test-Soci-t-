import React from "react"
import { Carousel, Typography, Button } from "@material-tailwind/react";


export const CarouselWithContent = () => {
  return (
    <Carousel className="rounded-none">
      <div className="relative h-[20rem] w-full ">
        <img
          src="Group-11.jpg"
          alt="image 1"
          className="h-full w-full object-cover "
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75 pt-10">
          <div className="w-3/4 text-start md:w-2/4">
            <h5
            >
              <span className="text-[white] text-sm md:text-sm lg:text-lg mr-10">
                ANTEOR PARIS 
              </span>
            </h5>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
            <div className="text-2xl">Rachat d'or à Paris (Paiement Comptant Par Chéque)</div> 
            <div className="font-semibold text-xl">Nous achetons votre or sous toutes ces formes :</div> 
            <div className="text-[#fda50a]">(Débris or,or cassé,bijoux en or,vieil or,lingots or,piéces en or...)</div> 
            </Typography>
            
          </div>
        </div>
      </div>

     

      <div className="relative h-[20rem] w-full ">
        <img
          src="Color-Fill-592.jpg"
          alt="image 1"
          className="h-full w-full object-cover "
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75 pt-10">
          <div className="w-3/4 text-start md:w-2/4">
            <h5
            >
              <span className="text-[white] text-sm md:text-sm lg:text-lg mr-10">
                ANTEOR PARIS 
              </span>
            </h5>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
            <div className="text-2xl">Rachat d'or à Paris (Paiement Comptant Par Chéque)</div> 
            <div className="font-semibold text-xl">Nous achetons votre or sous toutes ces formes :</div> 
            <div className="text-[#fda50a]">(Débris or,or cassé,bijoux en or,vieil or,lingots or,piéces en or...)</div> 
            </Typography>
            
          </div>
        </div>
      </div>

      

      

    </Carousel>

  )
}

// export default CarouselWithContent