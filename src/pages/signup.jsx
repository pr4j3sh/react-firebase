import { useState } from "react";
import { Link } from "react-router-dom";
import { authForm } from "../lib/utils";

export default function Signup() {
  const [formData, setFormData] = useState(authForm);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <section className="flex flex-col items-center gap-4">
      <section className="w-full md:w-1/2">
        <p className=" font-bold">Create a new account.</p>
      </section>
      <section className="w-full md:w-1/2 flex flex-col gap-2">
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </section>
      <hr className="w-full md:w-1/2" />
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email@example.com"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="your password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
      <section className="w-full md:w-1/2">
        <p>
          Already have an account? <Link to="/auth">Sign In</Link>{" "}
        </p>
        <Link to="/">Go to home</Link>
      </section>
    </section>
  );
}