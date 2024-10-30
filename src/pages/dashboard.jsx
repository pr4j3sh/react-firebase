import { useState } from "react";
import { postForm } from "../lib/utils";

export default function Dashboard() {
  const [formData, setFormData] = useState(postForm);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <section className="container">
      <article>
        <p className="font-bold">Hey user@email.com,</p>
        <p>Welcome to your Dashboard. Create, edit, delete posts.</p>
      </article>
      <span>
        <button className="secondary">Logout</button>
      </span>

      <p className="font-bold">create posts</p>
      <form method="post" onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          name="post"
          placeholder="what's on your mind?"
          value={formData.post}
          onChange={handleChange}
        />
        <span>
          <button className="secondary" type="submit">
            Send
          </button>
        </span>
      </form>
      <article>
        <p className="font-bold">your posts</p>
      </article>
    </section>
  );
}
