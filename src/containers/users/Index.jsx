import useUsers from "./useUsers";

const Users = () => {
    const { loading, data } = useUsers();
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data?.length) {
        return <div>No posts found.</div>;
    }

    return (
        <div>
            {data?.map((user) => (
                <div
                    style={{ padding: "8px 0", borderBottom: "1px solid #ddd" }}
                    key={user.id}
                >
                    {user.name}
                </div>
            ))}
        </div>
    );
};

export default Users;
