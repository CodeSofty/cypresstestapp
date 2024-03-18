import React, { useState } from 'react';
import Search from '../app/components/Search';
import DisplayContents from '../app/components/DisplayContents';

const Home: React.FC = () => {
  const handleSearch = (results: any[]) => {
    // handle search results
  };

  return (
    <main>
      <div className="container">
        <h1>Mini Search Engine</h1>
        <Search onSearch={handleSearch} />
        <DisplayContents /> 
      </div>
    </main>
  );
};

export default Home;
