import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { get } from "../data/httpClient"
import { getMovieImg } from "../utils/getMovieImg"
import '../page/MovieDetails.css'

export function MovieDetails(){
    const {movieId} = useParams
    const [movie, setMovie] = useState([]);
    const [generos, setGeneros] = useState([]);

    useEffect(()=> {
    get("/movie/" + movieId).then((data) => {
        setMovie(data)
        setGeneros(data.genres[0])
    })
 }, [movieId])

    const phUrl = getMovieImg(movie.poster_path, 500)

    return (
        <div className='details-container' >
            <img src={ phUrl } alt={movie.title} className='col movie-imagen' />
            <div  className='parrafos-container'>
                <p className="title-parrafo">
                    <strong>Título: </strong>
                    {movie.title}
                </p>
                <p>
                    <strong> Género: </strong>
                    {generos.name}
                </p>
                <p>
                    <strong> Descripción: </strong>
                    {movie.overview}
                </p>
            </div>
        </div>
    )
}