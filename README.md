# Feature Flags for Infrastructure

Applying [Application Feature
Toggles](https://www.martinfowler.com/articles/feature-toggles.html) to
infrastructure

## Prerequisites

- Terraform 0.13+
- Consul 1.8+
- Docker
- CDK for Terraform 0.0.14+
- Google Cloud Platform account and project
- Terraform Cloud (for remote backend storage only)

## Getting Started

1. Create a service account key in GCP and save it under `key.json`.

1. Set the `CLOUDSDK_CORE_PROJECT` environment variable to your GCP project.

1. Create a directory called `secrets` and add the following files with secrets:
   * `.terraformrc`: This contains the [Terraform Cloud CLI configuration file](https://www.terraform.io/docs/commands/cli-config.html#credentials-1).
   * `key.json`: This is the Google Service Account Key
   * `project`: This file contains the project name for GCP.

## Declarative Languages

Run `docker-compose -f docker-compose-tf.yaml up`.

This creates a set of toggles in a Consul instance and uses consul-template
to output variables.

Update a toggle under `cluster/toggles` and you'll see consul-template
output Terraform plan.

## Imperative Languages

Go into the `cdk` directory and run `cdktf get` to generate the Typescript
classes for the providers.

> Warning: CDK for Terraform is in alpha. As a result, you might find some
> classes may not compile.

Run `docker-compose -f docker-compose-cdktf.yaml up`.

This creates a set of toggles in a Consul instance and uses consul-template
to output variables.

Update a toggle under `cluster/toggles` and you'll see consul-template
output the CDK for Terraform deployment.