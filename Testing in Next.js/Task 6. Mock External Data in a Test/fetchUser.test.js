import { fetchUser } from "../utils/fetchUser";

global.fetch = jest.fn();

test("fetches user data using a mocked API", async () => {
  fetch.mockResolvedValue({
    json: async () => ({
      id: 1,
      name: "John Doe",
    }),
  });

  const user = await fetchUser();

  expect(user).toEqual({
    id: 1,
    name: "John Doe",
  });

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    "https://jsonplaceholder.typicode.com/users/1"
  );
});