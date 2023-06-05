---
sidebar_position: 2
---

# Running

### Running it locally
The available options to run the project locally are:

1. **Using the Docker Compose file**: This option provides a convenient way to run the entire project with all its components. Simply use the following command to start the containers using Docker Compose:
```docker-compose up```

2. **Using the dev container configuration**: If you prefer a more customizable setup, you can use the dev container configuration. This option requires the VS Code Remote - Containers extension. Follow these steps:
- Install the VS Code Remote - Containers extension.
- Open the project folder in Visual Studio Code.
- When prompted, click on the "Reopen in Container" button.
- Once inside the dev container, start the runner application manually using the appropriate command.

3. **Running specific parts with Docker containers**: If you only need to run specific parts of the project, you can utilize Docker containers. Start only the necessary containers and exclude the ones you don't require for your specific use case. Use the relevant Docker commands to start the desired containers.

4. **Running the runner and client locally**: For even more flexibility, you can choose to run the runner and the client directly on your local machine. Ensure you have the necessary dependencies installed and use the appropriate commands to start the runner and client components.

Choose the option that best suits your needs and follow the provided instructions to run the project locally.


### Debuging 

### Rollout your changes

### Running in production / cloud enviroment 