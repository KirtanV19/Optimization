import useUsers from "./useUsers";
import {
    deleteUsers,
    createUsers,
    updateUsers,
} from "../../redux/slices/users.slices";
import { useDispatch } from "react-redux";

const Users = () => {
    const dispatch = useDispatch();

    const { loading, data } = useUsers();
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data?.length) {
        return <div>No posts found.</div>;
    }

    const handleDelete = (userId) => {
        dispatch(deleteUsers(userId));
        console.log(userId);
    };

    const handleCreate = () => {
        dispatch(createUsers({ name: "new user" }));
    };

    const handleUpdate = (user) => {
        dispatch(
            updateUsers({ id: user.id, data: { name: `${user.name} Updated` } })
        );
    };

    return (
        <div>
            <button onClick={handleCreate}>Create</button>
            {data?.map((user) => (
                <div
                    style={{
                        display: "flex",
                        gap: 10,
                        padding: "8px 0",
                        borderBottom: "1px solid #ddd",
                        alignItems: "center",
                    }}
                    key={user.id}
                >
                    {user.name}
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                        <button onClick={() => handleUpdate(user)}>Edit</button>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Users;
