import { Route, Request, Response, HttpMethod } from './types';

type RouteKey = `${Route['method']} ${Route['path']}`;

class Router {
    private routes: Map<RouteKey, Route> = new Map();

    constructor(routes: Array<Route>){
        for(const route of routes){
            this.routes.set(this.buildRouteKey(route.method, route.path), route)
        }
    }

    private buildRouteKey(method: HttpMethod, path: string): RouteKey {
        return `${method} ${path}`
    }

    private sendNotFoundError(req: Request, res: Response){
        res.writeHead(404, { 'Content-Type': 'application/json' })

        res.end(JSON.stringify({ error: 'Route not found' }))
    }

    private sendInternalServerError(req: Request, res: Response){
        res.writeHead(500, { 'Content-Type': 'application/json' })

        res.end(JSON.stringify({ error: 'Internal server error' }))
    }

    private sendInvalidHTTPMethod(req: Request, res: Response){
        res.writeHead(500, { 'Content-Type': 'application/json' })

        res.end(JSON.stringify({ error: 'Invalid HTTP Method' }))
    }

    private isValidHTTPMethod(method: string): method is HttpMethod {
        return ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'].includes(method)
    }

    public printRoutes(){
        for(const route of this.routes.values()){
            console.log(`${route.method} - ${route.path}`)
        }
    }

    public async handleRequest(req: Request, res: Response){
        const { method, url: path } = req

        if(!method || !path){
            return this.sendNotFoundError(req, res)
        }

        if(!this.isValidHTTPMethod(method)){
            return this.sendInvalidHTTPMethod(req, res)
        }

        const routeKey = this.buildRouteKey(method, path)

        const route = this.routes.get(routeKey)

        if(!route){
            return this.sendNotFoundError(req, res)
        }

        try {
            const result = await route.handler(req, res)

            res.writeHead(200, { 'Content-Type': 'application/json' })

            res.end(JSON.stringify(result))
        } catch (error) {
            console.error(error)

            return this.sendInternalServerError(req, res)
        }
    }
}

export default Router;
export { Router }