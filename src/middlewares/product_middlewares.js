const { BadRequest } = require("../errors/bad_request_error");
const errorResponse = require("../utils/error_response");

function createProductValidator(req, res, next) {
  if (!req.body.title) {

    return res.status(400).json(
      errorResponse(
        "Title not present in the incoming request",
        new BadRequest("Title")
      )
    );
  }

  if (!req.body.description) {
    return res.status(400).json(
        errorResponse(
          "description not present in the incoming request",
          new BadRequest("description")
        )
      );
  }

  if (!req.body.price) {
    return res.status(400).json(
        errorResponse(
          "price not present in the incoming request",
          new BadRequest("price")
        )
      );
  }

  if (!req.body.image) {
    return res.status(400).json(
        errorResponse(
          "image not present in the incoming request",
          new BadRequest("image")
        )
      );
  }

  if (!req.body.category) {
    return res.status(400).json(
        errorResponse(
          "category not present in the incoming request",
          new BadRequest("category")
        )
      );
  }

  //if everything looks good we call the next middleware
  next();
}

module.exports = {
  createProductValidator,
};
