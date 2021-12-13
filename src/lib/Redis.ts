import { createClient } from 'redis';

class Redis {
  public host: string;
  public port: number;
  public client: ReturnType<typeof createClient>;

  constructor(opts: Redis.Options) {
    this.host = opts.host;
    this.port = opts.port;
    this.client = createClient({
      url: `redis://${opts.host}:${opts.port}`
    });
  }

  public async connect() {
    try {
      await this.client.connect();
    } catch (err) {
      console.log("Redis Connect Error: ", err);
      throw err;
    }
  }

  public async disconnect() {
    try {
      await this.client.disconnect();
    } catch (err) {
      console.log("Redis Disconnect Error: ", err);
      throw err;
    }
  }

  public async save(key: string, value: any) {
    try {
      const result = await this.client.set(key, value);
      return result;
    } catch (err) {
      console.log("Redis Save Error: ", err);
      throw err;
    }
  }

  public async get(key: string) {
    try {
      const result = await this.client.get(key);
      return result;
    } catch (err) {
      console.log("Redis Get Error: ", err);
      throw err;
    }
  }

}

namespace Redis {
  export interface Options {
    host: string;
    port: number;
  }
}

export default Redis;
