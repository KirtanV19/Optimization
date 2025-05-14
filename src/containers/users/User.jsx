import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/slices/users.slices";

const User = () => {

    const { data, loading } = useSelector((store) => store.users.users);
    const dispatch = useDispatch();

    console.log(data);

    useEffect(() => {
        dispatch(fetchUsers({})) // getAll(config={})
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>
    }

    if (!data?.length) {
        return <div>No users found.</div>
    }

    return (
        <div>
            {data?.map(user => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    )
};

export default User;
