import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { fadeIn } from "./fadeIn";

interface VarientAnimationProps {
    children: ReactNode;
    direction: string;
    delay: number;
}

const VarientAnimation: React.FC<VarientAnimationProps> = ({
    children,
    direction,
    delay,
}) => {
    return (
        <motion.div
            variants={fadeIn(direction, delay) as Variants} // Assuming fadeIn is a Variant
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
        >
            {children}
        </motion.div>
    );
};

export default VarientAnimation;
