import { List, CastItem, CastInfo } from './Movies.styled';

export const CastList = ({ cast }) => {
  return (
    <List>
      {cast.length > 15
        ? cast.slice(0, 15).map(({ id, character, name, profile_path }) => {
            return (
              <CastItem key={id}>
                <CastInfo>
                  <img
                    src={
                      profile_path
                        ? 'https://image.tmdb.org/t/p/w500' + profile_path
                        : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
                    }
                    alt={name}
                  />
                  <p>Character: {character}</p>
                  <p>Name: {name}</p>
                </CastInfo>
              </CastItem>
            );
          })
        : cast.map(({ id, character, name, profile_path }) => {
            return (
              <CastItem key={id}>
                <CastInfo>
                  <img
                    src={'https://image.tmdb.org/t/p/w500' + profile_path}
                    alt={name}
                  />
                  <p>Character: {character}</p>
                  <p>Name: {name}</p>
                </CastInfo>
              </CastItem>
            );
          })}
    </List>
  );
};
