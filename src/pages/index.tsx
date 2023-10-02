import router from "next/router";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) router.push("/login");
  }, []);

  return (
    <div>
      <h1>Teste home</h1>
    </div>
  );
};

export default Index;
