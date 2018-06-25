import * as React from "react";

export default class PostForm extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <div>
        <h1>Add Post</h1>
        <div>
          <form>
            <div>
              <label htmlFor="newPostTitle">Title:</label>
              <input type="text" name="title" id="newPostTitle" />

              <label htmlFor="newPostBody">Body:</label>
              <textarea name="body" id="newPostBody" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
