# [Nginx Quick References](#id3)[#](#nginx-quick-references "Link to this heading")

This page shows how to create an Nginx site.

## [1. Choose an Nginx template.](#id4)[#](#choose-an-nginx-template "Link to this heading")

### [HTML/PHP Site](#id5)[#](#html-php-site "Link to this heading")

To ****host local files**** create the directories to for site
`example.com` and `www.example.com` using these commands.

> Create directory
> :   ```
>     mkdir -p /var/www/example.com/html
>
>     ```
>
> Create `index.html` file
> :   ```
>     echo "<h1>Hello world</h1>" > /var/www/example.com/html/index.html
>
>     ```
>
> Create a `phpinfo` page
> :   ```
>     echo "<?php phpinfo(); ?>" > /var/www/example.com/html/7yLJSaumNw.php
>
>     ```

Then, create the Nginx .conf file.

> ```
> nano /etc/nginx/sites-available/sub.example.com
>
> ```
> HTML/PHP Nginx Template file[#](#id1 "Link to this code")
> ```
> server {
>     listen 80;
>     listen [::]:80;
>
>     root /var/www/example.com/html;
>     index index.html index.htm index.nginx-debian.html index.php;
>
>     server_name example.com www.example.com;
>
>     location / {
>             try_files $uri $uri/ =404;
>     }
>
>     # pass PHP scripts to FastCGI server
>     #
>     location ~ \.php$ {
>         include snippets/fastcgi-php.conf;
>         fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
>     }
> }
>
> ```

### [Reverse Proxy](#id6)[#](#reverse-proxy "Link to this heading")

Create a new site called `sub.example.com` that is a reverse proxy
for a hosted application

* Replace the port number in `proxy_pass http://localhost:8888;`

```
nano /etc/nginx/sites-available/sub.example.com

```
Reverse Proxy Nginx Template file[#](#id2 "Link to this code")
```
server {
    listen 80;

    server_name sub.example.com;

    location / {
        proxy_pass http://localhost:8888;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}

```

## [2. Enable or Disable an Nginx site](#id7)[#](#enable-or-disable-an-nginx-site "Link to this heading")

### [Enable an Nginx site](#id8)[#](#enable-an-nginx-site "Link to this heading")

* Use `ln -s` to create a symbolic link to `sites-enabled`

```
ln -s /etc/nginx/sites-available/sub.example.com /etc/nginx/sites-enabled/

```

### [Disable an Nginx site](#id9)[#](#disable-an-nginx-site "Link to this heading")

* You can remove or delete the symbolic link to disable a site or remove an
  invalid configuration.

```
rm /etc/nginx/sites-enabled/sub-to-disable.example.com

```

### [Verify if site is enabled](#id10)[#](#verify-if-site-is-enabled "Link to this heading")

* Perform a directory listing of `sites-enabled` to determine if it contains
  a link to a config

```
ls -lh /etc/nginx/sites-enabled/

```

## [3. Verify and Apply Configuration](#id11)[#](#verify-and-apply-configuration "Link to this heading")

### [Check for configuration issues](#id12)[#](#check-for-configuration-issues "Link to this heading")

```
nginx -t

```

### [Apply Config Changes](#id13)[#](#apply-config-changes "Link to this heading")

* Restart Nginx to apply config changes using `systemctl`

```
systemctl restart nginx

```

* Check the status of Nginx using `systemctl`

```
systemctl status nginx

```
> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/cloud-computing/references/nginx.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.