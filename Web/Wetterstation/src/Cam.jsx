import React from 'react';

const Stream = () => {
    return (
      <div>
        <h1>Live Video</h1>
        <img
          src="http://10.10.0.152:4000/cam"
          alt="Live Video Feed"
          style={{ width: '640px', height: '480px' }}
        />
      </div>
    );
}

export default Stream;

