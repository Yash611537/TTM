// import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function ScaleIn() {
    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: 'power1.inOut' },
            scrollTrigger: {
                trigger: '#blue-box',
                start: 'top 80%',
                end: '+=1200',
                scrub: true,
            },
        });

        tl.to('#blue-box', {
            x: 850,
            scale: 1,
            rotation: 240,
            borderRadius: '100%',
            duration: 2,
            opacity:1,
            transformOrigin: '50% 50%',
        })
            .to('#blue-box', {
                y: 750,
                borderRadius: '100%',
                duration: 3,
                // scale: 3,
            });
        tl.to('#blue-box', {
            x: 1350,
            borderRadius: '100%',
            duration: 1,
            // scale: 3,
        })
        .to('#blue-box', {
            y: 1100,
            borderRadius: '100%',
            duration: 1,
            // scale: 3,
        })
        .to('#blue-box', {
            x: 700,
            borderRadius: '100%',
            duration: 1,
            // scale: 3,
            opacity:0
        })
    }, []);

    return (
        <div id='blue-box' className='opacity-0 absolute h-[100px] w-[100px] bg-blue-600 rounded-full'>
        </div>
    );
}

export default ScaleIn;