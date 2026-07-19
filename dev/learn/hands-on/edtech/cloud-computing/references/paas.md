# [PaaS Tools](#id2)[#](#paas-tools "Link to this heading")

Installing a PaaS tool requires configuring a VPS differently than we do in
these labs. PaaS platforms need to act as the gateway. By default, they do
not operate in a reverse-proxy system. This section describes three PaaS tools
that you can explore later.

****Why use a**** [PaaS](https://www.cloudflare.com/learning/serverless/glossary/platform-as-a-service-paas/) ****tool?****

> Using a platform allows you to automate what you have you been doing manually
> using Docker and Nginx. These tools create an execution environment for you.
> They remove the maintenance element.

## [CapRover](#id3)[#](#caprover "Link to this heading")

[CapRover](https://caprover.com/) advertises their product as “an extremely easy to use app/database
deployment & web server manager for your NodeJS, Python, PHP, ASP.NET, Ruby,
MySQL, MongoDB, Postgres, WordPress (and etc…) applications!” You can view
their demo site.

Here are some resources to help you if you want to explore CapRover.

* [CapRover - Getting Started](https://caprover.com/docs/get-started.html/)
* [How I built a replacement for Heroku and cut my platform costs by 4X](https://medium.freecodecamp.org/how-i-cut-my-heroku-cost-by-400-5b9d0220ce13)

## [Dokku](#id4)[#](#dokku "Link to this heading")

[Dokku](http://dokku.viewdocs.io/dokku/) is a Docker-powered PaaS implementation that is a mini-version of
[Heroku](https://www.heroku.com/). They advertise the service as **The smallest PaaS implementation
you’ve ever seen**.

Here some resources to explore.

* [Dokku (GitHub)](https://github.com/dokku/dokku)
* [Getting Started with Dokku (GitHub)](https://github.com/dokku/dokku/blob/master/docs/getting-started/installation.md)
* [How to Deploy and Use Dokku on Ubuntu 18.04](https://computingforgeeks.com/how-to-deploy-dokku-on-ubuntu-18-04/)

## [OpenShift Origin (OKD)](#id5)[#](#openshift-origin-okd "Link to this heading")

[OpenShift](https://openshift.com/) is a family of containerization software developed by Red Hat built
around Docker containers orchestrated and managed by Kubernetes.
[OpenShift Origin](https://www.okd.io/) or OKD (Origin Community Distribution) is the open source
versions OpenShift Enterprise. It is Kubernetes for Developers that provides
an open source application container platform.

Here are some resources if your want to explore OpenShift Origin (OKD)

* [OpenShift Origin (Wikipedia)](https://en.wikipedia.org/wiki/OpenShift)
* [OpenShift (GitHub)](https://github.com/openshift/origin/)
* [Install OpenShift Origin on Ubuntu 18.04](https://medium.com/@maheshacharya_44641/install-openshift-origin-on-ubuntu-18-04-7b98773c2ee6)
* [10 most important differences between OpenShift and Kubernetes](https://cloudowski.com/articles/10-differences-between-openshift-and-kubernetes/|)

> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/cloud-computing/references/paas.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.