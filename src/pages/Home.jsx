import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="container">
      <article>
        <p className="font-bold">Hey there,</p>
        <p>
          This is a reactjs + firebase template, with tailwindcss, oauth,
          email-password authentication and crud operations with firebase
          firestore.
        </p>
      </article>
      <article>
        <p>
          Use this template via <code>@pr4j3sh/frames</code>
        </p>
        <pre>npm create @pr4j3sh/frames react-firebase myapp</pre>
      </article>
      <div className="flex gap-2">
        <Link to="/auth">
          <button>Get started</button>
        </Link>
        <a href="" target="_blank">
          <button className="secondary">Github</button>
        </a>
      </div>
    </section>
  );
}
