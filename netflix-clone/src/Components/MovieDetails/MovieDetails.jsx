import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  return <div>Details for Movie ID: {id}</div>;
};

export default MovieDetails;
