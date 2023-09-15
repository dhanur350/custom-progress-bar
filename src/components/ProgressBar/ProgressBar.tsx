import React, { useState, useEffect } from "react";
import classNames from 'classnames';
import './ProgressBar.scss';

interface Props {
  progress?: number;
  status?: string;
  size?: "mini" | "tiny" | "small" | "big" | "large";
  colorClass?: string;
}


function ProgressBar() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(interval);
      }
    }, 100); 

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  return (
    <div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          {`${progress}%`}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
