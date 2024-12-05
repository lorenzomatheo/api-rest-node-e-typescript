import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Olá, DEV!');
});

const server = express();
server.use(router);

export { server };
