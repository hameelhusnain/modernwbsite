import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

import Button from "./Button";
import VideoPreview from "./VideoPreview";
const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState( initialState: 1);
    const [hasClicked, setHasClicked] = useState( initialStat: false);
    const [isLoading, setIsLoading] = useState(initialState: true);
    const [loadedVideo, setLoadedVideo] = useState(initialState: 0);
     const totalVideos = 4;
     const nextVideoRef = useRef(initialValue: null);

    const handleMiniVdClick = () => {
        setHasClicked( value: true);

        setCurrentIndex(value: (previndex) => previndex + 1);
        
    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

    }

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
        <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
            <div>
                <div className="mask-clip-path absolute-center absolute-z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                    <div onClick={handleMiniVdClick} className="origin-center">
                        <video 
                        ref={nextVideoRef}
                        src={getVideoSrc( index: currentIndex + 1)}
                        loop
                        muted
                        id="current-video"
                        className="size-64 origin-center scale-150 object-cover object-center"
                        onLoadedData={handelVideoLoaded}
                        /> 
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero