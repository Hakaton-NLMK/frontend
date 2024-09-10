import React, { useState } from "react";
import logo from "./logo.svg";
import styles from "./code-generation-form.module.css";
import { Spinner } from "@nlmk/ds-2.0";

const CodeGenerationForm: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [sourceCode, setSourceCode] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSourceCode("");
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
      setSourceCode(data);
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
        <input
          className={styles.input}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Введите код компонента / Write code component"
        />
        <button type="submit" className={styles.btn} disabled={isLoading}>
          RENDER
        </button>
      </form>
      {error && <div className={`${styles.error} error`}>{error}</div>}
      {sourceCode && (
        <div className={styles.data}>
          <pre>{sourceCode}</pre>
        </div>
      )}
      {isLoading && (
        <div className={styles.overlay}>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default CodeGenerationForm;
