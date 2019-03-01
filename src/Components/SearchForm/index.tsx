import React, { Component } from "react";

interface IFormProps {
  children: JSX.Element[];
}

export default function SearchForm(props: IFormProps) {
  return (
    <div>
      {props.children}
    </div>)
}