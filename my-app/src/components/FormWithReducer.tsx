import React, { useReducer } from "react";

// メールアドレスの正規表現
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

type Action = 
| { type: "SET_FIELD"; name: string; value: string}
| { type: "SET_ERROR"; error: string;}
| { type: "SET_SUCCESS"; successMessage: string;}
| { type: "RESET"};

interface FormState {
  name: string;
  email: string;
  error: string;
  successMessage: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  error: "",
  successMessage: "",
};

// Reducer関数
const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.name]: action.value };
    case "SET_ERROR":
      return { ...state, error: action.error };
    case "SET_SUCCESS":
      return { ...state, successMessage: action.successMessage };
    case "RESET":
      return { ...initialState }
    default:
      return state;
  }
};

const FormWithReducer = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch({ type: "SET_FIELD", name, value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // バリデーション
    if (state.name.trim() === "") {
      dispatch({ type: "SET_ERROR", error: "名前は必須です！" });
      return;
    }

    if (!emailRegex.test(state.email)) {
      dispatch({ type: "SET_ERROR", error: "メールアドレスが正しい形式ではありません！" });
      return;
    }

    dispatch({ type: "SET_ERROR", error: "" });
    dispatch({
      type: "SET_SUCCESS",
      successMessage: `送信されたデータ:\n名前: ${state.name}\nメール: ${state.email}`,
    });
    setTimeout(() => {
      dispatch({ type: "RESET" });
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">名前:</label>
        <input type="text" name="name" id="name" value={state.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">メールアドレス:</label>
        <input type="email" name="email" id="email" value={state.email} onChange={handleChange} />
      </div>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state.successMessage && <p style={{ color: "green" }}>{state.successMessage}</p>}
      <button type="submit">送信</button>
    </form>
  );
};

export default FormWithReducer;