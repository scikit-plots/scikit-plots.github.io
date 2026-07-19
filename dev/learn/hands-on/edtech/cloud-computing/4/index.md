# Lab 4: Modifying a Dockerfile[#](#lab-4-modifying-a-dockerfile "Link to this heading")

Table of Contents

* [Lab 4: Overview](overview.html)
  * [Goals for Lab 4](overview.html#goals-for-lab-4)
* [Docker Terms Review](docker-terms.html)
* [Step 1: Building a Docker Image](4.1.html)
  * [4.1.1 Cloning a project](4.1.html#cloning-a-project)
  * [4.1.2 The Docker Build Process](4.1.html#the-docker-build-process)
  * [4.1.3 Create the docker-compose file](4.1.html#create-the-docker-compose-file)
  * [4.1.4 Create a Reverse Proxy for Pandoc](4.1.html#create-a-reverse-proxy-for-pandoc)
* [Step 2: Modifying a Docker Image](4.2.html)
  * [4.2.1 Updating old Code](4.2.html#updating-old-code)
  * [4.2.2. Cleanup Failed Builds](4.2.html#cleanup-failed-builds)
  * [4.2.3 Relaunch with the updated Images](4.2.html#relaunch-with-the-updated-images)
* [Step 3: Extending a Docker Image](4.3.html)
  * [4.3.1. Change the WordPress URL to HTTPS](4.3.html#change-the-wordpress-url-to-https)
  * [4.3.2. Build the new WordPress Image](4.3.html#build-the-new-wordpress-image)
  * [4.4.3. Add SSL Configuration](4.3.html#add-ssl-configuration)
> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/cloud-computing/4/index.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.