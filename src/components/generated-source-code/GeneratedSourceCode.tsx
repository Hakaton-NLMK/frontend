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
          <DS.Typography variant="Heading4">
            Generated Source Code:
          </DS.Typography>
          <DS.Input
            multiline
            resize
            value={code}
            readOnly
            placeholder="Generated code will appear here"
          />
        </DS.Grid.Column>
      </DS.Grid.Row>
    </DS.Grid>
  );
};

export default GeneratedSourceCode;
