import { useState, useRef, React } from "react";
import { motion } from "framer-motion";
//import { Player, ControlBar, PlayToggle  } from 'video-react';


const Skill = ({ name, x, y }) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const videoRef = useRef(null);

    const handleVideoClick = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVideoLoad = () => {
        setIsLoading(false);
        };
    return (
        <motion.div
            className="flex items-center justify-center rounded-3xl font-semibold bg-blue-800 text-light p-8 py-3 px-3 shadow-dark cursor-pointer absolute"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
        >
            <div className="relative">
                <video
                    className={`w-[600px] ${isPlaying ? "w-[800px] transition-all duration-500 ease-in-out" : ""}`}
                    src={name}
                    onClick={handleVideoClick}
                    ref={videoRef}
                    onProgress={handleVideoLoad}
                />
                {!isPlaying && (
                    <button
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        onClick={() => setIsPlaying(true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M5 3l10 7-10 7z" />
                        </svg>
                    </button>
                )}
                
                {isPlaying && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                )}

            </div>
        </motion.div>
    );
}

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">

                <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark
                cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                >
                    DUST
                </motion.div>
                <Skill name="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" x="20vw" y="12vw" />
                <Skill name="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" x="20vw" y="-12vw" />
                <Skill name="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" x="-20vw" y="-12vw" />
                <Skill name="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" x="-20vw" y="12vw" />
            </div>
        </>
    )
}

export default Skills;