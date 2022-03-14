const handleErrors = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).json({ statusCode, message });
  // called next() so that eslint doesn't show error no-unused-vars,
  // it shouldn't run after sending json
  next();
};

export default handleErrors;
