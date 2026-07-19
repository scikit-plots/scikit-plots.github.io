# [Lab 3: Endianness](#id7)[#](#lab-3-endianness "Link to this heading")

## [Overview](#id8)[#](#overview "Link to this heading")

You will write a program to convert the contents of a byte stored in an
array between [Big Endian and Little Endian](https://chortle.ccsu.edu/AssemblyTutorial/Chapter-15/ass15_3.html). [Endianness](https://en.wikipedia.org/wiki/Endianness) defines the
order of byte. You will work with a simulation of a byte.

### [Big Endian Byte Order](#id9)[#](#big-endian-byte-order "Link to this heading")

> Big endian byte order is ****most significant**** byte (the “big end”) of
> the data is placed at the byte with the lowest address. The rest of
> the data is placed in order in the next three bytes in memory.
>
> For example, little-endian byte order stores a hex value of 0x12345678
> in memory as:
>
> Big Endian Byte Order 0x12345678[#](#id1 "Link to this table")
>
> | 0x100 | 0x101 | 0x102 | 0x103 |
> | --- | --- | --- | --- |
> | 12 | 34 | 56 | 78 |

### [Little Endian Byte Order](#id10)[#](#little-endian-byte-order "Link to this heading")

> Little endian byte order is the ****least significant**** byte
> (the “little end”) of the data is placed at the byte with the lowest
> address. The rest of the data is placed in order in the next three
> bytes in memory.
>
> For example, little-endian byte order stores a hex value of 0x12345678
> in memory as:
>
> Little Endian Byte Order 0x12345678[#](#id2 "Link to this table")
>
> | 0x100 | 0x101 | 0x102 | 0x103 |
> | --- | --- | --- | --- |
> | 78 | 56 | 34 | 12 |

Sources and additional information:

> * [Big Endian and Little Endian](https://chortle.ccsu.edu/AssemblyTutorial/Chapter-15/ass15_3.html)
> * [Little and Big Endian Mystery](https://www.geeksforgeeks.org/little-and-big-endian-mystery/)
> * [big-endian and little-endian](https://searchnetworking.techtarget.com/definition/big-endian-and-little-endian)
> * [Understanding Big and Little Endian Byte Order](https://betterexplained.com/articles/understanding-big-and-little-endian-byte-order/)

### [Arrays in C](#id11)[#](#arrays-in-c "Link to this heading")

An array in C is always passed by reference. You need three pieces of
data when working with an array:

> 1. The pointer to the array
> 2. The type of data
> 3. The length of the array

Here are some ways to create an array:

```
// Allocate memory, but don't initialize
int array[10];

// Initialize with zeros
int array[10] = {0}

// Create and populate with data
int array[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};

// Get the pointer to an array
int *p = array;

```

Use these pages as a reference

> * <https://www.tutorialspoint.com/cprogramming/c_arrays.htm>
> * <https://www.javatpoint.com/return-an-array-in-c>

## [Task 1: Create an Array](#id12)[#](#task-1-create-an-array "Link to this heading")

Your first task is to create an array of the power table using
****big-endian ordering**** that represents a byte that is ordered
from most significant to least significant.

> Big Endian Byte Order for the power table[#](#id3 "Link to this table")
>
> | 2 7 | 2 6 | 2 5 | 2 4 | 2 3 | 2 2 | 2 1 | 2 0 |
> | --- | --- | --- | --- | --- | --- | --- | --- |
> | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

1. Open up [ide.judge0.com](https://ide.judge0.com/) or use VSC and GCC using a
   template from [C Templates](../templates/index.html#c-templates).
2. Create an `int` array of the power table. Start with
   2 0 to 2 7.

   * Your program should work with an array of size ‘n’.
   > **Hint**
   > * Use a `define` statement to set the array size at compile time.

     ```
     #define SIZE 8

     ```
   * You can change it later to 16 to process an array from
     2 0 to 2 15.
3. Print the contents to the screen

Expected Output[#](#id4 "Link to this code")
```
Big Endian Order:     128 63 32 16 8 4 2 1

```

## [Task 2: Reverse the Array](#id13)[#](#task-2-reverse-the-array "Link to this heading")

Your second task is to reverse the array to show the the power table in
****little-endian ordering**** that represents a byte in order from least
significant to most significant.

> Little Endian Byte Order for the power table[#](#id5 "Link to this table")
>
> | 2 0 | 2 1 | 2 2 | 2 3 | 2 4 | 2 5 | 2 6 | 2 7 |
> | --- | --- | --- | --- | --- | --- | --- | --- |
> | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 |

> **Note**
> Do not create a function for this yet. You will do that in a later step.

1. Reverse the array.
2. Print the array showing big-endian ordering.

Expected Output[#](#id6 "Link to this code")
```
Big Endian Order:     128 63 32 16 8 4 2 1
Little Endian Order:  1 2 4 8 16 32 64 128

```

## [Task 3: Create Functions](#id14)[#](#task-3-create-functions "Link to this heading")

We don’t like doing a lot of work in function `main()`. Instead, we should
create some functions to do the work.

C does not contain an array length property like higher-level languages.
You must calculate the size based on the memory allocation. See the
answer to the question [How do I determine the size of my array in C?](https://stackoverflow.com/questions/37538/how-do-i-determine-the-size-of-my-array-in-c#answer-10349610) in
Stack Overflow.

For this activity, you will use the value in the `#define` instead
of trying to determine the array size.

1. Create a function using this prototype that prints the contents
   of an array.

   ```
   /*
    * int array:  the pointer to the array
    */
   void print_array(int *);

   ```
2. Create a function using this prototype that creates and returns an array.
   Here is an example of how to [return an array from a function in C](https://www.tutorialspoint.com/cprogramming/c_return_arrays_from_function.htm).

   ```
   /*
    * return value:   the pointer to the array
    */
   int *create_array();

   ```
3. Create a function using this prototype that reverses the array

   ```
   /*
    * int array:        the pointer to the big-endian array
    * return value:     the pointer to the little-endian array
    */
   int *convert_to_little_endian(int *);

   ```

## [Task 4: User Selected Order](#id15)[#](#task-4-user-selected-order "Link to this heading")

Use the command line args to give the user an option to view
the array in the little-endian or big-endian byte order.

1. Add the command line args code from [C Templates](../templates/index.html#c-templates).
2. Print this message if there are no args:

   ```
   Usage: endianness [value]
       b    Big Endian Byte Order
       l    Little Endian Byte Order

   ```
3. Convert the arg to a `char` instead of doing a string comparison.
   `chars` are `integers`, which makes it easy to work with.
   See an example of how to [convert a command line arg to a char](https://stackoverflow.com/questions/21136735/store-argv1-to-an-char-variable).

   * `*argv[]` in `main()` is a 2D array (an array of strings).
   * `argv[1]` is a char array or a string terminated with the `\0`
     (the null terminator).
   * For example, executing `endianness.exe l` will contain an array
     with two `chars`: `{ 'l' , '\0' }`
   * You can get the `'l'` char by accessing the first element of the
     arg.

     > ```
     > // argv[1]    --> { 'l' , '\0' }
     > // argv[1][0] --> 'l'
     > char order = argv[1][0];
     >
     > ```
4. Display the array in big or little-endian order based on the user
   selection.

> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/c/3/index.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.