import Link from "next/link";
import Card from "./card";
import styles from "./section-cards.module.css";

const SectionCard = ({ title, videos = [], size }) => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardWrapper}>
                {videos.map((video, index) => {
                    return (
                        <Link key={index} href={`/video/${video.id.videoId}`}>
                            <Card
                                key={index}
                                id={index}
                                size={size}
                                imgUrl={video.imgUrl}
                            />
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default SectionCard;