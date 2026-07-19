# Lab 1: Set up your VPS[#](#lab-1-set-up-your-vps "Link to this heading")

Table of Contents

* [Lab 1: Overview](overview.html)
  * [Goals for Lab 1](overview.html#goals-for-lab-1)
  * [Optional configurations](overview.html#optional-configurations)
* [Step 1: Interacting with your VPS](1.1.html)
  * [Interacting with Your VPS](1.1.html#interacting-with-your-vps)
    * [Install a Terminal Editor](1.1.html#install-a-terminal-editor)
    * [Connect to your VPS](1.1.html#connect-to-your-vps)
* [Step 2: Update and reboot](1.2.html)
  * [Updating Software Packages](1.2.html#updating-software-packages)
  * [Rebooting Linux](1.2.html#rebooting-linux)
* [Step 3: Essential Configuration](1.3.html)
  * [Essential Configuration](1.3.html#essential-configuration)
  * [Install Common Packages](1.3.html#install-common-packages)
* [Step 4: Configure the firewall](1.4.html)
  * [Firewall Overview](1.4.html#firewall-overview)
  * [Using `nano`](1.4.html#using-nano)
  * [Configuring the Firewall](1.4.html#configuring-the-firewall)
    * [Verify that IPv6 is enabled](1.4.html#verify-that-ipv6-is-enabled)
    * [Configure UFW](1.4.html#configure-ufw)
    * [Reboot and Verify](1.4.html#reboot-and-verify)
* [Step 5: Install Docker](1.5.html)
  * [Docker Overview](1.5.html#docker-overview)
  * [Install Docker](1.5.html#install-docker)
    * [Verify Docker Install](1.5.html#verify-docker-install)
    * [Running Docker as non-root](1.5.html#running-docker-as-non-root)
* [Step 6: Install Nginx](1.6.html)
  * [Nginx](1.6.html#nginx)
* [Step 7: Install PHP](1.7.html)
  * [PHP](1.7.html#php)
  * [PHP and Nginx](1.7.html#php-and-nginx)
    * [Create a `phpinfo` page](1.7.html#create-a-phpinfo-page)
* [Step 8: Create a Name-based Site](1.8.html)
  * [Domain Names](1.8.html#domain-names)
    * [Namecheap](1.8.html#namecheap)
    * [Freenom](1.8.html#freenom)
  * [Create a new Nginx Site](1.8.html#create-a-new-nginx-site)
  * [Add an SSL Cert to your site](1.8.html#add-an-ssl-cert-to-your-site)
* [Step 9: Install a Web Admin panel](1.9.html)
  * [Web-based administration panels](1.9.html#web-based-administration-panels)
  * [Webmin](1.9.html#webmin)
> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/cloud-computing/1/index.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.