# [Lab 1: Building an ASM File](#id8)[#](#lab-1-building-an-asm-file "Link to this heading")

> **Note**
> * These instructions are written for POSIX (Ubuntu Linux 18.04.3, x86\_64).
* The libraries from [PC Assembly](https://pacman128.github.io/pcasm/) are 32-bit only

## [Overview](#id9)[#](#overview "Link to this heading")

You will write a Hello World program using assembly code! Also, you will
learn how to create a `Makefile` to build a project with multiple
includes or dependencies.

### [Makefile](#id10)[#](#makefile "Link to this heading")

### [NASM](#id11)[#](#nasm "Link to this heading")

## [Task 1: POSIX Environment Setup](#id12)[#](#task-1-posix-environment-setup "Link to this heading")

Firstly, let’s set up the environment to compile and link assembly code.

> **Note**
> We need to install the development tools for 32-bit because
the `asm_io.inc` library works for 32-bit only.

1. Install core dev 32bit GCC tools

   ```
   sudo apt update
   sudo apt install build-essential nasm gcc-multilib g++-multilib

   ```
2. Verify that essential tools are installed

   ```
   gcc --version
   nasm --version
   make --version

   ```
3. Download the sample files libraries from [PC Assembly](https://pacman128.github.io/pcasm/)

   ```
   # Create your project directory
   mkdir ~/asm
   cd ~/asm

   # Download and extract the .zip file
   wget https://pacman128.github.io/static/linux-ex.zip
   unzip linux-ex.zip
   mv linux-ex lib

   ```
4. Verify that your files are in `lib` dir (or the folder of your choice)

   ```
   ls -lh ~/asm/lib

   ```

## [Task 2: Create a `HelloWorld` Assembly Program](#id13)[#](#task-2-create-a-helloworld-assembly-program "Link to this heading")

1. Create a project folder and then change to that folder

   ```
   mkdir ~/asm/hello
   cd ~/asm/hello
   touch hello.asm

   ```
2. Edit the file using `nano hello.asm` or using a graphical editor

   ```
    1; include directives
    2global asm_main
    3
    4segment .data
    5    ; DX directives (read only, static data)
    6
    7segment .bss
    8    ; RESX directives (writable data)
    9
   10segment .text
   11    asm_main:
   12    ; instructions

   ```
3. Add this code to the the `.text` section. This code initializes
   the process and then cleans up afterwards.

   ```
   1enter 0,0        ; Initialize register EBP
   2pusha            ; Push register contents to the stack
   3;
   4; Your program here
   5;
   6popa             ; Restore register data from the stack
   7mov eax, 0       ; flush EAX of data
   8leave            ; restore the stack
   9ret              ; Return from main back into the C library wrapper

   ```

   ****Here is a brief explanation of what this |enter and leave code| does:****

   enter 0,0
   :   [enter 0,0](https://stackoverflow.com/questions/56779327/assembly-x86-whats-the-purpose-of-enter-0-0) pushes register EBP to the stack to preserve the value and then
       initialize the register for use.

   pusha
   :   [pusha](http://faydoc.tripod.com/cpu/pusha.htm) pushes the contents of the general-purpose registers onto the stack

   enter, leave
   :   [enter, leave](https://stackoverflow.com/questions/5858996/enter-and-leave-in-assembly) set up the stack for use. They are shorthand
       instructions that are equivalent to these commands:

       enter and leave are like macros for[#](#id1 "Link to this code")
       ```
       ; enter
       push ebp
       mov ebp, esp

       ; leave
       mov esp, ebp
       pop ebp

       ```
4. Add the library to the include directives section.

   ```
   %include "../lib/asm_io.inc"

   ```
5. Add the `hello world` text to the DX directive section.

   ```
   hello    db    "Hello, world!", 0xA, 0

   ```
   > **Note**
   > Think: What is the purpose of `0xA` and `0`?
   Why are they there?
6. Copy the data from `hello` to `eax` and then call `print_string`

   > **Important**
   > `print` will display the value in register `eax`
   ```
   mov     eax,  hello    ; put hello in EAX
   call    print_string   ; print data in EAX

   ```

The completed file should look like this:

> hello.asm[#](#id2 "Link to this code")
> ```
> ; include directives
> global asm_main
> %include "../lib/asm_io.inc"
>
> segment .data
>     ; DX directives (read only, static data)
>     hello    db    "Hello, world!", 0xA, 0
>
> segment .bss
>     ; RESX directives (writable data)
>
> segment .text
> asm_main:                   ; entry point (called from driver.c)
>     ; instructions
>
>     enter 0,0               ; Initialize register EBP
>     pusha                   ; Push register contents to the stack
>     ;
>
>     mov     eax,  hello     ; put hello in EAX
>     call    print_string    ; print data in EAX
>
>     ;
>     popa                    ; Restore register data from the stack
>     mov eax, 0              ; flush EAX of data
>     leave                   ; restore the stack
>     ret                     ; Return from main back into the C library wrapper
>
> ```

## [Task 3: Build the project](#id14)[#](#task-3-build-the-project "Link to this heading")

### [Build Overview](#id15)[#](#build-overview "Link to this heading")

The build process uses multiple steps. See the graphic in
[x86 Assembly Language Programming](https://cs.lmu.edu/~ray/notes/x86assembly/).

> 1. First, you create the object files (.o files) using NASM or GCC.
>    This procedure compiles to ELF (Executable and Linkable Format)
> 2. Then, you link the object files using a linker to create a file that
>    contains machine code (or an executable).

****Additional Resources****

> * [Nasihatkon - Lecture3.pdf](https://wp.kntu.ac.ir/nasihatkon/teaching/asm/f2019/slide/Assembly%20-%20Lecture%203.pdf)
> * [First NASM Program (Module)](http://courses.ics.hawaii.edu/ReviewICS312/modules/firstprogram/) - University of Hawaii
> * [NASM first program](http://courses.ics.hawaii.edu/ReviewICS312/morea/FirstProgram/ics312_nasm_first_program.pdf) - University of Hawaii Presentation

You will compile these files:

> asm\_io.asm
> :   Contains labels (like macros or functions) that perform common IO
>     operations, such as `print_string` or `print_int`.
>
> driver.c
> :   Executes the code in the `.asm` file by calling `asm_main()`
>
>     ```
>     int main()
>     {
>         int ret_status;
>         ret_status = asm_main();
>         return ret_status;
>     }
>
>     ```
>     > **Note**
>     > `driver.c` is not required if you change `global asm_main` to
>     `global main` in the .asm file.
>
>     C provides a convenient wrapper for our ASM files. We will need to use
>     this method on later projects when we integrate C and ASM.

### [The Build Process](#id16)[#](#the-build-process "Link to this heading")

1. First, we need to build `asm_io.asm` and `driver.c`. ****We need to
   do this once****.

   > **Note**
   > Pay attention to the relative paths. `../` or `./`
   ```
   # First, build asm_io.asm and driver.c
   # The output is a 32-bit ELF (Executable and Linkable Format) file
   nasm -f elf -d ELF_TYPE ../lib/asm_io.asm -o asm_io.o
   gcc -m32 -c ../lib/driver.c -o driver.o

   ```
2. Then, build `hello.asm`.

   ```
   # Next, build the project file to ELF
   nasm -f elf hello.asm -o hello.o

   ```
3. Lastly, link the `.o` files to create a single executable that
   contains the machine code for the target CPU. You can then
   execute the file.

   ```
   # Lastly, link files to create ``hello``
   gcc -m32 driver.o hello.o asm_io.o -o hello
   ./hello

   ```

The entire process looks like this:

```
 1# To compile to ELF (Executable and Linkable Format)
 2
 3# First, build asm_io.asm and driver.c
 4nasm -f elf -d ELF_TYPE ../lib/asm_io.asm -o asm_io.o
 5gcc -m32 -c ../lib/driver.c -o driver.o
 6
 7# Then, build and link the file
 8nasm -f elf hello.asm -o hello.o
 9gcc -m32 driver.o hello.o asm_io.o -o hello
10
11# Execute the file
12./hello

```

## [Task 4: Create a simple Makefile](#id17)[#](#task-4-create-a-simple-makefile "Link to this heading")

A `Makefile` contains commands to simplify the build process. We don’t
want to manually repeat the process in the last manually. We can
create different rules to recompile all dependencies or just our project
files. We can also include a rule to build for specific platforms that
might required additional libraries.

Follow the **basic examples** from [What is a Makefile and how does it work?](https://opensource.com/article/18/8/what-how-makefile)
to learn how to write a Makefile to automate a build process.

Here are some resources to help you.

> * <https://devhints.io/makefile>
> * <http://www.cs.colby.edu/maxwell/courses/tutorials/maketutor/>
> * <https://www.cs.swarthmore.edu/~newhall/unixhelp/howto_makefiles.html>
> * <https://www.gnu.org/software/make/manual/html_node/Simple-Makefile.html>

> **Note**
> * A Makefile requires the use of tabs (ASCII symbol `HT`,
  code `0x09`) instead of blank spaces.
* HTML does not display a tab or HT. You will need to copy/paste
  a HT from notepad if your text editor does not support tabs.
* Here is the error code that you will receive if you do not use
  a tab on line number 2.

  ```
  Makefile:2: *** missing separator.  Stop.

  ```

## [Task 5: Create a Makefile for hello.asm](#id18)[#](#task-5-create-a-makefile-for-hello-asm "Link to this heading")

1. Create a Makefile to build the project using these targets in the template.
   file. We’ve completed target `hello` for you. Fill in the others.

   > Makefile targets for hello.asm[#](#id3 "Link to this code")
   > ```
   > # - Creates a single executable (hello)
   > # - compiles dependencies (asm_io.o driver.o hello.asm) if they are not up to date
   > hello: asm_io.o driver.o hello.o
   >     @gcc -m32 asm_io.o driver.o hello.o -o hello
   >     @rm hello.o           # Remove hello.o to force a recompile each time
   >     ./hello               # Execute hello
   >
   > # Compile hello.asm
   > hello.o:
   >
   >
   > # Compile asm_io.asm
   > asm_io.o:
   >
   >
   > # Compile driver.c
   > driver.o:
   >
   >
   > # Clean up and then rebuild all (asm_io.asm, driver.c, and hello.asm)
   > all: clean hello
   >
   > # Removes all build and temporary files
   > clean:
   >     @echo "Cleaning up..."
   >
   > ```

   Here is the expected output for each command.

   make clean
   :   `make clean` removes all non-source files.

       make clean[#](#id4 "Link to this code")
       ```
           sysadmin@ubuntu:~/asm/hello$ ls -lh
           total 32K
           -rw-rw-r-- 1 sysadmin sysadmin 3.6K Feb 28 15:28 asm_io.o
           -rw-rw-r-- 1 sysadmin sysadmin 1.3K Feb 28 15:28 driver.o
           -rwxrwxr-x 1 sysadmin sysadmin 9.2K Feb 28 15:28 hello
           -rw-rw-r-- 1 sysadmin sysadmin  719 Feb 28 13:58 hello.asm
           -rw-rw-r-- 1 sysadmin sysadmin  928 Feb 28 15:28 hello.o
           -rw-rw-r-- 1 sysadmin sysadmin  580 Feb 28 15:28 Makefile
           sysadmin@ubuntu:~/asm/hello$ make clean
           Cleaning up...
           sysadmin@ubuntu:~/asm/hello$ ls -lh
           total 8.0K
           -rw-rw-r-- 1 sysadmin sysadmin 719 Feb 28 13:58 hello.asm
           -rw-rw-r-- 1 sysadmin sysadmin 580 Feb 28 15:28 Makefile
           sysadmin@ubuntu:~/asm/hello$

       ```

   make
   :   `make` calls the default target of `hello`. This target will build
       the project if the files do not exist or if they are out of date.

       Notice the contents of the directory and that the time stamps of the
       dependent files do not change.

       make[#](#id5 "Link to this code")
       ```
       sysadmin@ubuntu:~/asm/hello$ make clean
       Cleaning up...
       sysadmin@ubuntu:~/asm/hello$ ls -lh
       total 8.0K
       -rw-rw-r-- 1 sysadmin sysadmin 719 Feb 28 13:58 hello.asm
       -rw-rw-r-- 1 sysadmin sysadmin 574 Feb 28 15:10 Makefile
       sysadmin@ubuntu:~/asm/hello$ make
       Building hello.asm
       ./hello
       Hello, world!
       sysadmin@ubuntu:~/asm/hello$ ls -lh
       total 32K
       -rw-rw-r-- 1 sysadmin sysadmin 3.6K Feb 28 15:10 asm_io.o
       -rw-rw-r-- 1 sysadmin sysadmin 1.3K Feb 28 15:10 driver.o
       -rwxrwxr-x 1 sysadmin sysadmin 9.2K Feb 28 15:10 hello
       -rw-rw-r-- 1 sysadmin sysadmin  719 Feb 28 13:58 hello.asm
       -rw-rw-r-- 1 sysadmin sysadmin  928 Feb 28 15:10 hello.o
       -rw-rw-r-- 1 sysadmin sysadmin  574 Feb 28 15:10 Makefile
       sysadmin@ubuntu:~/asm/hello$ make
       Building hello.asm
       ./hello
       Hello, world!
       sysadmin@ubuntu:~/asm/hello$ ls -lh
       total 32K
       -rw-rw-r-- 1 sysadmin sysadmin 3.6K Feb 28 15:10 asm_io.o
       -rw-rw-r-- 1 sysadmin sysadmin 1.3K Feb 28 15:10 driver.o
       -rwxrwxr-x 1 sysadmin sysadmin 9.2K Feb 28 15:15 hello
       -rw-rw-r-- 1 sysadmin sysadmin  719 Feb 28 13:58 hello.asm
       -rw-rw-r-- 1 sysadmin sysadmin  928 Feb 28 15:15 hello.o
       -rw-rw-r-- 1 sysadmin sysadmin  574 Feb 28 15:10 Makefile
       sysadmin@ubuntu:~/asm/hello$

       ```

   make asm\_io.o (driver.o, hello.o)
   :   `make asm_io.o`, `make driver.o`, and `make hello.o`, will compile
       the .asm file to .o. The file will not recompile if it is up to date.

       make file.o[#](#id6 "Link to this code")
       ```
       sysadmin@ubuntu:~/asm/hello$ make clean
       Cleaning up...
       sysadmin@ubuntu:~/asm/hello$ make asm_io.o
       sysadmin@ubuntu:~/asm/hello$ make asm_io.o
       make: 'asm_io.o' is up to date.
       sysadmin@ubuntu:~/asm/hello$

       ```

   make all
   :   `make driver.all` does a complete rebuild. It deletes all build
       files and then recompiles each file. The target calls two other targets,
       `clean` and `hello`

       make all[#](#id7 "Link to this code")
       ```
       sysadmin@ubuntu:~/asm/hello$ make all
       Cleaning up...
       Building hello.asm
       ./hello
       Hello, world!
       sysadmin@ubuntu:~/asm/hello$

       ```
2. Modify `hello.asm` by changing the hello world text to:

   ```
   "Hello World!! :D! Привет, мир! Сәлем Әлем!"

   ```
3. Execute `make` to verify that your project rebuild successfully.

   ```
   sysadmin@ubuntu:~/asm/hello$ nano hello.asm
   sysadmin@ubuntu:~/asm/hello$
   sysadmin@ubuntu:~/asm/hello$ make
   Building hello.asm
   ./hello
   Hello World! Привет, мир! ¡Hola Mundo!
   नमस्ते दुनिय! 你好，世界!
   sysadmin@ubuntu:~/asm/hello$

   ```
4. Add a second `label` and `string`.

   ```
   world    db    "¡Hola Mundo!", 0xA, "नमस्ते दुनिया!", 0xA, "안녕하세요!", 0xA,  "你好", 0xA, "世界!", 0xA, 0

   ```
5. Put the new string in `eax` and then call `print_string`

   ```
   mov     eax,  world   ; put world in EAX
   call    print_string   ; print data in EAX

   ```
6. Make the project to see the new output.

   ```
   sysadmin@ubuntu:~/asm/hello$ make
   Building hello.asm
   ./hello
   Hello World! Привет, мир! Сәлем Әлем!
   ¡Hola Mundo!
   नमस्ते दुनिया!
   안녕하세요!
   你好
   世界!

   ```

See the [next page](solution.html) for the solutions.

> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/nasm/1/index.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.