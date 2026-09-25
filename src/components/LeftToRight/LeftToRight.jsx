import "./LeftToRight.css"

import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

 
const fronted = [
    { id: 1, name: "A styling language used to create beautiful, responsive, and visually engaging web interfaces with layouts, animations, colors, and modern designs.", logo: "https://ik.imagekit.io/oqmhv2hkcv/logo-2582747_1280.png" },
    { id: 2,name:"A powerful animation library for creating smooth, interactive, and high-performance web animations. I use GSAP to bring websites to life with scroll effects, transitions, timelines, and dynamic interactions.", logo: "https://ik.imagekit.io/oqmhv2hkcv/OIP%20(13).webp" },
    {
        id: 3, name: "A powerful programming language for building dynamic and interactive web applications. I use JavaScript to handle logic, user interactions, APIs, and real-time functionality.", logo: "https://ik.imagekit.io/oqmhv2hkcv/512x512bb.jpg"

    },
    { id: 4,name: "A powerful JavaScript library for building fast, reusable, and interactive user interfaces with component-based architecture.", logo: "https://ik.imagekit.io/oqmhv2hkcv/7749-react-js.png" },
   
    { id: 5,  name: "The foundation of every modern website. I use HTML5 to create clean, semantic, and well-structured web pages with accessible and meaningful content." ,logo: "https://ik.imagekit.io/oqmhv2hkcv/OIP%20(19).webp" },
] 









const backend = [
    { id: 1, name: "A fast and flexible Node.js framework for building scalable web servers, REST APIs, authentication systems, and backend applications.", logo: "https://ik.imagekit.io/oqmhv2hkcv/OIP%20(12).webp" },
    { id: 2, name: "A JavaScript runtime built on Chrome's V8 engine for creating fast, scalable, and efficient server-side applications and APIs.",  logo: "https://ik.imagekit.io/oqmhv2hkcv/make-you-a-javascript-master-along-with-react-and-vue.jpeg" }
]






const vpsAndCloud = [
    { id: 1, name: "A reliable Linux operating system widely used for VPS hosting, server management, deployment, and running scalable web applications.", logo: "https://ik.imagekit.io/oqmhv2hkcv/OIP%20(15).webp" },
    { id: 2, name: "A high-performance web server and reverse proxy used for serving websites, routing API requests, load balancing, and efficiently handling web traffic.", logo: "https://ik.imagekit.io/oqmhv2hkcv/OIP%20(17).webp" },
    { id: 3, name: "A virtual private server that provides dedicated computing resources for hosting, deploying, and managing web applications with greater control and flexibility.", logo: "https://ik.imagekit.io/oqmhv2hkcv/OIP%20(16).webp" },
    { id: 4, name: "A security layer that monitors and controls incoming and outgoing network traffic to protect servers and applications from unauthorized access.", logo: "https://ik.imagekit.io/oqmhv2hkcv/OIP%20(1).jpg" },
    { id: 5, name: "A production process manager for Node.js applications that keeps servers running, automatically restarts crashed processes, and helps manage application performance.", logo: "https://ik.imagekit.io/oqmhv2hkcv/OIP.jpg" },
    { id: 6, name: "A server that sits between clients and backend servers to route requests, improve security, manage traffic, and support scalable web applications.", logo: "https://ik.imagekit.io/oqmhv2hkcv/reverse-proxy-icon-line-multi-circle-vector.jpg" }
]


const database = [
    { id: 1, name: "A flexible NoSQL database designed for storing and managing data in a scalable, document-based structure for modern applications." , logo: "https://ik.imagekit.io/oqmhv2hkcv/mongodb-logo-png_seeklogo-481256.png" },

    { id: 2, name: "An in-memory data store used for caching, session management, real-time applications, queues, and improving application performance.",  logo: "https://ik.imagekit.io/oqmhv2hkcv/OIP%20(14).webp" },
]

const tools = [
    { id: 1, name: "A distributed version control system used to track code changes, manage development history, create branches, and collaborate efficiently on software projects.", logo: "https://ik.imagekit.io/oqmhv2hkcv/OIP%20(18).webp" },
    { id: 2, name: " A developer platform for hosting code, managing repositories, collaborating on projects, and tracking software development using Git. ",logo: "https://ik.imagekit.io/oqmhv2hkcv/github.png" },
    { id: 3, name: "An API platform used to design, test, document, and debug APIs, making backend development and API integration easier.",  logo: "https://ik.imagekit.io/oqmhv2hkcv/postman-logo-png_seeklogo-321406.png" },
    { id: 4, name: "A powerful and lightweight code editor used for writing, debugging, and managing modern web development projects with extensions and developer tools.", logo: "https://ik.imagekit.io/oqmhv2hkcv/OIP%20(20).webp" },
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
                        <div key={item.id} className="frontend-item">
                            <img src={item.logo} alt="" />
                            <p>{item.name}</p>
                        </div>
                    ))
                }
            </div>

            <div className="backend-container">
                <h4>Backend</h4>
                {
                    backend.map((item) => (
                        <div key={item.id} className="backend-item">
                            <img src={item.logo} alt="" />
                            <p>{item.name}</p>
                        </div>
                    ))
                }
            </div>

            <div className="vps-and-cloud-container">
                <h4>VPS & Cloud</h4>
                {
                    vpsAndCloud.map((item) => (
                        <div key={item.id} className="vps-and-cloud-item">
                            <img src={item.logo} alt="" />
                            <p>{item.name}</p>
                        </div>
                    ))
                }
            </div>

            <div className="database-container">
                <h4>Databases</h4>

                {
                    database.map((item) => (
                        <div key={item.id} className="database-item">
                            <img src={item.logo} alt="" />
                            <p>{item.name}</p>
                        </div>
                    ))
                }
            </div>

            <div className="tools-container">
                <h4>Tools</h4>
                {
                    tools.map((item) => (
                        <div key={item.id} className="tools-item">
                            <img src={item.logo} alt="" />
                            <p>{item.name}</p>
                        </div>
                    ))
                }
            </div>


        </div>
    )
}

export default LeftToRight