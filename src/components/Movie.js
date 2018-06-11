import React from 'react';

const Movie = (props) => {



  return (
    <div class="movie">
      <h3>{props.children}</h3>
      <p>Showtimes</p>
    </div>
  );

};

export default Movie;
