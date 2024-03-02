const testController = (req, res) => {
    res.status(200).send({
      message: "Welcome Nikunt",
      success: true,
    });
  };
  
  module.exports = { testController };