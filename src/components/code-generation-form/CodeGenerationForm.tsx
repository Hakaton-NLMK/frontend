import React, { useState } from "react";
import logo from "./logo.svg";
import styles from "./code-generation-form.module.css";
import { Spinner, Button, Input } from "@nlmk/ds-2.0";

interface CodeGenerationFormProps {
  onCodeGeneration: (code: string) => void;
}

const CodeGenerationForm: React.FC<CodeGenerationFormProps> = ({
  onCodeGeneration,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://hackthonnlmk.ddns.net/api/v1/generate-component",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ description: inputValue }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data: string = await response.json();
      onCodeGeneration(data);
      setInputValue("");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setError(
        `There was a problem with the fetch operation: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.hero}>
      <img src={logo} className={styles.logo} alt="logo" />
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className={styles.input}
          label="Введите запрос для генерации интерфейса / Write request for UI generation"
        />
        <Button
          type="submit"
          className={styles.btn}
          disabled={isLoading || !inputValue}
        >
          Generate
        </Button>
      </form>
      {error && <div className={`${styles.error} error`}>{error}</div>}
      {isLoading && (
        <div className={styles.overlay}>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default CodeGenerationForm;
