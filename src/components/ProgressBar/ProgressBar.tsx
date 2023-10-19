import React, { useState, useEffect } from "react";
import classNames from 'classnames';
import './ProgressBar.scss';
import { Progress } from "semantic-ui-react";

interface Props {
  label?: string;
  labelClassname?: string;
  progress?: number;
  status?: string;
  size?: "mini" | "tiny" | "small" | "big" | "large";
  colorClass?: string;
  pillShape?: boolean;
}


function ProgressBar(props: Props) {
  const {
    status,
    size,
    colorClass,
    pillShape
  } = props;

  const [progress, setProgress] = useState<number>(14);

  return (
    <div className="custom-progressBar">
      <Progress percent={progress}/>
      <div className={classNames([])}></div>
    </div>
  );
}

export default ProgressBar;
