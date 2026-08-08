# [Virtual Private Networks](#id1)[#](#virtual-private-networks "Link to this heading")

## [VPN Overview](#id2)[#](#vpn-overview "Link to this heading")

VPN is short for a **Virtual Private Network**. Just like with other virtualized
services, a virtual network replicates a physical network using software. VPNs
allow users to create a virtual network using physical nodes that exist on
another network regardless of geographical location.

VPNs are popular with corporations to connect offices together that are in
different locations. Also, workers who traveled could connect to their
corporate networks using a VPN. Nowadays, VPNs are popular with the average
internet user who wants privacy online or they use a VPN to bypass restrictions
on content.

****There are two primary types of VPN connections.****

> 1. Remote Access VPN - used to access a remote network or to virtually place
>    a user in a different location on the internet
>
>    1. Commercial VPNs use this method to place a customer on their network.
>    2. A remote worker uses this type to connect to their office network.
> 2. Site-to-site VPN - connects LANs in different locations
>
>    1. Companies use this type to create larger corporate networks.

****There are different types of VPN protocols. Here are five that are
used commonly.****

> 1. OpenVPN
> 2. L2TP/IPsec – Layer 2 Tunneling Protocol
> 3. SSTP – Secure Socket Tunneling Protocol
> 4. IKEv2 - IKEv2/IPsec – Internet Key Exchange
> 5. PPTP – Point-to-Point Tunneling Protocol

### [VPN Resources](#id3)[#](#vpn-resources "Link to this heading")

Read these websites about VPNs. Each resource shows a different perspective.

> * [Virtual Private Networks - In-depth Technical Details](http://www.rawbytes.com/virtual-private-networks-in-depth-technical-details)
> * [How VPNs Work](https://computer.howstuffworks.com/vpn.htm) - An overview
> * [VPN Beginner’s Guide](https://thebestvpn.com/what-is-vpn-beginners-guide/) - Home user’s perspective
> * [Different Types of VPNs and When to Use Them](https://www.vpnmentor.com/blog/different-types-of-vpns-and-when-to-use-them/)
> * [Best VPN Protocols: OpenVPN vs PPTP vs L2TP vs Others](https://thebestvpn.com/pptp-l2tp-openvpn-sstp-ikev2-protocols/)

## [OpenVPN](#id4)[#](#openvpn "Link to this heading")

[OpenVPN](https://openvpn.net/) is commercial software and a protocol maintained by the OpenVPN
company. OpenVPN is cross-platform and can run on embedded devices, such as
off-the-shelf routers. OpenVPN is available in two versions.

> 1. OpenVPN Community Edition - An open-source and free version
> 2. OpenVPN Access Server (OpenVPN-AS) - Based on the Community Edition,
>    but provides additional paid and proprietary features that simplify the
>    rapid deployment of a VPN remote-access solution.

[TechAdvisor](https://www.techadvisor.co.uk/feature/security/what-is-openvpn-3674223/) lists these advantages of OpenVPN:

> * It is open source. This means that its code is open to the public, so it
>   has been inspected, vetted and tested by many different people and
>   organisations.
> * It features military-grade, 256-bit encryption and can use multiple different
>   encryption techniques and algorithms.
> * It’s extremely secure, and very flexible.
> * It can be used on almost any platform, including Windows, Linux and macOS
>   as well as Android and iOS.

### [OpenVPN Resources](#id5)[#](#openvpn-resources "Link to this heading")

****About OpenVPN****

> 1. [What Is OpenVPN & How Does OpenVPN Work?](https://www.cactusvpn.com/beginners-guide-to-vpn/what-is-openvpn/)
> 2. [Site-to-site VPN routing explained in detail](https://openvpn.net/vpn-server-resources/site-to-site-routing-explained-in-detail/)
> 3. [OpenVPN (Wikipedia)](https://en.wikipedia.org/wiki/OpenVPN)

****Configuration Guides or Examples****

> 1. [Ubuntu Server Guide - OpenVPN](https://help.ubuntu.com/lts/serverguide/openvpn.html.en)
> 2. [How To Set Up an OpenVPN Server on Ubuntu 18.04 (DigitalOcean)](https://www.digitalocean.com/community/tutorials/how-to-set-up-an-openvpn-server-on-ubuntu-18-04)
> 3. [OpenVPN install script](https://github.com/Angristan/OpenVPN-install) (GitHub)
> 4. [OpenVPN Docker](https://github.com/kylemanna/docker-openvpn) (GitHub)
> 5. [Set Up a VPN Server With Docker In 5 Minutes](https://medium.com/@gurayy/set-up-a-vpn-server-with-docker-in-5-minutes-a66184882c45)
> 6. [OpenVPN Configuration Explained](https://stosb.com/blog/explaining-my-configs-openvpn/)
> 7. [OpenVPN Sample Config Files](https://github.com/OpenVPN/openvpn/tree/master/sample/sample-config-files) on GitHub
>
>    * [server.conf](https://github.com/OpenVPN/openvpn/blob/master/sample/sample-config-files/server.conf)
>    * [client.conf](https://github.com/OpenVPN/openvpn/blob/master/sample/sample-config-files/client.conf)
> 8. [Hardening OpenVPN](https://community.openvpn.net/openvpn/wiki/Hardening)

> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/cloud-computing/6-open-vpn/vpn.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.