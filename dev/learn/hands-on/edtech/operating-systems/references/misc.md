# Miscellaneous Code[#](#miscellaneous-code "Link to this heading")

## Creating files with Test Code[#](#creating-files-with-test-code "Link to this heading")

Sometimes we need to create files with text to help us develop or test
our code.

### Bash or CMD[#](#bash-or-cmd "Link to this heading")

One ways to create a file in the command line is to use `echo`

> ```
> echo "some text" > filename.txt
>
> ```

### system() function[#](#system-function "Link to this heading")

> **Caution**
> This method is not intended for production code

1. You can wrap the command in function `system()` to run a command
   from your code.

   ```
   system("echo \"some text\" > filename.txt");

   ```
2. You can also use `sprintf` to build you command string using variables.
   `sprintf` works similarly to `printf` except it sends
   the data to the a variable instead to the screen.

   ```
   char *filename = "filename.txt";
   char command[128];                   // container for the command

   // Build a string and store in variable 'command'
   sprintf(command, "echo \"%s\" > %s", "some random text", filename);

   // Execute the command
   system(command);

   ```

> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/operating-systems/references/misc.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.