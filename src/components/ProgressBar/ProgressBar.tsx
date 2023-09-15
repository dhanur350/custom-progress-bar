import React, { useState, useEffect } from "react";
import classNames from 'classnames';
import './ProgressBar.scss';

interface Props {
  label?: string;
  progress?: number;
  status?: string;
  size?: "mini" | "tiny" | "small" | "big" | "large";
  colorClass?: string;
  pillShape?: boolean;
}


function ProgressBar(props: Props) {
  const {
    label,
    status, 
    size, 
    colorClass, 
    pillShape
  } = props;
  
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
    <div className="custom-progressBar">
      <span>{label}</span>
      <div className={classNames(["progress-container", size], {
        "progress-container-pill-shape": pillShape
      })}>
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          {`${progress}%`}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
