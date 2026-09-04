# Python 2 / Data Structures review (weeks 1-2)

- **Prepared:** Friday, September 4, 2026 (lab day)
- **Course:** Python 2 / Data Structures & Algorithms, CSCI 2056 (the instructor calls it "356"), MWF 8:00 AM
- **Covers:** the four lectures recorded so far
  - [2026-08-24 Course policies and enrollment](2026-08-24-course-policies-and-enrollment-csci-2056.md)
  - [2026-08-26 Python data types overview](2026-08-26-python-data-types-overview.md)
  - [2026-08-31 Algorithm efficiency analysis](2026-08-31-algorithm-efficiency-analysis.md)
  - [2026-09-02 Time complexity overview](2026-09-02-time-complexity-overview.md)
- **How to use this:** Part 1 is the admin checklist. Parts 2-4 are the content, organized the way the instructor framed it. Part 5 is a self-test with answers. Everything here comes from the lecture transcripts; where the machine transcription was garbled, the intended meaning is reconstructed and marked.

---

## Part 1: Admin and deadlines

### Do these now

- [ ] **Enrollment confirmation.** Complete it in Seaport *and* attend at least one lab. Miss both and the registrar drops you automatically.
- [ ] **Syllabus quiz.** Open the syllabus in one tab and the quiz in another. Hard deadline; the instructor said to just get it done.
- [ ] **Check your enrollment status.** The prerequisite system mis-dropped some students and failed to drop others. If a class is missing, email your advisor immediately; re-adds close after a few days.
- [ ] **Practice problems in Blackboard.** Ungraded, no due date, but last semester students who did them scored about two letter grades higher than those who skipped them. They are built to mirror the lab questions, which mirror the exam questions ("same structure, different values").

### How the course is graded and run

| Item | Detail |
|---|---|
| Labs | Fridays 12:00, same room, 110 minutes, designed to finish in about an hour. 10 labs total. No lab week 1 or week 11. |
| Exams | Taken in Blackboard during the Friday lab slot. 75-minute limit, built for about an hour. Most people finish in 50-60 minutes. |
| Final | Mandatory (accreditation rule, no dropping the lowest exam). Date and time set by the registrar and may not match class time. Conflicts need advance approval from the dean's office. |
| Reviewing graded work | Labs and exams are not released online (single section). Review them in office hours: instructor Mondays 10:00-11:15 (may shift), plus 10-12 TA hours that do not overlap. Department tutors also cover this class. |
| Textbook | Free, linked in Seaport. Readings are optional but mapped to each week's topics. Chapter 1 is the Python review. |
| Comments | Write them. They earn partial credit when code is close but broken, and you will reuse code across labs. Explain purpose, not mechanics. |
| Prefix confusion | CSCI vs CIS is the same class. Engineering majors in CIS get moved to CSCI. |

### Calendar

| Date | What |
|---|---|
| Fri Sep 4 | Lab, 12:00 |
| Mon Sep 7 | **No class** (Labor Day). The instructor picked this as the lightest content week on purpose. |
| Wed Sep 9 | **Stacks** ("the easiest of all the sections"). Then queues, deques, and lists over the following two weeks. |
| Later | Searching (binary search), sorting (merge sort and quicksort ideas, not implementations), shortest-path algorithms. |

The instructor framed the course as FE-exam prep for the software engineering section: broad coverage, moderate pace, "when to use which tool," not deep software engineering. You will use Python's built-in list heavily and are expected to know which list operations are cheap.

---

## Part 2: Python fundamentals (lectures 1 and 2)

### 2.1 Printing, strings, and quotes

- `print()` takes anything convertible to a string. It is your main debugging tool.
- Single or double quotes both work. They just have to match. Mixing them gives an obvious unclosed-string syntax error.
- `+` on two strings concatenates. `+` on a string and an int raises a `TypeError`. Cast first with `str()`.
- Formatted printing with an f-string (used live in lecture 3):

```python
print(f"sum = {value} required {t} total seconds")
```

### 2.2 Variables and assignment

