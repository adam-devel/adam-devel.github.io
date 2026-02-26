---
publish: true
---

%% no enough materials to warrant this heading

**Materials/Resources**

1. [[isima - compilation - tp1 intiation into flex and lexical analysis.pdf|intiation into flex and lexical analysis]]
%%

See the summary on [[Compiler Construction, Sessions Summary]]

# Session 1

We got [[isima/isima - compilation - tp1 intiation into flex and lexical analysis.pdf|this pdf]] titled "TP1: intiation into flex and lexical analysis" from the professor through a USB drive.

As instructed by the pdf, we installed `flex`, `bison`, `gcc` and "Dev C++"

> useful infornation that isn't part of the session:
> - "Dev C++" is an editor for writing text
> - `gcc` is a compiler for transforming C code into executable programs
> - `flex` reads a description from a `.l` file then generates C code. the C code makes a lexer according the description in the `.l` file.  
>   a lexer is a program that scans text input and breaks it up into small parts called tokens.
> - `bison` reads a grammar description from a `.y` file then generates C code. the C code makes a parser according the grammar rules in the `.y` file.  
>   a parser is a program that reads tokens from a lexer and tries to builds a tree based on a grammar. it also report syntax errors when the input does not follow the grammar.
>
> ![[isima - compiler construction - lab sessions - flex and bison.png]]

I personally prefer using neovim as my editor, and i already had `flex`, `bison` and `gcc` installed so i didn't have to do anything :)

We copied [[isima/isima - compilation - tp1 - demo.txt|this code]] (from the pdf), saved it in a file named `tp1.l` then we opened the terminal (powershell in windows).

In the terminlal we gave `flex` the file and it generated a tokenizer based on it:

```shell
flex tp1.l
```

The code in `tp1.l` describes a lexer that counts the number of vowels, consonants and punctuation.

# Session 2

I wasn't present

---

> [!NOTE] Relations
> These lab sessions are part of the [[Compiler Construction Course|compiler construction course]], which is part of the [[Compilation & Tests Module|compilation & tests module]].
> 
> Taught during the 4th semester of the GLSI program of ISIMA.

>[!NOTE] Template
>This note is derived from the template [[Sessions Template]]
