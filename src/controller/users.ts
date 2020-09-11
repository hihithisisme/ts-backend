import {
  Router, Request, Response,
} from 'express';
import { UserService } from '../service';

export class UserController {
  private router: Router;

  private service: UserService;

  constructor(service: UserService) {
    this.router = Router();
    this.service = service;

    // init the routing on the router
    this.router.get('/test', UserController.testMethod);
  }

  getRouter(): Router {
    return this.router;
  }

  static async testMethod(req: Request, res: Response): Promise<void> {
    res.json({
      hello: 'world',
    });
  }
}
