import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Pagination from '../components/Pagination'
import newsDummy from '../utils/dummyNews.json'
import { Link } from 'react-router-dom';

const News = () => {
    const [currentPage, setCurrentpage] = useState(1)
    const [postsPerPage] = useState(3)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = newsDummy.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentpage(pageNumber)
    return (
        <>
            <Navbar />
            <div className="flex flex-col px-4 lg:px-40 py-10">
                <h1 className="text-lg lg:text-3xl font-bold">Latest news</h1>
                <hr className="mt-3"/>
                {
                    currentPosts.map((news, index) => {
                        return(
                            <div key={index} className="flex flex-col lg:flex-row py-4 lg:py-10 ">
                                <div className="flex flex-col lg:pr-10 lg:w-1/2">
                                    <h1 className="text-md lg:text-2xl font-bold py-2">{news.title}</h1>
                                    <img src={news.img} className="w-full lg:w-full rounded-sm shadow-xl" />
                                </div>
                                <div className="flex flex-col lg:w-1/2">
                                    <p className="mt-3 lg:mt-10 mb-3 w-full text-md lg:text-lg">{news.short_description}</p>
                                        <Link to={`/news/${news.id}`}
                                        className="cursor-pointer hover:text-blue-800 text-xl">
                                        Read more ...
                                        </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={newsDummy.length}
                paginate={paginate}
            />
        </>
    )
}

export default News
