import express from "express";

export function createApp({ countersService, imagesService, topicsService }) {
  const app = express();

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  });

  app.get("/topics/:topicId/images", async (req, res, next) => {
    try {
      const { topicId } = req.params;
      const images = await imagesService.getImagesByTopic(topicId);

      res.json(images);
    } catch (err) {
      next(err);
    }
  });

  app.get("/topics", async (req, res, next) => {
    try {
      const topics = await topicsService.getTopics();

      res.json(topics);
    } catch (err) {
      next(err);
    }
  });

  app.post("/counters/:counterId", async (req, res, next) => {
    try {
      const { counterId } = req.params;
      await countersService.incrementCounter(counterId);

      res.end();
    } catch (err) {
      next(err);
    }
  });

  app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
  });
}
