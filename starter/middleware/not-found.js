const notFound = (req, res) => {
  res.status(404).send("Hatalı url!");
};
module.exports = notFound;
