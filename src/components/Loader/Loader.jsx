import { Triangle } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <Triangle
        height="80"
        width="80"
        color="#6FB98F"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Container>
  );
};

export default Loader;
