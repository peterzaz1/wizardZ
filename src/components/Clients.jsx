import { clients } from "../constants";
import { motion } from "framer-motion";

// const sliderVariants = {
//   initial: {
//     x: 0,
//   },
//   animate: {
//     x: "100%",
//     transition: {
//       repeat: Infinity,
//       repeatType: "mirror",
//       duration: 20,
//     },
//   },
// };

function Clients() {
  return (
    <motion.div
      // variants={sliderVariants}
      // initial="initial"
      // animate="animate"
      className=" overflow-x-hidden mt-16 flex-1 flex flex-wrap gap-10 md:gap-0 justify-center md:justify-between"
    >
      {clients.map((client) => (
        <img
          className="w-24 grayscale"
          src={client.img}
          key={client.id}
          alt={client.id}
        />
      ))}
    </motion.div>
  );
}

export default Clients;
