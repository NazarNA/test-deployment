import React from 'react';

const Page2 = () => {
  return (
    <div style={{ backgroundColor: 'blue', width: '100vw', height: '100vh', fontSize: 40, color: '#fff' }}>
      Page2
      <p>{process.env.REACT_APP_TEST_KEY}</p>
    </div>
  );
};

export default Page2;
