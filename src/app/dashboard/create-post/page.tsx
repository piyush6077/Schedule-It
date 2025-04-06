"use client"
import { Button } from '@/Components/ui/button'
import { Input } from '@/Components/ui/input'
import { Textarea } from '@/Components/ui/textarea'
import React , { useState }from 'react'

type PostSchema = {
    title: string,
    text?: string,
    image?: string,
    video?: string,
    scheduleAt?: Date | null
}

const CreatePostPage = (props: PostSchema) => {
  const [postDetails , setPostDetails] = useState<PostSchema>({
    title: '',
    text: '',
    image: '',
    video: '',
    scheduleAt: null
  })

  const handleChange = (field: keyof PostSchema, value: string | Date | null) => {
    setPostDetails(prev => ({...prev, [field]: value}))
    postDetails = ""
  }
   
  return (
    <div className='flex justify-center w-[100vw] min-h-[100vh] items-center'> 
        <form 
          className='w-[500px] flex flex-col gap-y-2'
          onSubmit={(e)=>{e.preventDefault(),console.log(postDetails)}}>
            <legend className='flex w-full justify-center font-bold text-3xl mb-5'>
                Create Post
            </legend>
   
            <Textarea 
              placeholder='Title' 
              value={postDetails.title}
              onChange={(e)=>setPostDetails({...postDetails , title : e.target.value})} 
            />


            <Input 
              type="text" 
              placeholder='Text' 
              onChange={e => handleChange("text" , e.target.value)} 
            />

            <Input 
              type="text" 
              placeholder='Image' 
              onChange={e => handleChange("image" , e.target.value)} 
            />
            <Input 
              type="text" 
              placeholder='Video' 
              onChange={e => handleChange("video", e.target.value)} 
            />

            <label className="block font-medium">Schedule At:</label>
            <Input
              type="datetime-local"
              value={postDetails.scheduleAt ? postDetails.scheduleAt.toISOString().slice(0 , 16) : " "}
              onChange={e => handleChange("scheduleAt" , e.target.value ? new Date(e.target.value) : null)}
            />
            <Button type='submit'>Create Post</Button>
        </form>
    </div>
  )
}

export default CreatePostPage