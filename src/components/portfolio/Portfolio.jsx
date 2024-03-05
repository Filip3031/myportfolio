import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import { useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Magic Pixel Paradise",
    img: "../public/magicpixel.png",
    desc: "Magic Pixel Paradise is a website of one of the sellers of illustrations on Etsy. When the seller adds a new product on Etsy, it is automatically added to the website.",
    link: "https://magicpixelparadise.com/",
  },
  {
    id: 2,
    title: "Atum-namioty",
    img: "../public/atum.png",
    desc: "Atum-namioty is a website that allows you to familiarize yourself with the offer of a company renting tents.",
    link: "https://atum-namioty.pl/",
  },
  {
    id: 3,
    title: "Fit-Club",
    img: "../public/fitclub.png",
    desc: "Fit-club is a website that allows you to familiarize yourself with the trainers, packages, and gym standards.",
  },
  {
    id: 4,
    title: "Future Bank App",
    img: "../public/bankist.png",
    desc: "Future Bank App is a comprehensive application based solely on JavaScript, through which we can take out loans, make transfers, and more. More details about this application can be found on my GitHub.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  let buttonText = "See Demo";
  let buttonLink = "/";

  if (item.id === 1 || item.id === 2) {
    buttonText = "See Website";
    buttonLink = item.link;
  }

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={buttonLink} target="_blank" rel="noopener norefferer">
              <button>{buttonText}</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 15,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
