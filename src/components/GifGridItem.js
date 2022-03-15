import React, {useState} from 'react'

import ReactCardFlip from 'react-card-flip';

const GifGridItem = ({tittle, url }) => {

  const [isFlipped, setIsFlipped] = useState(false)

    // console.log(id, tittle, url);

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }
  return (
    <div className="card animate__animated animate__fadeIn">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div onClick={handleClick} className='frontCard'>
          <h1>PREVIEW</h1>
          {/* <button onClick={handleClick}>voltear</button> */}
        </div>
        <div className='backCard'>
          <a>
            <img src={url} title={tittle} />
            <div className='card_name'>
              <p>{tittle}</p>
            </div>
          </a>
          {/* <h4>grilla</h4> */}
          {/* { img.tittle } */}
          {/* <button onClick={handleClick}>voltear</button> */}
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default GifGridItem