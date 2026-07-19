# Lab 2: Configure Nginx as a Reverse Proxy[#](#lab-2-configure-nginx-as-a-reverse-proxy "Link to this heading")

Table of Contents

* [Lab 2: Overview](overview.html)
  * [The Complexity of Web Applications](overview.html#the-complexity-of-web-applications)
  * [A Reverse Proxy](overview.html#a-reverse-proxy)
  * [Goals for Lab 2](overview.html#goals-for-lab-2)
* [Step 1: Install a `snap` Application](2.1.html)
  * [Snaps](2.1.html#snaps)
  * [Snaps Introduction](2.1.html#snaps-introduction)
    * [Basics (basic snap management)](2.1.html#basics-basic-snap-management)
    * [Daemons (manage services):](2.1.html#daemons-manage-services)
  * [Rocket.Chat](2.1.html#rocket-chat)
* [Step 2: Configure Nginx using the Command Line](2.2.html)
  * [2.1. Create sub-domain ****chat.example.com****](2.2.html#create-sub-domain-chat-example-com)
    * [Freenom](2.2.html#freenom)
    * [Namecheap](2.2.html#namecheap)
  * [2.2. Create the Nginx Site](2.2.html#create-the-nginx-site)
* [Step 3: Load a Simple Docker Project](2.3.html)
  * [Installing NextCloud on Docker](2.3.html#installing-nextcloud-on-docker)
  * [Create a Reverse Proxy for NextCloud](2.3.html#create-a-reverse-proxy-for-nextcloud)
* [Step 4: Using Docker Compose](2.4.html)
  * [Reverse Proxies with SSL](2.4.html#reverse-proxies-with-ssl)
  * [Create the Nginx WP Site](2.4.html#create-the-nginx-wp-site)
  * [Installing Wordpress on Docker](2.4.html#installing-wordpress-on-docker)
> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/cloud-computing/2/index.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.