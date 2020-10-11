import React from 'react'
import './ImageLinkForm.css'



const ImageLinkForm = () => {
  return (
    <div className='ma4 mt0'>
      <p className='f3'>
        {'This magic brain will detect faces in your picture. Give it a try'}
      </p>
      <div className='center'>
        <div className='pa4  center br2 shadow-5 form'>
          <input className='f4 pa2 w-70 center ' type="tex" />
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;