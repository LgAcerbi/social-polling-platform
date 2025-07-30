import { Server } from 'http';

import type { RestServerOptions } from './types/rest-server';
import { Router } from './router'

// TODO: Routes
// TODO: Error Handling
// TODO: Logging
// TODO: Compression
// TODO: Metrics

class RestServer {
    public readonly httpServer: Server;
    public readonly options: RestServerOptions;
    public readonly router: Router

    constructor(options: RestServerOptions) {
        this.httpServer = new Server(options);
        this.options = options;
        this.router = new Router(options.routes)
    }

    start(port?: number) {
        const serverPort = port || this.options.port;

        this.httpServer.listen(serverPort, () => {
            console.log(`Server is running on port ${serverPort}`);
        });

        this.router.printRoutes()
    }

    stop() {
        this.httpServer.close();
    }
}

export default RestServer;
export { RestServer };