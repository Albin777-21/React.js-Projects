import { useContext } from "react";
import { GlobalContext } from "../context";

function ContextTextComponent() {
  const { theme } = useContext(GlobalContext);
  return (
    <h2
      style={{
        fontSize: theme === "light" ? "50px" : "100px",
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "blue" : "orange",
      }}
    >
      Albin Thomas Saji
    </h2>
  );
}
export default ContextTextComponent;
