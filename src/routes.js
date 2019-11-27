import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json('API Online');
});

export default routes;
