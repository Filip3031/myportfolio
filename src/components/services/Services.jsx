import "./services.scss";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          I focus on helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor eum
            cum veniam doloribus esse, nulla accusamus. Ratione, quae a hic
            quasi cum vel nostrum reprehenderit perspiciatis minus blanditiis
            nihil ducimus quia quis assumenda laboriosam sit distinctio
            asperiores corporis dignissimos pariatur!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor eum
            cum veniam doloribus esse, nulla accusamus. Ratione, quae a hic
            quasi cum vel nostrum reprehenderit perspiciatis minus blanditiis
            nihil ducimus quia quis assumenda laboriosam sit distinctio
            asperiores corporis dignissimos pariatur!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor eum
            cum veniam doloribus esse, nulla accusamus. Ratione, quae a hic
            quasi cum vel nostrum reprehenderit perspiciatis minus blanditiis
            nihil ducimus quia quis assumenda laboriosam sit distinctio
            asperiores corporis dignissimos pariatur!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor eum
            cum veniam doloribus esse, nulla accusamus. Ratione, quae a hic
            quasi cum vel nostrum reprehenderit perspiciatis minus blanditiis
            nihil ducimus quia quis assumenda laboriosam sit distinctio
            asperiores corporis dignissimos pariatur!
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
