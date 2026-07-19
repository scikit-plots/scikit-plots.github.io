# [WordPress Hacks](#id6)[#](#wordpress-hacks "Link to this heading")

This page contains hacks for working with WordPress.

## [Reset admin password](#id7)[#](#reset-admin-password "Link to this heading")

There are two easy ways to reset the password using WordPress in
Docker without accessing the database directly.

These instructions are modified from [Resetting Your Password](https://wordpress.org/support/article/resetting-your-password/)
to work with Docker.

### [Using WP CLI](#id8)[#](#using-wp-cli "Link to this heading")

[WP-CLI](https://wp-cli.org/) is the command-line interface for administrating WordPress
without using a web browser. These instructions should work in most instances.

> **Tip**
> You can easily change the password for any user using this method.

1. Install the WP-CLI Phar package

   ```
   # Change to the docker-compose wordpress directory
   cd ~/wordpress-docker

   # Install wp-cli.phar
   docker-compose exec wordpress curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
   docker-compose exec wordpress chmod +x wp-cli.phar
   docker-compose exec wordpress mv wp-cli.phar /usr/local/bin/wp

   ```
   Example output[#](#id1 "Link to this code")
   ```
   root@vps298933:~# cd ~/wordpress-docker
   root@vps298933:~/wordpress-docker# docker-compose exec wordpress curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
     % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                    Dload  Upload   Total   Spent    Left  Speed
   100 5437k  100 5437k    0     0  28.3M      0 --:--:-- --:--:-- --:--:-- 28.2M
   root@vps298933:~/wordpress-docker# docker-compose exec wordpress chmod +x wp-cli.phar
   root@vps298933:~/wordpress-docker# docker-compose exec wordpress mv wp-cli.phar /usr/local/bin/wp
   root@vps298933:~/wordpress-docker#

   ```
2. Verify the installation

   ```
   docker-compose exec wordpress wp --info

   ```
   Example output[#](#id2 "Link to this code")
   ```
   root@vps298933:~/wordpress-docker# docker-compose exec wordpress wp --info
   OS:     Linux 4.15.0-124-generic #127-Ubuntu SMP Fri Nov 6 10:54:43 UTC 2020 x86_64
   Shell:
   PHP binary:     /usr/local/bin/php
   PHP version:    7.4.13
   php.ini used:
   WP-CLI root dir:        phar://wp-cli.phar/vendor/wp-cli/wp-cli
   WP-CLI vendor dir:      phar://wp-cli.phar/vendor
   WP_CLI phar path:       /var/www/html
   WP-CLI packages dir:
   WP-CLI global config:
   WP-CLI project config:
   WP-CLI version: 2.4.0
   root@vps298933:~/wordpress-docker#

   ```
3. Find the number of the user that you want to change the password for.

   ```
   docker-compose exec wordpress wp user list --allow-root

   ```
   Example output[#](#id3 "Link to this code")
   ```
   root@vps298933:~/wordpress-docker# docker-compose exec wordpress wp user list --allow-root
   +----+------------+--------------+---------------+---------------------+---------------+
   | ID | user_login | display_name | user_email    | user_registered     | roles         |
   +----+------------+--------------+---------------+---------------------+---------------+
   | 1  | test-user  | test-user    | user@host.com | 2020-11-14 04:36:15 | administrator |
   +----+------------+--------------+---------------+---------------------+---------------+
   root@vps298933:

   ```
4. Change the password using the new password and user number.

   ```
   docker-compose exec wordpress wp user update 1 --user_pass=ESzPHYbLkN! --allow-root

   ```
   Example output[#](#id4 "Link to this code")
   ```
   root@vps298933:~/wordpress-docker# docker-compose exec wordpress wp user update 1 --user_pass=ESzPHYbLkN! --allow-root
   sh: 1: /usr/sbin/sendmail: not found
   Success: Updated user 1.
   root@vps298933:

   ```

### [Using function `wp_set_password()`](#id9)[#](#using-function-wp-set-password "Link to this heading")

1. Edit the `functions.php` file

   > **Note**
   > Verify that `twentytwenty` is the latest theme. These
   instructions were written in 2020. 😉
   ```
   cd ~/wordpress-docker
   nano wordpress/wp-content/themes/twentytwenty/functions.php

   ```
   1. Put the `wp_set_password()` function on a blank line
      below `<?php` to reset the password for the admin user.

      ```
      // Changes the password for the first registered user during WP installation
      wp_set_password( 'ChangeMe!', 1 );

      ```
      Example[#](#id5 "Link to this code")
      ```
      <?php

      // Changes the password for the first registered user during WP installation
      wp_set_password( 'ChangeMe!', 1 );

      /**
       * Twenty Twenty functions and definitions
       *

      ```
   2. Save the file (you can leave it open in the terminal window).
2. Try logging into the admin panel of your website at
   `http://blog.mysite.com/wp-admin/` using the password in the file.

   > **Note**
   > The login will fail but will not generate an error.
3. Edit `functions.php` again and comment out the command.

   ```
   // Changes the password for the first registered using when WP was set up
   // wp_set_password( 'ChangeMe!', 1 );

   ```
   1. Save and exit
4. Log in using the new password

> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/cloud-computing/references/wordpress.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.