import * as React from "react";

export interface IHelloProps {}
export interface IHelloState {}

export default class Hello extends React.Component<IHelloProps, IHelloState> {
  render(): JSX.Element {
    return <div />;
  }
}
