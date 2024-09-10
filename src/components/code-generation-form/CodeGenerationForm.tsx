import React, { useState } from "react";
import logo from "./logo.svg";
import styles from "./code-generation-form.module.css";

interface GenerateComponentResponse {
  // Define the expected structure of the API response
  // For example:
  component: string;
}

const CodeGenerationForm: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [generatedComponent, setGeneratedComponent] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setGeneratedComponent("");

    try {
      const response = await fetch(
        "http://84.201.147.205:8000/api/v1/generate-component",
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

      const data: GenerateComponentResponse = await response.json();
      setGeneratedComponent(data.component);
      setInputValue("");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setError(
        `There was a problem with the fetch operation: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
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
        <button type="submit" className={styles.btn}>
          RENDER
        </button>
      </form>
      {error && <div className={`${styles.error} error`}>{error}</div>}
      {generatedComponent && (
        <div className={styles.data}>
          <pre>{generatedComponent}</pre>
        </div>
      )}
    </div>
  );
};

export default CodeGenerationForm;
