export default function SignUp() {
  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <input placeholder="Username" /><br />
        <input placeholder="Email" type="email" /><br />
        <input placeholder="Password" type="password" /><br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}