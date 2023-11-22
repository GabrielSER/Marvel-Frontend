import React from 'react';
import "./comicBorder.css"

const ComicPanel = ({ color, ...props }) => (
  <div
    className='box box1'
    style={{ backgroundColor: color }}
    {...props}
  />
);

export default ComicPanel;