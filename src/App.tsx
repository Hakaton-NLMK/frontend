import React from "react";
import "./App.css";
import CodeGenerationForm from "./components/code-generation-form/CodeGenerationForm";

const App: React.FC = () => {
  return (
    <div className="App">
      <CodeGenerationForm />
    </div>
  );
};

export default App;
