import Server from 'src/modules/server/index.ts';
import config from 'config/server.ts';
import router from './router.ts';
import errorHandler from 'config/server/error.ts';
const server = new Server(config);

server.initialize();
server.setMainRouter(router);

server.use(errorHandler.logger);
server.use(errorHandler.client);
server.use(errorHandler.final);

export default server;