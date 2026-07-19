# [Lab 3: Overview](#id1)[#](#lab-3-overview "Link to this heading")

Let’s recap what we have learned over the last two weeks:

1. We explored SaaS products that are self-hosted alternatives to
   commercial products

   * [Rocket.Chat](https://rocket.chat/) has similar functionality to [Slack](https://slack.com)
   * [Nextcloud](https://nextcloud.com/) stores files in the cloud
   * [Wordpress](https://wordpress.org/) is blogging and website building software
2. We configured a VPS to host a webpage using Nginx

   * One server that runs a single web application
3. We configured a packaged product, Rocket.Chat, to run independently
   on a non-standard port because port 80 was already in use by Nginx

   * One server that runs multiple applications using a pre-configured package
4. We configured Nginx as a reverse-proxy to redirect port 80 traffic to
   internal ports (3000, for example).

   * The process is transparent to the user of the site.
   * This method allows us to run different applications on the same VPS.
5. We configured two Docker projects.

   * The first Docker project used `docker run` to pull the image from
     Docker Hub directly and then run it with minimal configurations.
     This project was all-inclusive, like Rocket.Chat.
   * The second project had two components (web and database), each
     running in a different container.
6. Each step is distributing more of the processing power.

   * We have gone from one project per VPS to a self-contained package
     installer that runs in isolation to a project that runs different
     components separately.

## [Containers](#id2)[#](#containers "Link to this heading")

Physical space in data centers and the processing power of the hardware
is finite, but resources go unused. One way to maximize resources is
to virtualize the technology to use the same hardware. Instead of
running one operating system (OS) per server, each server could
run a base operating system with many virtualized OSs, with each
virtual OS having `n` number of microservices or larger systems running
in their own virtualized OS.

We will focus on containers, which visualize the OS instead of
virtualizing the underlying hardware as a virtual machine does.
Containers are lightweight and have a small footprint. They can
start up very quickly. Linux distributions, such as [Alpine Linux](https://hub.docker.com/_/alpine),
are built for containers. Alpine Linux has [a base footprint of just 5MB](https://www.brianchristner.io/docker-image-base-os-size-comparison/),
whereas Ubuntu and CentOS are around 180MB. The `hello world`
Docker image that ran last week has a size of 1.84kB!
Run `docker images` to view the size of the images on your VPS.

****Resources****

* [What are the levels of virtualization?](https://www.quora.com/What-are-the-levels-of-virtualization)
* [What’s the Diff: VMs vs Containers](https://www.backblaze.com/blog/vm-vs-containers/)
* [What are microservices?](https://opensource.com/resources/what-are-microservices)
* [Docker Tutorial: Containers, VMs, and Docker for Beginners](https://www.level-up.one/docker-tutorial-containers-vms)

## [Goals for Lab 3](#id3)[#](#goals-for-lab-3 "Link to this heading")

We will explore how to containerize applications so that we can run
a service using multiple smaller containers.

During this lab, you will:

> 1. You will assemble two web applications using different containers
>    to decentralize the project using Docker Compose.
>
>    * Wordpress
>    * Nextcloud
> 2. You will learn how to separate the data from the web application.
> 3. You will configure a memory caching service, which is a core
>    technology to cloud and distributed computing.

> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/cloud-computing/3/overview.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.