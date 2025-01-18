#!/bin/bash
set -e

# Pull the Docker image from Docker Hub
docker pull amitabhdevops/react-app:v1
# Run the Docker image as a container
docker run -d -p 80:80 amitabhdevops/react-app:v1
