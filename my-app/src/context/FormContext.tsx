import { createContext, useContext, ReactNode } from "react";
import { useForm } from "../hooks/useForm";

type FormContextType = ReturnType<typeof useForm>

const FormContext = createContext<FormContextType | null>(null);

export function FormProvider({children}: {children: ReactNode}) {
  const form = useForm();
  return <FormContext.Provider value={form}>{children}</FormContext.Provider>;
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext は FormProvider 内で使用してください");
  }
  return context;
}