import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import { useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Magic Pixel Paradise",
    img: "../public/magicpixel.png",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis reiciendis saepe quod optio iure maxime facere est impedit. Impedit, perspiciatis?",
  },
  {
    id: 2,
    title: "Atum-namioty",
    img: "../public/atum.png",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis reiciendis saepe quod optio iure maxime facere est impedit. Impedit, perspiciatis?",
  },
  {
    id: 3,
    title: "Fit-Club",
    img: "../public/fitclub.png",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis reiciendis saepe quod optio iure maxime facere est impedit. Impedit, perspiciatis?",
  },
  {
    id: 4,
    title: "Future Bank App",
    img: "../public/bankist.png",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis reiciendis saepe quod optio iure maxime facere est impedit. Impedit, perspiciatis?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

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
            <button>See Demo</button>
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
