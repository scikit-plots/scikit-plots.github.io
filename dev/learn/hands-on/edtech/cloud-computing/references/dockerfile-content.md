# Resources[#](#resources "Link to this heading")

1. [Dockerfile tutorial by example - basics and best practices [2018]](https://takacsmark.com/dockerfile-tutorial-by-example-dockerfile-best-practices-2018/)
2. [Best practices for writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
3. [How To Build Your Own Docker Images](https://blog.iron.io/how-to-build-your-own-docker-images/)
4. [Gotchas in Writing Dockerfile](https://kimh.github.io/blog/en/docker/gotchas-in-writing-dockerfile-en/)

# Dockerfile Elements[#](#dockerfile-elements "Link to this heading")

This lab explains how to use `dockerfile` to create a docker image.
A dockerfile is a text file that contains the commands necessary to
create an image using the `docker build` command. A `dockerfile`
uses these commands to build an image.

ADD
:   Copy files from a source on the host to the containers own
    filesystem at the set destination.

CMD
:   Execute a specific command within the container.

ENTRYPOINT
:   Set a default application to be used every time a container is created
    with the image.

ENV
:   Set environment variables.

EXPOSE
:   Expose a specific port to enable networking between the container
    and the outside world.

FROM
:   Define the base image used to start the build process.

MAINTAINER
:   Define the full name and email address of the image creator.

RUN
:   Central executing directive for Dockerfiles.

USER
:   Set the UID (the username) that will run the container.

VOLUME
:   Enable access from the container to a directory on the host machine.

WORKDIR
:   Set the path where the command, defined with CMD, is to be executed.