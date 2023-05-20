import Image from "next/image";
import styles from "./banner.module.css"
import { useRouter } from "next/router";

const Banner = ({ title, subtitle, imgUrl, videoId }) => {
    const router = useRouter();

    const handleOnPlay = () => {
        console.log("play");
        router.push(`/video/${videoId}`)
    }

    return (
        <div className={styles.container}>
            <div className={styles.leftWrapper}>
                <div className={styles.left}>
                    <div className={styles.nseriesWrapper}>
                        <p className={styles.firstLetter}>N</p>
                        <p className={styles.series}>S E R I E S</p>
                    </div>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.subTitle}>{subtitle}</p>
                    <div className={styles.playBtnWrapper}>
                        <button onClick={handleOnPlay} className={styles.btnWithIcon}>
                            <Image src="/play_arrow.svg" alt="play icon" width={32} height={32}/>
                            <span className={styles.playText}>Play</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.bannerImg} style={{ backgroundImage: `url(${imgUrl})` }}></div>
        </div>
    )
}

export default Banner;