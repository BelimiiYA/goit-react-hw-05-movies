import { TrendingList } from 'components/TrendingList/TrendingList';
import PropTypes from 'prop-types';
import { Title } from 'components/Layout/Layout.styled';

const Home = ({ movies }) => {
  return (
    <main>
      <Title>Trending today</Title>
      <TrendingList movies={movies} />
    </main>
  );
};

Home.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Home;
