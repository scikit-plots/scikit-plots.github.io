# Lab 6: Solutions[#](#lab-6-solutions "Link to this heading")

sum.c[#](#id1 "Link to this code")
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
15// Prototypes
16int sum_int(int *, int);
17double sum_double(double *, int);
18
19int main()
20{
21    // result = 210; array_size = 16
22    int array_int[] = {11, 22, 33, 44, 55, 35, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1};
23
24    // Determine size of the int array
25    int size_array_int = sizeof(array_int) / sizeof(int);
26
27    printf(" int values: ");
28
29    // print array values
30    for (int i = 0; i < size_array_int; i++)
31    {
32        printf(" %d,", array_int[i]);
33    }
34
35    int sum_i = sum_int(array_int, size_array_int);
36    printf("\n size: %d; sum: %i", size_array_int, sum_i);
37    printf("\n");
38
39    //-------------------------------------
40    // Double sum
41
42    // result = 23.331000; array_size = 6
43    double array_double[] = {1.111, 2.222, 3.333, 4.444, 5.555, 6.666};
44
45    // Determine size of the double array
46    int size_array_double = sizeof(array_double) / sizeof(double);
47
48    printf(" double values: ");
49
50    // print array values
51    for (int i = 0; i < size_array_double; i++)
52    {
53        printf(" %lf,", array_double[i]);
54    }
55
56    double sum_d = sum_double(array_double, size_array_double);
57    printf("\n size: %d; sum: %lf", size_array_double, sum_d);
58    printf("\n");
59
60    return 0;
61}

```
sum\_int.asm[#](#id2 "Link to this code")
```
; ----------------------------------------------------------------------------
; sum_int.asm
;
; NASM implementation of a function that returns the sum of all the elements
; in an int array.  The function has prototype:
;
;   int sum_int(int[], int length)
;
; arg1: A pointer to an array of integers
; arg2: A integer value containing the the length of the array.
; ----------------------------------------------------------------------------

global  sum_int

segment .data

segment .bss
    returnvalue     resd     1   ; place in memory for the return value

segment .text
sum_int:

    ; 1. Initialize stack pointers
    push    ebp             ; save caller's EBP value
    mov     ebp, esp        ; set EBP to current pointer
    ; sub   esp, N          ; reserve X=4*N bytes for N local vars
    pusha                   ; save all (including new EBP)

    ; 2. Get arg data
    mov     edx, [ebp+8]    ; address of argument (array)
    mov     ecx, [ebp+12]   ; length of array

    ; 3. Do the work!
    mov     eax, 0          ; initialize the sum and return value
    cmp     ecx, 0          ; guard against non-positive lengths
    jle     done            ; exit if length <= 0
next:
    add     eax, [edx]      ; [edx] contains the current value in the array add to eax
    add     edx, 4          ; move to next array element
                            ; 4 == sizeof(int); int data type has a size of 4.

    dec     ecx             ; count down
    jnz     next            ; if not done counting, continue
done:

    ; 4. Clean up and then exit

    mov     [returnvalue], eax      ; save return value in memory
    popa                            ; restore all (including new EBP)
    mov     eax, [returnvalue]      ; retrieve the saves return value

    mov     esp, ebp        ; remove space for local vars
    pop     ebp;            ; Return caller's EBP value

    ret                     ; return eax (aex contains the value of the stack pointer)

```
sum\_double.asm. Double summation changes are highlighted[#](#id3 "Link to this code")
```
 1; ----------------------------------------------------------------------------
 2; sum_double.asm
 3;
 4; NASM implementation of a function that returns the sum of all the elements
 5; in a floating-point array.  The function has prototype:
 6;
 7;   double sum_double(double[], int length)
 8;
 9; arg1: A pointer to an array of floating points
10; arg2: A integer value containing the the length of the array.
11; ----------------------------------------------------------------------------
12
13global  sum_double
14
15segment .data
16
17segment .bss
18   ; returnvalue     resd     1   ; (not needed for storing the double total)
19
20segment .text
21sum_double:
22
23    ; 1. Initialize stack pointers
24    push    ebp             ; save caller's EBP value
25    mov     ebp, esp        ; set EBP to current pointer
26    ; sub   esp, N          ; reserve X=4*N bytes for N local vars
27    pusha                   ; save all (including new EBP)
28
29    ; 2. Get arg data
30    mov     edx, [ebp+8]    ; address of argument (array)
31    mov     ecx, [ebp+12]   ; length of array
32
33    ; 3. Do the work!
34    fldz                    ; initialize ST0 to 0.0
35    cmp     ecx, 0          ; guard against non-positive lengths
36    jle     done            ; exit if length <= 0
37next:
38    fadd    qword [edx]     ; ST0 += [edx]
39    add     edx, 8          ; move to next array element
40                            ; 8 == sizeof(double); double data type has a size of 8.
41
42    dec     ecx             ; count down
43    jnz     next            ; if not done counting, continue
44done:
45
46    ; 4. Clean up and then exit
47
48  ; mov     [returnvalue], eax      ; (not needed for storing the double total)
49    popa                            ; restore all (including new EBP)
50  ; mov     eax, [returnvalue]      ; (not needed for storing the double total)
51    mov     esp, ebp        ; remove space for local vars
52    pop     ebp;            ; Return caller's EBP value
53
54    ret                     ; return value already in st0

```
Makefile for summation project[#](#id4 "Link to this code")
```
# compiles the project files (sum.asm)
# Compiles dependencies if they are not up to date
sum: sum_int.o sum_double.o sum.o
    @echo "Building sum"
    @gcc -m32 sum.o sum_int.o sum_double.o -o sum
    ./sum

# Build sum_int.asm
sum_int.o:
    @nasm -f elf -d ELF_TYPE sum_int.asm -o sum_int.o

# Build sum_double.asm
sum_double.o:
    @nasm -f elf -d ELF_TYPE sum_double.asm -o sum_double.o

# Build sum.c
sum.o:
    @gcc -m32 -c sum.c -o sum.o

# Clean up and then rebuild all
all: clean sum

# Removes all .o and temporary files
clean:
    @echo "Cleaning up..."
    @rm -f *.o
    @rm -f sum

```

References:

> * <https://cs.lmu.edu/~ray/notes/nasmtutorial/>

> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/nasm/6/solutions.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.