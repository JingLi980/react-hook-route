import React from "react";
import { useNavigate } from "react-router-dom";

export default function News() {
  const navigate = useNavigate();
  return (
    <ul>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
      <li>
        <button onClick={() => navigate("../../about")}>点击跳转about</button>
      </li>
    </ul>
  );
}
