import React, { useState } from "react";
import { useFormContext } from "../context/FormContext";

// メールの正規表現
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const FormWithMultipleInputs = () => {
  const { formData, updateFormData } = useFormContext();
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessMessage("");

    // バリデーションを分割
    if (formData.name.trim() === "") {
      setError("名前は必須です！");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setError("メールアドレスが正しい形式ではありません！");
      return;
    }

    setError("");
    setSuccessMessage(
      `送信されたデータ:\n名前: ${formData.name}\nメール: ${formData.email}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="sm:col-span-4">
        <label
          htmlFor="name"
          className="block text-sm/6 font-medium text-wite-900"
        >
          名前:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          value={formData.name}
          onChange={(e) => updateFormData("name", e.target.value)}
        />
      </div>
      <div className="sm:col-span-4">
        <label
          htmlFor="email"
          className="block text-sm/6 font-medium text-wite-900"
        >
          メールアドレス:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          value={formData.email}
          onChange={(e) => updateFormData("email", e.target.value)}
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <div className="mt-2">
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          送信
        </button>
      </div>
    </form>
  );
};

export default FormWithMultipleInputs;
