import React, { useState } from "react";
import { Button, Input } from "@nlmk/ds-2.0";
import styles from "./render-from-source-code.module.css";

interface RenderFromSourceCodeProps {
  onCodeSubmission: (code: string) => void;
}

const RenderFromSourceCode: React.FC<RenderFromSourceCodeProps> = ({
  onCodeSubmission,
}) => {
  const [sourceCode, setSourceCode] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSourceCode(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCodeSubmission(sourceCode);
    setSourceCode("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          className={styles.input}
          type="text"
          value={sourceCode}
          onChange={handleInputChange}
          label="Вставьте исходный код"
          multiline
        />
        <Button type="submit" className={styles.btn} disabled={!sourceCode}>
          Отобразить
        </Button>
      </form>
    </div>
  );
};

export default RenderFromSourceCode;
