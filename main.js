import "dotenv/config";
import { createCountersService } from "./services/counters.js";
import { createImagesService } from "./services/images.js";
import { createTopicsService } from "./services/topics.js";
import { MongoClient } from "mongodb";

import { createApp } from "./app.js";
import { readJSONFileSync } from "./json.js";

async function main() {
  try {
    const client = await MongoClient.connect(
      process.env.MONGODB_CONNECTION_STRING,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    const db = client.db();

    const counters = db.collection("counters");
    const images = readJSONFileSync("./data/images.json");
    const topics = readJSONFileSync("./data/topics.json");

    const countersService = createCountersService(counters);
    const imagesService = createImagesService(images);
    const topicsService = createTopicsService(topics);

    createApp({ countersService, imagesService, topicsService });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

main();
