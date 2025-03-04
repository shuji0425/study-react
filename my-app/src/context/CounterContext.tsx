import { createContext, useContext, ReactNode } from "react";
import useCounter from "../hooks/useCounter";

// コンテキストの型
type CounterContextType = ReturnType<typeof useCounter>

// コンテキストの作成
const CounterContext = createContext<CounterContextType | null>(null);

export function CounterProvider({ children }: { children: ReactNode }) {
  const counter = useCounter();
  return <CounterContext.Provider value={counter}>{children}</CounterContext.Provider>
}

export function useCounterContext() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounterContext は CounterProvider 内で使用してください");
  }

  return context;
}