import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LandingPage } from "../page/LandingPage"
import { MovieDetails } from "../page/MovieDetails"

export function MyRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/movies/:movieId" element={<MovieDetails />} />
            </Routes>
        </Router>
    )
}