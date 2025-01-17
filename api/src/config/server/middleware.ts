
function setGlobalHeaders(req, res, next) {
  res.setHeader('Content-Type', "application/json");
  next()
}
function logRequestData(req, res, next) {
  console.info('User-Agent: ', req.userAgent);
  console.info('Request Body: ', req.body);
  next();
}


const globalMiddleware = [
  // Request Middleware
  logRequestData,
  // Response Middleware
  setGlobalHeaders, 
];

export default globalMiddleware;