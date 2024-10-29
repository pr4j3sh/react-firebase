export default function Signin() {
  return (
    <section className="flex flex-col items-center gap-4">
      <p>Sign In to your account.</p>

      <form>
        <input
          type="text"
          name="email"
          placeholder="email@example.com"
          value={""}
        />
        <input
          type="password"
          name="password"
          placeholder="your password"
          value={""}
        />
        <button type="submit">Sign In</button>
      </form>
    </section>
  );
}
