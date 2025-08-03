import { Request, Response } from '@internal/rest-server';

class AuthHandler {
    static async register(req: Request, res: Response) {
        // TODO: Implement register logic


        const { name, email, password } = req.body;


    }

    static async login(req: Request, res: Response) {
        // TODO: Implement login logic
    }
}

export default AuthHandler;
export { AuthHandler };
