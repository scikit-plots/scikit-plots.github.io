# [Lab 8: VPS Security](#id1)[#](#lab-8-vps-security "Link to this heading")

Any internet-based device can be hacked. A goal is to make it hard
for someone to gain access to your VPS. You have already taken the
first steps by configuring a firewall (UFW) and enabling Fail2Ban.

There are several other methods that you can use to add security to
your VPS with little effort. This lab gives you an overview of
these methods.

Here is a shortlist of security methods that you can implement quickly
to provide a wide range of protection.

* Configure a firewall
* Use Fail2Ban
* Harden SSH logins

  * Use a non-default port
  * Login using a non-privileged user
  * Restrict root access without a private key
* Perform automatic updates

****Security Resources****

* [Securing a VPS](https://docs.ovh.com/gb/en/vps/tips-for-securing-a-vps/) from OVH
* [How to Harden your Ubuntu 18.04 Server](https://hostadvice.com/how-to/how-to-harden-your-ubuntu-18-04-server/) from HostAdvice
* [How to Secure Your Server](https://www.linode.com/docs/security/securing-your-server/) from Linode
* [5 Steps to Harden SSH Server on Ubuntu](https://www.linuxbabe.com/security/harden-ssh-server) from LinuxBabe
* [National Cyber Security Centre publish Ubuntu 18.04 LTS Security Guide](https://blog.ubuntu.com/2018/07/30/national-cyber-security-centre-publish-ubuntu-18-04-lts-security-guide)

## [Goals for Lab 8](#id2)[#](#goals-for-lab-8 "Link to this heading")

During this lab, you will learn how to:

> 1. ****enable**** automatic updates.
> 2. ****harden**** SSH logins.

> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/cloud-computing/8/overview.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.