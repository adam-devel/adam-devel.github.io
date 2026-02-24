---
publish: true
---

# Session 1

I was present ! we got [[isima - compilation - tp1 analyse lexicale.pdf|this pdf]] titled "lexical analysis".

We installed `flex`, `bison`, `gcc` and "Dev C++":
- "Dev C++" is an editor for writing text
- `gcc` is a compiler for turning C code into executable programs
- `flex` reads a description from `.l` file then generates C code. the C code makes a lexer following the description in the `.l` file.
	- a lexer is a program that scans text input and breaks it up into small parts called tokens.
- `bison` reads a grammar description from a `.y` file then generates C code. the C code makes a parser following the grammar rules in the `.y` file.
	- a parser is a program that takes tokens from a lexer and tries to builds a tree based on the grammar. it also report syntax errors when the input does not follow the grammar.

I personally prefer using neovim as my editor, and i already had flex, bison and gcc installed so i didn't have to do anything :)

We copied [[isima/isima - compilation - tp1 - demo.txt|this code]] (from the pdf), saved it in a file named `tp1.l` then we opened the terminal (powershell in windows).

In the terminlal we gave `flex` the file and it generated a tokenizer based on it:

```shell
flex tp1.l
```

---

These lab sessions are part of the [[Compiler Construction Course]], which belongs to the [[Compilation & Tests Unit]] of the [[4th Semester]] in the [[GLSI Major]] at the [[Higher Institute of Computer Science of Mahdia]] 