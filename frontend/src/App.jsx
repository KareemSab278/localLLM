export { App };

import { InputField } from "./components/InputField";

  const bodyStyle = { width: "90%", margin: "0 auto" };

  
function App() {
  return <section style={bodyStyle}>
    <InputField />
    <h1>Hi, I'm Jarvis Jr</h1>
    <p>(not Jarvis from Iron Man)</p>
  </section>;
}