- Python is weakly typed: no type declarations, and a variable can be reassigned to any type at any time. Convenient, but it means a stray string in a numeric variable only shows up as a runtime error.
- `=` assigns. `==` tests equality. This is the classic slip.
- Assignment is one-directional: the variable on the left receives the value on the right. `a = b` does not mean `b = a`.
- Multiple assignment works left to right: `x, y, z = 0, 1, 2`. The instructor uses it occasionally but prefers plain code.

### 2.3 Value vs reference (the "weird behavior" trap)

Simple types (`int`, `float`, `str`, `bool`) copy on assignment. Complex types (lists, objects) share a reference.

```python
x = 7
y = x
x = 8
print(y)        # 7  -- y kept its own copy

a = [1, 2, 3]
b = a
b.append(4)
print(a)        # [1, 2, 3, 4]  -- a and b point at the same list
```

Rule: change data through one name that points at a list and every other name pointing at that list sees the change.

### 2.4 Arithmetic operators

| Operator | Meaning | Example |
|---|---|---|
| `+ - *` | as expected | |
| `/` | float division, always returns a float | `5 / 2` is `2.5`, `4 / 2` is `2.0` |
| `//` | integer (floor) division | `5 // 2` is `2`, `-5 // 2` is `-3` |
| `%` | remainder (modulus) | `7 % 2` is `1`, `8 % 2` is `0` |
| `**` | exponent | `2 ** 10` is `1024` |

- Precedence is standard math: parentheses, then `**`, then `* / // %` (left to right), then `+ -`. When the answer looks wrong, add parentheses. "Just keep using more parentheses."
- `//` and `%` are complements: `//` throws the remainder away, `%` keeps only the remainder.
- `%` is how you test even or odd: `n % 2 == 0` is even. The instructor said this "sounds dry but ends up extremely useful."
- Transcript note: the instructor said negative results of `//` are "rounded away from zero." That is correct because `//` floors: `-5 // 2` is `-3`, not `-2`.

### 2.5 Type conversion

- int with int stays int, except `/` which gives a float.
- Any expression mixing int and float becomes float.
- Explicit casts: `int()`, `float()`, `str()`, `bool()`. `int()` truncates the fractional part (`int(2.999)` is `2`).
- Watch for implicit promotion: if a value silently becomes a float, you cannot use it as an index. `data[5.0]` is a `TypeError`. Cast back with `int()`.

### 2.6 `None`

- `None` is its own type meaning "no value assigned." Python requires a value at declaration, so `None` is the placeholder for "not initialized yet."
- `None` is **not** `0`, **not** `""`, and **not** `False`.
- Almost any operation on `None` raises an error immediately. That is a feature: it fails loudly instead of producing garbage.
- You will use it later when a data structure's "next" reference points at nothing.

### 2.7 Lists, tuples, sets

| | Ordered | Duplicates | Mutable | Index access | Syntax |
|---|---|---|---|---|---|
| list | yes | yes | yes | yes | `[1, 2, 3]` |
| tuple | yes | yes | no | yes | `(1, 2, 3)` |
| set | no | no | yes | no | `{1, 2, 3}` |

- Python is **zero-indexed**. First element is `data[0]`. MATLAB is one-indexed, so watch for off-by-one errors when switching.
- `len(x)` works on lists, strings, tuples, and sets. On a set it returns the cardinality even though you cannot index into it.
- `in` and `not in` return a boolean and work on lists, strings, sets, dicts. They do not modify anything.
- Parentheses give you a tuple, not a list. Use square brackets if you need to change contents.

### 2.8 Adding and removing from lists

| Call | What it does | Cost |
|---|---|---|
| `lst.append(v)` | add `v` at the end | fast, O(1) |
| `lst.insert(i, v)` | add `v` at index `i`, shifting everything after it | slow, O(n) |
| `lst.pop()` | remove and return the last element | fast, O(1) |
| `lst.pop(i)` | remove and return element at `i`, shifting everything after it | slow, O(n) |

