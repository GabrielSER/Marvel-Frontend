import React from 'react';

const StatLogo = ({ image, text }) => {
  return (
    <div>
      {image && (
        <div
          style={{
            position: 'relative',
            marginTop: '20px',
            width: '80px', // Set a fixed width
            height: '80px', // Set a fixed height
          }}
        >
          <img
            src={image}
            alt="Selected Logo"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              width: '100%', // Ensure the image takes the full width of the container
              height: '100%', // Ensure the image takes the full height of the container
            }}
          />

          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'black',
            }}
          >
            <h2>{text}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatLogo;
