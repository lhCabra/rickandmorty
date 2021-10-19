
import './Gallery.css';
import { CardComponent } from './CardComponent';
import React, { useState, useEffect } from 'react';
function Gallery() {
  let [data, setData] = useState(null)
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(d => setData(d))
  }, [])
  return (
    <div className='cont'>
      <div className='row'>
        {data && data.results.map((element) => (
          <CardComponent
            title={element.name}
            img={element.image}
            gender={element.gender}
            status={element.status}
            key={element.id}
          />))}
      </div>
    </div>

  );
}

export default Gallery;
