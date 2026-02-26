---
publish: true
---

Every program, when executed, it is handed an [[Arrays|array]] of [[String|strings]] from the user. the program may read the strings and behave differently based on them. These strings are called "arguments", the purpose of which is to be a standard, convinent way to influence the behavior of the running program.

Example: the program `seq` (available on every linux system) produces sequences of numbers. calling it with the argument `10` like so: `seq 10`, causes it to print a sequence from 1 to 10. whereas `seq 5 3 20` prints every 3rd number from 5 to 20.

As programs and the arguments they take became more complex, an organizing principle naturally emerged among programmers: programs operate based on "options", which is an abstraction over arguments. an option can be specified with one or more arguments following the format `-x` to set the flag `x` to true, `-x=value` or `-xvalue` to set the flag `x` to a value. boolean options are called "flags".

Example: the `-l` flag in `ls -l` causes `ls` to list files in a *long* format.

With options becoming the defacto standard, programming languages included modules for parsing them.

- Python's standard library provides the module `argparse`
- Go provides the module `flag` for parsing arguments
- C provides `getopt`, `optarg`, `opterr`, `optind`, and `optopt`

Using `argparse` is python:

```python
import argparse
parser = argparse.ArgumentParser()
parser.add_argument("-v", action="store_true")
parser.add_argument("file")
args = parser.parse_args()
```

Using `flag` in go

```go
package main
import "flag"
func main() {
	verbose := flag.Bool("v", false, "verbose mode")
	file := flag.String("file", "", "input file")
	flag.Parse()
}
```

Using `opt*` in C

```c
#include <unistd.h>
int main(int argc, char *argv[]) {
    int v_flag = 0, opt;
    char *file = NULL;
    while ((opt = getopt(argc, argv, "v")) != -1) {
        if (opt == 'v') v_flag = 1;
    }
    if (optind < argc) file = argv[optind];
    // ...
}
```
