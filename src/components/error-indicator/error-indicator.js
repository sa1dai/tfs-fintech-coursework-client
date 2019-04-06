import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator alert alert-danger text-center">
      <strong>An error occured!</strong>
    </div>
  );
};

export default ErrorIndicator;
