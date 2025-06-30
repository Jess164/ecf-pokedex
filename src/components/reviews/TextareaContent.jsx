/* 
    Display a textarea for to add a review
*/

import { useState, useRef } from 'react'
import { useParams } from "react-router"

import { Plus } from 'lucide-react'
import { createReview } from '../../api/reviews/createReview'

export function TextareaContent(props) {
    const [errors, setErrors] = useState({})
    const formRef = useRef()
    const { id } = useParams()

    async function handleSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.target)   
        const values = Object.fromEntries(formData)
        
        //Validate
        const newErrors = {}    
        if(!values.textarea_review) newErrors.textarea_review = "Required"
        else if(values.textarea_review.length > 100) newErrors.textarea_review = "Maximum 100 characters"

        if (Object.keys(newErrors).length > 0) {            
            setErrors(newErrors)
            return
        }

        const newReview = await createReview(id, values.textarea_review)
        props.onSubmitForm(newReview)

        setTimeout(() => {
            formRef.current.reset()
            setErrors({})
        }, 300)
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            event.preventDefault()
            formRef.current.requestSubmit()
        }
    }

    return <div>
        <form ref={formRef} onSubmit={handleSubmit} className='mb-4'>
            <div className='relative w-full'>
                <label htmlFor="textarea_review" className="sr-only">Add Review</label>
                <textarea onKeyDown={(event) => {handleKeyDown(event)}} type="search" name="textarea_review" id="textarea_review" placeholder="Add a review..." maxLength={100} className="w-full pl-3 pr-4 rounded-2xl focus:outline-1 focus:outline-[#faa946] border border-[#FEC277]" />             
                <button type="submit" className='absolute bottom-2 right-2 bg-[#FEC277] rounded-full cursor-pointer hover:scale-110 transition duration-300 ease-in-out'>
                    <Plus size={20} color='#FFFFFF' />
                </button>
            </div>

            {errors.textarea_review && <span className='text-xs text-red-500'>{errors.textarea_review}</span>}
        </form>
    </div>
}