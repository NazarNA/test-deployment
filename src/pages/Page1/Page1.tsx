import React from 'react';

const Page1 = () => {
  return (
    <div style={{ backgroundColor: 'red', width: '100vw', height: '100vh', fontSize: 40, color: '#fff' }}>
      Page 1<p>{process.env.REACT_APP_TEST_KEY}</p>
    </div>
  );
};

export default Page1;
