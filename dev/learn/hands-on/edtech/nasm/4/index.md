# [Lab 4: Nested Loops and Sub Routines](#id17)[#](#lab-4-nested-loops-and-sub-routines "Link to this heading")

## [Overview](#id18)[#](#overview "Link to this heading")

Assembly uses goto statements to jump to a label, which is an instruction
at a specific memory location. As a result, loops do not need to be
**nested** in each other as they do in higher level languages. However,
you can put the inner loop in a function. Using the `call` instruction
in ASM is similar to calling a function because it preserves the return
point. A `jmp` statement does not.

Consider these two C programs that print a right triangle. They do
the same thing. The first example does the code in nested loop but
the second example moves the inner loop to a function. Where it does
the work is not important.

### [C Nested Loop Examples](#id19)[#](#c-nested-loop-examples "Link to this heading")

Classic nested loop in C. Run the code at <https://ide.judge0.com/>[#](#id1 "Link to this code")
```
 1#include <stdio.h>
 2
 3int main()
 4{
 5    int rows = 5;
 6
 7    for (int i = 1; i <= rows; i++)
 8    {
 9        // Perform work in the inner loop
10        for (int j = 1; j <= i; j++) {
11            printf("* ");
12        }
13
14        // Finish the work of the outer loop
15        printf("\n");
16    }
17    return 0;
18}

```
Inner loop moved to function. Run the code at <https://ide.judge0.com/>[#](#id2 "Link to this code")
```
 1#include <stdio.h>
 2
 3void print_row(int);
 4
 5int main()
 6{
 7    int rows = 5;
 8
 9    for (int i = 1; i <= rows; i++)
10    {
11        print_row(i);   // Perform the work of the inner loop
12        printf("\n");   // Finish the work of the outer loop
13    }
14    return 0;
15}
16
17/**
18 * Performs the work of the inner loop
19 * int i: The counter of the outer loop
20 */
21void print_row(int i)
22{
23    for (int j = 1; j <= i; j++) {
24        printf("* ");
25    }
26}

```

### [ASM Nested Loop Examples](#id20)[#](#asm-nested-loop-examples "Link to this heading")

