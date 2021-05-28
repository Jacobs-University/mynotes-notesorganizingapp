import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      I am Index Page
      <Link to='/note'>Go to Note Details Page</Link>
    </div>
  );
};

export default Index;
