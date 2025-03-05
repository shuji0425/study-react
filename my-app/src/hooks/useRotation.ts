import { useState, useEffect } from "react";

const useRotation = (isClockwise: boolean) => {
  const [rotateDegree, setRotateDegree] = useState(0);

  // 回転を連続で実行
  useEffect(() => {
    const interval = setInterval(() => {
      setRotateDegree((prevDegree) => {
        return isClockwise ? prevDegree + 1 : prevDegree - 1;
      });
    }, 10);
    return () => clearInterval(interval);
  }, [isClockwise]);

  return rotateDegree;
};

export default useRotation;