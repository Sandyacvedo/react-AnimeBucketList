import React from 'react'

import axios from 'axios'; //Module for request
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  
  const { data: images, loading } = useFetchGifs( category );
   
  return (
    <>
      <div className="container">
        {/* <h3 className="animate__animated animate__fadeIn">{category}</h3> */}
        {loading && (
          <p className="animate__animated animate__flash">loading...</p>
        )}
        <div className="card-Grid">
          {images.map((img) => {
            return <GifGridItem key={img.id} {...img} />;
          })}
        </div>
      </div>
    </>
  );
}

export default GifGrid