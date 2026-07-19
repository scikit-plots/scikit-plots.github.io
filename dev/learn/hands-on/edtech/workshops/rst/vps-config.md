# RST Workshop: Docker Environment[#](#rst-workshop-docker-environment "Link to this heading")

These configs provide a basic Docker and Nginx reverse-proxy setup
for installing Sphinx. This setup uses volumes to persist the Sphinx
data and Nginx configurations, but not the state of the VPS
(i.e. installed packages).

> **Note**
> These configs assume that Sphinx is installed in directory `/opt/sphinx`.
These settings are highlighted below.
Basic docker-compose.yml config[#](#id1 "Link to this code")
```
 1version: "3.3"
 2
 3services:
 4  sphinx:
 5    image: nginx:latest                           # Debian-based
 6    container_name: sphinx_nginx
 7    volumes:
 8      - ./sphinx:/opt/sphinx                        # Sphinx files
 9      - ./logs:/var/log/nginx                       # Nginx logs
10      - ./nginx/site.conf:/etc/nginx/conf.d/site.conf     # Site conf for FQD
11      - ./nginx/nginx.conf:/etc/nginx/nginx.conf          # nginx.conf for custom settings
12    ports:
13      - 8085:80
14    restart: always

```
‘site.conf’ for sphinx\_nginx volume[#](#id2 "Link to this code")
```
1server {
2    index index.html;
3    server_name   sphinx.example.com;
4    error_log    /var/log/nginx/error.log;
5    access_log   /var/log/nginx/access.log;
6    root         /opt/sphinx/_build/html;
7}

```
‘nginx.conf’ for sphinx\_nginx volume. Security settings
and custom log for revere proxy.[#](#id3 "Link to this code")
```
 1user  nginx;
 2worker_processes  1;
 3
 4error_log  /var/log/nginx/error.log warn;
 5pid        /var/run/nginx.pid;
 6
 7events {
 8    worker_connections  1024;
 9}
10
11http {
12    ##----- Added by for security ------##
13    server_tokens off;
14
15    ##----- End ------##
16
17    include       /etc/nginx/mime.types;
18    default_type  application/octet-stream;
19
20    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
21                      '$status $body_bytes_sent "$http_referer" '
22                      '"$http_user_agent" "$http_x_forwarded_for"';
23
24    access_log  /var/log/nginx/access.log  main;
25
26    sendfile        on;
27    #tcp_nopush     on;
28
29    keepalive_timeout  65;
30
31    #gzip  on;
32
33    include /etc/nginx/conf.d/*.conf;
34}

```
Basic Nginx reverse proxy[#](#id4 "Link to this code")
```
 1server {
 2    listen 80;
 3
 4    server_name sphinx.example.com;
 5
 6    location / {
 7        proxy_pass http://localhost:8085;
 8        proxy_set_header Host $host;
 9        proxy_set_header X-Real-IP $remote_addr;
10        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
11    }
12}

```

## Dockerfile[#](#dockerfile "Link to this heading")

Here is the Dockerfile that we are using in this site. You will notice
some additional packages that are used to render diagrams.

The configuration files listed above will work using an
image build from this file.

> **Note**
> Updated May 2022 (changed base image to nginx:latest)
```
FROM nginx:latest

# Install some required libraries
RUN set -ex; \
\
apt-get update; \
apt-get install -y \
            build-essential wget \
            python3-pip

# Install libraries for the diagram extensions
RUN apt-get install -y \
            fonts-dejavu fonts-liberation \
            libjpeg-dev \
            zlib1g-dev \
            libpng-dev \
            graphviz \
            openjdk-11-jre

# Install Sphinx and its requirements
# Downgrade MarkupSafe to fix error : cannot import name 'soft_unicode' from 'markupsafe'
# MarkupSafe==2.0.1
run \
    pip3 install --upgrade pip && \
    pip3 install wheel \
            MarkupSafe==2.0.1 \
            Sphinx \
            sphinx-autobuild \
            sphinx-rtd-theme \
            sphinx-notfound-page \
            sphinx-sitemap \
            sphinx-js

# Add the requirements to install the diagram extensions, then install using pip

# Required for sphinxcontrib-plantuml
RUN wget http://downloads.sourceforge.net/project/plantuml/plantuml.jar -P /opt/ \
    && echo -e '#!/bin/sh -e\njava -jar /opt/plantuml.jar "$@"' > /usr/local/bin/plantuml \
    && chmod +x /usr/local/bin/plantuml

RUN pip3 install sphinxcontrib-actdiag \
                    sphinxcontrib-blockdiag \
                    sphinxcontrib-nwdiag \
                    sphinxcontrib-seqdiag \
                    sphinxcontrib-plantuml

WORKDIR /opt/sphinx

```

This file was influenced from [dldl/sphinx-server](https://github.com/dldl/sphinx-server)

> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/workshops/rst/vps-config.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.