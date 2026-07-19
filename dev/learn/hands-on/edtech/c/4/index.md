# [Lab 4: Fibonacci Sequence](#id9)[#](#lab-4-fibonacci-sequence "Link to this heading")

## [Overview](#id10)[#](#overview "Link to this heading")

You will write a program to calculate the Fibonacci Sequence of a number
using pointers.

### [Fibonacci Sequence](#id11)[#](#fibonacci-sequence "Link to this heading")

The Fibonacci Sequence is a pattern that is [found in the real world](http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/Fibonacci/fibnat.html).
[Search Google Images for more pictures!](https://www.google.com/search?q=fibonacci+sequence+in+nature)

The [Fibonacci number](https://www.mathsisfun.com/numbers/fibonacci-sequence.html) sequence starts with

> ```
> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
>
> ```

You can calculate the next number in sequence by adding the
two previous numbers, starting with 0 and 1

> ```
>         0
>         1
> 1 + 1 = 2
> 1 + 2 = 3
> 2 + 3 = 5
> 3 + 5 = 8
> 5 + 8 = 13
> . . .
>
> ```
>
> Fibonacci Sequence[#](#id1 "Link to this table")
>
> |  |  |  |  |  |  |  |  |  |  |  |  |  |
> | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
> | n = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
> | x n = | 0 | 1 | 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 55 | 89 |

Resources

> * <http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/Fibonacci/fibnat.html>
> * <https://www.mathsisfun.com/numbers/fibonacci-sequence.html>
> * <https://en.wikipedia.org/wiki/Fibonacci_number>

### [Pointers in C](#id12)[#](#pointers-in-c "Link to this heading")

C uses pointers to pass the address of a location in memory. Directly
modifying the contents of memory has some benefits.

#### [Modifying Values by Reference](#id13)[#](#modifying-values-by-reference "Link to this heading")

C passes values to functions by default, not a pointer. These values
are assigned a new a location in memory.

> run this code on <https://ide.judge0.com/>[#](#id2 "Link to this code")
> ```
> #include <stdio.h>
>
> int my_func(int, int);
>
> int main(void) {
>
>     int x = 5;
>     int y = 6;
>
>     int result = my_func(x, y);
>
>     // These values are still x = 5 and y =6.
>     printf("x = %d; y = %d\n", x, y);
>     printf("result = %d \n", result);
>
>     return 0;
> }
>
> int my_func(int x, int y)
> {
>    // int x and int y are values limited to this function only
>     x = 9;
>     y = 11;
>
>     return x + y;
> }
>
> ```
> Output[#](#id3 "Link to this code")
> ```
> x = 5; y = 6
> result = 20
>
> ```

However, you can pass the pointer to a function to change the value
of the original memory location.

> run this code on <https://ide.judge0.com/>[#](#id4 "Link to this code")
> ```
> int my_func(int *, int *);
>
> int main(void) {
>
>     int x = 5;
>     int y = 6;
>
>     int result = my_func(&x, &y);
>
>     // These values have changed! x = 9 and y = 11.
>     printf("x = %d; y = %d\n", x, y);
>     printf("result = %d \n", result);
>
>     return 0;
> }
>
> int my_func(int *x, int *y)
> {
>     // int x and int y are pointers to memory locations.
>     // Modifying x and y change the values of the caller
>     *x = 9;
>     *y = 11;
>
>     return *x + *y;
> }
>
> ```
> Output[#](#id5 "Link to this code")
> ```
> x = 9; y = 11
> result = 20
>
> ```

Passing arguments by reference allows you to return multiple variables
from a function by modifying the contents of the original pointer.

#### [Arrays](#id14)[#](#arrays "Link to this heading")

Another use of pointers is for arrays and strings because C does not an
array or string type. Instead, the variable declaration is the
address of the first value in the array. The `[]` syntax is
just another way to work with arrays. Consider these three
examples.

run this code on <https://ide.judge0.com/>[#](#id6 "Link to this code")
```
// These three declarations are the same
char string1[10]="Some text";
char string2[10]={'S','o','m','e',' ','t','e','x','t','\0'};
char *string3 = "Some text";

// Print the char arrays directly
printf("%s \n", string1);
printf("%s \n", string2);
printf("%s \n", string3);
printf("\n");

// Print each char of each array using [] syntax
for (int i = 0; i < 10; i++)
{
    printf("%d   \t", string1[i]);
    printf("%d   \t", string2[i]);
    printf("%d   \n", string3[i]);
}

printf("\n");

// Print each char of each array using the memory offset
for (int i = 0; i < 10; i++)
{
    char char1 = *(string1 + i);
    char char2 = *(string2 + i);
    char char3 = *(string3 + i);
    printf("%d   \t", char1);
    printf("%d   \t", char2);
    printf("%d   \n", char3);
}

```
Output[#](#id7 "Link to this code")
```
Some text
Some text
Some text

83     83     83
111    111    111
109    109    109
101    101    101
32     32     32
116    116    116
101    101    101
120    120    120
116    116    116
0      0      0

83     83     83
111    111    111
109    109    109
101    101    101
32     32     32
116    116    116
101    101    101
120    120    120
116    116    116
0      0      0

```

Resource:

> * <https://en.wikibooks.org/wiki/C_Programming/Pointers_and_arrays>
> * <https://www.codingunit.com/c-tutorial-how-to-use-pointers>
> * <https://www.codingunit.com/c-tutorial-more-on-pointers>
> * <http://duramecho.com/ComputerInformation/WhyCPointers.html>
> * <https://www.geeksforgeeks.org/applications-of-pointers-in-c-cpp/>

## [Task 1: Calculate the Fibonacci Sequence](#id15)[#](#task-1-calculate-the-fibonacci-sequence "Link to this heading")

1. Open up [ide.judge0.com](https://ide.judge0.com/) VSC and GCC. Use the
   [Complete C Template](../templates/index.html#complete-c-template).
2. Calculate the [Fibonacci number](https://www.mathsisfun.com/numbers/fibonacci-sequence.html) up to the 10th sequence.

   Fibonacci Sequence[#](#id8 "Link to this table")

   |  |  |  |  |  |  |  |  |  |  |  |  |  |
   | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
   | n = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
   | x n = | 0 | 1 | 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 55 | 89 |

## [Task 2: Create a Function with Pointers](#id16)[#](#task-2-create-a-function-with-pointers "Link to this heading")

You saw that your algorithm has three variables:
`previous`, `next`, and `swap`

Now, ****you will do all of the work**** in a function called
`calc_fibonacci()`. Here is the program flow:

> 1. In `main()`, you will call function `calc_fibonacci()` and pass
>    variables `previous` and `next`, starting with 0 and 1.
> 2. You will perform the calculation in `calc_fibonacci()`.
> 3. `calc_fibonacci()` will return the next number in the Fibonacci
>    sequence.
> 4. You will print that number in `main()`.
> 5. Repeat `n` times.

You might wonder how you can keep track of the previous number if
`calc_fibonacci()` only returns `next`. The answer is to use
a pointer! The function returns the next value in the sequence and
updates the previous value in memory.

1. Create a function using this prototype

   ```
   /**
     * Calculates the next Fibonacci number
     * unsigned int next:        The next number in the Fibonacci sequence
     * unsigned int *previous:   The pointer to the previous number in the Fibonacci sequence
     * return value:             The next number in the Fibonacci sequence (next + previous)
     */
   unsigned int calc_fibonacci(unsigned int, unsigned int*);

   ```
2. Start with this code in `main()`.

   ```
   int count = 10;

   unsigned int previous = 0;
   unsigned int next = 1;

   printf("%u ", previous);

   for (int i = 0; i < count; i++)
   {
       printf("%u ", next);

       // Only modify the following line
       // call function with prototype: unsigned int calc_fibonacci(unsigned int, unsigned int *)
   }

   ```
3. Calculate the value in `calc_fibonacci()`
4. Print the value in `main()`.
5. Continue n times.

## [Task 3: Implement Command line Args](#id17)[#](#task-3-implement-command-line-args "Link to this heading")

1. Pass a user provided value into `fibonacci.exe` using command line args.
2. Print this message if there are no args:

   ```
   Usage: fibonacci [integer]

   ```
3. Determine the largest input number for your [C data type](https://en.wikipedia.org/wiki/C_data_types)
   (int, long, long long, etc.)
4. Print an error message if the user tries to input too big of a number.

## [Solution File](#id18)[#](#solution-file "Link to this heading")

See the the solution file if need help.

Lab 4 Solution

* [Lab 4: Fibonacci C Solution](fibonacci-solution.html)
> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/c/4/index.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.