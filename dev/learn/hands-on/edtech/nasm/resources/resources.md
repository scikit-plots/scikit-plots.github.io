# NASM Assembly Quick Reference Guide - 32-Bit[#](#nasm-assembly-quick-reference-guide-32-bit "Link to this heading")

`Sources`

> * <https://www.cs.uaf.edu/2005/fall/cs301/support/x86/nasm.html>
> * <http://www.cs.lmu.edu/~ray/notes/nasmtutorial/>
> * <https://www.cs.virginia.edu/~evans/cs216/guides/x86.html>

## Registers (Quick list:)[#](#registers-quick-list "Link to this heading")

7 Essential Registers[#](#id1 "Link to this table")

| Registers | Usage |
| --- | --- |
| `EAX ECX EDX` | Use and overwrite |
| `EBX ESP EBP ESI EDI` | Preserved. You must preserve the values and return them   to the registers when your program exits |

## Instructions[#](#instructions "Link to this heading")

Quick List (useful commands)[#](#id2 "Link to this table")




| Command | Direction |
| --- | --- |
| mov x, y | x ← y |
| and x, y | x ← x and y |
| or x, y | x ← x or y |
| xor x, y | x ← x xor y |
| add x, y | x ← x + y |
| sub x, y | x ← x - y |
| inc x | x ← x + 1 |
| dec x | x ← x - 1 |
| syscall | Invoke an operating system routine |

> **Note**
> Take note of the specific registers in the table. The operation
stores the result in register EAX, but uses other registers.

Quick List (Multiplication and Division)[#](#id3 "Link to this table")

| Command | Stored Result | Notes |
| --- | --- | --- |
| `mul eax` | eax ← eax \* eax | Results go to EAX. |
| `mul x` | eax ← eax \* x | Multiplies EAX with the value in the other register. |
| `div ecx` | eax ← eax / ecx   edx ← remainder | Divides EAX by the value in the register by EAX.   You must clear EDX before the operation. |

### Detailed List[#](#detailed-list "Link to this heading")

|  |  |  |
| --- | --- | --- |
| Mnemonic | Purpose | Examples |
| `mov dest, src` | * Move data between   registers, * load immediate data   into registers, * move data between   registers and memory. | ``` ; Load constant into eax mov eax, 4 ; Copy eax into ebx mov ebx, eax ; Copy ebx to memory ; address 123 mov ebx, [123]  ``` |
| `push src` | * Insert a value onto   the stack. * Useful for passing   arguments, saving   registers, etc. | `push ebp` |
| `pop dest` | Remove topmost value from the stack. Equivalent to   * mov dest,[esp] * add esp,4 | `pop ebp` |
| ``` esp, 4 esp, 8 esp, 12  ``` | * Pop stack one time * Pop stack two time * Pop stack three times | ``` ; Pop the last value ;from the stack esp, 4  ``` |
| `call func` | * Push the address of   the next instruction     and start   executing func. | `call print_int` |
| `ret` | * Pop the return   program counter, and   jump there. * Ends a subroutine. | `ret` |
| `add src, dest` | * src = src + dest | ``` ; Add ebx to eax add eax,ebx  ``` |
| `mul src` | * Multiply eax and src   as unsigned     integers, and put   the result in eax. * High 32 bits of   product go into eax. | ``` ;Multiply eax by ebx mul ebx  ``` |
| `jmp label` | * Goto the instruction   label:. * Skips anything else   in the way. | ``` jmp post_mem  ... post_mem:  ``` |
| `cmp a,b` | * Compare two values. * Sets flags that are   used by the   conditional jumps   (below). | `cmp eax, 10` |
| ``` jl label jle label je label jge label jg label jne label jz label jnz label  ``` | Goto label if previous comparison was:   * jl < * jle <= * je = * jge >= * jg > * jne != * jz == 0 * jnz != 0 | ``` cmp eax, 10  ; Jump if eax < 10 jl loop_start  ``` |
| ``` cmovl a, b cmovg a, b  ``` | Move if the previous comparison was:   * cmov1 < * cmovg > | ``` cmp eax, 10  ; eax = ecx  if eax  < 10 cmovl eax, ecx  ``` |

## Registers 8-32 bit (Full List)[#](#registers-8-32-bit-full-list "Link to this heading")

****Full list**** of ordinary integer x86 registers.

> * ****Scratch**** registers any function is allowed to overwrite and use for
>   anything you want without asking anybody.
> * ****Preserved**** registers have to be put back (“save” the register) if
>   you use them.

32-bit Register List[#](#id4 "Link to this table")

| Notes | Type | 32-bit int | 16-bit short | 8-bit char |
| --- | --- | --- | --- | --- |
| Values are returned from   functions in this register. | scratch | eax | ax | ah and al |
| Typical scratch register. Some   instructions also use it as a   counter. | scratch | ecx | cx | ch and cl |
| Scratch register. | scratch | edx | dx | dh and dl |
| Preserved register: don’t use   it without saving it! | preserved | ebx | bx | bh and bl |
| The stack pointer. Points to   the top of the stack | preserved | esp | sp |  |
| Preserved register. Sometimes   used to store the old value   of the stack pointer, or the   “base”. | preserved | ebp | bp |  |
| Preserved register. You can   use it, but you need to save   and restore it. | scratch | esi | si |  |
| Preserved register. You can   use it, but you need to save   and restore it. | scratch | edi | di |  |

> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/nasm/resources/resources.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.