ASM nested loop[#](#id3 "Link to this code")
```
 1segment .text
 2asm_main:                   ; entry point (called from driver.c)
 3    ; Initialize
 4    enter 0,0               ; Initialize register EBP
 5    pusha                   ; Push register contents to the stack
 6    ; Start instructions
 7    mov    ecx, 5           ; ECX is i (this must be ECX for 'loop' instruction)
 8
 9outer:
10    mov    eax,  0          ; reset j
11  inner_start:
12    cmp    eax,  ecx        ; compare j and i
13    jge    inner_end        ; if (j => i) exit inner loop
14    inc    eax              ; j++
15    call   print_int        ; Print j
16    jmp    inner_start      ; continue inner loop
17  inner_end:
18    call   print_nl
19    loop   outer            ; if ECX != 0, continue outer loop
20
21    ; Program ends when ECX reaches 0
22    ; End instructions, clean up
23    popa                     ; Restore register data from the stack
24    mov eax, 0               ; flush EAX of data
25    leave                    ; restore the stack
26    ret                      ; Return from main back into C library wrapper

```

We can replicate the functionality by moving the inner loop to another
location in the code. However, the logic becomes fragment. We have to
put in a label inside of the outer loop so that the inner loop knows
where to go after finishing its work.

ASM Loops using jump statements[#](#id4 "Link to this code")
```
 1segment .text
 2asm_main:                   ; entry point (called from driver.c)
 3    ; Initialize
 4    enter 0,0               ; Initialize register EBP
 5    pusha                   ; Push register contents to the stack
 6    ; Start instructions
 7    mov    ecx, 5           ; ECX is i (this must be ECX for 'loop' instruction)
 8
 9; start outer loop
10outer_start:
11    mov    eax,  0          ; reset j
12    jmp    inner_start      ; Perform the work of the inner loop
13
14; Do the work of the inner loop
15outer_work:                 ; <--- The inner loop needs this reference
16    call   print_nl
17    loop   outer_start      ; if ECX != 0, continue outer loop
18    jmp    end              ; The work of the loop is done. Jump to end.
19
20; do the work of the inner loop
21inner_start:
22    cmp    eax,  ecx        ; compare j and i
23    jge    outer_work       ; if (j => i) return to outer loop
24    inc    eax              ; j++
25    call   print_int        ; Print j
26    jmp    inner_start      ; continue inner loop
27
28; All done
29end:
30    ; End instructions, clean up
31    popa                     ; Restore register data from the stack
32    mov eax, 0               ; flush EAX of data
33    leave                    ; restore the stack
34    ret                      ; Return from main back into C library wrapper

```

### [NASM Subroutines](#id21)[#](#nasm-subroutines "Link to this heading")

A subroutine (function or method) is used to perform repeat actions to
avoid code duplication and to simplify program logic. We use subroutines
`print_int` to print an integer to the console. Otherwise, we would
need to insert this code block every time we want to print a value:

Subroutine `print_int`[#](#id5 "Link to this code")
```
1push    eax
2push    dword int_format
3call    _printf
4pop     ecx
5pop     ecx

```

Here is the template for a subroutine:

Subroutine template[#](#id6 "Link to this code")
```
1label:
2    push   ecx              ; save register X data on stack
3    ; do something with ECX (or other register)
4    pop    ecx              ; restore data to register X
5    ret                     ; return to the address that called the label

```
ASM Loop using a subroutine.[#](#id7 "Link to this code")
```
 1segment .text
 2asm_main:                   ; entry point (called from driver.c)
 3    ; Initialize
 4    enter 0,0               ; Initialize register EBP
 5    pusha                   ; Push register contents to the stack
 6    ; Start instructions
 7    mov    ecx, 5           ; ECX is i (this must be ECX for 'loop' instruction)
 8
 9; start outer loop
10outer_start:
11    mov    eax,  0          ; reset j
12    call   inner_start      ; Perform the work of the inner loop
13    call   print_nl
14    loop   outer_start      ; if ECX != 0, continue outer loop
15    jmp    end              ; The work of the loop is done. Jump to end.
16
17; do the work of the inner loop
18inner_start:
19    cmp    eax,  ecx        ; compare j and i
20    jge    return           ; if (j => i) call "ret"
21    inc    eax              ; j++
22    call   print_int        ; Print j
23    jmp    inner_start      ; continue inner loop
24return:
25    ret                     ; return to the last address called (line 12)
26
27end:
28
29    ; End instructions, clean up
30    popa                     ; Restore register data from the stack
31    mov eax, 0               ; flush EAX of data
32    leave                    ; restore the stack
33    ret                      ; Return from main back into C library wrapper

```

## [Making (inverse) Right Triangles](#id22)[#](#making-inverse-right-triangles "Link to this heading")

We all like to create useless programs. :))

Use NASM to create a triangle or similar design using a character,
such as `*`. You will use a nested `for` loop. The width should
not exceed 150 characters to prevent wrapping.

Here is the [C Code](https://www.w3resource.com/c-programming-exercises/for-loop/c-for-loop-exercises-9.php)
to help you.

Let’s make things more complicated. You can’t call `print_string` more
than once per loop iteration. It would be too easy to call `print_string`
twice. Instead, use `EDX` to determine when to exit the inner loop.
Use these variables:

### [Development Tips](#id23)[#](#development-tips "Link to this heading")

The simplest implementation is to use the `loop` command to print
an inverse triangle (start at the maximum and then count down). See
one of the **ASM Nested Loop Examples** listed above. You can use these
registers.

> Register for using `loop`[#](#id8 "Link to this code")
> ```
> EAX:      ; temp var, the character to print
> EBX:      ; column counter (inner loop)
> ECX:      ; row counter (outer loop)
> EDX:      ; temp var, loop control variable
>
> ```

Printing the triangle with the base at the bottom is more complicated.
You do not have enough registers to store the data. So, you have to
push the data in one of the registers to the stack and then restore it.

> Registers for using loop control variables[#](#id9 "Link to this code")
> ```
> EAX:      ; column loop counter; the character to print
> EBX:      ; row loop control variable
> ECX:      ; row loop counter
> EDX:      ; column loop control variable
>
> ```

The column loop would look something like this:

> Column code snippet using EAX as counter[#](#id10 "Link to this code")
> ```
> 1column:
> 2                            ; compare j and i
> 3                            ; if (j => i), jump out of loop
> 4    inc    eax              ; j++
> 5    push   eax              ; save counter
> 6    mov    eax, char        ; get character to print
> 7                            ; Print char
> 8    pop    eax              ; restore counter
> 9    jmp    column           ; continue column loop
>
> ```

## [Task 1: Symmetrical Triangle](#id24)[#](#task-1-symmetrical-triangle "Link to this heading")

Create a symmetrical triangle, such as 3x3 or 5x5. `EDX ==  ECX`

> **Tip**
> Add a space between each `*` if you want the height to match the width.
Sample right triangle where **n** = 5.[#](#id11 "Link to this code")
```
1*
2* *
3* * *
4* * * *
5* * * * *

```

See the [Lab 4.1 Solutions](solutions.html#lab-4-1-solution) if you need help.

## [Task 2: Fat Triangle](#id25)[#](#task-2-fat-triangle "Link to this heading")

Modify the loop variables to create more columns than rows. The slope
of the triangle should consistent. `EDX == (ECX * 2)` or
`EDX == (ECX * 3)` are examples.

i \* 2; Reverse loop[#](#id12 "Link to this code")
```
5  * * * * * * * * * *
4  * * * * * * * *
3  * * * * * *
2  * * * *
1  * *
0  *

```

See the [Lab 4.2 Solutions](solutions.html#lab-4-2-solution) if you need help.

## [Task 3: Curves](#id26)[#](#task-3-curves "Link to this heading")

Create a regular or inverse curve from squaring numbers **(n\*n)**.

For a challenge, create power table (2 n). The power curve is
much harder because either (1) you have to keep track of the last result
by storing it using a `RESX` label to square or (2), you can create
a subroutine.

> **Note**
> Recall that `mul ecx` uses both EAX and EDX.
Square curve (n \* n)[#](#id13 "Link to this code")
```
1*
2**
3*****
4**********
5*****************
6**************************
7*************************************
8**************************************************
9*****************************************************************

```
Power curve[#](#id14 "Link to this code")
```
1*
2**
3****
4********
5****************
6********************************
7****************************************************************

```

See the [Lab 4.3 Solutions](solutions.html#lab-4-3-solution) if you need help.

## [Task 4: Skinny Triangle](#id27)[#](#task-4-skinny-triangle "Link to this heading")

Try a more challenging triangle by modify the loop variables to
create more rows than columns using the `div` command.

Skinny triangle column calculator[#](#id15 "Link to this code")
```
                        ; EAX = EAX/ECX; columns = rows/x
mov     eax, ecx        ; move the current row value into EAX
push    ecx             ; save current row value on the stack
mov     ecx, 5          ; put our divisor in ECX
mov     edx, 0          ; initialize EDX (where the remainder goes)
div     ecx             ; EAX = EAX / ECX
mov     edx, eax        ; put the number of columns to print in EDX
pop     ecx             ; restore the row value from the stack to ECX

```
The Burj Khalifa! n/5[#](#id16 "Link to this code")
```
 1*
 2*
 3*
 4*
 5**
 6**
 7**
 8**
 9**
10***
11***
12***
13***
14***
15****
16****
17****
18****
19****
20*****
21*****

```

See the [Lab 4.4 Solutions](solutions.html#lab-4-4-solution) if you need help.

## [Solutions](#id28)[#](#solutions "Link to this heading")

Lab 4 Solutions

* [Lab 4: Solutions](solutions.html)
  * [Lab 4.1 Solutions](solutions.html#lab-4-1-solutions)
    * [Inverse Triangle](solutions.html#inverse-triangle)
    * [Right Triangle](solutions.html#right-triangle)
  * [Lab 4.2 Solutions](solutions.html#lab-4-2-solutions)
    * [Wide Triangle](solutions.html#wide-triangle)
  * [Lab 4.3 Solutions](solutions.html#lab-4-3-solutions)
    * [Square Curve](solutions.html#square-curve)
  * [Lab 4.4 Solutions](solutions.html#lab-4-4-solutions)
    * [Skinny Triangle](solutions.html#skinny-triangle)
> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/nasm/4/index.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.