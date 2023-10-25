import React from "react";
import {motion} from "framer-motion";
import { Player, ControlBar, PlayToggle  } from 'video-react';


const Skill =({name, x, y}) => {
    return(
        <motion.div className="flex items-center justify-center rounded-3xl font-semibold text-light p-8
                py-3 px-6 shadow-dark cursor-pointer absolute"
                whileHover={{scale:1.05}}  
                initial={{x:0,y:0}}
                whileInView={{x:x,y:y}}
                viewport={{once:true}}
                transition={{duration:1.5}}
                >
                    {
                        <Player className='w-[640px]' autoPlay={false} networkState={false} src={name}>
                            <ControlBar autoHide={false} disableDefaultControls={true}>
                                <PlayToggle />
                            </ControlBar>
                        </Player>
                    }
                </motion.div>
    )

}

const Skills = () => {
    return (
        <>
        <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">

                <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark
                cursor-pointer"
                whileHover={{scale:1.05}}  
                >
                    DUST
                </motion.div>
                <Skill name="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" x="20vw" y="6vw"/>
                <Skill name="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" x="20vw" y="-22vw"/>
                <Skill name="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" x="-20vw" y="6vw"/>
                <Skill name="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" x="-20vw" y="-22vw"/>
            </div>
        </>
    )
}

export default Skills;