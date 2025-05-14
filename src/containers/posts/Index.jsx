import usePost from "./usePost";

const Posts = () => {
    const { data, loading } = usePost();
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data?.length) {
        return <div>No posts found.</div>;
    }

    return (
        <div>
            {data?.map((post) => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    );
};

export default Posts;
