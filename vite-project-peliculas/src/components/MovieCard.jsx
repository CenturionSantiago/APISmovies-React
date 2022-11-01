import '../components/MovieCard.css'
import { Link } from "react-router-dom"


export function MovieCard({ movie }){

    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return(
        <li className='container-movieCard'>
            <Link to={"/movies/" + movie.id}>
                <img  width={230}
                    height={345} 
                    src= {imgUrl} 
                    alt= {movie.title} 
                    className = 'container-img-movie' 
                />
            </Link>
            <div className='titulo-pelis' > {movie.title} </div>
        </li>
    )
}