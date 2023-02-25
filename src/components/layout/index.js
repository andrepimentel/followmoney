import "./style.css";

import { Story } from "../Story";
import { Post } from "../Post";
import { Suggestion } from "../Suggestion";

export function Layout({ increaseBalance, decreaseBalance }) {
  return (
    <>
      <div className="MainGrid">
        <div className="first-column" style={{ gridArea: "firstColumn" }}>
          <div className="box" style={{ margin: "30px 0" }}>
            <Post
              increaseBalance={increaseBalance}
              decreaseBalance={decreaseBalance}
            />
          </div>
        </div>
      </div>
    </>
  );
}
