---
sidebar_position: 2
---

# Runner

### Responsiblity
Resposible for running your pipelines and passing each pipeline his enviroment variables.
The runner contain the Metro.yml file which contain your chain overall configuration.

### How to run it
There are several ways to run the runnner.
You can use compose file of the project (it will start the runner container)
you can just build the runner image and run it using its docker file
or just run its main.py file.

### How to debug it
As you debug every python code.
The folder contains vscode launch.json file with the debug configuration included.
Also you have the option to run the project in devcotainer, the configuration already included as well, for fast enviroment setup.

### Features
- Running the pipelines using docker containers) 
- Running the pipelines with k8s configuration.

### Some Ideas
- Running the pipeline on different clouds simultaneously.
