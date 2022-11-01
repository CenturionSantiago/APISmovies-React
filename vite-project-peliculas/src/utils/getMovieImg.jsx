import placeholder from '../img/pelicula-3d.png'

export function getMovieImg(path, width){
    return path? `https://image.tmdb.org/t/p/w300${width}${path}`:placeholder
}

// const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;