- Default pattern for this class: `append` and `pop()` with no index. The data structures you build in the coming weeks are deliberately designed around the end of the list because that is where Python is fast.
- `pop` returns the element. You can ignore the return value; it costs nothing meaningful.
- `remove` and `del` exist. You will not need them much.

### 2.9 Conditionals

```python
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
else:
    grade = "C"
```

- The condition must evaluate to a boolean. Relational operators (`< <= > >= == !=`) are questions, not statements.
- Only the **first** true branch in an `if / elif / else` chain runs. Later branches are skipped even if they would also be true. Conditions in a chain should be mutually exclusive.
- Python has no `switch`. Use an `elif` chain.
- `else` is optional, so a misaligned `else` is still valid syntax. That produces a **logic error**: the code runs but does the wrong thing. The instructor flagged these as the hardest bugs in the class, usually an edge case at the start or end of a collection caused by `<` where `<=` was needed (or the reverse).
- Nesting more than two or three levels deep is a signal to step back and find a simpler structure.
- **String comparison** is character by character using ASCII codes, so it is case-sensitive: `"apple" == "Apple"` is `False`. A shorter string that is a prefix of a longer one is less than it.

### 2.10 Loops

**`for` (count-controlled, always terminates):**

```python
for i in range(5):          # 0 1 2 3 4       end is exclusive
for i in range(2, 5):       # 2 3 4
for i in range(0, 10, 2):   # 0 2 4 6 8       third arg is step
for i in range(10, 0, -1):  # 10 9 ... 1      negative step counts down
for i in range(len(data)):  # the pattern you will use most
```

- `range` never includes the end value. To include `n`, write `range(1, n + 1)`.
- **Accumulator pattern:** declare the running total *outside* the loop. Declaring it inside resets it every iteration.

```python
total = 0
for i in range(1, n + 1):
    total += i          # same as total = total + i
```

- Augmented assignment exists for every arithmetic operator: `+= -= *= /= //= %= **=`.
- `break` exits the loop entirely. `continue` skips to the next iteration.
- Nested loops: total iterations = inner count times outer count. This is why nesting gets expensive fast (see Part 3).

**`while` (condition-controlled):**

- Use when you do not know the collection size in advance, or when waiting for a signal.
- Two ways to get it wrong: the condition is false at the start so the loop never runs, or the condition never becomes false so it runs forever.
- The course IDE has infinite-loop protection (about a 10-second timeout, then the interpreter restarts). Annoying, not dangerous.
- `while True:` with a `break` inside is a legitimate pattern for "run until I say stop."
- Prefer `for` whenever you can. Use `while` only when you must.

### 2.11 Functions

```python
def double(number):
    result = number * 2
    print(result)           # void function: no return

def sum_and_time(n):
    ...
    return total, end - start   # returns a tuple of two values

value, t = sum_and_time(1000)   # unpack in the same order
```

- `def name(parameters):`. No return type, no declaration of what comes back.
- A function is value-returning if it has a `return`, void if it does not.
- Define a function before you call it. Calling above the definition is an error.
- Naming rules match variables: letters, digits, underscores; cannot start with a digit; no spaces; no keywords; case-sensitive. Use descriptive names. `i` is fine for a loop variable; `x` is a bad function name.
- Returning multiple values gives a tuple. Receive it into the same number of variables, in the same order.

### 2.12 Classes

A function forgets everything when it returns. A class holds data that persists, plus the functions (methods) that work on it. Every data structure you build in this course will be a class wrapping a Python list.

```python
import random

class Coin:                          # UpperCamelCase by convention
    def __init__(self):              # constructor, runs on instantiation
        self.side_up = "Heads"       # instance variable, prefixed with self.

    def toss(self):
        if random.randint(0, 1) == 0:
            self.side_up = "Heads"
        else:
            self.side_up = "Tails"

    def get_side_up(self):
        return self.side_up

my_coin = Coin()                     # instantiate
my_coin.toss()                       # call a method with the dot operator
print(my_coin.get_side_up())         # self is passed automatically
```

