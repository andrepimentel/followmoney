import { Top } from "../top";
import { Layout } from "../layout";
import "../../style/global.css";
import { useState } from "react";

function Home() {
  const [balance, setBalance] = useState(120);

  const increaseBalance = () => setBalance((balance) => balance + 1);
  const decreaseBalance = () => setBalance((balance) => balance - 1);

  return (
    <>
      <Top balance={balance} />
      <Layout
        increaseBalance={increaseBalance}
        decreaseBalance={decreaseBalance}
      />
    </>
  );
}

export default Home;
