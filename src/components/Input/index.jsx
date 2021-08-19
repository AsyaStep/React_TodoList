import React from "react";
import "./style.scss";

export default function Input({ placeholderStr, type, id, value, onChange }) {
  return (
    <input
      placeholder={placeholderStr}
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      required
    />
  );
}