- `self` is the first parameter of **every** method. It is how Python tells apart the many instances of a class that may exist at once (each lives at a different memory address).
- Instance variables must be prefixed with `self.` everywhere they are used inside the class.
- Anything the constructor needs from the caller becomes an extra parameter of `__init__` after `self`.
- You never pass `self` yourself. `my_coin.toss()` supplies it.

---

## Part 3: Algorithm analysis (lectures 3 and 4)

### 3.1 Why analyze algorithms instead of programs

- "It took 1.37 seconds" means nothing without a frame of reference.
- A **program** depends on hardware, language, compiler, and operating system. An **algorithm** is the general list of steps and is the same everywhere.
- Two costs: **time** and **space**. Space used to matter more; this class focuses almost entirely on time.
- Timing in Python:

```python
import time
start = time.time()
# ... algorithm ...
end = time.time()
elapsed = end - start
```

### 3.2 The lecture demo: successive addition vs closed form

Two ways to sum the integers 1 through n:

```python
def sum_of_n(n):
    start = time.time()
    total = 0                    # accumulator must start at 0
    for i in range(1, n + 1):    # +1 because range excludes the end
        total += i
    end = time.time()
    return total, end - start

def closed_form(n):
    start = time.time()
    total = n * (n + 1) / 2
    end = time.time()
    return total, end - start
```

Run for n = 1,000 / 10,000 / 100,000 / 1,000,000:

- **Successive addition:** time grows in a straight line with n. Ten times the input, roughly ten times the work.
- **Closed form:** every run lands around 1e-7 seconds no matter how big n is. The plot looks noisy only because operating-system scheduling noise is bigger than the operation itself. Averaged over enough runs it is a flat line.

The lesson the instructor drew: empirical timing is a decent hint but too noisy to be the definition of "better." Algorithm analysis abstracts it away.

### 3.3 Big O in one paragraph

Big O is the **worst-case, asymptotic** time complexity: how the number of steps grows as the input size n gets arbitrarily large. Write it `O(f(n))`. Only the **dominant term** (the one that grows fastest) survives.

Two rules:

1. **Drop constant multipliers.** `O(15n)` is `O(n)`. `O(n/2)` is `O(n)`. `O(20n)` is `O(n)`.
2. **Drop lower-order terms.** `O(15n² + 45n)` is `O(n²)`. `O(5n² + 27n + 1005)` is `O(n²)`.

When n is small the constant can dominate (1005 beats 5n² at n = 2). Big O does not care. It is only about the trend as n grows.

The instructor's mental hook: this is the same "which term wins" reasoning you use for limits in calculus.

### 3.4 The complexity ladder (memorize this)

Fastest to slowest:

| Class | Name | Typical source |
|---|---|---|
| `O(1)` (sometimes written `O(c)`) | constant | closed-form formula, `append`, `pop()`, indexing |
| `O(log n)` | logarithmic | halving the problem each step, binary search |
| `O(n)` | linear | one loop over the data, `in`, `reverse` |
| `O(n log n)` | linearithmic / log-linear | best possible general-purpose sort |
| `O(n²)`, `O(n³)` | quadratic, cubic (polynomial) | two or three nested loops |
| `O(2ⁿ)` | exponential | doubling work each step |
| `O(n!)` | factorial | brute-force permutations |

- The first three are the ones to know cold. Log is slower than constant; linear is slower than log.
- `O(n log n)` is the floor for sorting arbitrary data. Some special-purpose sorts beat it using prior knowledge of the input.
- Matrix multiplication cannot be much better than `O(n³)`; there is an algorithm around `O(n^2.8)` but nothing close to linear.

### 3.5 Other notations (know they exist, will not be tested)

- **Big Omega (Ω):** best case. For a search this is trivially `Ω(1)`: the item is the first thing you look at.
- **Big Theta (Θ):** tight bound. Skipped in this class.
- **Little o:** a strict upper bound. Skipped.
- **Loose vs tight bounds:** saying `cos(x)` is between -100,000 and 100,000 is a correct but loose bound. Between -1 and 1 is the tight bound. Big O in this class is casual about this distinction.

### 3.6 Course conventions for building the time function T(n)

