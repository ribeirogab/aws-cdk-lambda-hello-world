export const handler = async () => {
  return {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({ message: "Hello, World" }),
  };
};
