import React, { useState, useEffect } from "react";
import * as DS from "@nlmk/ds-2.0";
import * as Babel from "@babel/standalone";
import { customExportDefaultPlugin } from "../../shared/babel-plugins/customExportDefaultPlugin";
import ErrorBoundary from "../error-boundary/ErrorBoundary";

interface GeneratedUiProps {
  code: string;
}

const GeneratedUi: React.FC<GeneratedUiProps> = ({ code }) => {
  const [Component, setComponent] = useState<React.FC | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (code) {
      renderComponent(code);
    }
  }, [code]);

  const renderComponent = (code: string) => {
    try {
      const codeWithReactImport = `import React from "react";\n${code}`;

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

      eval(
        `(function(require, module, exports) { ${transformedCode} })(require, module, module.exports);`
      );

      const ExportedComponent = module.exports.default;
      if (typeof ExportedComponent !== "function") {
        throw new Error("Exported component is not a valid React component");
      }

      setComponent(() => ExportedComponent);
      setError(null);
      setKey((prevKey) => prevKey + 1); // Increment key to reset ErrorBoundary
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
          <DS.Typography variant="Subheading3" style={{ textAlign: "center" }}>
            Rendered UI
          </DS.Typography>
          {error ? (
            <DS.Typography color="error">Error: {error}</DS.Typography>
          ) : (
            Component && (
              <ErrorBoundary key={key}>
                <Component />
              </ErrorBoundary>
            )
          )}
        </DS.Grid.Column>
      </DS.Grid.Row>
    </DS.Grid>
  );
};

export default GeneratedUi;
