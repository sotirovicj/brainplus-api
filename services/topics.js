export function createTopicsService(topics) {
  return {
    getTopics,
  };

  async function getTopics() {
    return topics;
  }
}
