# Lab 6: OpenVPN[#](#lab-6-openvpn "Link to this heading")

Table of Contents

* [Lab 6: Overview](overview.html)
  * [Platform Services](overview.html#platform-services)
  * [Infrastructure Services](overview.html#infrastructure-services)
  * [Goals for Lab 6](overview.html#goals-for-lab-6)
* [Virtual Private Networks](vpn.html)
  * [VPN Overview](vpn.html#vpn-overview)
    * [VPN Resources](vpn.html#vpn-resources)
  * [OpenVPN](vpn.html#openvpn)
    * [OpenVPN Resources](vpn.html#openvpn-resources)
* [Step 1: Initialize OpenVPN using Docker](6.1.html)
  * [6.1.1. Choosing a VPN port](6.1.html#choosing-a-vpn-port)
  * [6.1.2. Set up the Docker Container](6.1.html#set-up-the-docker-container)
    * [Verify the Installation](6.1.html#verify-the-installation)
* [Step 2: Examining the Config Files](6.2.html)
  * [6.2.1. OpenVPN Conf Files](6.2.html#openvpn-conf-files)
    * [openvpn.conf](6.2.html#openvpn-conf)
    * [client.ovpn](6.2.html#client-ovpn)
* [Step 3: Edit the Config Files](6.3.html)
  * [6.3.1. Edit openvpn.conf](6.3.html#edit-openvpn-conf)
  * [6.3.2. Edit user.ovpn](6.3.html#edit-user-ovpn)
* [Step 4: Connect to Your VPN Server](6.4.html)
  * [6.4.1. Connect to the VPN Server](6.4.html#connect-to-the-vpn-server)
  * [6.4.2. Verify Connectivity](6.4.html#verify-connectivity)
  * [6.4.3. Connection Log (Server)](6.4.html#connection-log-server)
  * [6.4.4. Debugging](6.4.html#debugging)
* [Step 5: Using a Stronger Cipher](6.5.html)
  * [6.5.1. Cautionary Notes](6.5.html#cautionary-notes)
  * [6.5.2. Security recommendations](6.5.html#security-recommendations)
  * [6.5.3. Changing Ciphers](6.5.html#changing-ciphers)
  * [6.5.4. Adding TLS Authentication](6.5.html#adding-tls-authentication)
* [Step 6: On Your Own](6.6.html)
> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/cloud-computing/6-open-vpn/index.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.