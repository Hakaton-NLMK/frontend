export function ensureReactImport(code: string): string {
  // Check if there's already a React import
  const reactImportRegex =
    /^import\s+(?:React,?\s*{[^}]*}|{[^}]*},?\s*React|React)\s+from\s+['"]react['"];?/m;

  if (reactImportRegex.test(code)) {
    // React is already imported, check if it has a default import
    const defaultImportRegex = /^import\s+React/m;
    if (defaultImportRegex.test(code)) {
      // Default import exists, no changes needed
      return code;
    } else {
      // Add default import to existing import
      return code.replace(/^import\s+{/, "import React, {");
    }
  } else {
    // No React import found, add a new one
    return `import React from 'react';\n${code}`;
  }
}
