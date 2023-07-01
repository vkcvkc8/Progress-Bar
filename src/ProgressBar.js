import React, { useEffect, useState } from 'react';
import './style.css';

export default function ProgressBar({ duration }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrameId;
    let startTimestamp;

    const animateProgress = (timestamp) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }

      const progressDuration = timestamp - startTimestamp;
      const progressPercentage = Math.min(
        (progressDuration / duration) * 100,
        100
      );

      setProgress(progressPercentage);

      if (progressDuration < duration) {
        animationFrameId = requestAnimationFrame(animateProgress);
      }
    };

    animationFrameId = requestAnimationFrame(animateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [duration]);

  return (
    <div>
      <h1>Progress Bar</h1>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
