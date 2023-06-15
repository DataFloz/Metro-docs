---
sidebar_position: 2
---

# Config YAML

# Metro.yaml Configuration

The Metro.yaml file, located at `/runner/cfg/metro.yaml`, is a central configuration file for the system. It contains all the necessary configuration settings for the system, including queue connections, pipeline definitions, transformers, and runtime configuration.

## Infrastructure as Code (IAC) Approach

The Metro.yaml configuration file embodies the Infrastructure as Code (IAC) approach. IAC is a methodology that treats infrastructure and configuration settings as code, enabling automation, version control, and reproducibility. Here are some benefits of using the IAC approach in the system:

- **Consistency and Reproducibility**: With IAC, the system configuration is defined in code, allowing you to recreate the exact infrastructure and configuration across different environments consistently. This ensures reproducibility and reduces the risk of configuration drift.

- **Version Control**: Treating the system configuration as code enables version control. You can track changes, revert to previous versions, and collaborate with others using established version control practices. This improves collaboration, transparency, and accountability.

- **Automation and Efficiency**: IAC allows for automated provisioning and configuration management. You can automate the deployment and configuration processes, reducing manual errors, and improving efficiency. Changes can be easily applied, tested, and rolled back if necessary.

## Metro.yaml Examples

To help you get started with the Metro.yaml configuration file, here are a few examples of different configuration sections:

- **Queue Connection Configuration**:
  ```yaml
    name: 'sample-config'
    running_infrastructure:
    infrustructure_type: container
    connectors:
    -
        name: 'local-kafka-connector'
        type: 'kafka'
        brokers: 'kafka:29092'
        group_id: 'some-group-id'
    pipelines:
    -
        name: 'calculate-fullname'
        input:
        type: 'kafka'
        topic: 'persons'
        output:
        type: 'kafka'
        topic: 'persons-with-full-name'
        transformation:
        type: 'sql'
        sql_query: 'SELECT *, first_name || " " || last_name as full_name FROM msg'
    -
        name: 'calculate-is-adult'
        input:
        type: 'kafka'
        topic: 'persons-with-full-name'
        output:
        type: 'kafka'
        topic: 'persons-with-full-name-is-adult'
        transformation:
        type: 'sql'
        sql_query: 'SELECT *, age > 18 as is_adult FROM msg'
    -
        name: 'filter-only-abults'
        input:
        type: 'kafka'
        topic: 'persons-with-full-name-is-adult'
        output:
        type: 'kafka'
        topic: 'persons-only-adults'
        transformation:
        type: 'sql'
        sql_query: 'SELECT * FROM msg WHERE is_adult'
    -
        name: 'predict-person-with-ML'
        input:
        type: 'kafka'
        topic: 'persons-with-full-name'
        output:
        type: 'kafka'
        topic: 'persons-with-ml'
        transformation:
        type: 'pickle'
      file_name: 'test.pkl'
    ```


These examples provide a glimpse into the structure and syntax of the Metro.yaml configuration file. Refer to the system's documentation for detailed information on each configuration option and the available configuration settings.

Embrace the power of Infrastructure as Code with the Metro.yaml configuration file, enabling reproducibility, automation, and version control in your system configuration.


With this sample Markdown content, you can explain the purpose and benefits of the Metro.yaml configuration file, as well as provide a few examples to illustrate its structure and syntax. Feel free to customize and expand upon this content based on your specific system's configuration options and requirements.
