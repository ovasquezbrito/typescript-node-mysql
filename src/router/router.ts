import { Router, Request, Response } from 'express';

const router = Router();

router.get('/heroes', (req: Request, res: Response) => {
  res.json({
    ok: true,
    mensaje: 'Todo marcha bien'
  })
})

export default router;