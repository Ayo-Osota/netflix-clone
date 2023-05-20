import videoData from "../data/videos.json";

const fetchVideos = async (url) => {
    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
    const BASE_URL = "https://youtube.googleapis.com/youtube/v3";
        const response = await fetch(`${BASE_URL}/${url}&key=${YOUTUBE_API_KEY}`
    // , {
    //     method: 'GET',
    //     headers: {
    //         Authorization: YOUTUBE_API_KEY,
    //         Accept: 'application/json'
    //     }
    // }
    );

    return await response.json()
}

const getCommonVideos = async (url) => {
    try {
        const isDev = false;
        const data = isDev ? videoData :
        await fetchVideos(url);
    
    if (data?.error) {
        console.error("Youtube API error", error);
        return [];
    }

    return data?.items.map((item) => {
        const snippet = item.snippet;
        return {
            title: snippet.title,
            imgUrl: snippet.thumbnails.high.url,
            id: item?.id,
            description: snippet.description,
            publishTime: snippet.publishedAt,
            channelTitle: snippet.channelTitle,
            statistics: item.statistics ? item.statistics.viewCount : {viewCount: 10}
        }
    });
    } catch (error) {
        console.error("There was an error with youtube video library", error);
        return [];
    }
}

const getVideos = (searchQuery) => {
    const URL = `search?part=snippet&maxResults=25&q=${searchQuery}`;

    return getCommonVideos(URL);
}

const getPopularVideos = () => {
    const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=NG`;

    return getCommonVideos(URL);
}

const getYoutubeVideoById = (id) => {
    const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}`;

    return getCommonVideos(URL);
}

export { getVideos, getCommonVideos, getPopularVideos, getYoutubeVideoById };