---
sidebar_position: 3
---

# Creating Your First Pipeline

To create your first pipeline in the system, follow these steps:

1. Open the `/runner/cfg/metro.yaml` file in your preferred text editor. This file contains the general configuration settings for the system.

2. Review the `running_infrastructure` section in the Metro.yaml file. This section allows you to specify the infrastructure where your pipelines will run. Adjust the properties according to your setup, such as containerization settings or Kubernetes cluster details. Ensure that the infrastructure configuration aligns with your deployment environment.

3. Edit the `connector` properties in the Metro.yaml file. This section defines the connection details for the message broker or data source from which your pipeline will receive data. Update the properties such as `host`, `port`, `username`, `password`, or any other relevant configuration settings based on your specific data source.

4. Locate the `pipelines` array in the Metro.yaml file. This array holds the configurations for all the pipelines in the system. Add a new entry to the `pipelines` array for your new pipeline.

5. Configure the new pipeline by setting the necessary properties for the `input`, `output`, and `transformers`.

   - **Input Configuration**: Specify the source of the raw data for your pipeline. This can be a queue, topic, HTTP endpoint, or any other data source supported by the system. Adjust the input properties, such as the queue name or endpoint URL, to match your data source.

   - **Output Configuration**: Define where the transformed data should be published or sent. This can be another queue, topic, HTTP endpoint, or any relevant destination. Update the output properties according to your desired output location.

   - **Transformer Configuration**: Specify the transformation steps to be applied to the raw data. Define the sequence of transformers and their respective configurations to achieve the desired data transformation logic. Customize the transformers based on your specific requirements, such as data enrichment, mapping, filtering, or any other necessary operations.

6. Save the Metro.yaml file with your changes.

7. Optionally, if you want to change the configuration in runtime, you can utilize the rollout API route provided by the system. Use the appropriate API call to apply the updated configuration without the need to restart the system. This allows you to make dynamic changes to the pipeline configuration while the system is running.

8. Run the system using the provided commands or scripts. The Runner component will read the updated Metro.yaml configuration and initiate your new pipeline with the specified input, output, and transformation configurations.

Congratulations! You have successfully created your first pipeline in the system. Monitor the system logs or use the provided client interface to observe the data flow, transformation process, and any potential errors.

Refer to the system's documentation for detailed information on the available configuration options, supported input/output types, transformer configurations, and the rollout API route for runtime configuration changes.
