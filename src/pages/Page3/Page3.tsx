import React from 'react';

const Page3 = () => {
  return (
    <div style={{ backgroundColor: 'green', width: '100vw', height: '100vh', fontSize: 40, color: '#fff' }}>
      Page3
      <p>{process.env.REACT_APP_TEST_KEY}</p>
    </div>
  );
};

export default Page3;
