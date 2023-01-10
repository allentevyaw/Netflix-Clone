const key = '01be7c1320d02996f51d94ee6e0c1fe7'

const requests = {

    requestPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending : `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    requestTVPopular : `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
    requestUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`

};

export default requests