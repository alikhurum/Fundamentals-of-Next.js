// app/profile/page.js
export default async function Profile() {
  console.log("Rendering profile on server");

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/1",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }

  const user = await res.json();

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {user.name}!</p>
    </div>
  );


export default async function Profile() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/1",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }

  const user = await res.json();

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {user.name}!</p>
    </div>
  );
}