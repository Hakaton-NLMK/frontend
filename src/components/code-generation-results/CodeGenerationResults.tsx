import React from "react";
import * as DS from "@nlmk/ds-2.0";
import GeneratedSourceCode from "../generated-source-code/GeneratedSourceCode";
import GeneratedUi from "../generated-ui/GeneratedUI";

interface CodeGenerationResultsProps {
  generatedCode: string;
}

const CodeGenerationResults: React.FC<CodeGenerationResultsProps> = ({
  generatedCode,
}) => {
  return (
    <DS.Grid>
      <DS.Grid.Row>
        <DS.Grid.Column width="50%">
          <GeneratedSourceCode code={generatedCode} />
        </DS.Grid.Column>
        <DS.Grid.Column width="50%">
          <GeneratedUi code={generatedCode} />
        </DS.Grid.Column>
      </DS.Grid.Row>
    </DS.Grid>
  );
};

export default CodeGenerationResults;
