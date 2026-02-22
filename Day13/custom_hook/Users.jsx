import useFetch from "./useFetch";

function Users() {
  const { data, loading, error } =
    useFetch("https://api.github.com/users");

  if (loading) return <p className="status">Loading...</p>;
  if (error) return <p className="status">{error}</p>;

  return (
    <div className="container">
      <h2 className="title">GitHub Users</h2>

      {data?.map((user) => (
        <div className="user" key={user.id}>
          {user.login}
        </div>
      ))}
    </div>
  );
}

export default Users;
