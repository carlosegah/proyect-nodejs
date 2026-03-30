export default (request, response, next) => {
  response.status(404).json({
    error: "It hasn't found.",
  });
  next();
};
