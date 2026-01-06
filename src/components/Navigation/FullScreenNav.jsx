import { useGSAP } from "@gsap/react";
import React, { useContext, useRef } from "react";
import gsap from "gsap";
import NavbarContext from "../../context/NavContaxt";


const FullScreenNav = () => {
const fullNavLinkRef = useRef(null)
const fullScreenRef = useRef(null)
const [navOpen, setNavOpen] =useContext(NavbarContext)
  useGSAP(function () {
    const tl = gsap.timeline();
    // tl.to('#fullscreennav',{
    //   display:'block'
    // })
    tl.from(".stairing", {
      height: 0,
      stagger: {
        amount: -0.3, 
      },
    });
    tl.from(fullNavLinkRef.current,{
      opacity:0
    })
    tl.from('.link',{
      opacity:0,
      rotateX:90,
      stagger: {
        amount: 0.2,
      }
    })
    tl.pause()
    if(navOpen){
      fullScreenRef.current.style.display = 'block'
      tl.play()
    }else{
      fullScreenRef.current.style.display = 'none'
      tl.reverse()
    }
  },[navOpen]);
  return (
    <div ref={fullScreenRef}
      id="fullscreennav"
      className= " hidden text-white h-screen overflow-hidden  w-full z-50 absolute"
    >
      <div  className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className=" stairing h-full w-1/2 bg-red-500"></div>
          <div className=" stairing h-full w-1/2 bg-red-500"></div>
          <div className=" stairing h-full w-1/2 bg-red-500"></div>
          <div className=" stairing h-full w-1/2 bg-red-500"></div>
          <div className=" stairing h-full w-1/2 bg-red-500"></div>
        </div>
      </div>
      <div className="relative">
        <div className="flex w-full justify-between p-5 item-start">
          <div className="">
            <div className="w-36">
              <svg
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>
          <div
          onClick={()=>{
            setNavOpen(false)
          }}
          className="h-32 w-32 relative cursor-pointer ">
            <div className="h-44 w-1 -rotate-45 origin-top absolute bg-[#D3FD50]"></div>
            <div className="h-44 w-1 right-0 rotate-45 origin-top absolute bg-[#D3FD50] "></div>
          </div>
        </div>
        <div className="">
          <div className=" link origin-top relative border-t-1 border-white">
            <h1 className="font-[font-2] text-[8vw] text-center leading-[1] pt-8 uppercase">
              Projects
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className=" moveX flex  item-center">
                <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] text-center leading-[0.8] pt-9 uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-36 rounded-full shrink-0  w-96 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] text-center leading-[0.8] pt-9 uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-36 rounded-full shrink-0  w-96 object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />
              </div>
              <div className=" moveX flex  item-center">
                <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] text-center leading-[0.8] pt-9 uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-36 rounded-full shrink-0  w-96 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] text-center leading-[0.8] pt-9 uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-36 rounded-full shrink-0  w-96 object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" link origin-top relative border-t-1 border-white">
            <h1 className="font-[font-2] text-[8vw] text-center leading-[1] pt-8 uppercase">
              Projects
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className=" moveX flex  item-center">
                <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] text-center leading-[0.8] pt-9 uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-36 rounded-full shrink-0  w-96 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] text-center leading-[0.8] pt-9 uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-36 rounded-full shrink-0  w-96 object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />
              </div>
              <div className=" moveX flex  item-center">
                <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] text-center leading-[0.8] pt-9 uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-36 rounded-full shrink-0  w-96 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] text-center leading-[0.8] pt-9 uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-36 rounded-full shrink-0  w-96 object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" link origin-top relative border-t-1 border-white">
            <h1 className="font-[font-2] text-[8vw] text-center leading-[1] pt-8 uppercase">
              Projects
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className=" moveX flex  item-center">
                <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] text-center leading-[0.8] pt-9 uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-36 rounded-full shrink-0  w-96 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] text-center leading-[0.8] pt-9 uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-36 rounded-full shrink-0  w-96 object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />
              </div>
              <div className=" moveX flex  item-center">
                <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] text-center leading-[0.8] pt-9 uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-36 rounded-full shrink-0  w-96 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] text-center leading-[0.8] pt-9 uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-36 rounded-full shrink-0  w-96 object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" link origin-top relative border-y-1 border-white">
            <h1 className="font-[font-2] text-[8vw] text-center leading-[1] pt-8 uppercase">
              Projects
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className=" moveX flex  item-center">
                <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] text-center leading-[0.8] pt-9 uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-36 rounded-full shrink-0  w-96 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] text-center leading-[0.8] pt-9 uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-36 rounded-full shrink-0  w-96 object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />
              </div>
              <div className=" moveX flex  item-center">
                <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] text-center leading-[0.8] pt-9 uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-36 rounded-full shrink-0  w-96 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] text-center leading-[0.8] pt-9 uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-36 rounded-full shrink-0  w-96 object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
