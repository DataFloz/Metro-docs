---
sidebar_position: 3
---

# Pipeline

The Pipeline component in the system is an isolated component responsible for transforming raw data and passing it through a chain of transformations. Each pipeline consists of an input, output, and transformer.

__The pipeline consuming the messages from your input, transform the data, and than pass the new data to the output for the next pipeline in the chain.__

## Input Configuration

The input configuration defines the subscription part of the pipeline, specifying where the event data originates from. This can be a specific queue or topic in a message broker, an HTTP endpoint, a database, or any other relevant data source. The input configuration ensures that the pipeline receives the necessary data to perform its transformations.

## Output Configuration

The output configuration defines the publish part of the pipeline, determining where the transformed data should be sent. This can be another queue or topic in a message broker, an HTTP endpoint, a database, or any other appropriate destination. The output configuration ensures that the transformed data reaches the desired location for further processing or consumption.

## Transformer Configuration

The transformer configuration specifies how the raw data should be transformed within the pipeline. It defines the sequence of transformation steps that the data should undergo. Transformations can include data enrichment, filtering, aggregation, mapping, or any other necessary operations to derive meaningful insights or modify the data according to business requirements. Each pipeline can have its unique set of transformers, allowing flexibility and customization.

## Advantages of Pipeline Design

The pipeline design in the system incorporates several beneficial patterns and principles:

### 1. Chain of Responsibility

The chain of responsibility pattern enables a flexible and extensible approach to data transformation. Each transformer in the pipeline acts as a link in the chain, responsible for a specific transformation task. The chain allows for modular and reusable transformers, and it facilitates the addition or modification of transformations without impacting the entire pipeline. This promotes maintainability and scalability.

### 2. Isolation

The isolation of each pipeline provides a clear separation of concerns. Each pipeline operates independently, focusing on its specific transformation logic. This isolation improves code organization, testability, and troubleshooting. It also allows for different pipelines to run concurrently without interference, enhancing performance and efficiency.

### 3. Event-Driven Architecture

The event-driven nature of the pipeline design aligns well with the asynchronous processing of data. Each pipeline reacts to incoming events or data changes, transforming the data accordingly. This event-driven approach promotes scalability, real-time processing, and responsiveness to dynamic data sources. It allows the system to handle high volumes of data efficiently and adapt to changing business needs.

Utilize the power of the Pipeline component, along with the advantages of the chain of responsibility, isolation, and event-driven patterns, to process and transform data effectively. Refer to the system's documentation for detailed instructions on how to configure and manage pipelines to meet your specific business requirements.

## Execution by the Runner

The Runner component plays a crucial role in executing the pipelines. It passes all the necessary configurations to the pipeline component, allowing it to operate effectively. The Runner ensures that the pipelines are initialized with the correct input, output, and transformer configurations, and it manages their execution as part of the overall system operation.

Utilize the power of the Pipeline component to transform raw data and process it according to your business needs. Refer to the system's documentation for detailed instructions on how to configure and manage pipelines effectively.
