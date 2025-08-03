import { RestServer } from '@internal/rest-server';

const { PORT } = process.env;

if(!PORT){
    throw new Error('PORT is not set');
}

const server = new RestServer({
    port: Number(PORT),
    host: 'localhost',
    routes: [
        {
            path: '/',
            method: 'GET',
            handler: () => 'Hello World'
        },
    ]
})

server.start()
