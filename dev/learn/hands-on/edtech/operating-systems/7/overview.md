# Lab 7: Overview[#](#lab-7-overview "Link to this heading")

This lab guides you through the process of terminating a process in
Windows using the system call `TerminateProcess()` and then retrieving
the exit code using `GetExitCodeProcess()`.

## Lab 7 Resources[#](#lab-7-resources "Link to this heading")

* [Terminating a Process](https://docs.microsoft.com/en-us/windows/win32/procthread/terminating-a-process)
* [OpenProcess](https://docs.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-openprocess) function
* [CloseHandle](https://docs.microsoft.com/en-us/windows/win32/api/handleapi/nf-handleapi-closehandle) function
* [TerminateProcess](https://docs.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-terminateprocess) function
* [GetExitCodeProcess](https://docs.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-getexitcodeprocess) function
* [Process Security and Access Rights](https://docs.microsoft.com/windows/desktop/ProcThread/process-security-and-access-rights)

## Goals for Lab 7[#](#goals-for-lab-7 "Link to this heading")

During this lab, you will learn how to use:

> 1. `OpenProcess()` to get the handle of a running process.
> 2. `TerminateProcess()` to terminate a process forcefully.
> 3. `GetExitCodeProcess()` to retrieve the exit code of a process

> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/operating-systems/7/overview.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.