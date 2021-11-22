import { User } from "../Domain/User";
import { UserRepository } from "../Domain/UserRepository";

export class UserCreator {
    private repository: UserRepository
    constructor(repository: UserRepository) {
        this.repository = repository
    }

    async create(phone: string): Promise<User> {
        const user = new User(phone)
        return this.repository.save(user)
    }
}