import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from "../../styles/Video.module.css"
import clsx from "classnames";
import { getYoutubeVideoById } from "@/lib/videos";
import Navbar from "@/components/navbar";

Modal.setAppElement('#__next');

export const getStaticProps = async (context) => {
    const videoId = context.params.videoId
    const videoArray = await getYoutubeVideoById(videoId);
    return {
        props: {
            video: videoArray.length > 0 ? videoArray[0] : {}
        },
        revalidate: 10,
    }
}

export const getStaticPaths = () => {
    const listOfVideos = ["rrR3A__3zm8", "DLGa2ygmmk4", "_cfOS75Rjms"];
    const paths = listOfVideos.map((videoId) => ({
        params: { videoId }
    }));

    return { paths, fallback: "blocking" }
}

const Video = ({ video }) => {
    const router = useRouter();
    const { videoId } = router.query;


    const { title, publishTime, description, channelTitle, statistics} = video;

    return (
        <div className={styles.container}>
            <Navbar/>
            <Modal
                isOpen={true}
                contentLabel="Watch the video"
                onRequestClose={() => { router.back() }}
                className={styles.modal}
                overlayClassName={styles.overlay}
            >

                <iframe className={styles.videoPlayer} id="player" type="text/html" width="100%" height="390"
                    src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com&controls=0&rel=0`}
                ></iframe>


                <div className={styles.modalBody}>
                    <div className={styles.modalBodyContent}>
                        <div className={styles.col1}>
                            <p className={styles.publishTime}>{publishTime}</p>
                            <p className={styles.title}>{title}</p>
                            <p className={styles.description}>{description}</p>
                        </div>
                        <div className={styles.col2}>
                            <p className={clsx(styles.subText, styles.subTextWrapper)}>
                                <span className={styles.textColor}>Cast:</span>
                                <span className={styles.channelTitle}>{channelTitle}</span>
                            </p>
                            <p className={clsx(styles.subText, styles.subTextWrapper)}>
                                <span className={styles.textColor}>View count:</span>
                                <span className={styles.channelTitle}>{statistics}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Video;