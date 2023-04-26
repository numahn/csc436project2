import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlog, deleteBlog } from '../slices/blogs';
import { Link, useParams } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react'

const Blog = () => {

	const { id } = useParams();

	const dispatch = useDispatch();

	const blog = useSelector(state => state.blogs.focus);
	const loading = useSelector(state => state.blogs.loading);
    const error = useSelector(state => state.blogs.error);

	useEffect(() => {
		dispatch(getBlog(id));
	}, [dispatch, getBlog])

	if (!!error) return <pre>{JSON.stringify(error,0,1)}</pre>
    if (!!loading) return <Spinner />;

	return (
		<div
		className='flex flex-col justify-between bg-slate-900 my-8 mx-8 py-4 px-8 rounded-3xl'
		>
			<div className='text-3xl font-bold text-orange-300'>
				{blog.title}
			</div>

			<div className='text-md text-slate-100 overflow-y-auto'>
				{blog.content}
			</div>

			<div className='pt-4'>
				<div className='text-xs text-orange-100'>
					Last Updated: {blog.last_updated}
				</div>

				<div className='text-xs text-orange-100'>
					Originally Published: {blog.originally_published}
				</div>

				<div className='mt-8 my-4'>
					<Link 
					to={`/blog/${id}/edit`}
					className='mr-4 p-2 rounded-2xl bg-yellow-300 hover:bg-yellow-200 active:bg-yellow-100'
					>
						Edit
					</Link>

					<Link
					to='/'
					className='p-2 rounded-2xl bg-red-300 hover:bg-red-200 active:bg-red-100'
					onClick={() => dispatch(deleteBlog(parseInt(id)))}
					>
						Delete
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Blog;