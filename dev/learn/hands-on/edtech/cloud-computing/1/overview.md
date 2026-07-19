# [Lab 1: Overview](#id1)[#](#lab-1-overview "Link to this heading")

Cloud computing is a way of accessing computing power using the internet and
virtualization technology. We will set up a VPS to host cloud-based
applications. First of all, we need to choose a hosting provider. There are
two general categories of providers, which are [cloud hosting and VPS hosting](https://www.cloudways.com/blog/cloud-vs-vps-hosting/).

> 1. Cloud hosting service providers offer comprehensive cloud-based services
>    to assist developers and companies. These providers might use a wide range
>    of distributed technologies to support the clients, such as multiple data
>    centers, provide automatic scaling, failover, load balancing and automatic
>    backup of data. Examples of providers are Amazon AWS, Microsoft Azure and
>    Google Cloud.
> 2. VPS hosting provides subscriptions to virtual private servers (VPSs).
>    The VPS vendors provide the physical infrastructure and allocate a certain
>    amount for you to use. For example, someone might subscribe to a VPS that
>    has 2GB of RAM, 20GB of SSD storage, and a single CPU core. The client
>    must then configure the VPS to suit their needs. They are responsible
>    for the security of the VPS and providing data backup.

This course will use VPS hosting. We recommend getting a VPS from
Time4VPS or OVH for learning about cloud computing. In general, VPS
hosting for light use is cheaper than using a cloud hosting company if
you don’t need the extra services or extra computing power, such as
automatic scaling. For example, Google Cloud costs around 15 USD per
month, and Amazon AWS is approximately 20 USD for similar VPS
specifications as [VPS VALUE from OVH](https://www.ovhcloud.com/en/vps/cheap-vps/) for 6 USD per month or
[VPS Linux 2 from Time4VPS](https://www.time4vps.com/linux-vps/) for 4.99 EUR per month with the
`Fast SSD storage` option. The benefit of cloud hosting (Amazon AWS,
Microsoft Azure and Google Cloud), comes from the extra services they offer.

## [Goals for Lab 1](#id2)[#](#goals-for-lab-1 "Link to this heading")

The VPS hosting company provides us with a Linux distribution using the
default configurations. We need to set it up to meet our needs and enable some
essential security features. During this lab, you will:

> 1. Install an SSH client or terminal emulator to access the Linux shell
> 2. Set up your VPS using Ubuntu 18.04
> 3. Apply essential configurations, such as applying updates and enabling
>    the firewall.
> 4. Install Docker to run applications in containers.
> 5. Install Nginx to use as our web server and reverse proxy.
> 6. Configure Nginx to serve local PHP files.
> 7. Use HTTPS to secure your webpages by obtaining an SSL certificate through
>    Let’s Encrypt.

## [Optional configurations](#id3)[#](#optional-configurations "Link to this heading")

> 1. Install a web admin panel called Webmin.
> 2. Add security to your VPS by changing the SSH port.

> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/cloud-computing/1/overview.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.