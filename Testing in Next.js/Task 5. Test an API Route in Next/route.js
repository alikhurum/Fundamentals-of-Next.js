export async function GET() {
  return {
    status: 200,
    json: async () => ({
      message: "Hello API",
    }),
  };
}