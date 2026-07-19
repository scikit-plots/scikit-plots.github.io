# [Lab 2: Prime Numbers](#id1)[#](#lab-2-prime-numbers "Link to this heading")

You will learn about ****preprocessor directives**** in C.

Read These Pages:

* <https://www.javatpoint.com/c-preprocessor>
* <https://www.tutorialspoint.com/cprogramming/c_preprocessors.htm>
* <https://www.tutorialspoint.com/cprogramming/c_header_files.htm>
* <https://docs.microsoft.com/en-us/cpp/preprocessor/hash-if-hash-elif-hash-else-and-hash-endif-directives-c-cpp?view=vs-2019>

> **Note**
> You will need to install a GCC compiler on your computer.

* See [Windows 10: Setup C Environment](../windows-install/index.html#windows-10-c-environment) on how to set up Windows 10
  to compile and execute C.
* Don’t know if you have GCC installed? Open a prompt and run command:

  ```
  gcc --version

  # Ubuntu shell Output
  user@DESKTOP-Z4T37ER:~$ gcc --version
  gcc (Ubuntu 7.4.0-1ubuntu1~18.04.1) 7.4.0
  Copyright (C) 2017 Free Software Foundation, Inc.

  # Windows CMD Output
  C:\Users\user>gcc --version
  gcc (MinGW.org GCC-8.2.0-3) 8.2.0
  Copyright (C) 2018 Free Software Foundation, Inc.

  ```

## [Overview](#id2)[#](#overview "Link to this heading")

You will create a C program that determines if a given number is a
prime number.

A [prime number](https://www.mathsisfun.com/prime_numbers.html) is a a whole number that cannot be made by multiplying
other whole numbers.
less than or equal to **n**:

## [Task 1: Create a bool.h file](#id3)[#](#task-1-create-a-bool-h-file "Link to this heading")

C does not have a native `bool` type, there is a library called
`stdbool.h` that offers that functionality. Instead of using it, let’s
build our own!

> **Note**
> After this exercise, the safest option is to use `stdbool.h` :)
This activity provides an example of how to create a simple `.h` file
that contains a custom data type.

Traditional programming treats a 0 as FALSE and 1 as TRUE.
However, any non-zero value in C is TRUE, and ****only 0 is FALSE****.
That means that expressions like `int a = -8` and `int = 2350`
are evaluated as TRUE.

1. Read the discussion on on [Using boolean values in C](https://stackoverflow.com/questions/1921539/using-boolean-values-in-c) on Stack Overflow.
2. Choose option of creating your `bool` type.
3. Create file called `mybool.h`
4. Create a new data type, such as `my_bool`

## [Task 2: Create your Prime Function](#id4)[#](#task-2-create-your-prime-function "Link to this heading")

1. Start with the command line template from [C Templates](../templates/index.html#c-templates).
2. Include your `mybool.h` file:

   ```
   #include "mybool.h"

   ```
   1. Verify that your file compiles without any errors or warnings.
   2. See [How to write your own header file in C](https://www.geeksforgeeks.org/write-header-file-c/) for additional information.
3. Pass the value in using the command line
4. Create a function with this prototype (or using your own type):

   ```
   my_bool number_is_prime(int);

   ```
5. Develop the function. You can use Google to help you.
6. Print the result in `main()` if the number is prime or not

## [Task 3: Test Random Generated Numbers](#id5)[#](#task-3-test-random-generated-numbers "Link to this heading")

1. Implement a random number algorithm using <https://www.geeksforgeeks.org/rand-and-srand-in-ccpp/>
2. Use the `#define` macro to set the maximum number of random
   numbers to find. <https://www.programiz.com/c-programming/c-preprocessor-macros>

   ```
   #define MAX   25

   int main() {
   . . .
   for (i = 0; i < MAX; ++i)
   {
       // get random number
   . . .

   ```
3. Generate 25 numbers in a loop, test each number for prime.
4. Were any numbers prime?
5. If not, increase the value till you find one!

> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/c/2/index.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.