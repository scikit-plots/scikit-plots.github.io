# Lab 5: Solutions[#](#lab-5-solutions "Link to this heading")

Example using a subprogram to calculate an average[#](#id1 "Link to this code")
```
 1; include directives
 2global asm_main
 3%include "../lib/asm_io.inc"
 4
 5segment .data
 6    msg_int     db      "Enter an integer: ", 0
 7    msg_avg     db      "The average of the registers is: ", 0
 8
 9segment .bss
10    ; RESX directives (writable data)
11
12segment .text
13asm_main:                   ; entry point (called from driver.c)
14    ; instructions
15
16    enter   0,0             ; Initialize register EBP
17    pusha                   ; Push register contents to the stack
18    ;
19    mov     eax, msg_int
20    call    print_string    ; Get int
21    call    read_int        ; eg: EAX = 256 (0x0100)
22    mov     ebx, eax        ; copy to other registers
23    mov     ecx, eax
24    mov     edx, eax
25    shl     ebx, 1          ; perform a left bit shift of 1 place
26    shl     ecx, 2          ; perform a left bit shift of 2 places
27    shl     edx, 3          ; perform a left bit shift of 3 places
28    ;
29    call    print_nl
30    ;
31    ; Example
32    ; EAX = 00000100 EBX = 00000200 ECX = 00000400 EDX = 00000800
33    dump_regs 0             ; verify registers (debug)
34    ;
35    call    average         ; Calculates the average, store in EAX
36    ;
37    ; Registers EBX, ECX, and EDX should be unchanged
38    ; EAX contains the average: 256+512+1024+2048 / 4 = 960 (0x03C0)
39    ;
40    ; EAX = 00000027 EBX = 0000001F ECX = 0000002F EDX = 0000003F
41    dump_regs 2             ; verify registers (debug)
42    ;
43    mov     ecx, eax        ; save the returned value in EAX
44    mov     eax, msg_avg    ; Move string to print
45    call    print_nl
46    call    print_string
47    mov     eax, ecx        ; Move avg to EAX to print
48    call    print_int
49    call    print_nl
50    ;
51    popa                     ; Restore register data from the stack
52    mov     eax, 0           ; flush EAX of data
53    leave                    ; restore the stack
54    ret                      ; Return from main back into C library wrapper
55
56;---------------------------------------------------------------
57;  FUNCTION: average
58;  - Sums the values in EAX, EBX, ECX and EDX and then calculates
59;    the average. The remainder in EDX is discarded.
60;  - Returns the average returns the result in EAX.
61;---------------------------------------------------------------
62
63segment .bss
64    returnvalue     resd     1   ; place in memory for the return value
65
66segment .text
67average:
68
69    push    ebp                     ; save original EBP
70    mov     ebp, esp                ; set EBP = ESP
71    pusha                           ; save all (including new EBP)
72
73    add     eax, ebx                ; The sum of EAX and EBX
74    add     eax, ecx                ; The sum of EAX, EBX, and ECX
75    add     eax, edx                ; The sum of EAX, EBX, ECX, and EDX
76    mov     edx, 0                  ; Initialize for remainder
77    mov     ecx, 4                  ; Set the divisor
78    div     ecx                     ; divide the sum to find the average
79
80    dump_regs 1                     ; verify registers (debug)
81
82                                    ; Place return value in EAX
83    mov     [returnvalue], eax      ; save return value in memory
84    popa                            ; restore all (including new EBP)
85    mov     eax, [returnvalue]      ; retrieve the saves return value
86
87    pop     ebp                     ; restore original ebp
88    ret                             ; return

```
> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/nasm/5/solutions.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.