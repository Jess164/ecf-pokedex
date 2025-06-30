export function ReviewPost(props) {
    return <article className="w-full p-2 border border-gray-800 rounded-xl">
        <p>{props.review.content}</p>
        <p className="font-semibold">Posted by: {props.review.author}</p>
    </article>
}