These are fixed for the semester. They differ between textbooks, so use these on exams.

| Construct | Cost |
|---|---|
| Any assignment statement, even a compound one like `c = x * y + 3` | 1 |
| `for i in range(n):` (the loop itself, not its body) | n + 1 (n iterations plus one final exit check) |
| Statement inside a loop that runs n times | n per statement |
| Nested loops | multiply: inner count times outer count |
| `for i in range(1, n, 2)` (step of 2) | n/2 + 1, which is still `O(n)` |
| Loop over a fixed constant, e.g. `for j in range(20):` | 20, absorbed as a constant |
| Halving each iteration (`i = i // 2`) | about log₂ n |

Process: split the code into sections, build T(n) piece by piece, add it up, then read off the dominant term. Building T(n) is the tedious part; finding the Big O from it is the easy part. The instructor said exam questions usually just ask for the Big O, but you should be able to produce T(n) when asked.

### 3.7 Fully worked example from lecture 4

```python
a = 0                        # 1
b = 1                        # 1
c = 2                        # 1                  section 1: 3

for i in range(n):           # n + 1
    for j in range(n):       # n(n + 1)  = n² + n
        x = i * j            # n²
        y = x + 1            # n²
        z = y * 2            # n²                 section 2: 4n² + 2n + 1

for k in range(n):           # n + 1
    p = k * 2                # n
    q = p + 1                # n                  section 3: 3n + 1

r = a + b                    # 1                  section 4: 1
```

Running total after each section: 3, then 4n² + 2n + 4, then 4n² + 5n + 5, then **T(n) = 4n² + 5n + 6**.

Dominant term is 4n². Drop the coefficient. **O(n²).**

Shortcut by inspection: the only thing that matters is the doubly nested loop. Everything else is linear or constant and washes out.

### 3.8 Pattern recognition drills from lecture 4

| Code shape | Big O | Why |
|---|---|---|
| Two loops one after the other, each over n | `O(n)` | n + n = 2n, drop the 2 |
| Two loops nested, each over n | `O(n²)` | n × n |
| Three loops nested, each over n | `O(n³)` | n × n × n |
| Loops nested over n, m, and l | `O(n·m·l)` | different variables cannot be combined |
| Outer loop over n, inner loop over a constant 20 | `O(n)` | 20n, drop the 20 |
| `for i in range(1, n, 2)` | `O(n)` | n/2, drop the 1/2 |
| `i = n; while i > 0: ... ; i = i // 2` | `O(log n)` | halving: 10, 5, 2, 1, 0 for n = 10 |

The halving loop is the important new idea. Cutting the remaining work in half every step is the inverse of doubling it, and it is what makes **binary search** `O(log n)` on an ordered list. Logs in this class are implicitly base 2; the base does not change the Big O.

### 3.9 Cost of Python list operations (know this table)

| Operation | Big O | Notes |
|---|---|---|
| `lst[i]` (index) | O(1) | independent of list size |
| `lst[i] = v` (index assignment) | O(1) | |
| `lst.append(v)` | O(1) | deliberately optimized by Python's developers |
| `lst.pop()` | O(1) | last element only |
| `lst.pop(i)` | O(n) | everything after `i` shifts |
| `lst.insert(i, v)` | O(n) | everything after `i` shifts |
| `lst1 + lst2` (concatenation) | O(k) | k = size of what is being added |
| `del lst[i]` | O(n) | |
| `v in lst` | O(n) | scans front to back; worst case is last or absent |
| `for v in lst` (iteration) | O(n) | |
| `lst[a:b]` (slice) | O(b - a) | effectively linear |
| `lst.reverse()` | O(n) | |
| `lst.sort()` | O(n log n) | heavily optimized; always use it instead of writing your own |

Live timings from lecture 4, building a 2,000-element list:

| Method | Time |
|---|---|
| `lst = lst + [i]` in a loop | about 6.5 ms |
| `lst.append(i)` in a loop | about 0.3 ms |
| `[i for i in range(n)]` (list comprehension) | about half the append time |
| `list(range(n))` | far faster than everything else |

