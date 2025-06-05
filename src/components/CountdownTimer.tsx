import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 14,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return {
            ...prevTime,
            seconds: prevTime.seconds - 1
          };
        } else if (prevTime.minutes > 0) {
          return {
            minutes: prevTime.minutes - 1,
            seconds: 59
          };
        } else {
          // Reset timer when it reaches 0
          return {
            minutes: 14,
            seconds: 59
          };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    return time.toString().padStart(2, '0');
  };

  return (
    <div className="text-3xl font-bold text-white">
      {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
    </div>
  );
};

export default CountdownTimer;