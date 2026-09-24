import { useEffect } from 'react';
import './TopBar.css'
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText)

const TopBar = () => {



    const handleFlip = (e) => {

        gsap.fromTo(e.target, {
            clipPath: "inset(100% 0 0 0)",
            duration: 2.5, ease: "power2.out"

        }, {
            clipPath: "inset(0% 0 0 0)",
            duration: 2.5, ease: "power2.out"

        })

    }


    useEffect(() => {

        const split = new SplitText(".logo-name", { type: "chars" })
        gsap.from(split.chars, {
            scale: 0, y: 30,
            rotation: () => gsap.utils.random(-20, 20),
            stagger: { each: 0.04, from: "random" },
            duration: 0.4, ease: "back.out(2)"
        });


    

    }, [])





    return (
        <nav className="topbar">
            <div className="topbar-containtent">
                <div className="logo-containtent">
                    <img src="/logo.png" alt="Logo" />
                    <h2 className='logo-name'>Tareko Ai</h2>
                </div>
                <div className="topbar-page-links">
                    <ul>
                        <li onMouseEnter={handleFlip}>Home</li>
                        <li onMouseEnter={handleFlip}>About</li>
                        <li onMouseEnter={handleFlip}>Projects</li>
                        <li onMouseEnter={handleFlip}>Contact</li>
                    </ul>
                </div>

            </div>

        </nav>
    )
}

export default TopBar