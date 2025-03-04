import { useState } from "react";

type FormData = {
  name: string;
  email: string;
}

export function useForm() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: ""});

  const updateFormData = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return { formData, updateFormData };
}