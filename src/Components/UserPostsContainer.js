import {posts} from "./Posts";
import PostComponents from "./PostComponents";
import {useEffect, useState} from "react";
// eslint-disable-next-line react-hooks/rules-of-hooks
const [errors, setErrors] = useState()
export const UserPostsContainer = () => {
    const [users, setUsers] = useState([])

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((users) => setUsers(users))
            .catch((errors) => console.log(errors.response))
            .finally(() => console.log('Promise finished'))
    }, [])


    return (
        <>
        {posts.map((user, id) =>
            <PostComponents
                key={id}
                user={user}
            />
        )}
    </>)
}
