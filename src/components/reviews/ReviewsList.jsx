import { ReviewPost } from "./ReviewPost"

export function ReviewsList(props) {
    return <div className="flex flex-col gap-4 items-center mb-10">
        {
            props.reviews.map((review) => {
                return <ReviewPost key={review.id} review={review}/>
            })
        }
    </div>
}