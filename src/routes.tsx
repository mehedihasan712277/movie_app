import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Movie from "./pages/movie";
import BookMark from "./pages/bookmark";
import TvSeries from "./pages/tv-series";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement: <Error></Error>
    },
    {
        path: "/movie",
        element: <Movie></Movie>,
        errorElement: <Error></Error>
    },
    {
        path: "/bookmark",
        element: <BookMark></BookMark>,
        errorElement: <Error></Error>
    },
    {
        path: "/tv_series",
        element: <TvSeries></TvSeries>,
        errorElement: <Error></Error>
    }
])