import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDiveRef = useRef(null)
  const imageRef = useRef(null)

  useGSAP(function(){
   
    gsap.to(imageDiveRef.current,{
      scrollTrigger:{
        trigger:imageDiveRef.current,
        markers:true,
        start:'top 28%',
        end:'top-70%',
        pin:true
      }
    })
  })
  return (
<div>
  <div className='section1'>
  <div ref={imageDiveRef} className='absolute overflow-hidden h-[20vw] rounded-3xl w-[15vw]  top-96 left-[30vw] bg-red-500'>
    <img ref={imageRef} className='h-full object-cover w-full ' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7 " alt="" />
  </div>
    <div className=' relative font-[font-2]'>
    <div className='mt-[55vh]'>
      <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Soixan7e <br />
Douze</h1>
    </div>
    <div className='pl-[40%] mt-20'>
      <p className='text-6xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
      </p>
    </div>
  </div>  
</div>
<div className="section2 h-screen">
  <div className='section1'>
  <div className='absolute overflow-hidden h-[20vw] rounded-3xl w-[15vw]  top-96 left-[30vw] bg-red-500'>
    <img className='h-full object-cover w-full ' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7 " alt="" />
  </div>
    <div className='relative font-[font-2]'>
    <div className='mt-[55vh]'>
      <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Soixan7e <br />
Douze</h1>
    </div>
    <div className='pl-[40%] mt-20'>
      <p className='text-6xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
      </p>
    </div>
  </div>  
</div>
</div>
</div>
  )
}                                                       

export default Agence