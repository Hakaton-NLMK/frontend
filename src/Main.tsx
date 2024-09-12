import React, { useState } from "react";
import CodeGenerationForm from "./components/code-generation-form/CodeGenerationForm";
import RenderFromSourceCode from "./components/render-from-source-code/RenderFromSourceCode";
import CodeGenerationResults from "./components/code-generation-results/CodeGenerationResults";
import * as DS from "@nlmk/ds-2.0";
import styles from "./main.module.css";
import Navbar from "./components/navbar/Navbar";

const Main: React.FC = () => {
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [isPasteMode, setIsPasteMode] = useState<boolean>(false);

  const handleCodeGeneration = (code: string) => {
    setGeneratedCode(code);
  };

  return (
    <>
      <Navbar />
      <DS.Grid className={styles.App}>
        <DS.Grid.Row>
          <DS.Grid.Column width="100%">
            <div className={styles.switchContainer}>
              <span>Сгенерировать код</span>
              <DS.Switch
                checked={isPasteMode}
                onChange={() => setIsPasteMode(!isPasteMode)}
              />
              <span>Вставить код</span>
            </div>
            {isPasteMode ? (
              <RenderFromSourceCode onCodeSubmission={handleCodeGeneration} />
            ) : (
              <CodeGenerationForm onCodeGeneration={handleCodeGeneration} />
            )}
            <DS.Divider />
            <CodeGenerationResults generatedCode={generatedCode} />
          </DS.Grid.Column>
        </DS.Grid.Row>
      </DS.Grid>
    </>
  );
};

export default Main;
