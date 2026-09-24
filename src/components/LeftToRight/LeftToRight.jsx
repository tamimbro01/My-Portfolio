import "./LeftToRight.css"

import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);


const fronted = [
    { id: 1, logo: "https://ik.imagekit.io/oqmhv2hkcv/logo-2582747_1280.png" },
    { id: 2, logo: "https://ik.imagekit.io/oqmhv2hkcv/OIP%20(13).webp" },
    {
        id: 3, logo: "https://ik.imagekit.io/oqmhv2hkcv/512x512bb.jpg"

    },
    { id: 4, logo: "https://ik.imagekit.io/oqmhv2hkcv/7749-react-js.png" },
    { id: 5, logo: "https://ik.imagekit.io/oqmhv2hkcv/OIP%20(19).webp" }
]

const backend = [
    { id: 1, logo: "https://ik.imagekit.io/oqmhv2hkcv/OIP%20(12).webp" },
    { id: 2, logo: "https://ik.imagekit.io/oqmhv2hkcv/mongodb-logo-png_seeklogo-481256.png" },
    { id: 3, logo: "https://ik.imagekit.io/oqmhv2hkcv/make-you-a-javascript-master-along-with-react-and-vue.jpeg" }
]

const vpsAndCloud = [
    { id: 1, logo: "https://ik.imagekit.io/oqmhv2hkcv/OIP%20(15).webp" },
    { id: 2, logo: "https://ik.imagekit.io/oqmhv2hkcv/OIP%20(17).webp" },
    { id: 3, logo: "https://ik.imagekit.io/oqmhv2hkcv/OIP%20(16).webp" },
    { id: 4, logo: "https://ik.imagekit.io/oqmhv2hkcv/OIP%20(1).jpg" },
    { id: 5, logo: "https://ik.imagekit.io/oqmhv2hkcv/OIP.jpg" },
    { id: 6, logo: "https://ik.imagekit.io/oqmhv2hkcv/reverse-proxy-icon-line-multi-circle-vector.jpg" }
]


const database = [
    { id: 1, logo: "https://ik.imagekit.io/oqmhv2hkcv/mongodb-logo-png_seeklogo-481256.png" },

    { id: 2, logo: "https://ik.imagekit.io/oqmhv2hkcv/OIP%20(14).webp" },
]

const tools = [
    { id: 1, logo: "https://ik.imagekit.io/oqmhv2hkcv/OIP%20(18).webp" },
    { id: 2, logo: "https://ik.imagekit.io/oqmhv2hkcv/github.png" },
    { id: 3, logo: "https://ik.imagekit.io/oqmhv2hkcv/postman-logo-png_seeklogo-321406.png" },
    { id: 4, logo: "https://ik.imagekit.io/oqmhv2hkcv/OIP%20(20).webp" },
]

const LeftToRight = () => {


    useEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".center-me",
                start: "top 85%",
                end: "top 25%",
                markers: true,

            },
        });

        tl.to(".center-me", {
            scrambleText: { text: "§¶•†‡ÆØÅ", speed: 0.5 },
            duration: 1,

        })
            .to(".center-me", {
                scrambleText: { text: "MY KNOWLEDGE", speed: 0.5 },
                duration: 1,
            })

    })






    return (
        <div className="left-right-container">
            <h1 className="center-me">MY KNOWLEDGE</h1>


            <div className="frontend-container">

                <h4>Frontend</h4>
                {
                    fronted.map((item) => (
                        <img src={item.logo} alt="" />
                    ))
                }
            </div>

            <div className="backend-container">
                <h4>Backend</h4>
                {
                    backend.map((item) => (
                        <img src={item.logo} alt="" />
                    ))
                }
            </div>

            <div className="vps-and-cloud-container">
                <h4>VPS & Cloud</h4>
                {
                    vpsAndCloud.map((item) => (
                        <img src={item.logo} alt="" />
                    ))
                }
            </div>

            <div className="database-container">
                <h4>Databases</h4>

                {
                    database.map((item) => (
                        <img src={item.logo} alt="" />
                    ))
                }
            </div>

            <div className="tools-container">
                <h4>Tools</h4>
                {
                    tools.map((item) => (
                        <img src={item.logo} alt="" />
                    ))
                }
            </div>


        </div>
    )
}

export default LeftToRight