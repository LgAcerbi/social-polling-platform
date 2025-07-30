import { IncomingMessage, ServerOptions, ServerResponse } from "http";

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';

interface Route<T = unknown> {
    path: string;
    method: HttpMethod;
    handler: (req: IncomingMessage, res: ServerResponse) => T | Promise<T>;
}

interface RestServerOptions extends ServerOptions {
   port?: number;
   host?: string;
   routes: Route[];
}

export type { Route, RestServerOptions, HttpMethod };