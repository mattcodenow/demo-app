import { Redis } from "./lib";

(async () => {
  const redis = new Redis({ host: "localhost", port: 6379 });
  await redis.connect();
  console.log("Redis Connected: ", redis.client.isOpen);
})();