import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from '../slices/blogs';
import { Spinner } from '@chakra-ui/react'

const Home = () => {
    const dispatch = useDispatch();

    const blogs = useSelector(state => state.blogs.data);
    const loading = useSelector(state => state.blogs.loading);
    const error = useSelector(state => state.blogs.error);

    useEffect(() => {
        dispatch(getAllBlogs());
    }, [dispatch, getAllBlogs]);

    if (!!error) return <pre>{JSON.stringify(error,0,1)}</pre>
    if (!!loading) return <Spinner />;

    return (
        <div className='h-[93%] mx-auto'>
            <div className='grid grid-cols-3 mx-auto overflow-y-auto'>
                {blogs.map(blog => {
                return (
                    <div key={blog.id}>
                        <Link to={`/blog/${blog.id}`}>
                            <div
                            className='flex flex-col justify-between bg-slate-900 my-8 mx-8 py-4 px-8 rounded-3xl hover:bg-slate-800 active:bg-cyan-950'
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
                                </div>
                            </div>   
                        </Link>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Home;