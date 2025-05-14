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
                <div
                    style={{ padding: "8px 0", borderBottom: "1px solid #ddd" }}
                    key={post.id}
                >
                    {post.title}
                </div>
            ))}
        </div>
    );
};

export default Posts;
