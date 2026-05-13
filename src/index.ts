import { Hono } from 'hono';
import { cache } from 'hono/cache';

import api from './routes/api';
import image from './routes/image';
import index from './routes/index';

const app = new Hono();

app.use(
  cache({
    cacheName: 'default',
    cacheControl: 'no-cache',
  }),
);

index(app);
api(app);
image(app);

export default app;
