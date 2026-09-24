import { useEffect } from "react";
import { gsap } from "gsap";
import "./HomeComteant.css";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
const HomeComteant = () => {
  useEffect(() => {
    const tl = gsap.timeline();



    tl.to(".intro-text", {
      text: { value: "Hello, World! 👋" }, 
      duration: 2,
      ease: "none",
    });

    tl.from(
      ".intro-name",
      {
        y: 80,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
      },
      "-=0.3"
    )
      .from(
        ".intro-name3",
        {
          y: 80,
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
        },
        "-=0.5"
      )
      .from(
        ".intro-name2",
        {
          y: 30,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      );
  }, []);

  return (
    <section className="home-comteant">
      <div className="hero-content">
        <h4 className="intro-text"></h4>

        <h1 className="intro-name">
          Don't waste
          <br />
          your time.
        </h1>

        <h3 className="intro-name3">Time is money.</h3>

        <h2 className="intro-name2">
          I make anything for the web.
        </h2>
      </div>
    </section>
  );
};

export default HomeComteant;