Takeaways the instructor stressed:

- Same Big O does not mean same speed. All four of the fast methods above are `O(n)` overall, yet they differ by large factors. Big O is "useful but not the end of the story" for real optimization.
- Design your data structures so that all adds and removes happen at the **end** of the list. That is the whole reason stacks are easy.
- Never write your own sort for real work. Every major language ships a highly tuned one.

---

## Part 4: Instructor's stated priorities

Things said more than once, or explicitly flagged as important:

1. Practice problems mirror labs mirror exams. Do them.
2. `append` and `pop()` good; `insert` and `pop(i)` bad.
3. `range` excludes the end. Off-by-one is the most common bug.
4. Logic errors (wrong relational operator, misaligned `else`) are worse than syntax errors because Python will not catch them.
5. Lists share references; simple types copy.
6. `None` is not zero, empty, or false.
7. Comments earn partial credit.
8. Big O: worst case, asymptotic, dominant term only, drop constants.
9. Know the ladder: 1, log n, n, n log n, n², n³, 2ⁿ, n!.
10. Nested loops multiply; halving gives log.

---

## Part 5: Self-test

Answers follow each block. Cover them first.

### 5.1 Python basics

**Q1.** What prints?

```python
x = [10, 20, 30]
y = x
y.append(40)
print(len(x))
```

**A1.** `4`. Lists are shared by reference. `y.append` changed the one list both names point to.

**Q2.** What prints?

```python
x = 7
y = x
x = x + 1
print(y)
```

**A2.** `7`. Integers copy by value.

**Q3.** Evaluate: `7 // 2`, `7 % 2`, `7 / 2`, `-7 // 2`, `2 ** 3 ** 0`.

**A3.** `3`, `1`, `3.5`, `-4` (floor division rounds toward negative infinity), `2` (`3 ** 0` is 1, then `2 ** 1`).

**Q4.** What does `print(range(5))` produce when iterated? What about `range(2, 10, 3)`?

**A4.** `0 1 2 3 4` and `2 5 8`. The end value is never included.

**Q5.** Which of these are equal to `None`: `0`, `""`, `False`, `[]`?

**A5.** None of them. `None` is its own type.

**Q6.** What is wrong here, and what kind of error is it?

```python
total = 0
for i in range(len(data)):
    if data[i] > limit:
        count = 0
        count += 1
```

**A6.** `count` is reset to 0 inside the loop every time, so it never exceeds 1. Logic error: valid syntax, wrong result. Declare the accumulator outside the loop.

**Q7.** True or false: `"Zebra" < "apple"`.

**A7.** True. Uppercase `Z` (ASCII 90) is less than lowercase `a` (ASCII 97). String comparison is character by character and case-sensitive.

**Q8.** Write a one-line boolean expression that is true when `n` is odd.

**A8.** `n % 2 == 1` (or `n % 2 != 0`).

**Q9.** Fix the bug.

```python
def area(w, h):
    result = w * h

a = area(3, 4)
print(a + 1)
```

**A9.** The function has no `return`, so it is void and `a` is `None`. `None + 1` raises a `TypeError`. Add `return result`.

**Q10.** In the `Coin` class in section 2.12, why does `toss` take a parameter when we call it as `my_coin.toss()` with no arguments?

**A10.** The parameter is `self`. Python passes the instance automatically when you call a method through the dot operator. Every method must declare it; you never supply it.

**Q11.** You need a container of exam scores where order matters and scores can repeat, and you will add scores over time. List, tuple, or set?

**A11.** List. Tuples are immutable so you cannot add to them. Sets drop duplicates and have no order.

### 5.2 Algorithm analysis

**Q12.** Give the Big O of each T(n): (a) `15n + 45`, (b) `3n² + 200n + 7`, (c) `n + 100 log n`, (d) `2ⁿ + n³`, (e) `n²/n + 5`.

**A12.** (a) `O(n)`, (b) `O(n²)`, (c) `O(n)`, (d) `O(2ⁿ)`, (e) `O(n)` because `n²/n` simplifies to `n`.

