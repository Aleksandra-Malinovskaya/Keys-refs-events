import { useContext } from "react";
import ThemeContext from "./Context";

function ThemedComponent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === true ? 'black' : 'white',
        color: theme === false ? 'black' : 'white'
      }}
    >
      <h1>zzzzzzz</h1>
    </div>
  );
}

export default ThemedComponent;
