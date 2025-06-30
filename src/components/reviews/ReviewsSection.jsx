import { TextareaContent } from "./TextareaContent"
import { ReviewsList } from "./ReviewsList"

export function ReviewsSection(props) {
    return <div className="w-full lg:min-w-[30%] lg:max-w-[30%]">
        <h2 className="text-2xl text-center mb-10">Reviews</h2>
        <TextareaContent onSubmitForm={props.onSubmitForm}/>
        <ReviewsList reviews={props.reviews} />
    </div>
}