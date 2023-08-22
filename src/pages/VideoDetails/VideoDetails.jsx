import { useParams, useLocation, Outlet } from "react-router-dom";
import { useEffect, useState, Suspense } from "react";
import { fetchMoviesById } from "services/TmbdApi";
import { MovieDetails } from "components/MovieDetails/MovieDetails";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledLink, Wrapper, ButtonsList } from "components/Layout/Layout.styled";
import { Label } from "components/SearchBar/SearchBar.styled";
import  Loader  from "components/Loader/Loader";
import { BiSolidLeftArrow } from 'react-icons/bi';

const VideoDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const [movie, setMovie] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        async function fetchMovie() {
            try {
                const movie = await fetchMoviesById(id);
                setMovie(movie);
                setIsLoaded(true);
            } catch (error) {
                toast.error('Something went wrong, try one more time');
            }
        }
        fetchMovie();
    }, [id])

    if (isLoaded) {
        return (
            <main>
                <StyledLink to={`${location.state.from}`}>
                    <Label>
                        <BiSolidLeftArrow style={{ width: 20, height: 24 }} />
                    Go Back
                    </Label>
                </StyledLink>
                <Wrapper>
                    <MovieDetails movie={movie} />
                <ButtonsList>
                    <li>
                        <StyledLink to="cast" state={{from: `${location.state.from}`}}>
                            Cast
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="reviews" state={{from: `${location.state.from}`}}>
                            Reviews
                        </StyledLink>
                    </li>
                </ButtonsList>
                <Suspense fallback={<Loader />}>
                    <Outlet/>
                </Suspense>
                </Wrapper>      
            </main>
        )
    }

}

export default VideoDetails;