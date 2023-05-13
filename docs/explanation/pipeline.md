---
sidebar_position: 3
---

# Pipeline

### Responsiblity
Each pipeline resposible for some kind of transformation.
Every pipeline contains three parts:
- input
- transformer
- output

__The pipeline consuming the messages from your input, transform the data, and than pass the new data to the output for the next pipeline in the chain.__

### How to run it
The runner resposible of running the pipelines the he is the one who pass the pipeline all the neccesery enviroment variables.

### How to debug it
TODO

### Features
- consuming data in streaming
- running transformation logic
- produce the new data

### Some Ideas
- logs
- metrics
- error handling