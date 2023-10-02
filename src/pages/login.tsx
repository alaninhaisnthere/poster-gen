import { signIn } from "next-auth/react";

function LoginPage() {
  return (
    <div>
      <h1>login</h1>
      <button onClick={() => signIn("spotify")}>Login com Spotify</button>
    </div>
  );
}

export default LoginPage;