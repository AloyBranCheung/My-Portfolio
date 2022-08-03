import React from "react";
import FullBlog from "../../../components/blog/blog-fullpage/FullBlog";

export default function index() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FullBlog />
    </div>
  );
}
