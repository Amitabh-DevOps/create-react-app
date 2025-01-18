#!/bin/bash
set -e

# Check if the Docker image exists locally
if ! docker images | grep -q "amitabhdevops/react-app.*v1"; then
  echo "Image not found locally. Pulling from Docker Hub..."
  docker pull amitabhdevops/react-app:v1
else
  echo "Image already exists locally. Skipping pull."
fi

# Run the Docker image as a container
docker run -d -p 80:80 amitabhdevops/react-app:v1

