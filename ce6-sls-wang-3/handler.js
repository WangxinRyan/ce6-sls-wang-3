exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
      message: "Go Serverless v4! Your function executed successfully!",
      className: process.env.Class_Name
    },
    null,
    2
  ),
  };
};
