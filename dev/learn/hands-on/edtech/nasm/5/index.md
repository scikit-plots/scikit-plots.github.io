# [Lab 5: Subprograms](#id7)[#](#lab-5-subprograms "Link to this heading")

## [Overview](#id8)[#](#overview "Link to this heading")

We saw how to use labels to jump to a specific address (or location of
the code) using `call` and then how to return to using `ret` to
perform some specific action that operates like a function.

Subroutine template[#](#id1 "Link to this code")
```
1label:
2    push   ecx              ; save register X data on stack
3    ; do something with ECX (or other register)
4    pop    ecx              ; restore data to register X
5    ret                     ; return to the address that called the label

```

We can use the same the logic to create a subprogram.

> * A subprogram is a piece of code that starts at some address in the
>   text segment.
> * The program can jump to that address to `call` the subprogram.
> * When the subprogram is done executing, it jumps back to the instruction
>   after the call.
> * The original execution resumes “as if nothing had happened”.

### [Sources](#id9)[#](#sources "Link to this heading")

* [NASM Subprograms (Module)](http://courses.ics.hawaii.edu/ReviewICS312/modules/subprograms/) - University of Hawaii
* [Subprograms 101](http://courses.ics.hawaii.edu/ReviewICS312/morea/Subprograms/ics312_subprograms101.pdf) - University of Hawaii Presentation
* [Subprogram Arguments](http://courses.ics.hawaii.edu/ReviewICS312/morea/Subprograms/ics312_subprogramsargs.pdf) - University of Hawaii Presentation
* [Subprogram Local Variables](http://courses.ics.hawaii.edu/ReviewICS312/morea/Subprograms/ics312_subprogramslocals.pdf) - University of Hawaii Presentation

### [Subroutines](#id10)[#](#subroutines "Link to this heading")

When is it a **subroutine** or a **subprogram**? It depends on the scope and
size of the task to accomplish. Our [NASM Template](../resources/templates.html#nasm-template) file is nothing
more than a subprogram.

Here is an example subprogram that determines if the number in `ebx`
is odd. This code block defines a new `segment .text` section that
contains the label `is_odd`. The subprogram could reserve memory in
segments `.bss` or `.data`.

Sample subprogram[#](#id2 "Link to this code")
```
;   FUNCTION: is_odd
;   Takes one parameter:  an integers (> 0)
;   Destroys values of eax and ecx (eax = returned value)

segment .text
is_odd:
    push    ebp             ; save the value of EBP of the caller
    mov     ebp, esp        ; update the value of EBP for this subprogram

    mov     eax, 0          ; EAX = 0
    mov     ecx, [ebp+8]    ; EBX = integer (parameter #1)
    shr     ecx, 1          ; Right logical shift
    adc     eax, 0          ; EAX = EAX + carry  (if even: EAX = 0, if odd: EAX = 1)

    pop     ebp             ; restore the value of EBP
    ret                     ; clean up

```

### [Subprogram template](#id11)[#](#subprogram-template "Link to this heading")

Subprogram template that returns a value[#](#id3 "Link to this code")
```
;---------------------------------------------------------------
;   FUNCTION: subprogram_name
;   Takes one parameter:  an integers (> 0)
;   Destroys values of eax and ecx (eax = returned value)
;---------------------------------------------------------------

segment .data

segment .bss
    returnvalue     resd     1   ; place in memory for the return value

segment .text
subprogram_name:                ; name of the subprogram

    push    ebp                     ; save original EBP
    mov     ebp, esp                ; set EBP = ESP
    pusha                           ; save all (including new EBP)

    . . .                           ; subprogram code

                                    ; Place return value in EAX
    mov     [returnvalue], eax      ; save return value in memory
    popa                            ; restore all (including new EBP)
    mov     eax, [returnvalue]      ; retrieve the saves return value

    pop     ebp                     ; restore original ebp
    ret                             ; return

```

### [Sample Subroutines](#id12)[#](#sample-subroutines "Link to this heading")

* [count-odds.asm.txt](/_static/asm/count-odds.asm.txt)
* [recursive-sum.asm.txt](/_static/asm/recursive-sum.asm.txt)
* [fibonacci.asm.txt](/_static/asm/fibonacci.asm.txt)

## [Create a Simple Subprogram](#id13)[#](#create-a-simple-subprogram "Link to this heading")

You will create a simple subprogram that calculates the average value
in the register, and then returns the value in EAX.

1. Start with the code that reads a value into each register.

   Starter code[#](#id4 "Link to this code")
   ```
   enter   0,0             ; Initialize register EBP
   pusha                   ; Push register contents to the stack
   ;
   mov     eax, msg_int
   call    print_string    ; Get int
   call    read_int        ; eg: EAX = 256 (0x0100)
   mov     ebx, eax        ; copy to other registers
   mov     ecx, eax
   mov     edx, eax
   shl     ebx, 1          ; perform a left bit shift of 1 place
   shl     ecx, 2          ; perform a left bit shift of 2 places
   shl     edx, 3          ; perform a left bit shift of 3 places
   ;
   call    print_nl
   ;
   ; Example
   ; EAX = 00000100 EBX = 00000200 ECX = 00000400 EDX = 00000800
   dump_regs 0             ; verify registers
   ;
   call    average         ; Calculates the average, store in EAX
   ;
   ; Registers EBX, ECX, and EDX should be unchanged
   ; EAX contains the average: 256+512+1024+2048 / 4 = 960 (0x03C0)
   ;
   ; EAX = 00000027 EBX = 0000001F ECX = 0000002F EDX = 0000003F
   dump_regs 2             ; verify registers
   ;
   mov     ecx, eax        ; save the returned value in EAX
   mov     eax, msg_avg    ; Move string to print
   call    print_nl
   call    print_string
   mov     eax, ecx        ; Move avg to EAX to print
   call    print_int
   call    print_nl
   ;
   popa                     ; Restore register data from the stack
   mov     eax, 0           ; flush EAX of data
   leave                    ; restore the stack
   ret                      ; Return from main back into C library wrapper

   ; --------------------------------
   ; Place the subprogram here

   ```
2. Run the code and verify that the registers contain the expected values

   Expected Results[#](#id5 "Link to this code")
   ```
   Enter an integer: 256

   Register Dump # 0
   EAX = 00000100 EBX = 00000200 ECX = 00000400 EDX = 00000800
   ESI = F7F38000 EDI = 00000000 EBP = FFAAD888 ESP = FFAAD868
   EIP = 565EE794 FLAGS = 0206                PF

   ```
3. Create a subprogram called `average` that will calculate the
   average value in the registers and then return the value in EAX.

   > **Note**
   > Place the template code of the subprogram at the bottom of
   your asm file.

   ****Yes, you should COPY and FILL IN the comment header.****
   1. Sum each register
   2. Divide by 4
   3. Dump the registers verify that values
4. Call the subprogram and then print the results.

   Expected Results: 256+512+1024+2048 / 4 = 960 (0x03C0)[#](#id6 "Link to this code")
   ```
    1Enter an integer: 256
    2
    3Register Dump # 0
    4EAX = 00000100 EBX = 00000200 ECX = 00000400 EDX = 00000800
    5ESI = F7F38000 EDI = 00000000 EBP = FFAAD888 ESP = FFAAD868
    6EIP = 565EE794 FLAGS = 0206                PF
    7
    8Register Dump # 1
    9EAX = 000003C0 EBX = 00000200 ECX = 00000004 EDX = 00000000
   10ESI = F7F38000 EDI = 00000000 EBP = FFAAD860 ESP = FFAAD840
   11EIP = 565EE7E2 FLAGS = 0206                PF
   12
   13Register Dump # 2
   14EAX = 000003C0 EBX = 00000200 ECX = 00000400 EDX = 00000800
   15ESI = F7F38000 EDI = 00000000 EBP = FFAAD888 ESP = FFAAD868
   16EIP = 565EE7A0 FLAGS = 0206                PF
   17
   18The average of the registers is: 960

   ```

## [Solutions](#id14)[#](#solutions "Link to this heading")

Lab 5 Solutions

* [Lab 5: Solutions](solutions.html)
> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/nasm/5/index.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.