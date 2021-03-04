import React, { useState, useContext } from "react";
import GitHubContext from "../../context/github/GitHubContext";

const Search = (props) => {
  const githubContext = useContext(GitHubContext);
  const { setAlert } = props;
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search ...."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          name="submit"
          value="search"
          className="btn btn-dark btn-block"
        />
        {githubContext.users.length > 0 && (
          <button
            className="btn btn-block btn-light"
            onClick={githubContext.clearUsers}
          >
            clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
