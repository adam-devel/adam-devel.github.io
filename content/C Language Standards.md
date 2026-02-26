---
publish: true
---
The standards history for the [[C Programming Language]]

# K&R C (C78)

In 1978, Brian Kernighan collaborated with Ritchie to co-author the book "The C Programming Language". The book served as the first informal C standard, referred to as K&R C (from their initials) or C78 (from the year of publication). The book's ISBN is 0131101633 and ISBN-13 is 9780131101630

This version of C is obsolete, please, don't use it.

for the book see [[KR C]]

# ANSI C (C89)

Also known as Standard C, C89, C90, "ANSI X3.159-1989" and "ISO/IEC 9899:1990".

In 1983, ANSI formed the working group "X3J11" under the technical committee "X3" to work on The C Programming Language Standard, code named _ANSI X3.159_.

Drafts of the Standard were available as early as 1985 and 1986 (known as C85 and C86). informed by the drafts, the 2nd edition of "The C Programming Language" (known as K&R2) got updated for compliance with the standard and got published in the same year.

In 1989 ANSI Published the first official C standard: ANSI X3.159-1989, [^WikiAnsiC] Known as _C89_, _Standard C_, or _ANSI C_.

Around 1990, the development of C transitioned from ANSI's X3J11 working group to The International Organization for Standardization (ISO) and International Electrotechnical Commission (IEC)'s shared Joint Technical Committee (JTC1), which houses Subcommittee 22 (SC22). within which lies Working Group 14,[^WG14] the entity responsible for "Programming Language C", code named ISO/IEC JTC1/SC22/WG14, or in short ISO/IEC 9899.

In the same year ISO republished then withdrawn ANSI's C standard as an international standard, code named "ISO/IEC 9899:1990" (known as _C90_). ANSI's C is exactly the same standard as the one republished by ISO.

see [[KR C 2nd edition]] for the book and the solutions to the exercises.


[^WG14]: <https://www.open-std.org/jtc1/sc22/wg14/>
[^WikiAnsiC]: <https://en.wikipedia.org/wiki/ANSI_C>

+ Rationale: <http://www.lysator.liu.se/c/rat/title.html>
+ Defect Reports (also called Clarification Requests)
    + <https://www.open-std.org/jtc1/sc22/wg14/www/docs/c90_drs.html>
    + <https://www.open-std.org/jtc1/sc22/wg14/www/docs/dr.htm>
+ Corrigenda:
    1. <https://www.open-std.org/jtc1/sc22/wg14/www/docs/tc1.htm>
    2. <https://www.open-std.org/jtc1/sc22/wg14/www/docs/tc2.htm>
+ Draft: <https://port70.net/~nsz/c/c89/c89-draft.html>


# C95

in 1994 ISO started working on an ammendment to ANSI C.
in 1995 C95 or officially "ISO/IEC 9899:1990/AMD1:1995" was published.

C95 is referred to as C94 sometimes.

+ Added diagraphs and wide-character support
+ Corrected some inconsistecies, corrigenda seems unvailable online

# C99

in 1999 ISO published "ISO/IEC 9899:1999", known as C99, formerly C9X (during development)

+ Rationale:
  + <https://www.open-std.org/jtc1/sc22/wg14/www/docs/n897.pdf>
  + <http://pllab.cs.nthu.edu.tw/cs340402/readings/c/c9x_standard.pdf>

+ Errors in the standard were corrected in 3 Technical Corrigenda
  1. 2001: ISO/IEC 9899:1999/Cor.1:2001
  2. 2004: ISO/IEC 9899:1999/Cor.2:2004
  3. 2007: ISO/IEC 9899:1999/Cor.3:2007
+ Highlights
  + Added One-line comments starting with `//`
  + Added Designated initializers
  + Added Variable-length arrays
  + Added standard integers `int8_t`, `uint8_t`
  + Added Flexible array members
+ Defect Reports
  + <https://www.open-std.org/jtc1/sc22/wg14/www/docs/c99_drs.html>
+ Summarized Changelog
  + <https://en.wikipedia.org/wiki/C99>
  + <https://en.cppreference.com/w/c/99>
  + <https://gcc.gnu.org/c99status.html>
+ Draft
    + N1256: <https://port70.net/>~nsz/c/c99/n1256.html

# C11

in 2011 ISO published "ISO/IEC 9899:2011", known as C11, formerly C1X

+ Added Multithreading and Atomic operations
+ Added Anonymous structs and unions
+ Added Unicode support

+ Changelog
  + <https://en.cppreference.com/w/c/11>
  + <https://en.wikipedia.org/wiki/C11_(C_standard_revision)>

+ Defect reports 
  + <https://www.open-std.org/jtc1/sc22/wg14/www/docs/n2244.htm>
  + <https://www.open-std.org/jtc1/sc22/wg14/www/docs/summary.htm>

+ Latest Draft (N1570): 
  + <https://port70.net/~nsz/c/c11/n1570.html>
  + <https://www.iso-9899.info/n1570.html>
  + <https://www.open-std.org/jtc1/sc22/WG14/www/docs/n1570.pdf>

# C17

in 2018 ISO published "ISO/IEC 9899:2018", known as C17 and rarely C18 or C1X.

C17 didn't add anything, it fixed many defects from C11. GCC treats C11 and C17 as being the same.

+ Defect Reports: <https://www.open-std.org/jtc1/sc22/wg14/www/docs/n2396.htm>
+ Draft: <https://www.open-std.org/jtc1/sc22/wg14/www/docs/n2310.pdf>
+ Changelog
  + <https://en.cppreference.com/w/c/11>
  + <https://en.wikipedia.org/wiki/C17_(C_standard_revision)>

# C23

C23 or C2X, officially "ISO/IEC 9899:2023" is the latest C standard, a draft is available at the time of writing, but no official releases yet.

+ Latest additions: Designated initializers for bit-fields, Inline variables
  + Added `true` and `false` keywords, no more `0`s and `1`s
  + Added syntax for binary encoded integers with `0b` and `0B`
  + Added a null pointer type `nullptr_t` and a constant value `nullptr`
  + Added a digit separator `'` syntax for literal constants: `12'234'567`
  + Static initialization for aggregate types, Memory allocation functions with explicit alignment
  + Changelog
    + <https://en.wikipedia.org/wiki/C23_(C_standard_revision)>
    + <https://en.cppreference.com/w/c/23>
+ Draft:
  + N3047: <https://www.iso-9899.info/n3047.html>

# Extra Links

+ <https://en.wikipedia.org/wiki/C_(programming_language)>
+ <https://www.iso-9899.info/wiki/The_Standard>
+ <https://en.cppreference.com/w/c>
+ <https://port70.net/>~nsz/c>
+ <https://gcc.gnu.org/onlinedocs/gcc/Standards.html#C-Language>
+ <https://gcc.gnu.org/readings.html>
+ <https://www.bell-labs.com/usr/dmr/www/chist.html> / <https://www.bell-labs.com/usr/dmr/www/chist.pdf>
