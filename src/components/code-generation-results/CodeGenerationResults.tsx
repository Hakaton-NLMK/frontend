import React, { useState } from "react";
import * as DS from "@nlmk/ds-2.0";
import * as Babel from "@babel/standalone";
import { customExportDefaultPlugin } from "../../shared/babel-plugins/customExportDefaultPlugin";
import ErrorBoundary from "../error-boundary/ErrorBoundary";

interface GenerationResultsComponentProps {
  generatedCode: string;
}

const GenerationResultsComponent: React.FC<GenerationResultsComponentProps> = ({
  generatedCode,
}) => {
  const [Component, setComponent] = useState<React.FC | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [localGeneratedCode, setLocalGeneratedCode] = useState(generatedCode);

  const handleRender = () => {
    try {
      const codeWithReactImport = `import React from "react";\n${localGeneratedCode}`;

      const transformedCode = Babel.transform(codeWithReactImport, {
        presets: [
          "env",
          "react",
          ["typescript", { isTSX: true, allExtensions: true }],
        ],
        plugins: [
          "proposal-class-properties",
          "proposal-object-rest-spread",
          customExportDefaultPlugin,
        ],
      }).code;

      const module: { exports: { default: React.FC | null } } = {
        exports: { default: null },
      };
      const require = (name: string) => {
        if (name === "react") return React;
        if (name === "@nlmk/ds-2.0") return DS;
        throw new Error(`Module not found: ${name}`);
      };

      console.log(transformedCode);

      eval(
        `(function(require, module, exports) { ${transformedCode} })(require, module, module.exports);`
      );

      const ExportedComponent = module.exports.default;
      if (typeof ExportedComponent !== "function") {
        throw new Error("Exported component is not a valid React component");
      }

      setComponent(() => ExportedComponent);
      setError(null);
    } catch (error) {
      console.error("Invalid code:", error);
      setComponent(null);
      setError(error instanceof Error ? error.message : String(error));
    }
  };

  return (
    <DS.Grid>
      <DS.Grid.Row>
        <DS.Grid.Column width="100%">
          <DS.Typography variant="Heading4">Generated Code:</DS.Typography>
          <DS.Input
            multiline
            resize
            value={localGeneratedCode}
            onChange={(e) => setLocalGeneratedCode(e.target.value)}
            placeholder="Generated code will appear here"
          />
          <DS.Button onClick={handleRender}>Render</DS.Button>
        </DS.Grid.Column>
        <DS.Grid.Column width="100%">
          <DS.Typography variant="Heading4">Rendered UI:</DS.Typography>
          {error ? (
            <DS.Typography color="error">Error: {error}</DS.Typography>
          ) : (
            Component && (
              <ErrorBoundary>
                <Component />
              </ErrorBoundary>
            )
          )}
        </DS.Grid.Column>
      </DS.Grid.Row>
    </DS.Grid>
  );
};

export default GenerationResultsComponent;
