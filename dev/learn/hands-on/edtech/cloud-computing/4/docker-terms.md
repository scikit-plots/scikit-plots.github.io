# [Docker Terms Review](#id1)[#](#docker-terms-review "Link to this heading")

You’ve seen how to use a docker image directly using `docker run`
and using a `docker-compose.yml` file. Both methods do the same thing,
which is to create a container from a Docker image. Now, let’s take a
look at how to build a Docker image.

Let’s review some Docker terms before we continue. These terms are from
[dotnet doc's terminology](https://github.com/dotnet/docs/blob/master/docs/standard/containerized-lifecycle-architecture/docker-terminology.md) page. See additional terms and examples on page
[A Practical Introduction to Docker Container Terminology](https://developers.redhat.com/blog/2016/01/13/a-practical-introduction-to-docker-container-terminology/) provided by Redhat.

Image
:   **A package with all the dependencies and information needed to
    create a container.**

    A container represents a runtime for a single application,
    process, or service. It consists of the contents of a Docker image,
    a runtime environment, and a standard set of instructions. When scaling
    a service, you create multiple instances of a container from the same
    image. Or, a batch job can create multiple containers from the same
    image, passing different parameters to each instance.

Container
:   **A read-only instance of a Docker image.**

    A container represents the execution of a single application, process,
    or service. It consists of the contents of a Docker image,
    an execution environment, and a standard set of instructions.
    When scaling a service, you create multiple instances of a container
    from the same image.

Volumes
:   **A writable filesystem that the container can use.**

    Images are read-only but most programs need to write to the filesystem.
    Volumes add a writable layer on top of the container image so that
    programs can access a writable filesystem.

Dockerfile
:   **A text file that contains instructions for how to build a Docker image.**

Build
:   **The action of building a container image using the information
    in a Dockerfile.**

Tag
:   **A mark or label that you can apply to images for identification**.

Repository (repo)
:   **A catalogued or indexed collection of Docker images.**

Registry
:   **A service that provides access to repositories.**

    The default registry for most public images is [Docker Hub](https://hub.docker.com/)
    (owned by Docker as an organization).

Docker Hub
:   A public registry of images.

    `docker run`, `docker-composer`, and `Dockerfile` use images
    from [Docker Hub](https://hub.docker.com/). For example, `docker run` downloads `nextcloud`
    from Docker Hub before it creates the container using this command:
    `docker run -d -p 80:80 nextcloud`.

Multi-arch image
:   **An image designed for multi-architecture systems**.

Compose
:   **A command-line tool and YAML file format with metadata for
    defining and running multi-container applications**.

> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/cloud-computing/4/docker-terms.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.