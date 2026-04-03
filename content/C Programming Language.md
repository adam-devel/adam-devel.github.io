---
publish: true
---
# History

C is a programming language, created by Dennis M. Ritchie at Bell Labs between 1972 and 1973.

The development of the popular Unix operating system in C popularized the language.

while collaborating with Ritchie on developing Unix, Thompson’s requirements during this period, along with contributions from Brian Kernighan, shaped C’s development.

Read [[The Development of the C Language - by Dennis Ritchie]] to learn about C's development.

# Standardization

Later, C was standardized by ANSI and ISO, with C99 becoming a commonly targeted standard.

The standard defines the syntax and semantics of the language, the standard library and linking details

I document a list of C standards at [[C Language Standards]]

# The Language

What I consider to be the language is the syntax and more importantly semantics of C.

- [[C Language - Overloading]]
- [[C Language - Nested Structs]]
- [[C Language - Function Calls]]
- [[C Language - Attributes]]

# The Standard Library

There are many implementations of the C standard library, you can use "glibc", "msul", Microsoft's C standard library, etc..

For a comparison visit https://www.etalabs.net/compare_libcs.html

# Linking

- [[C language - Compilation Unit]]
- [[C Language - Versioned Shared Libraries]]

# Platform Libraries

OSs offer their own standard libraries in addition to C's, for intance, Windows offers the "Win32 API", and Linux, MacOS and the BSDs offer the "POSIX compliant syscalls". however Linux, MacOS and the BSDs offer some extra functions not covered by POSIX.

# External Libraries

In addition to the functions provided by the standard library and the platform (the OS), programmers may use external libraries.