import React from 'react'

const Banner2 = ({image}) => {
  return (
    <div style={{padding:'20px 0'}}>
      <div className=" ">
        <img
          src={image}
          alt=""
          height={300}
          width={'100%'}
        />
      </div>
    </div>
  )
}

export default Banner2
