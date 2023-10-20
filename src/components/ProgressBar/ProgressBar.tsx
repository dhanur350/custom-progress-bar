import React, { useState, useEffect, useRef } from "react";
import classNames from 'classnames';
import './ProgressBar.scss';
import { Popup, Progress } from "semantic-ui-react";

interface Props {
  label?: string;
  labelClassname?: string;
  progress?: number;
  status?: string;
  size?: any;
  colorClass?: string;
  pillShape?: boolean;
  isPrompted?: boolean;
}


function ProgressBar(props: Props) {
  const {
    status,
    size,
    colorClass,
    pillShape,
    isPrompted
  } = props;

  const [progress, setProgress] = useState<number>(14);
  const ref = useRef<any>(null);

  useEffect(() => {

  }, [])

  console.log(ref.current?.clientWidth);


  return (
    <div className={classNames(["custom-progressBar"], {
      "pill-shape": pillShape
    })}>
      <div style={{width: "100%"}}>
        <Progress className="progress-bar" percent={100} size={size} />
      </div>
      <Popup 
      content="this stage is delayed"
      position="top center"
      trigger={
        <div className="alert-progress"></div>
      }
      />
    </div>
  );
}

export default ProgressBar;
