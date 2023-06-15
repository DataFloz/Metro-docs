---
sidebar_position: 2
---

# Runner

The Runner component in the system, located under the `./runner` directory, plays a crucial role in managing the system's configuration and executing the pipelines. It acts as an API layer that interacts with the Metro.yaml configuration file, provides access to the configuration details, and orchestrates the rollout of the configuration.

## Reading the Metro.yaml Configuration

The Runner component reads the Metro.yaml configuration file, located at `/runner/cfg/metro.yaml`. This file contains all the necessary system configuration, including pipeline definitions, infrastructure settings, and other related parameters. The Runner component parses this configuration file to retrieve the necessary information for the system's operation.

## API for Configuration Access

The Runner component exposes an API that allows users and other system components to access the configuration details. This API provides endpoints to retrieve pipeline definitions, infrastructure settings, and other relevant information defined in the Metro.yaml configuration file. Users can interact with this API to obtain the system's configuration and use it for various purposes, such as monitoring, troubleshooting, or custom integrations.

## Configuration Rollout

The Runner component is responsible for orchestrating the rollout of the configuration. When a new configuration is applied, the Runner component ensures that the pipelines mentioned in the Metro.yaml file are executed according to the updated configuration. This involves starting the necessary system containers or deploying the pipelines in a Kubernetes cluster based on the configured infrastructure.

The configuration rollout process guarantees that the system is updated with the latest configuration changes, ensuring the smooth functioning of the pipelines and adherence to the desired infrastructure setup.

Utilize the capabilities of the Runner component to manage and rollout the system's configuration effectively. Refer to the system's documentation for detailed instructions on how to interact with the Runner component and perform configuration-related operations.
