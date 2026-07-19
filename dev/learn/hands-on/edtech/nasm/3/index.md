# [Lab 3: Control Structure](#id20)[#](#lab-3-control-structure "Link to this heading")

## [Overview](#id21)[#](#overview "Link to this heading")

Control structures (branches and loops) are necessary in programming.

You will learn how to make if/else blocks and loops.

> **Note**
> These examples use labels that are familiar for control statements.
Your program should not these types of labels. Your should use
descriptive labels that describe the purpose of the block.

These types of labels will not be accepted:

```
loop
end_if
zzzzzz
asdf
does_something

```

### [Sources](#id22)[#](#sources "Link to this heading")

* [NASM Control Structures (Module)](http://courses.ics.hawaii.edu/ReviewICS312/modules/controlstructures/) - University of Hawaii
* [Jumps and Branches](http://courses.ics.hawaii.edu/ReviewICS312/morea/ControlStructures/ics312_jumpsbranches.pdf) - University of Hawaii Presentation
* [Control Structures](http://courses.ics.hawaii.edu/ReviewICS312/morea/ControlStructures/ics312_controlstructures.pdf) - University of Hawaii Presentation
* [Conditionals: Goto and Branch Instructions](https://www.cs.uaf.edu/2017/fall/cs301/lecture/09_01_loops.html) - University of Alaska

## [Branches](#id23)[#](#branches "Link to this heading")

Branches, go statements, or jumps usually happen after a comparison
or operation that can set a flag on the processor.

They are the **conditional** version of the unconditional `jmp` command.

> ```
>     mov  eax,  100
>     jmp  next   ; jump to next
>     ; skip these commands
>     add  eax,  ecx
> next:
>     ; do something here
>
> ```

### [Branch on State of Flag](#id24)[#](#branch-on-state-of-flag "Link to this heading")

NASM Jump Instructions (Generic)[#](#id1 "Link to this table")

| Instruction | Condition | Info |
| --- | --- | --- |
| JZ | Zero flag:   Branches if ZF is set | ``` mov  edx, 5 mov  ecx, 5 sub  ecx, edx ; jump if result == 0 jz   zero_value  ``` |
| JNZ | Zero flag:   Branches if ZF is unset | ``` mov  ebx, 5 cmp  ebx, 0 ; jump if ebx != 0 jnz   value_not_zero  ``` |
| JO | Signed overflow:   Branches if OF is set | ``` mov  ebx, 2147483647 add  ebx, 1 jo  overflow_detected ; FLAGS = 0A96 OF    SF    AF PF  ``` |
| JNO | Signed overflow:   Branches if OF is unset | ``` mov  ebx, 2147483647 sub  ebx, 1 jno  no_overflow_detected ; FLAGS = 0202  ``` |
| JS | Sign flag:   Branches is SF is set | ``` mov  ebx, 0 sub  ebx, 10 js  negative_value ; FLAGS = 0297       SF    AF PF CF  ``` |
| JNS | Sign flag:   Branches is SF is unset | ``` mov  ebx, 10 sub  ebx, 10 jns  not_negative ; FLAGS = 0246          ZF    PF  ``` |
| JC | Unsigned Carry flag   branches if CF is set | ``` mov  eax, 4294967294 add  eax, 2 jc   handle_unsigned_carry ; FLAGS = 0257          ZF AF PF CF  ``` |
| JNC | Unsigned Carry flag   Branches if CF is unset | ``` mov  eax, 4294967294 add  eax, 1 jnc  no_unsigned_carry ;FLAGS = 0286       SF       PF  ``` |

### [Branches for Equality Tests](#id25)[#](#branches-for-equality-tests "Link to this heading")

This group is a result of command `cmp`.

> ```
> cmp eax, ecx    ; compare and then evaluate
>
> ```

NASM Jump Instructions (Signed)[#](#id2 "Link to this table")

| Instruction | Condition | Info |
| --- | --- | --- |
| JE | Jump if `cmp` is equal | ``` mov  eax, 10 mov  ecx, 10 cmp  eax, ecx ; jump if eax == ecx je   match_found  ``` |
| JNE | Jump if `cmp` is not equal | ``` mov  eax, 5 mov  ecx, 10 cmp  eax, ecx ; jump if eax != ecx jne  not_equal  ``` |
| JG | Signed `>` | greater than |
| JGE | Signed `>=` | greater than or equals |
| JL | Signed `<` | less than |
| JLE | Signed `<=` | less than or equals |
| JA | Unsigned `>` | above |
| JAE | Unsigned `>=` | above or equals |
| JB | Unsigned `<` | below |
| JBE | Unsigned `<=` | below or equals |

Consider the following C-like code wither register-like variables

> ```
> if (EAX == 0)
>    EBX = 1;
> else
>    EBX = 2;
>
> ```

Here it is in x86 assembly. Notice the `jz` flag.

> ```
>     cmp    eax,  0       ; do the comparison
>     jz     then_block    ; if = 0, then goto then_block
>     mov    ebx,  2       ; else clause
>     jmp    next          ; jump over the then clause
> then_block:
>     mov    ebx,  1       ; then clause
> next:
>     ; continue the program
>
> ```

## [Control Block Examples](#id26)[#](#control-block-examples "Link to this heading")

### [If-Else block](#id27)[#](#if-else-block "Link to this heading")

View runnable file: [if-then.asm.txt](/_static/asm/if-then.asm.txt)

Generic `if` statement[#](#id3 "Link to this code")
```
if (condition) then
    then_block

```
NASM implementation of `if` statement[#](#id4 "Link to this code")
```
    ; instructions to set flags (e.g., cmp ...)
    jXX  end_if         ; evaluate flag. Jump on true condition

    ; then_block code

end_if:
    ; program continues

```

### [If-Then-Else block](#id28)[#](#if-then-else-block "Link to this heading")

View runnable file: [if-then-else.asm.txt](/_static/asm/if-then-else.asm.txt)

Generic `if-then-else` statement[#](#id5 "Link to this code")
```
if (condition) then
    then_block
else
    else_block

```
NASM implementation of `if-then-else` statement[#](#id6 "Link to this code")
```
    ; instructions to set flags (e.g., cmp ...)
    jXX    else_block       ; evaluate flag. Jump on true condition

    ; then_block code
    jmp end_if              ; skip the else_block

else_block:

    ; code for the else block

end_if:
    ; program continues

```

### [For loops](#id29)[#](#for-loops "Link to this heading")

There are two variants of the `for` loop. The first is a
traditional approach incrementing `i`. The second option
uses the `loop` command, which operates in reverse order.

#### [Traditional `for` loop](#id30)[#](#traditional-for-loop "Link to this heading")

View runnable file: [for.asm.txt](/_static/asm/for.asm.txt)

Generic `for` loop[#](#id7 "Link to this code")
```
sum = 0;
for (i = 0; i <= 10; i++) {
    sum += i;
}

```
NASM implementation of a `for` loop[#](#id8 "Link to this code")
```
    mov    eax,  0          ; eax is sum
    mov    ebx,  0          ; ebx is i (could be ecx or edx)
loop_start:
    cmp    ebx,  10         ; compare i and 10
    jg     loop_end         ; if (i > 10) goto loop_end
    add    eax, ebx         ; sum += i
    inc    ebx              ; i++
    jmp    loop_start       ; goto loop_start
loop_end:
    ; program continues

```

#### [`loop` command (Reverse loop)](#id31)[#](#loop-command-reverse-loop "Link to this heading")

View runnable file: [loop.asm.txt](/_static/asm/loop.asm.txt)

Generic reverse `for` loop[#](#id9 "Link to this code")
```
sum = 0;
for (i = 10; i > 0; i--) {
    sum += i;
}

```
NASM implementation of a `for` loop[#](#id10 "Link to this code")
```
    mov    eax, 0          ; eax is the sum
    mov    ecx, 10         ; ecx is i (this must be ECX)
loop_start:
    add    eax, ecx        ; sum += i
    loop   loop_start      ; if i > 0 then  go to loop_start

    ; program continues when ECX == 0

```

### [While loop](#id32)[#](#while-loop "Link to this heading")

View runnable file: [while.asm.txt](/_static/asm/while.asm.txt)

Generic `while` loop[#](#id11 "Link to this code")
```
while (condition) {
   body
}

```
NASM implementation of a `while` loop[#](#id12 "Link to this code")
```
while:
    ; instructions to set flags (e.g., cmp...)
    jXX    end_while        ; evaluate flag. Jump on true condition

    ; body of loop
    jmp    while            ; continue loop

end_while:
    ; program continues

```

### [Do-While loop](#id33)[#](#do-while-loop "Link to this heading")

View runnable file: [do-while.asm.txt](/_static/asm/do-while.asm.txt)

Generic do-while loop[#](#id13 "Link to this code")
```
do {
   body
} while (condition)

```
NASM implementation of a do-while loop[#](#id14 "Link to this code")
```
do:
    ; body of loop
    ; instructions to set flags (e.g., cmp...)
    jXX    do                  ; evaluate flag. Jump on true condition

    ; program continues

```

## [Task 1: If Statement](#id34)[#](#task-1-if-statement "Link to this heading")

You are performing system upgrades. However, not all systems will receive
the upgrade at the same time. You need to write code to prevent a system
crash and to protect data from an overflow.

Your task is to create a NASM program that squares a number to determine
if it will fit in the current register. If not, print the original value.
The program must work with any register size (16, 32, or 64 bit).

C Template[#](#id15 "Link to this code")
```
int value = 8192;

if (can_square)
    value = value * value;

printf(value);

```

See the [Lab 3.1 Solutions](solutions.html#lab-3-1-solution) if you need help.

## [Task 2: If/Else Statement](#id35)[#](#task-2-if-else-statement "Link to this heading")

Your task is to create a NASM program that determines if a number is
even or odd. Print 0 for even numbers and 1 for odd numbers.

C Template[#](#id16 "Link to this code")
```
int value = 8192;

if (even)
    value = 0;
else
    value = 1;

printf(value);

```

See the [Lab 3.2 Solutions](solutions.html#lab-3-2-solution) if you need help.

## [Task 3: While Loop](#id36)[#](#task-3-while-loop "Link to this heading")

You need to track the number of cycles that an operation takes to
complete. Create a while loop that performs some action. Print the
number of loop iterations.

You could evaluate a zero value (ZF), less than, or greater than

C Template[#](#id17 "Link to this code")
```
int counter = 0;

// Example using greater than
while (value <! maximum) {

   value = value + 10;
   counter ++;
}

printf(counter);

```

See the [Lab 3.3 Solutions](solutions.html#lab-3-3-solution) if you need help.

## [Task 4: Factorial](#id37)[#](#task-4-factorial "Link to this heading")

Use the ASM implementation of a `for` loop to calculate the factorial
of a number. See [C programming lab 1](../../c/1/index.html#c-lab-1) for additional
information.

C Template[#](#id18 "Link to this code")
```
int i;                           // ECX
int factorial = 5;               // EBX
int result = 1;                  // EAX

for (i = 1; i <= factorial; i++)
{
    result = result * i;

    // Check for overflow. -1 will indicate that an error occurred.
    if (OVERFLOW_FLAG) {
        factorial = 0;          // loop condition
        result = -1;            // set to -1 (invalid factorial)
        print(i);               // Record max factorial number + 1
    }

    // Optionally, print the incremental number to help you debug
    // printf(result);
}

printf(result);

```
Expected Results[#](#id19 "Link to this code")
```
; 5!
120

; 12!
479001600

; 18! (n! > 12)
13          ; 13! caused an overflow
-1          ; error

```

See the [Lab 3.4 Solutions](solutions.html#lab-3-4-solution) if you need help.

## [Solutions](#id38)[#](#solutions "Link to this heading")

Lab 3 Solutions

* [Lab 3: Solutions](solutions.html)
  * [Lab 3.1 Solutions](solutions.html#lab-3-1-solutions)
  * [Lab 3.2 Solutions](solutions.html#lab-3-2-solutions)
  * [Lab 3.3 Solutions](solutions.html#lab-3-3-solutions)
  * [Lab 3.4 Solutions](solutions.html#lab-3-4-solutions)
> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/nasm/3/index.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.