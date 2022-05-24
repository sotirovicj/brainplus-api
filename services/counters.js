export function createCountersService(counters) {
  return {
    incrementCounter,
  };

  async function incrementCounter(counterId) {
    counters.findOneAndUpdate(
      { counterId },
      { $inc: { value: 1 } },
      { upsert: true }
    );
  }
}
