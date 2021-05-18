import React, { useEffect } from 'react';
import './Toast.scss';

const Toast = ({ toastNotification, setToastNotification }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setToastNotification(false);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [toastNotification]);

  return (
    <div className="card-notification-badge">
      <span>Item added to cart!</span>
    </div>
  );
};

export default Toast;
