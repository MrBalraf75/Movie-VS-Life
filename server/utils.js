import { SERVER_CONFIG } from './server.config';

export const utils = {
    themoviedbUrl: _themoviedbUrl,
    getIdMovieFromPathParams: _getIdMovieFromPathParams,
    getAllParamsFromUrl: _getAllParamsFromUrl
}

function _themoviedbUrl(key){
    let url;
    switch (key) {
        case 'discover':
            url = SERVER_CONFIG.themoviedb_api_config.base_url + 'discover/movie?api_key=' + SERVER_CONFIG.themoviedb_api_config.api_key + '&language=' + SERVER_CONFIG.themoviedb_api_config.language;
        break;

    }
    console.log(url);
    return url;    
}

function _getIdMovieFromPathParams(path) {
    return path.split("/")[1];
}

function _getAllParamsFromUrl(path) {
    return path.split("/");
}

