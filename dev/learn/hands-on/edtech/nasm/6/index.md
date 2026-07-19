# [Lab 6: Subprograms: Arguments](#id12)[#](#lab-6-subprograms-arguments "Link to this heading")

## [Overview](#id13)[#](#overview "Link to this heading")

We saw how to we can create a function or a subprogram to complete
a specific task. Now, we will see how pass arguments to a subprogram.

> **Attention**
> * Please view the lecture presentation and view the two videos
  before “Googling” for the solution.
* You will not understand what this code is doing if you do not
  understand how you can access values on the stack.
* Lecture Video: <https://www.screencast.com/t/Ikm9BaXB0nJo>
* Demo Video: <https://www.screencast.com/t/aifWankPi>

### [Sources](#id14)[#](#sources "Link to this heading")

* [NASM Subprograms (Module)](http://courses.ics.hawaii.edu/ReviewICS312/modules/subprograms/) - University of Hawaii
* [Subprograms 101](http://courses.ics.hawaii.edu/ReviewICS312/morea/Subprograms/ics312_subprograms101.pdf) - University of Hawaii Presentation
* [Subprogram Arguments](http://courses.ics.hawaii.edu/ReviewICS312/morea/Subprograms/ics312_subprogramsargs.pdf) - University of Hawaii Presentation
* [Subprogram Local Variables](http://courses.ics.hawaii.edu/ReviewICS312/morea/Subprograms/ics312_subprogramslocals.pdf) - University of Hawaii Presentation

### [Arguments](#id15)[#](#arguments "Link to this heading")

The caller is responsible for pushing the arguments to the stack, which
it does in reverse order. Then, the subprogram can access the data using
the stack pointer.

> **Tip**
> Save the current stack pointer in `ESP` to prevent tracking the
offset value when pushing additional data to the stack.

Consider this example that finds the largest of the three values. It has
the prototype of `int maxofthree(int, int, int);`

1. The three arguments have been pushed to the stack in
   reverse order so that the first argument is at the top.
   Stack view (top) `| arg1 | arg2 | arg3 | ... |`

   ```
   int result = maxofthree(1, 2, 3);
   Push arg3: |  3  | ... |
   Push arg2: |  2  |  3  | ... |
   Push arg1: |  1  |  2  |  3  | ... |

   ```
2. The RET address is also pushed to the top when using CALL

   ```
   Stack:   | RET |   1   |   2   |    3    |   ...   |
   Pointer: | ESP | ESP+4 | ESP+8 | ESP+12  | ESP+16  |

   ```
3. At the start of function, we push EBP to the top of the stack to save it.
   We will use use EBP as our pointer (the offset will not change).

   ```
   push    ebp        ; Save EBP value
   mov     ebp, esp   ; set EBP to current pointer

   Stack:       | PTR |  RET  |   1   |    2   |    3   |   ...  |
   ESP Pointer: | ESP | ESP+4 | ESP+8 | ESP+12 | ESP+16 | ESP+20 |
   EBP Pointer: | EBP | EBP+4 | EBP+8 | EBP+12 | ESP+16 | ESP+20 |

   ```
4. Lastly, we allocate space for local args (optional)

   ```
   EBP doesn't change when we allocate more memory.
   sub     esp, 8         ; reserve X=4*N bytes for N local vars
                          ; ESP   is v_1
                          ; ESP+4 is v_2

   Stack:       | v_1 |  v_2  |  PTR  |   RET  |    1   |    2   |    3   |   ...  |
   ESP Pointer: | ESP | ESP+4 | ESP+8 | ESP+12 | ESP+16 | ESP+20 | ESP+24 | ESP+28 |
   EBP Pointer: |  -  |   -   |  EBP  | EBP+4  | EBP+8  | EBP+12 | ESP+16 | ESP+20 |

   ```
   > **Note**
   > * Notice that the EBP pointer did not change.
   * Our first arg is still EBP+8.

Sample program showing how to compare three args[#](#id1 "Link to this code")
```
 1;
 2; Function prototype: int maxofthree(int, int, int)
 3;
 4maxofthree:
 5
 6; 1. Save EBP to the stack and set EBP to current pointer
 7push    ebp             ; save caller's EBP value
 8mov     ebp, esp        ; set EBP to current pointer
 9
10; 2. Put the args in registers EAX, ECX, EDX.
11; The offset always starts at +8 for arg when using EBP
12;
13; We must save EBX if we use it. It is a preserved register.
14; Alternatively, just use the value using ebp+N
15
16mov     eax, [ebp+8]    ; pointer offsets for first parameter
17mov     ecx, [ebp+12]   ; pointer offsets for second parameter
18;  mov     edx, [ebp+16]   ; pointer offsets for third parameter
19
20; Optional space for local variables
21; EBP doesn't change when we allocate more memory.
22; sub     esp, N         ; reserve X=4*N bytes for N local vars
23
24; 3. Compare the first two args, store largest in EAX
25;
26; // C equivalent
27; if (eax < ecx)
28;     eax = ecx;
29
30cmp     eax, ecx        ; compare arg1 and arg2, then evaluate
31cmovl   eax, ecx        ; eax = ecx if eax < ecx
32                        ; perform move if previous comparison
33                        ; resulted in "less than"
34
35; 4. Compare the last arg with the current result, store largest in EAX
36;
37; We don't have to use a register! We can access memory directly
38; // C equivalent
39; if (eax < *arg3)
40;     eax = *arg3;
41
42cmp     eax, [ebp+16]   ; compare the result with the third arg
43cmovl   eax, [ebp+16]   ; Move if less than
44
45; 5. clean up local args
46mov     esp, ebp        ; remove space for local vars
47
48; 6. Restore EBP
49pop     ebp;            ; Return caller's EBP value
50
51; 7. Return EAX
52ret                     ; return eax, which is the result

```

### [Subprogram template](#id16)[#](#subprogram-template "Link to this heading")

Subprogram template with args that returns a value[#](#id2 "Link to this code")
```
;---------------------------------------------------------------
;   FUNCTION: subprogram_name
;   This subprogram ... (describe functionality)
;   The function has prototype:
;
;    int subprogram_name(int*, int)
;
;   Takes the following parameters:
;     1. describe the first arg
;     2. describe the second arg
;
;   Returns the value in EAX
;---------------------------------------------------------------

global  subprogram_name

segment .data

segment .bss
    returnvalue     resd     1   ; place in memory for the return value

segment .text
subprogram_name:

    ; Initialize the subprogram (we must reverse this processes to cleanup)
    push    ebp             ; save caller's EBP value
    mov     ebp, esp        ; set EBP to current pointer
    sub     esp, N          ; reserve X=4*N bytes for N local vars
    pusha                   ; save all

    ; Get arg data
    mov     edx, [ebp+8]    ; arg1 (could be EAX, EBX, ECX, or EDX)
    mov     ecx, [ebp+12]   ; arg2 (could be EAX, EBX, ECX, or EDX)

    ; Start the work!

    . . .

    ; Clean up and then exit

    ; Put return values in EAX
    mov     [returnvalue], eax      ; save return value in memory
    popa                            ; restore data to registers
    mov     eax, [returnvalue]      ; retrieve the saves return value

    ; Restore stack pointers
    mov     esp, ebp        ; remove space for local vars
    pop     ebp;            ; Return caller's EBP value

    ret                     ; return eax (AEX contains the value of the stack pointer)

```

### [Floating Points](#id17)[#](#floating-points "Link to this heading")

Working with floating points requires the use of different commands than
ADD or SUB and different registers than the four registers the we use
commonly, such as EAX or ECX.

> The FPU has 8 registers, st0 to st7, formed into a stack.
> Numbers are pushed onto the stack from memory, and are popped
> off the stack back to memory. FPU instructions generally will
> pop the first two items off the stack, act on them, and push
> the answer back on to the top of the stack.

Here is a list some floating point instructions. You can see that
some commands operate similarly to their integer counterpart, but
they have the `f` prefix. For example you would use `fadd` to add
floating point numbers.

`fldz`
:   Push +0.0 onto the FPU register stack.

`fld1`
:   Push +1.0 onto the FPU register stack

`fadd`
:   * ST0 += VALUE
    * Add the value to the top of the floating point stack (ST0)

`fsub`
:   * ST0 -= VALUE
    * Subtract the value from the top of the floating point stack (ST0)

#### [References](#id18)[#](#references "Link to this heading")

* [X86 Assembly/Floating Point](https://en.wikibooks.org/wiki/X86_Assembly/Floating_Point)
* <https://bugaevc.github.io/asmwall/>

## [Task 1: Create a Subprogram to Sum Integers](#id19)[#](#task-1-create-a-subprogram-to-sum-integers "Link to this heading")

The first subprogram will accept an array of integers, sum them,
and then return the value.

The the function will have the prototype of:

```
int sum_int(int*, int length)

```

1. Create a new file called `sum_int.asm` and start with the
   **Subprogram template** from above.

   > **Note**
   > You should remove the code that you do not need and
   use correct reference names.
2. Compile to verify that you do not have a syntax error.

   You will need to add a new target to your `Makefile` and then
   compile using `make sum_int.o`.

   ```
   # Build sum_int.asm
   sum_int.o:
       @nasm -f elf -d ELF_TYPE sum_int.asm -o sum_int.o

   ```

## [Task 2: Create Your C Program](#id20)[#](#task-2-create-your-c-program "Link to this heading")

1. Create `sum.c` using this code:

   sum.c[#](#id3 "Link to this code")
   ```
    1/**
    2 * sum.c
    3 *
    4 * Demonstrates how to send an int array and a double array
    5 * to asm files to process.
    6 *
    7 * Return the summation of the values in the array
    8 *     double sum_double(double[] array, int length)
    9 *     int sum_int(int[] array, int length)
   10 *
   11 */
   12
   13#include <stdio.h>
   14
   15int sum_int(int*, int);
   16
   17int main() {
   18
   19    // result = 210; array_size = 16
   20    int array_int[] = {11,22,33,44,55,35,1,1,1,1,1,1,1,1,1,1};
   21    int size_array_int = sizeof(array_int)/sizeof(int);
   22
   23    printf(" int values: ");
   24
   25    // print array values
   26    for (int i = 0; i < size_array_int; i++) {
   27        printf(" %d,", array_int[i]);
   28    }
   29
   30    int sum_i = sum_int(array_int, size_array_int);
   31    printf("\n size: %d; sum: %i", size_array_int, sum_i);
   32    printf("\n");
   33
   34    return 0;
   35}

   ```
2. Compile to verify that you do not have a syntax error.

   You will need to add a new target to your `Makefile` and then
   compile using `make sum.o`.

   ```
   sum.o:
       @gcc -m32 -c sum.c -o sum.o

   ```
3. Link the `sum.o` and `sum_int.o` in the sum target of the Makefile.

   ```
   sum: sum_int.o sum.o:
       @gcc -m32 sum.o sum_int.o -o sum

   ```
4. Verify that your program prints the array values, displays the correct
   size of the array, and the sum contains a random value.

   Expected Output[#](#id4 "Link to this code")
   ```
   make
   Building sum
   ./sum
   int values:  11, 22, 33, 44, 55, 35, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
   size: 16; sum: -2055764

   ```

## [Task 3: Sum the Integer Values](#id21)[#](#task-3-sum-the-integer-values "Link to this heading")

Now, you are ready to sum the values in the array!

Here are the registers that you can:

`EDX`
:   * The pointer to the array (the first arg).
    * Recall that arrays are always passed by reference in C.

`ECX`
:   * The length of the array (the second arg)

`EAX`
:   * The summation and return value

1. First, you will need to get the values from the parameters. You can
   do this by accessing them in memory starting with `ebp+8`.

   ```
   ; get arg data
   mov     edx, [ebp+8]    ; address of argument (array)
   mov     ecx, [ebp+12]   ; length of array

   ```
2. Next, initialize the values and check the array for a non-positive length

   > **Note**
   > The loop operate as a `do-while` loop if we test the condition
   at the end of the loop. In which case, we should test the condition
   to protect against an array with a zero or negative length.
   Initialize and validate input[#](#id5 "Link to this code")
   ```
   mov     eax, 0          ; initialize the sum and return value
   cmp     ecx, 0          ; guard against non-positive lengths
   jle     done            ; exit if the array length < 1

   ```
3. The primary algorithm is a loop with a summation variable.

   1. Loop through the array
   2. Get the value at memory location [EDX]
   3. Add that value to EAX: EAX = EAX + [EDX]
   4. Increment the array pointer (EDX += 4)Loop with summation variable[#](#id6 "Link to this code")
   ```
   next:
       add     eax, [edx]      ; [edx] contains the current value in the array add to eax
       add     edx, 4          ; move to next array element
                               ; 4 == sizeof(int); int data type has a size of 4.

       dec     ecx             ; count down
       jnz     next

   ```
4. That’s it! Your code should loop through the array and sum the values.

Expected Results[#](#id7 "Link to this code")
```
make
Building sum
./sum
 int values:  11, 22, 33, 44, 55, 35, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
 size: 16; sum: 210

```

## [Task 4: Sum the Double Values](#id22)[#](#task-4-sum-the-double-values "Link to this heading")

This task is almost identical to adding integers, but will use different
commands.

The the function will have the prototype of:

```
double sum_double(double*, int);

```

### [Part 1](#id23)[#](#part-1 "Link to this heading")

First, you will create the file, add references to the Makefile, and create
the test code.

> **Note**
> Do this part first! Otherwise, you will have a hard time debugging
because you won’t know if the error is in the ASM file, Makefile, or
in the C file.

1. Create a copy of `sum_int.asm` and call it `sum_double.asm`.
2. Change the references in the file, subprogram name, comment header, etc.
3. Add the new targets to the Makefile for `sum_double.asm`.
4. Execute `make all` to verify that there are no errors.
5. Add the function prototype to your `sum.c` file:

   ```
   double sum_double(double*, int);

   ```
6. Add this code block to your `sum.c` file

   ```
   // result = 23.331000; array_size = 6
   double array_double[] = {1.111,2.222,3.333,4.444,5.555, 6.666};
   int size_array_double = sizeof(array_double)/sizeof(double);

   printf(" double values: ");

   // print array values
   for (int i = 0; i < size_array_double; i++) {
       printf(" %lf,", array_double[i]);
   }

   double sum_d = sum_double(array_double, size_array_double);
   printf("\n size: %d; sum: %lf", size_array_double, sum_d);
   printf("\n");

   ```
7. Rebuild your project. It should run without crashing, but will not
   produce the expected results. Notice the `-nan`

   ```
   1make all
   2Cleaning up...
   3Building sum
   4./sum
   5int values:  11, 22, 33, 44, 55, 35, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
   6size: 16; sum: 210
   7double values:  1.111000, 2.222000, 3.333000, 4.444000, 5.555000, 6.666000,
   8size: 6; sum: -nan

   ```

### [Part 2](#id24)[#](#part-2 "Link to this heading")

Now, you can complete work on the ASM file knowing that the rest of the
project operates without errors.

> **Note**
> A floating point value requires 8 bytes, or a `qword`

1. First, you will initialize the summation registers using command
   `fldz`, which writes a 0.0 to `st0`.

   Replace the integer initialization code with floating commands[#](#id8 "Link to this code")
   ```
   ; mov     eax, 0      ; initialize the sum to 0
   fldz                  ; initialize ST0 to 0.0

   ```
2. Next Replace the `add` summation command with `fadd` command.
   Also, we must specify the memory size of the value.

   fadd with qword[#](#id9 "Link to this code")
   ```
   ; add     eax, [edx]
   fadd    qword [edx]      ; ST0 += [edx]

   ```
3. The last required change to make is to increment the array. Our
   integer values incremented the pointer by 4 bytes (`add edx, 4`).
   However, a floating point value is 8 bytes. Therefore, we must move
   the pointer accordingly.

   Increment array pointer[#](#id10 "Link to this code")
   ```
   ; 4 == sizeof(int); int data type has a size of 4.
   ; add     edx, 4    ; move to next array element (int data size)

   ; 8 == sizeof(double); double data type has a size of 8.
   add     edx, 8      ; move to next array element (double data size)

   ```
4. We should remove the `returnvalue` code because we don’t use it to
   store the floating point result.

That’s it! You can rebuild and view the output.

Expected Output[#](#id11 "Link to this code")
```
int values:  11, 22, 33, 44, 55, 35, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
size: 16; sum: 210
double values:  1.111000, 2.222000, 3.333000, 4.444000, 5.555000, 6.666000,
size: 6; sum: 23.331000

```

## [Solutions](#id25)[#](#solutions "Link to this heading")

Lab 6 Solutions

* [Lab 6: Solutions](solutions.html)
> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/nasm/6/index.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.