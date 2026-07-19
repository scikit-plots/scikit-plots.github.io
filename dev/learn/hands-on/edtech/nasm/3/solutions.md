# [Lab 3: Solutions](#id5)[#](#lab-3-solutions "Link to this heading")

There is a lot of whitespace between the solutions. Use the menu to
jump to the solution of interest.

## [Lab 3.1 Solutions](#id6)[#](#lab-3-1-solutions "Link to this heading")

ASM If Condition[#](#id1 "Link to this code")
```
 1; ASM Simple IF statement of this if block
 2;
 3; // Value to try to square
 4; int value = 8192;
 5;
 6; // If successful, set the value
 7; if (can_square)
 8;     value = value * value;
 9;
10; // Print the value, either original or modified
11; printf(value);
12;
13
14; include directives
15global asm_main
16%include "../lib/asm_io.inc"
17
18segment .data
19    ; DX directives (read only, static data)
20
21segment .bss
22    ; RESX directives (writable data)
23
24segment .text
25asm_main:                   ; entry point (called from driver.c)
26    ; instructions
27
28    enter 0,0               ; Initialize register EBP
29    pusha                   ; Push register contents to the stack
30
31    ; Starting values
32    mov     ecx,  8192      ; Result OK.         Print ---> 67108864
33  ; mov     ecx,  65536     ; Overflow detected. Print ---> 65536
34    mov     eax,  ecx       ; Initialize EAX
35
36    ; Try to square the value. Then, evaluate for OF flag
37    mul     eax             ; value = value * value
38
39    ; Verify flags with registers
40    dump_regs 0
41
42; Here, we have to check for the overflow flag. This is the only way to know
43; if the value can be squared. We have to look at it AFTER the operation.
44;
45;   if (!can_square)
46;      EAX = ECX;           ; put original value in EAX (can't square it)
47;
48    jno      end            ; no overflow, value is ok. Go to end
49    mov     eax,    ecx     ; overflow happened, move ECX back to EAX to print
50
51end:
52
53    ; Print the value in EAX. It will be the square or the original
54    call    print_int        ; print the value in EAX
55    call    print_nl         ; print in new line
56
57    popa                     ; Restore register data from the stack
58    mov eax, 0               ; flush EAX of data
59    leave                    ; restore the stack
60    ret                      ; Return from main back into C library wrapper

```

**Scroll down for next solution:**

## [Lab 3.2 Solutions](#id7)[#](#lab-3-2-solutions "Link to this heading")

Determines if Number is Even or Odd[#](#id2 "Link to this code")
```
 1; IF/Else Block
 2;
 3; Evaluates a number for even or odd.
 4; Print 0 if the number is even
 5; Print 1 if the number is odd.
 6;
 7; include directives
 8global asm_main
 9%include "../lib/asm_io.inc"
10
11segment .data
12    ; DX directives (read only, static data)
13
14segment .bss
15    ; RESX directives (writable data)
16
17segment .text
18asm_main:                   ; entry point (called from driver.c)
19    ; instructions
20
21    enter 0,0               ; Initialize register EBP
22    pusha                   ; Push register contents to the stack
23
24    ; Starting values
25    mov     eax,  10        ; Even case
26  ; mov     eax,  9         ; Odd case
27    mov     edx,  0          ; Initialize EDX for division
28
29    ; Divide the number and check for remainder
30    mov     ecx,  2         ; the divisor
31    div     ecx             ; divide and check EDX for a remainder
32
33    ; evaluate registers for EDX
34    dump_regs 0
35
36    cmp     edx,  0         ; compare, and then jump
37    jnz     odd_number      ; JNZ: Jump if not zero. EDX has a remainder
38
39    ; Our number is even (EDX was 0)
40    mov     eax,  0         ; --> 0 means even number
41    jmp     print           ; jump over the else block to end it
42
43    ;The number is odd
44odd_number:
45    mov     eax, 1           ; value = 1
46
47print:
48    ; print the contents of AEX: 0 or 1
49    call    print_int        ; print eax
50    call    print_nl         ; print in new line
51    ;
52    popa                     ; Restore register data from the stack
53    mov eax, 0               ; flush EAX of data
54    leave                    ; restore the stack
55    ret                      ; Return from main back into C library wrapper

```

**Scroll down for next solution:**

## [Lab 3.3 Solutions](#id8)[#](#lab-3-3-solutions "Link to this heading")

While loop implementation[#](#id3 "Link to this code")
```
 1; Loop until a number becomes negative
 2;
 3; An implementation of:
 4; while (number >= 0)
 5;
 6
 7; include directives
 8global asm_main
 9%include "../lib/asm_io.inc"
10
11segment .data
12    ; DX directives (read only, static data)
13
14segment .bss
15    ; RESX directives (writable data)
16
17segment .text
18asm_main:                   ; entry point (called from driver.c)
19    ; instructions
20
21    enter 0,0               ; Initialize register EBP
22    pusha                   ; Push register contents to the stack
23    ;
24    mov     eax,  999999    ; Starting number
25
26    ; debug
27    dump_regs  0;           ; current state of registers
28
29subtract:
30    sub      eax, 111110        ; subtract until we get to a negative value
31    js       negative_number    ; end loop if SF flag is set
32    ; Print current results
33    call     print_int      ; print eax
34    call     print_nl       ; new line
35    jmp      subtract       ; continue loop
36
37negative_number:
38    dump_regs  0;            ; verify SF flag
39
40    ; end
41    ;
42    popa                     ; Restore register data from the stack
43    mov eax, 0               ; flush EAX of data
44    leave                    ; restore the stack
45    ret                      ; Return from main back into C library wrapper

```

**Scroll down for next solution:**

## [Lab 3.4 Solutions](#id9)[#](#lab-3-4-solutions "Link to this heading")

ASM Factorial Implementation[#](#id4 "Link to this code")
```
 1; Prints the result of a factorial.
 2; Generates an error on overflow
 3;
 4
 5; include directives
 6global asm_main
 7%include "../lib/asm_io.inc"
 8
 9segment .data
10    ; DX directives (read only, static data)
11
12segment .bss
13    ; RESX directives (writable data)
14
15segment .text
16asm_main:                    ; entry point (called from driver.c)
17    ; instructions
18
19    enter 0,0                ; Initialize register EBP
20    pusha                    ; Push register contents to the stack
21    ;
22
23    mov    ecx,  1          ; ecx is i
24    mov    ebx,  5          ; factorial to calculates 5! = 120
25  ; mov    ebx,  18         ; Test error handling. Causes overflow
26    mov    eax,  1          ; eax is factorial result
27
28; Simple "for" loop to calculate the factorial of a number
29factorial:
30    cmp    ecx,  ebx        ; compare i and factorial
31    jg     print            ; if (i > factorial) exit loop
32    mul    ecx              ; result = result * i;
33    jo     overflow         ; error on overflow flag
34    inc    ecx              ; i++
35    jmp    factorial        ; process next number
36
37; Encountered an overflow. Handle error
38overflow:
39    mov    eax,  ecx        ; Move counter to AEX
40    call   print_int        ; print counter (the factorial that caused the OF)
41    call   print_nl         ; print nl
42    mov    eax,  -1         ; set to invalid result
43
44print:
45    call print_int          ; print factorial
46    call print_nl           ; print new line
47
48    ; program continues
49    ;
50    popa                     ; Restore register data from the stack
51    mov eax, 0               ; flush EAX of data
52    leave                    ; restore the stack
53    ret                      ; Return from main back into C library wrapper

```
> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/nasm/3/solutions.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.