import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Message() {
  const navigate = useNavigate();
  const [message] = useState([
    { id: "001", title: "消息1", content: "我爱世界" },
    { id: "002", title: "消息2", content: "我爱前端" },
    { id: "003", title: "消息3", content: "我爱JS" },
    { id: "004", title: "消息4", content: "我爱React" },
  ]);

  let showDetail = (item) => {
    navigate("detail", {
      state: {
        id: item.id,
        title: item.title,
        content: item.content,
      },
    });
  };

  return (
    <div>
      <ul>
        {message.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to="detail"
                state={{
                  id: item.id,
                  title: item.title,
                  content: item.content,
                }}
              >
                {item.title}
              </Link>
              <button
                onClick={() => {
                  showDetail(item);
                }}
              >
                查看详情
              </button>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}
