# [Lab 1: Factorial](#id4)[#](#lab-1-factorial "Link to this heading")

You will practice using what you’ve previously learned in your
programming classes to get comfortable working in C again.

You will use common programming principles, such as variables,
constants, branching, loops and functions to complete this assignment.

> **Hint**
> Write and compile code online at [ide.judge0.com](https://ide.judge0.com/)!

## [Overview](#id5)[#](#overview "Link to this heading")

You will create a C program that displays the factorial of a number.

The [factorial](https://en.wikipedia.org/wiki/Factorial) of a number is the product of all positive integers
less than or equal to **n**:

For example, 5! is 5 \* 4 \* 3 \* 2 \* 1 = 120

## [Task 1: Create a Simple Factorial Program](#id6)[#](#task-1-create-a-simple-factorial-program "Link to this heading")

You will create a simple program that calculates the factorial of a
given number.

1. Start with the command line template from [C Templates](../templates/index.html#c-templates).

   1. Wait till the next step to set the value from the command arg.
   2. Focus on developing the algorithm before adding complexity.
2. Create a function with this prototype:

   ```
   int get_factorial(int);

   ```
3. Print the result in `main()`.

### [Sample output](#id7)[#](#sample-output "Link to this heading")

```
5! is: 120

```

## [Task 2: Accept the Value from the Command Line](#id8)[#](#task-2-accept-the-value-from-the-command-line "Link to this heading")

It is not common to prompt users for input when writing low-level code.
Instead, data is passed into the program through parameters or arguments.

1. The program should accept a single integer parameter.
2. Check the number of args. If the arg is missing, generate the following
   message and exit gracefully.

   ```
   usage: factorial integer

   ```
   > **Note**
   > Remember to use function `atoi(string)` to convert the
   input arg to an integer.

### [Sample output](#id9)[#](#id1 "Link to this heading")

```
./factorial
usage: factorial integer

./factorial 5
5! is: 120

```

## [Task 3: Process Improvements](#id10)[#](#task-3-process-improvements "Link to this heading")

The program works but is error-prone and does not use resources
efficiently. The return type based on the function prototype of
`int get_factorial(int);` is not appropriate because a factorial
value must be a positive integer. The default data types in C are
signed. Furthermore, entering an integer that is too large or a
negative value will produce inaccurate results.

```
./factorial 86
86! is: 0

./factorial 29
29! is: -1241513984

./factorial -8
-8! is: 1

```

### [Test Cases](#id11)[#](#test-cases "Link to this heading")

1. Use an [online factorial calculator](https://numberworld.info/factorialCalculator) to determine the result of 20!.
2. Try calculating the factorial of 20 in your program.

   1. What value did you get? Was it negative? If so, what could cause that?
3. Determine the maximum integer value used to calculate the factorial
   for types:

   ```
   short:          _____________

   unsigned short: _____________

   int:            _____________

   unsigned int:   _____________

   long:           _____________

   unsigned long   _____________

   ```

### [Resource Management](#id12)[#](#resource-management "Link to this heading")

We should use the appropriate data types for the size of our values.

1. Chose an unsigned [C data type](https://en.wikipedia.org/wiki/C_data_types) that you want to use for the
   factorial result.
2. Change the data type in the function prototype to use that type.

   ```
   type get_factorial(int);

   ```
3. Verify that your program produces the correct results up to the maximum
   value.

Example using type `char` (0-255)[#](#id3 "Link to this code")
```
// Prototype
char get_factorial(int);

// Output
5! is: 120
6! is: -48

```

### [Error Handling](#id13)[#](#error-handling "Link to this heading")

We should prevent invalid input by checking the size before performing the
calculation. It is not enough to add error handling before calling the
function. We need to add error handling inside of the function.
We can’t trust that the caller will check the input value.

1. Determine the largest integer value that a user can enter for your
   chosen data type. For example, a type `char` will hold the correct
   results up to 5! (120). 6! is 720, which exceeds an 8-bit value.
2. Create a global `const` of the type above `main()` that contains the
   maximum input value for your data type.

   * Type the name of the `const` variable in ALL\_CAPS to follow the
     common C style guide.
3. Return `0` from function `get_factorial()` if the value is too large
   or a negative value.

   > **Hint**
   > Use the `const` instead of hard-coding the integer value.
4. Generate an error message if the user enters a value that is too big.
   Inform the user of the largest value possible for your program.

### [Sample output](#id14)[#](#id2 "Link to this heading")

```
./factorial 8
Error. '8' is out of range. Accepted input is a positive integer from 0 to 5.

./factorial -5
Error. '-5' is out of range. Accepted input is a positive integer from 0 to 5.

./factorial 5
5! is: 120

```
> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/c/1/index.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.