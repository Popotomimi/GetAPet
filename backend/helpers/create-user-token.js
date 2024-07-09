const jwt = require("jsonwebtoken");

const createUserToken = async (user, req, res) => {
  // Create a Token
  const token = jwt.sign(
    {
      name: user.name,
      id: user._id,
    },
    "nossosecret"
  );

  // return Token
  res.status(200).json({
    message: "Você está autenticado",
    token: token,
    userId: user._id,
  });
};

module.exports = createUserToken;
