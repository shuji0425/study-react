import React from "react";

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({ value, onChange }: Props) => {
  return <input type="text" value={value} onChange={onChange} />
}

export default TextInput;