import React, { useLayoutEffect, useRef } from 'react'
import styled, {keyframes} from 'styled-components'
import Vector from './assets/img/Vector'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const VectorContainer = styled.div`
position: absolute;
top: 0.5rem;
left: 50%;
transform: translateX(-50%);
width: 100%;
height: 100%;
overflow: hidden;

svg{
    display: inline-block;
    width: 100%;
    height: 100%;
}
@media (max-width: 900px){
    left: 1rem;
}
@media (max-width: 375px){
    top: -120px;
}
@media (max-width: 395px){
    height: 80%;
}
`

const Bounce = keyframes`
from { transform: translateX(-50%) scale(0.5); }
to { transform: translateX(-50%) scale(1); }
`

const Ball = styled.div`
position: absolute;
top: 0;
left: 50%;
transform: translateX(-50%);
width: 1.5rem;
height: 1.5rem;
border-radius: 50%;
background: #00c9ff; 
background: -webkit-linear-gradient(to right, #00c9ff, #92fe9d); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #00c9ff, #92fe9d);
animation: ${Bounce} 0.5s linear infinite alternate;

@media (max-width: 900px){
    left: 1rem;
}
@media (max-width: 395px){
    top: -9rem;
    left: 1rem;
}
`

const DrawSvg = () => {
    const ref = useRef(null);
    const ballRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let element = ref.current;
        let svg = document.getElementsByClassName("svg-path")[0];
        const length = svg.getTotalLength();
        svg.style.strokeDasharray = length;
        svg.style.strokeDashoffset = length;

        let t1 = gsap.timeline({
            scrollTrigger:{
                trigger: element,
                start: "top center",
                end: "bottom bottom",
                onUpdate: (self) => {
                    const draw = length * self.progress;
                    svg.style.strokeDashoffset = length - draw;
                },
                onToggle: self => {
                    if(self.isActive){
                        ballRef.current.style.display = 'none';
                    }else{
                        ballRef.current.style.display = 'inline-block';
                    }
                }
            }
        })

        return () => {
            if(t1) t1.kill();
        };
    }, [])

    return (
        <>
        <Ball ref={ballRef}/>
        <VectorContainer ref={ref}>
            <Vector/>
        </VectorContainer>
        </>
    )
}

export default DrawSvg