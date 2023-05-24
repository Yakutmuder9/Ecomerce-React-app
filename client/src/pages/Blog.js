import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [0, 1, 2];

function Content() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, marginLeft: 100 }}
      exit={{ opacity: 0 }}
    >

      <div className="row">row</div>
      <div className="row">row</div>
      <div className="row">row</div>

    </motion.div>
  );
}

function Item() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div className="avatar" layout />
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.li>
  );
}
const Blog = () => {
  return (
    <div className="blogs-container">
      <div className="container">
        <div className="header">
          <h2>Blogs</h2>
        </div>

        <motion.ul layout initial={{ borderRadius: 25 }}>
          {items.map((item) => (
            <Item key={item} />
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Blog;
