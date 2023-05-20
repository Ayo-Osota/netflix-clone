import Image from "next/image";
import styles from "./card.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import cls from "classnames";
import Link from "next/link";

const Card = ({
    imgUrl = "https://images.unsplash.com/photo-1644907094802-c942b599ebc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    size = "medium",
    id
}) => {
    const [imgSrc, setImgSrc] = useState(imgUrl);

    const handleOnError = () => {
        setImgSrc("https://images.unsplash.com/photo-1644906905531-b3906621651c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
    }

    const classMap = {
        large: styles.lgItem,
        medium: styles.mdItem,
        small: styles.smItem
    }

    const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 }

    return (
        <div
            className={styles.container}
        >
            <motion.div className={cls(styles.imgMotionWrapper, classMap[size])} whileHover={{ ...scale }}>
                <Image src={imgSrc} alt="name" fill className={styles.cardImg} onError={handleOnError} />
            </motion.div>
        </div>
    )
}

export default Card;