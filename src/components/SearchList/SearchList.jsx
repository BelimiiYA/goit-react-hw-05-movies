import { Link, useLocation } from 'react-router-dom';
import { List, Item, Image, Title } from './SearchList.styled';
import PropTypes from 'prop-types';

export const SearchList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <Item key={id}>
            <Link
              to={`${id}`}
              state={{ from: location.pathname + location.search }}
            >
              <div>
                <Image
                  src={
                    poster_path
                      ? 'https://image.tmdb.org/t/p/w500/' + poster_path
                      : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
                  }
                  alt="title"
                />
              </div>
              <Title>{title}</Title>
            </Link>
          </Item>
        );
      })}
    </List>
  );
};

SearchList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    }).isRequired
  ).isRequired,
};
