import React from 'react';
import ProgressBar from './ProgressBar';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ProgressBar duration={3000} />
    </div>
  );
}
