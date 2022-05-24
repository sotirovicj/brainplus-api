export function createImagesService(images) {
  return {
    getImagesByTopic,
  };

  async function getImagesByTopic(topicId) {
    return images.filter((image) => image.topicId === topicId);
  }
}
