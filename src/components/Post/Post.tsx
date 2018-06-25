import * as React from "react";

export interface IPostProps {
  title: string;
  body: string;
}

export default class Post extends React.Component<IPostProps> {
  constructor(props: IPostProps) {
    super(props);
  }
  public render(): JSX.Element {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>{this.props.body}</div>
      </div>
    );
  }
}
