import { UserRepository } from "../repository";

export class UserService {
  private repo: UserRepository
  constructor(repo: UserRepository) {
    this.repo = repo;
  }
}