**Q13.** Build T(n) using course conventions, then give the Big O.

```python
total = 0
for i in range(n):
    total = total + i
    count = count + 1
```

**A13.** Assignment 1, loop n + 1, two assignments inside each running n times: T(n) = 1 + (n + 1) + 2n = 3n + 2. **O(n).**

**Q14.** Big O by inspection?

```python
for i in range(n):
    for j in range(n):
        for k in range(n):
            x = i + j + k
```

**A14.** `O(n³)`. Three nested loops over n.

**Q15.** Big O by inspection?

```python
for i in range(n):
    for j in range(20):
        x = i * j
```

**A15.** `O(n)`. The inner loop runs a fixed 20 times, so the total is 20n and the constant drops.

**Q16.** Trace `i` and give the Big O.

```python
i = 32
count = 0
while i > 0:
    count += 1
    i = i // 2
```

**A16.** `i` goes 32, 16, 8, 4, 2, 1, 0. Six iterations for n = 32, which is log₂ 32 + 1. **O(log n).**

**Q17.** Big O?

```python
for i in range(n):
    a = i * 2
for j in range(n):
    b = j * 3
```

**A17.** `O(n)`. Sequential loops add (2n), they do not multiply.

**Q18.** Rank fastest to slowest: `O(n log n)`, `O(1)`, `O(n²)`, `O(log n)`, `O(2ⁿ)`, `O(n)`.

**A18.** `O(1)`, `O(log n)`, `O(n)`, `O(n log n)`, `O(n²)`, `O(2ⁿ)`.

**Q19.** In the timing demo, why did the closed-form plot look jagged even though the algorithm is `O(1)`?

**A19.** The operation takes about 1e-7 seconds, so background operating-system scheduling noise is larger than the measurement. Averaged over many runs it is flat. This is why timing alone is unreliable and we analyze algorithms instead.

**Q20.** You are removing items from a Python list one at a time inside a loop. Which is the right call, `pop(0)` or `pop()`, and why?

**A20.** `pop()`. Removing the last element is `O(1)`. `pop(0)` shifts every remaining element and is `O(n)`, so a loop of them is `O(n²)`. Build the structure so the item you need is at the end.

**Q21.** Each of these builds a list of the numbers 0 through 1999. Rank them fastest to slowest.

```python
a = list(range(2000))
b = [i for i in range(2000)]
c = []
for i in range(2000): c.append(i)
d = []
for i in range(2000): d = d + [i]
```

**A21.** `a`, `b`, `c`, `d`. Concatenation (`d`) is `O(k)` per step; in the lecture demo it was about 20 times slower than append, and the gap grows with n. Comprehension beat append by about 2x in the demo. `list(range(n))` is by far the fastest. The exact ratios vary by machine; the ordering does not.

**Q22.** What is the best possible Big O of a general-purpose sort, and what should you do when you actually need to sort in Python?

**A22.** `O(n log n)`. Call the built-in `sort()`. It is heavily optimized and handles edge cases you will not.

**Q23.** A search finds its target on the very first comparison. Which notation describes that case, and what is its value?

**A23.** Big Omega (best case), `Ω(1)`. This class does not test it; Big O (worst case) is the focus.

**Q24.** Why does `in` on an unsorted list cost `O(n)`?

**A24.** With no structure to exploit, Python has to scan from the front. The worst case is that the target is last or absent, so every element is checked.

---

## Part 6: Gaps and things to confirm

- The transcript for lecture 1 says the FE-exam alignment, office hours, and TA hours were still being finalized. Check Blackboard for the posted schedule.
- The first exam date was not stated in any recorded lecture. It falls in a Friday lab slot; ask or check the course outline.
- Lecture 4 ended with the instructor saying the class would not meet Monday (Labor Day) and would cover stacks Wednesday. The transcription garbled this sentence; the Labor Day cancellation was stated clearly in lecture 1.
- Reading for weeks 1-2 is the free textbook's Python review chapter and the algorithm analysis chapter. Both are optional but map directly to this material.
