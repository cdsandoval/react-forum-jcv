import React from "react";

function DiscussionForm() {
  function JSONify(elements) {
    var obj = {};
    for (var i = 0; i < elements.length; ++i) {
      var element = elements[i];
      var name = element.name;
      var value = element.value;
      if (name) {
        obj[name] = value;
      }
    }
    return obj;
  }

  const [discussions, setDiscussions] = React.useState([]);

  // const author = localStorage.getItem(user[username]); => for when we have a user stored in the local storage
  const discussion = { ID: Date.now(), author: "yo", date: new Date() };
  const comments = { comments: [] };

  function handleSubmit(event) {
    event.preventDefault();
    const data = JSONify(event.target.elements);
    Object.assign(discussion, data);
    Object.assign(discussion, comments);
    console.log(discussion);
    setDiscussions(discussions.concat(discussion));
    console.log(discussions);
    // localStorage.setItem("discussion", JSON.stringify(discussion));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        name="title"
        type="text"
        id="title"
        aria-label="Enter discussion title"
        placeholder="Enter discussion title"
        required
        autoComplete="off"
      />
      <label htmlFor="body">Body</label>
      <input
        name="body"
        type="text"
        id="body"
        aria-label="Enter discussion body"
        placeholder="Enter discussion body"
        required
        autoComplete="off"
      />
      <input type="submit" value="Create!" />
    </form>
  );
}

export default DiscussionForm;
