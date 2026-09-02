import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

const MotionCounter = ({ value }) => {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      onUpdate(latest) {
        setDisplay(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [value]);

  return <motion.span>{display}</motion.span>;
};

export default MotionCounter;