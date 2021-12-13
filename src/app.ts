import { createClient } from 'redis';

(async () => {
  // by default the websocket will connect to localhost:6379
  // happens to be the config for our redis container
  const client = createClient();

  // when an error happens, log it to console
  client.on('error', (err) => console.log('Redis Client Error', err));
  
  // measuring connection execution time
  console.time("redis-connection");
  
  // connect to the redis container
  await client.connect();

  // finish connection timer and log
  console.timeEnd("redis-connection");

  // log whether the connection is open
  console.log("Connected: ", client.isOpen);

  //await client.set('key', 'value');
  //const value = await client.get('key');
  //console.log(value);
  setTimeout(() => client.quit(), 5000);
})();