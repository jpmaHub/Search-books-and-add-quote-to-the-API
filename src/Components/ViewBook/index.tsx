import React, { Component } from "react";

interface IBooksProps {
  children: JSX.Element;
}

export default function ViewBook(props: IBooksProps) {
  return (
    <div
      data-test="viewBook">
      {props.children}
    </div>
  );
}