import { useEffect, useState } from "react";
import HeavyList from "../hooks/useTransition";
import useRotation from "../hooks/useRotation";

const ManyItems = () => {
  const { list, isPending, addItems } = HeavyList();
  const [isClockwise, setIsClockwise] = useState(true);

  const calculatePositions = () => {
    const radius = 250;
    const centerX = 300;
    const centerY = 300;
    const angleStep = (2 * Math.PI) / list.length;

    return list.map((_, index) => {
      const angle = index * angleStep;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      return { x, y };
    });
  };

  // 円の配置
  const positions = calculatePositions();
  // 円を回す
  const rotateDegree = useRotation(isClockwise);

  // 回転
  const rotateCircle = () => {
    setIsClockwise((prev) => !prev);
  }

  return (
    <div>
      <button onClick={() => {addItems(); rotateCircle();}} disabled={isPending} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        {isPending ? "Loading..." : "Add Items"}
      </button>
      <div className="grid grid-cols-50 gap-2">
        <svg width="600" height="600" style={{ border: "1px solid black" }}>
          <g transform={`rotate(${rotateDegree}, 300, 300)`}>
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