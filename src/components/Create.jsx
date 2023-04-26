import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { createBlog } from '../slices/blogs';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <div className='bg-slate-900 w-[40%] mx-auto my-32 rounded-3xl'>
                <form onSubmit={() => {dispatch(createBlog({title, content})); navigate('/')}} className='px-8 w-full flex flex-col gap-8 items-center'>
                    <div className='text-3xl font-semibold text-orange-300 pt-8'>
                        Create a blog
                    </div>

                    <input 
                    type='text'
                    value={title}
                    required
                    placeholder='Title'
                    onChange={(e) => setTitle(e.target.value)}
                    className='w-full h-12 px-4 rounded-2xl'
                    />

                    <textarea 
                    type='text'
                    rows='10'
                    required
                    placeholder='Content'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className='w-full px-4 py-4 resize-none rounded-2xl'
                    />

                    <button type='submit' className='mb-8 text-xl bg-slate-700 text-orange-300 h-12 w-24 rounded-2xl hover:bg-slate-600 active:bg-slate-500'>Create</button>

                </form>
            </div>
        </div>
    )
}

export default Create;