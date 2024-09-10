import * as Babel from "@babel/standalone";

export const customExportDefaultPlugin = ({
  types: t,
}: {
  types: typeof Babel.types;
}) => ({
  visitor: {
    ExportDefaultDeclaration(path: any) {
      const declaration = path.get("declaration");
      if (declaration.isAssignmentExpression()) {
        const left = declaration.get("left");
        const right = declaration.get("right");
        if (
          left.isIdentifier() &&
          (right.isArrowFunctionExpression() || right.isFunctionExpression())
        ) {
          // Transform `export default App = () => (...)` to `const App = () => (...); export default App;`
          const variableDeclaration = t.variableDeclaration("const", [
            t.variableDeclarator(left.node, right.node),
          ]);
          const exportDefault = t.exportDefaultDeclaration(left.node);
          path.replaceWithMultiple([variableDeclaration, exportDefault]);
        }
      }
    },
  },
});
