#!/bin/bash
# filepath: ./docker-cleanup.sh

PATTERN="learn_it_web"

echo "Looking for containers using images matching: $PATTERN"

# Find all containers (running or stopped) using the image
CONTAINER_IDS=$(docker ps -a --filter "ancestor=${PATTERN}" --format "{{.ID}}")
if [ -n "$CONTAINER_IDS" ]; then
  echo "Stopping and removing containers: $CONTAINER_IDS"
  docker stop $CONTAINER_IDS
  docker rm $CONTAINER_IDS
fi

# Remove the image(s)
IMAGE_IDS=$(docker images --format "{{.Repository}}:{{.Tag}} {{.ID}}" | grep "$PATTERN" | awk '{print $2}')
if [ -n "$IMAGE_IDS" ]; then
  echo "Removing images: $IMAGE_IDS"
  docker rmi -f $IMAGE_IDS
fi

# Remove dangling images
DANGLING=$(docker images -f "dangling=true" -q)
if [ -n "$DANGLING" ]; then
  echo "Removing dangling images: $DANGLING"
  docker rmi -f $DANGLING
fi

echo "Cleanup complete."