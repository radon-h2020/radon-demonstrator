# RADON workshop

## Overview

This repository contains workshop labs and best
practices for tools in the RADON framework
toolstack.

## Prerequisites

In order to conduct these labs, you need the
following prerequisites:

- An AWS account to deploy the application to.
- A user on the
  [Eclipse Che environment](http://che-che.51.11.43.6.nip.io/).
- (Optional) A user on [cloudstash](cloudstash.io)

## Workshop labs

1. [Introduction to the application and RADON](labs/introduction.md)
2. [Working with the IDE](labs/ide.md)
3. [Modeling the application with GMT](labs/gmt.md)
4. [Deploying the csar with xOpera](labs/xopera.md)
5. [Adding testing annotations with CTT](labs/ctt.md)
6. [Adding Data pipelines](labs/datapipelines.md)
7. [Adding monitoring with Prometheus & Grafana](labs/monitoring.md)
8. [Adding verification constraints with VT](labs/vt.md)
9. [Detect code defects with DPT](labs/dpt.md)
10. [Choose optimal decomposition with DT](labs/dt.md)
11. [Storing deployment templates in Template Library](labs/templatelibrary.md)
12. [Enabling CI/CD](labs/cicd.md)
13. [Deploying artifacts to FunctionHub](labs/functionhub.md)


## Directory

```
.
├── labs        # All lab descriptions
├── README.md   # What you are reading now
└── todos       # The application we want to deploy
```
