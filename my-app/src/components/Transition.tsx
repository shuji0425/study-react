import { useEffect, useState } from "react";
import HeavyList from "../hooks/useTransition";

const ManyItems = () => {
  const { list, isPending, addItems } = HeavyList();
  const [rotateDegree, setRotateDegree] = useState(0);
  const [isClockwise, setIsClockwise] = useState(true);

  const calculatePositions = () => {
    const radius = 150;
    const centerX = 200;
    const centerY = 200;
    const angleStep = (2 * Math.PI) / list.length;

    return list.map((_, index) => {
      const angle = index * angleStep;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      return { x, y };
    });
  };

  const positions = calculatePositions();

  // 回転
  const rotateCircle = () => {
    setIsClockwise((prev) => !prev);
  }

  // 回転を連続で実行
  useEffect(() => {
    const interval = setInterval(() => {
      setRotateDegree((prevDegree) => {
        return isClockwise ? prevDegree + 1 : prevDegree - 1;
      });
    }, 10);
    return () => clearInterval(interval);
  }, [isClockwise]);

  return (
    <div>
      <button onClick={() => {addItems(); rotateCircle();}} disabled={isPending} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        {isPending ? "Loading..." : "Add Items"}
      </button>
      <div className="grid grid-cols-50 gap-2">
        <svg width="400" height="400" style={{ border: "1px solid black" }}>
          <g transform={`rotate(${rotateDegree}, 200, 200)`}>
          {positions.map((pos, index) => (
            <circle key={index} cx={pos.x} cy={pos.y} r="10" fill="blue">
              <text x={pos.x} y={pos.y} fontSize="12" textAnchor="middle" fill="white">
                {list[index]}
              </text>
            </circle>
          ))}
          </g>
        </svg>
      </div>
    </div>
  );
}

export default ManyItems;