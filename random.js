let randomCode = Math.random();
const library = ["abstract", "assert", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "default", "do", "double", "else", "enum", "extends", "false", "final", "finally", "float", "for", "goto", "if", "implements", "import", "instanceof", "int", "interface", "long", "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "true", "try", "void", "volatile", "while", "async", "await", "let", "const", "var", "function", "yield", "debugger", "eval", "import", "export", "from", "in", "instanceof", "break", "continue", "throw", "try", "catch", "finally", "public", "private", "protected", "interface", "extends", "super", "new", "delete", "import", "module", "default", "case", "for", "while", "do", "switch", "return", "class", "if", "else", "elif", "except", "raise", "finally", "None", "True", "False", "and", "or", "not", "is", "lambda", "pass", "break", "continue", "def", "yield", "self", "del", "try", "except", "with", "global", "nonlocal", "assert", "open", "read", "write", "file", "print", "input", "str", "int", "float", "list", "tuple", "dict", "set", "range", "map", "filter", "reduce", "lambda", "import", "from", "as", "raise", "assert", "finally", "global", "del", "nonlocal", "print", "def", "class", "in", "continue", "exit", "import", "re", "assert", "test", "run", "sync", "async", "await", "fetch", "export", "require", "module", "require", "assert", "goto", "default", "interface", "sealed", "finalize", "const", "volatile", "package"];

const newLibrary = [...new Set(library)];
randomChoice = Math.floor(Math.random() * library.length);

const selectKeyword = library[randomChoice];


console.log("The random keyword is: ", selectKeyword);


