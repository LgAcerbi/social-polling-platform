import { AuthHandler } from "../handlers/auth.handler";

export const authRoutes = [
    {
        path: '/auth/register',
        method: 'POST',
        handler: AuthHandler.register
    },
    {
        path: '/auth/login',
        method: 'POST',
        handler: AuthHandler.login
    }
]