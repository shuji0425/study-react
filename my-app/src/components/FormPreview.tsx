import { useFormContext } from "../context/FormContext";

export function FormPreview() {
  const { formData } = useFormContext();

  return (
    <div>
      <h2>入力内容の確認</h2>
      <p>名前：{formData.name}</p>
      <p>メールアドレス：{formData.email}</p>
    </div>
  )
}