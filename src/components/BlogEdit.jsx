import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getBlog, updateBlog } from '../slices/blogs';
import { useParams, useNavigate } from 'react-router-dom';

const BlogEdit = () => {

    const { id } = useParams();

    const dispatch = useDispatch();
	const navigate = useNavigate();

    const blog = useSelector(state => state.blogs.focus);
	const loading = useSelector(state => state.blogs.loading);
    const error = useSelector(state => state.blogs.error);

    useEffect(() => {
      dispatch(getBlog(id));
    }, [dispatch, getBlog])

    if (!!error) return <pre>{JSON.stringify(error,0,1)}</pre>

    const [title, setTitle] = useState(blog.title)
    const [content, setContent] = useState(blog.content)

    return (
        <div>
            <div className='bg-slate-900 w-[40%] mx-auto my-32 rounded-3xl'>
                <form onSubmit={() => {dispatch(updateBlog({id, title, content})); navigate(`/blog/${id}`)}} className='px-8 w-full flex flex-col gap-8 items-center'>
                    <div className='text-3xl font-semibold text-orange-300 pt-8'>
                        Edit blog
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

                    <button type='submit' className='mb-8 text-xl bg-slate-700 text-orange-300 h-12 w-24 rounded-2xl hover:bg-slate-600 active:bg-slate-500'>Edit</button>
                </form>
            </div>
        </div>
    )
}

export default BlogEdit;