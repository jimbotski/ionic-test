import React from 'react';
import './ExploreContainer.css';
import { Link } from 'react-router-dom';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <Link to="/test">Test</Link>
    </div>
  );
};

export default ExploreContainer;
