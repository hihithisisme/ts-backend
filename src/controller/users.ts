import { Router, Request, Response, NextFunction } from 'express';
import { UserService } from '../service';

export class UserController {
  private router: Router;
  private service: UserService

  constructor(service: UserService) {
    this.router = Router();
    this.service = service;

    // init the routing on the router
    this.router.get('/test', this.testMethod.bind(this));
  }

  getRouter(): Router {
    return this.router;
  }

  async testMethod(req: Request, res: Response, next: NextFunction) {
    res.json({
      hello: 'world',
    })
  }
}