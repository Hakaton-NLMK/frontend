import React from "react";
import * as DS from "@nlmk/ds-2.0";

interface GeneratedSourceCodeProps {
  code: string;
}

const GeneratedSourceCode: React.FC<GeneratedSourceCodeProps> = ({ code }) => {
  return (
    <DS.Grid>
      <DS.Grid.Row>
        <DS.Grid.Column width="100%">
          <DS.Typography variant="Subheading3" style={{ textAlign: "center" }}>
            Generated Source Code
          </DS.Typography>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              margin: 0,
              padding: "16px",
              backgroundColor: "#f5f5f5",
              borderRadius: "4px",
              fontSize: "14px",
              lineHeight: "1.5",
            }}
          >
            {code || "Generated code will appear here"}
          </pre>
        </DS.Grid.Column>
      </DS.Grid.Row>
    </DS.Grid>
  );
};

export default GeneratedSourceCode;
