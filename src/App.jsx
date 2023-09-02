import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");

    // Set the source attribute to the URL of the external script
    script.src = "https://pmerka.github.io/testScriptLoad/index.js";

    // Append the script to the document's body
    document.body.appendChild(script);

    // Optionally, you can add an event listener to handle script load or error events
    script.onload = () => {
      console.log("External script loaded");
    };

    script.onerror = () => {
      console.error("Failed to load external script");
    };

    // Clean up the script element when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <>
      {/*will print to console*/}
      <button onClick={() => myFunction("ABC")}>RUN SCRIPT</button>
    </>
  );
}

export default App;
