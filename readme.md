
# Project Documentation

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Scope](#scrope)
- [Architecture](#Architecture)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a showcase of my skills and understanding in full stack development. By incorporating a comprehensive stack, including front-end, back-end, and database technologies, this repository highlights my proficiency in building robust and functional applications. Explore the codebase, learn from the implementation details, and get inspired for your own projects.


## Scope of the Project

### Front-End Implementation
- React.js

### Back-End Implementation
- Node.js
- Express
- Sqlite

### Technology Stack
- Uses AWS
- Uses Docker

### Development Workflow
- Uses GitHub Actions (Continuous integration) 

### Project Management
- Write Documentation
- Version Control
  - Pull Requests
  - Raising Issues
  - Branching


## Installation

Needs dependencies installed (axios in the front end, sqlite3, express, and body-parser in the back end).


To set up the project, ensure that the required dependencies are installed:

Run the back end server by executing node server.js 
Ensure the back end server is running on http://localhost:3000.
### Running the Back-end Server

```bash
npm start 
```
npm start 

### Running the Back-end Server
Execute the following command to run the back-end server:
```bash
node server.js
```

How to build and run the react docker image locally: 

```bash
docker build -t my-react-app:latest . 
docker run -d -p 3000:3000 my-react-app:latest
```

Go to port http://localhost:3000/


## Architecture

Containerized architecture  

The web application utilizes a containerized architecture, where the front end and back end components are encapsulated in separate containers. This design choice was made to enhance scalability and facilitate a streamlined Continuous Integration/Continuous Deployment (CI/CD) process, resulting in quicker and more dependable deployments.

Front-end Container:

This container holds the front-end part of the web application, built using React.js or similar technology. It is responsible for handling user interfaces and interactions.
The Front-end Container communicates with the Back-end Container through HTTP requests, enabling a clear separation of concerns and promoting a well-defined API design for the backend.

Back-end Container:

The Back-end Container contains the back-end logic, developed using Node.js or a similar server-side technology. It is in charge of handling business logic, database operations, and other backend functionalities.
The Back-end Container exposes well-defined APIs that the Fro

HTTP Communication:

The decision to establish communication between the Front-end and Back-end Containers via HTTP requests was made to foster a clear and standardized API design for the backend. Utilizing HTTP requests encourages the definition of well-structured APIs, making versioning, maintenance, and extensibility of the backend functionalities more manageable.nt-end Container can interact with through HTTP requests.

CI/CD

GitHub Actions is used as the Continuous Integration/Continuous Deployment (CI/CD) tool for the web application. This automation streamlines the development and deployment process, ensuring that each code change goes through a standardized build and deployment pipeline.

This design ensures a reliable, scalable, and standardized deployment solution. The combination of GitHub Actions, Docker, and Azure services makes for an efficient and developer-friendly CI/CD pipeline.

ACR

When the web application's front-end and back-end components are containerized using Docker, the next step is to store these container images in a container registry. In this case, the web application uses the Azure Container Registry (ACR) to accomplish this.

Azure Container Registry (ACR) is a private container registry provided by Microsoft Azure. It allows users to securely store and manage Docker container images. Think of ACR as a centralized repository where all the Docker images used by the application are stored. These images can be pulled and deployed on various Azure services or Kubernetes clusters.

Kubernetes: 

The decision to include Kubernetes in the web application was driven by the desire to gain valuable hands-on experience with this powerful container orchestration platform. While Kubernetes may not be strictly necessary for the application's current scale and complexity, its inclusion offers several significant benefits:

Component Diagram: 


## Usage
Explain how to use your project. Provide code snippets and examples that demonstrate the main functionalities. Include any command-line instructions or configuration options that users need to know. You can also include screenshots or diagrams to illustrate the usage.

## Configuration
If your project requires configuration, provide instructions on how to configure it. Explain the purpose of each configuration option and how users can modify them. Include code samples or configuration file examples if applicable.

## API Reference
If your project has an API, provide documentation for each endpoint or major functionality. Include the URL, method, description, required parameters, and any additional information. You can use code samples or cURL examples to demonstrate API usage.

## Contributing
Provide guidelines on how users can contribute to your project. Include information on how to submit bug reports, feature requests, or pull requests. Specify any coding standards or conventions to follow.

## License

MIT License

Copyright (c) 2023 [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

