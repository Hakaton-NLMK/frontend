import React, { useState } from "react";
import CodeGenerationForm from "./components/code-generation-form/CodeGenerationForm";
import CodeGenerationResults from "./components/code-generation-results/CodeGenerationResults";
import * as DS from "@nlmk/ds-2.0";
import styles from "./app.module.css";

const App: React.FC = () => {
  const [generatedCode, setGeneratedCode] = useState<string>("");

  const handleCodeGeneration = (code: string) => {
    setGeneratedCode(code);
  };

  return (
    <DS.Grid className={styles.App}>
      <DS.Grid.Row>
        <DS.Grid.Column width="100%">
          <CodeGenerationForm onCodeGeneration={handleCodeGeneration} />
          <DS.Divider />
          <CodeGenerationResults generatedCode={generatedCode} />
        </DS.Grid.Column>
      </DS.Grid.Row>
    </DS.Grid>
  );
};

export default App;
