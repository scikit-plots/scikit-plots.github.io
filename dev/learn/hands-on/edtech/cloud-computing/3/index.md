# Lab 3: Docker Compose and Volumes[#](#lab-3-docker-compose-and-volumes "Link to this heading")

Table of Contents

* [Lab 3: Overview](overview.html)
  * [Containers](overview.html#containers)
  * [Goals for Lab 3](overview.html#goals-for-lab-3)
* [Docker Compose](docker-compose.html)
* [Step 1: Clean Up](3.1.html)
  * [Remove Previous Wordpress Containers](3.1.html#remove-previous-wordpress-containers)
* [Step 2: Configure Volumes](3.2.html)
  * [Modify `docker-compose.yml` Configuring File](3.2.html#modify-docker-compose-yml-configuring-file)
  * [Start the Project](3.2.html#start-the-project)
  * [Reset Wordpress Data](3.2.html#reset-wordpress-data)
* [Step 3: Persist Data Using Volumes](3.3.html)
  * [Verifying Volume Data](3.3.html#verifying-volume-data)
* [Step 4: Add additional Services](3.4.html)
  * [Install Redis Server](3.4.html#install-redis-server)
  * [Testing Redis on Docker](3.4.html#testing-redis-on-docker)
* [Step 5: Configure Wordpress to use Redis](3.5.html)
  * [Connect WP to Redis](3.5.html#connect-wp-to-redis)
  * [Troubleshooting](3.5.html#troubleshooting)
* [Step 6: Configure Nextcloud using Docker Compose](3.6.html)
  * [Initial Configuration](3.6.html#initial-configuration)
  * [Using the Nextcloud Web Configuration](3.6.html#using-the-nextcloud-web-configuration)
  * [Optional Nextcloud Configuration](3.6.html#optional-nextcloud-configuration)
> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/cloud-computing/3/index.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.