# Lab 5: Building a Docker Image[#](#lab-5-building-a-docker-image "Link to this heading")

Table of Contents

* [Lab 5: Overview](overview.html)
  * [Goals for Lab 5](overview.html#goals-for-lab-5)
* [Dockerfile](dockerfile.html)
  * [Resources](dockerfile.html#resources)
  * [Dockerfile Elements](dockerfile.html#dockerfile-elements)
* [Step 1: Create a Basic Dockerfile](5.1.html)
  * [5.1.1. Create a test image](5.1.html#create-a-test-image)
  * [5.1.2. Adding Functionality](5.1.html#adding-functionality)
  * [5.1.4. Container Names](5.1.html#container-names)
  * [5.1.5. Wrap-up](5.1.html#wrap-up)
* [Step 2: Daemonize Docker](5.2.html)
  * [5.2.1. Docker Daemon Mode](5.2.html#docker-daemon-mode)
  * [5.2.2. Debugging](5.2.html#debugging)
  * [5.2.3. Wrap-up](5.2.html#wrap-up)
* [Step 3: Building a `Hello World` Python Image](5.3.html)
  * [5.3.1. A Basic Python Image](5.3.html#a-basic-python-image)
  * [5.3.2. Modify the Container Code](5.3.html#modify-the-container-code)
  * [5.3.3. Mounting a Volume](5.3.html#mounting-a-volume)
  * [5.3.4. Wrap-up](5.3.html#wrap-up)
  * [5.3.5. Docker Compose (optional)](5.3.html#docker-compose-optional)
> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/cloud-computing/5/index.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.