import { Route } from './types/rest-server';

type RouteKey = `${Route['method']} ${Route['path']}`;

class Router {
    private routes: Map<RouteKey, Route> = new Map();

    constructor(routes: Array<Route>){
        for(const route of routes){
            this.routes.set(this.buildRouteKey(route), route)
        }
    }

    private buildRouteKey(route: Route): RouteKey {
        return `${route.method} ${route.path}`
    }

    public printRoutes(){
        for(const route of this.routes.values()){
            console.log(`${route.method} - ${route.path}`)
        }
    }
}

export default Router;
export { Router }