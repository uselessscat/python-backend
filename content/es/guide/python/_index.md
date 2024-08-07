---
title: 1. Python
weight: 2
---
1. basic data types
   1. [variables and assignments](guide/python/basic_types/variables_assignments)
   2. [booleans](guide/python/basic_types/booleans)
   3. numeric
      1. int
      2. [float, decimal, fractions](guide/python/basic_types/float)
      3. [complex](guide/python/basic_types/complex)
   4. strings, multiline strings, raw strings
   5. objects
   6. none and sentinel values
   7. hashables
2. operators
   1. arithmetic
   2. comparison
   3. logical
   4. bitwise
   5. identity
   6. membership
   7. assignment
   8. walrus
   9. operator module
   10. del
3. control flow
   1. if, else, for, for-else, while
   2. pass, continue, break
   3. match
4. functions
   1. namespaces
   2. scopes, global, nonlocal
   3. basics
   4. default values
   5. keyword, positional arguments
   6. special parameters
   7. argument lists
   8. lambda, anonymous functions
5. data structures
   1. list
   2. stack
   3. queues
   4. deques
   5. tuples
   6. set
   7. dicts and mappings
   8. unpacking
   9. comparison between data structures
6. iterators and generators
   1. sequence
   2. iterator vs iterable
   3. iter, next, len, reversed
   4. yield, yield from
   5. generator expressions
   6. slices
7. [comprehensions](7-comprehensions.md)
8. memory views
   1. buffer protocol
   2. memoryview
   3. dict views
9. exceptions
   1. try, except, else, finally
   2. raise
   3. custom exceptions
   4. chaining
   5. groups
   6. notes
   7. context
10. builtins
    1. keywords
    2. functions
    3. constants
       1. True, False, None
       2. NotImplemented
       3. Ellipsis
       4. debug
    4. types
    5. exceptions
    6. standard type hierarchy
11. modules
    1. import, absolute, relative, *, from
    2. search paths
    3. module inspection and dir()
    4. packages and init.py
    5. standard modules
       1. input/output
       2. os
       3. io
       4. shutil
       5. argparse
       6. math, cmath, random, statistics
       7. collections
       8. collections.abc
       9. enum
       10. array
       11. copy
       12. curses
    6. cli modules
    7. import system
12. logging
    1. logging levels, config, handlers, formatters
    2. open telemetry
13. time and date
    1. datetime, time
    2. calendar
14. string manipulation
    1. operators
       1. multiplication
       2. concatenation
    2. formatting, formatted string literals, format()
    3. bytes and bytearrays
    4. format specification mini-language
    5. textwrap
    6. difflib
    7. unicode and encodings
    8. uuid
15. regular expressions
    1. re syntax
    2. re flags
    3. re module and methods
    4. re vs other parsing methods
16. oop
    1. classes
    2. attributes and methods
    3. class/ instance attributes
    4. attribute lookup prioritization
    5. attribute hiding, conventions
    6. instantiation routine, init, new
    7. __class__ attribute
    8. getattr, setattr, delattr, hasattr
    9. getters, setters, deleters
    10. mro
    11. super
    12. inheritance, multiple
    13. static, class, instance methods
    14. covariance and contra-variance
    15. isinstance, issubclass
    16. composition
    17. encapsulation
    18. magic methods / dunder
    19. callables
    20. type() and types module
    21. dynamic creation
    22. dataclasses
    23. generics
    24. abstract base classes
    25. protocols
    26. mixins
    27. casting
    28. duck typing
17. metaprogramming
    1. metaclasses
    2. descriptors
18. decorators
    1. functions
    2. classes
19. context managers
    1. with
    2. contextlib
20. debugging
    1. pdb
    2. ide
    3. remote
    4. stack traces, stack frames, traceback, faulthandler
    5. trace
    6. inspect
21. monitoring
    1. sys.monitoring
    2. sys.settrace
    3. sentry
22. files
    1. pathlib
    2. open, close, read, write, append, seek
    3. basic formats
       1. config
       2. env
       3. toml
       4. csv
       5. json
       6. sqlite3
    4. serialization
       1. struct
       2. codecs
       3. pickle
       4. marshal
       5. base64 / others
    5. temporary files
    6. general purpose compression
       1. zip/deflate
       2. gzip
       3. bzip2
       4. lzma/lzma2
       5. lz4
       6. xz
       7. zstd
       8. tar
23. specific files
    1. markup
    2. document and ebook
    3. calendar
    4. mailing
    5. image
    6. audio
    7. video
    8. security
    9. geographic
24. garbage collection
    1. reference counting
    2. gc module
    3. weakref
25. benchmarking and profiling
    1. timeit
    2. cprofile / profile
    3. memory
26. async and concurrency
    1. threading
    2. multiprocessing
    3. concurrent
    4. gil
    5. asyncio
       1. async, await, coroutines
       2. async iterators and generators
       3. async comprehensions
       4. async with, context managers
       5. event loop
       6. greenlet, uvloop
       7. anyio, trio
27. functional programming
    1. map, filter, reduce
    2. partial
    3. itertools
    4. functools
    5. operator
    6. higher order functions
    7. closures
    8. currying
28. networking
    1. tcp basics
    2. ipaddress
    3. sockets
    4. http
    5. urllib
    6. requests
    7. websockets
    8. email and mailing
    9. ftp
    10. wsgi and asgi
29. i18n and l10n
    1. gettext
    2. locale
30. cli apps
    1. argparse
    2. click / typer
    3. rich
    4. python-fire
31. graphical apps
    1. tk
    2. pyqt
32. type hints
    1. annotations
    2. typing module
    3. type aliases
    4. type vars
    5. protocols
33. general tools
    1. venv/virtualenv
    2. jupyter and ipython
    3. pip and requirements.txt
    4. poetry and pyproject.toml
    5. conda
34. documentation
    1. docstrings
    2. docstrings formats
    3. doctest
    4. docs renders
       1. sphinx
       2. readthedocs
       3. mkdocs
       4. pdoc3
35. testing
    1. unittest
    2. pytest
    3. coverage
    4. testing types
       1. unit
       2. integration
       3. functional
       4. acceptance
       5. regression
       6. load / stress
    5. other testing tools
       1. hypothesis
       2. faker
       3. mock, patch
36. code quality tools
    1. flake8, autopep8
    2. mypy
    3. bandit
    4. isort
    5. pre-commit
    6. ruff
    7. radon
    8. pyupgrade
37. security
    1. standard library
       1. hashlib
       2. secrets
       3. ssl
    2. third party
       1. bcrypt
       2. passlib
       3. cryptography
       4. pyjwt
       5. argon2
    3. common algorithms
       1. symmetric
       2. asymmetric
       3. hashing
       4. key derivation
       5. digital signatures
       6. certificates
38. implementations and distribution
    1. build python from source
    2. cpython, command line
    3. pypy
    4. cython
    5. codon
    6. micropython
    7. binary
       1. pyinstaller
       2. nuitka
    8. web
       1. pyscripy
       2. pyodide
       3. brython
39. packaging
    1. packaging process
       1. setuptools and setup.py
       2. setup.cfg
       3. pyproject.toml
       4. wheel
       5. twine
       6. flit
    2. package indexes
       1. pypi
       2. test.pypi
       3. pypiserver
40. python compiler, interpreter
    1. ast
    2. compiler
    3. dis
    4. tokenize
    5. lexical analysis
41. data model
    1. ctypes
42. execution model
43. python C model
44. extensions
    1. C
    2. rust
    3. protocols
