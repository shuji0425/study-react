import { useState, useTransition } from "react";

const HeavyList = () => {
  const [list, setList] = useState<number[]>([]);
  const [isPending, startTransition] = useTransition();

  const addItems = () => {
    startTransition(() => {
      const randomLength = Math.floor(Math.random() * 30) + 1;
      const newItems = Array.from({ length: randomLength}, (_, i) => i + 1);
      setList(newItems);
    });
  };

  return { list, isPending, addItems };
};

export default HeavyList;