# [Lab 4: Solutions](#id8)[#](#lab-4-solutions "Link to this heading")

There is a lot of whitespace between the solutions. Use the menu to
jump to the solution of interest.

## [Lab 4.1 Solutions](#id9)[#](#lab-4-1-solutions "Link to this heading")

### [Inverse Triangle](#id10)[#](#inverse-triangle "Link to this heading")

This solution is simple because it uses the `loop` command.

Simple inverse triangle[#](#id1 "Link to this code")
```
 1    ; Start instructions
 2    ; ---------------------------------------------
 3    ; Register information
 4    ; EAX:      ; temp var, the character to print
 5    ; EBX:      ; column counter (inner loop)
 6    ; ECX:      ; row counter (outer loop)
 7    ; EDX:      ; not used
 8    ; ---------------------------------------------
 9    mov     ecx, 5          ; ECX is i (this must be ECX for 'loop' instruction)
10outer:
11    mov     ebx,  0         ; reset j
12  inner_start:
13    cmp     ebx,  ecx       ; compare j and i
14    jge     inner_end       ; if (j => i) exit inner loop
15    inc     ebx             ; j++
16    mov     eax,  ebx       ; print the counter (or mov a DX label here)
17    call    print_int       ; Print j
18    jmp     inner_start     ; continue inner loop
19  inner_end:
20    call    print_nl
21    loop    outer           ; if EXC != 0, continue outer loop
22    ; End instructions, clean up

```
Expected Output[#](#id2 "Link to this code")
```
12345
1234
123
12
1

```

### [Right Triangle](#id11)[#](#right-triangle "Link to this heading")

Right triangle[#](#id3 "Link to this code")
```
 1    ; Start instructions
 2    ; ---------------------------------------------
 3    ; Register information
 4    ; EAX:      ; column loop counter; the character to print
 5    ; EBX:      ; row loop control variable
 6    ; ECX:      ; row loop counter
 7    ; EDX:      ; column loop control variable
 8    ; ---------------------------------------------
 9
10    mov     ecx, 0          ; ECX is i, row counter
11    mov     ebx, 5          ; ebx loop condition (number of rows)
12row:
13    cmp     ecx,  ebx       ; compare i and number of rows
14    jg      row_end         ; if (i > rows) exit loop
15
16    ; equilateral triangle
17    mov    edx,  ecx        ; set column control var equal to the row
18
19    mov     eax,  0         ; reset column counter
20    call    column          ; print the column data
21    call    print_nl
22    inc     ecx             ; i++
23    jmp     row             ; goto row start
24row_end:
25    jmp     end             ; all done
26
27; print the column data
28column:
29    cmp     eax,  edx       ; compare j and i
30    jge     return          ; if (j => i) call "ret"
31    inc     eax             ; j++
32    call    print_int       ; Print loop counter in EAX
33    jmp     column          ; continue column loop
34
35return:
36    ret                     ; return to the last address called
37
38end:
39    ; End instructions, clean up

```
Expected Output[#](#id4 "Link to this code")
```
1
12
123
1234
12345

```

**Scroll down for next solution:**

## [Lab 4.2 Solutions](#id12)[#](#lab-4-2-solutions "Link to this heading")

### [Wide Triangle](#id13)[#](#wide-triangle "Link to this heading")

```
 1    ; Start instructions
 2    ; ---------------------------------------------
 3    ; Register information
 4    ; EAX:      ; column loop counter; the character to print
 5    ; EBX:      ; row loop control variable
 6    ; ECX:      ; row loop counter
 7    ; EDX:      ; column loop control variable
 8    ; ---------------------------------------------
 9
10    mov     ecx,  0         ; ECX is i, row counter
11    mov     ebx,  5         ; ebx loop condition (number of rows)
12row:
13    cmp     ecx,  ebx       ; compare i and number of rows
14    jg      row_end         ; if (i > rows) exit loop
15
16    ; wide triangle
17    mov    eax,   3         ; multiplication factor
18    mul    ecx              ; multiple the factor (EAX) by the loop counter in ECX
19                            ; to print a wide triangle
20    mov    edx,   eax       ; put the number of columns to print in EDX
21
22    mov     eax,  0         ; reset column counter
23    call    column          ; print the column data
24    call    print_nl
25    inc     ecx             ; i++
26    jmp     row             ; goto row start
27row_end:
28    jmp     end             ; all done
29
30; print the column data
31column:
32    cmp     eax,  edx       ; compare j and i
33    jge     return          ; if (j => i) call "ret"
34    inc     eax             ; j++
35    push    eax             ; save counter
36    mov     eax,   char     ; get character to print
37    call    print_string    ; Print *
38    pop     eax             ; restore counter
39    jmp     column          ; continue column loop
40
41return:
42    ret                     ; return to the last address called
43
44end:
45    ; End instructions, clean up

```
Wide Triangle Expected Results (i \* 3)[#](#id5 "Link to this code")
```
1*
2* * * *
3* * * * * * *
4* * * * * * * * * *
5* * * * * * * * * * * * *
6* * * * * * * * * * * * * * * *

```

**Scroll down for next solution:**

## [Lab 4.3 Solutions](#id14)[#](#lab-4-3-solutions "Link to this heading")

### [Square Curve](#id15)[#](#square-curve "Link to this heading")

```
 1    ; Start instructions
 2    ; ---------------------------------------------
 3    ; Register information
 4    ; EAX:      ; column loop counter; the character to print
 5    ; EBX:      ; row loop control variable
 6    ; ECX:      ; row loop counter
 7    ; EDX:      ; column loop control variable
 8    ; ---------------------------------------------
 9
10    mov     ecx,  0         ; ECX is i, row counter
11    mov     ebx,  6         ; ebx loop condition (number of rows)
12row:
13    cmp     ecx,  ebx       ; compare i and number of rows
14    jg      row_end         ; if (i > rows) exit loop
15
16    ; Square curve
17    mov     eax, ecx        ; Get the row
18    mul     ecx             ; EAX = row*row
19    mov     edx, eax        ; put the number of columns to print in EDX
20
21    mov     eax,  0         ; reset column counter
22    call    column          ; print the column data
23    call    print_nl
24    inc     ecx             ; i++
25    jmp     row             ; goto row start
26row_end:
27    jmp     end             ; all done
28
29; print the column data
30column:
31    cmp     eax,  edx       ; compare j and i
32    jg      return          ; if (j => i) call "ret"
33    inc     eax             ; j++
34    push    eax             ; save counter
35    mov     eax,   char     ; get character to print
36    call    print_string    ; Print *
37    pop     eax             ; restore counter
38    jmp     column          ; continue column loop
39
40return:
41    ret                     ; return to the last address called
42
43end:
44    ; End instructions, clean up

```
Square curve (n \* n) Expected Results[#](#id6 "Link to this code")
```
1*
2* *
3* * * * *
4* * * * * * * * * *
5* * * * * * * * * * * * * * * * *
6* * * * * * * * * * * * * * * * * * * * * * * * * *
7* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

```

**Scroll down for next solution:**

## [Lab 4.4 Solutions](#id16)[#](#lab-4-4-solutions "Link to this heading")

### [Skinny Triangle](#id17)[#](#skinny-triangle "Link to this heading")

```
 1    ; Start instructions
 2    ; ---------------------------------------------
 3    ; Register information
 4    ; EAX:      ; column loop counter; the character to print
 5    ; EBX:      ; row loop control variable
 6    ; ECX:      ; row loop counter
 7    ; EDX:      ; column loop control variable
 8    ; ---------------------------------------------
 9
10    mov     ecx,  1         ; ECX is i, row counter
11    mov     ebx,  21        ; ebx loop condition (number of rows)
12row:
13    cmp     ecx,  ebx       ; compare i and number of rows
14    jg      row_end         ; if (i > rows) exit loop
15
16    ;
17    ; skinny triangle   ** ECX must start at 1, not 0. **
18                            ; EAX = EAX/ECX; columns = rows/x
19    mov     eax,  ecx       ; move the current row value into EAX
20    push    ecx             ; save current row value
21    mov     ecx,  5         ; put our divisor in ECX
22    mov     edx,  0         ; initialize the EDX (where the remainder goes)
23    div     ecx             ; EAX = EAX / ECX
24    mov     edx,  eax       ; put the number of columns to print in EDX
25    pop     ecx             ; restore the row value to ECX
26    ;
27    mov     eax,  0         ; reset column counter
28    call    column          ; print the column data
29    call    print_nl
30    inc     ecx             ; i++
31    jmp     row             ; start new row
32row_end:
33    jmp     end             ; all done
34
35; print the column data
36column:
37    cmp     eax,  edx       ; compare j and i
38    jg      return          ; if (j => i) call "ret"
39    inc     eax             ; j++
40    push    eax             ; save counter
41    mov     eax,   char     ; get character to print
42    call    print_string    ; Print *
43    pop     eax             ; restore counter
44    jmp     column          ; continue column loop
45
46return:
47    ret                     ; return to the last address called
48
49end:
50    ; End instructions, clean up

```
The Burj Khalifa! n/5[#](#id7 "Link to this code")
```
*
*
*
*
**
**
**
**
**
***
***
***
***
***
****
****
****
****
****
*****
*****

```
> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/nasm/4/solutions.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.