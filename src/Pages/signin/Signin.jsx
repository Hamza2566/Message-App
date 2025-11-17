export default function SignIn() {
  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <input placeholder="Email" type="email" /><br />
        <input placeholder="Password" type="password" /><br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}