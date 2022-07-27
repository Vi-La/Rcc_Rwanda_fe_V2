import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Pagination from '../components/Pagination'
import newsDummy from '../utils/dummyNews.json'

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
            <div className="flex flex-col px-40 py-10">
                <h1 className="text-3xl text-bold ">Latest news</h1>
                <hr className="mt-3"/>
                {
                    currentPosts.map((news, index) => {
                        return(
                            <div key={index} className="flex flex-row py-10">
                                <div className="flex flex-col pr-10">
                                    <img src={news.img} className="w-72 rounded-sm shadow-xl" />
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-2xl text-bold ">{news.title}</h1>
                                    <p className="mt-3 mb-3 w-1/2 text-md">{news.description}</p>
                                    <a href="#"><span className="cursor-pointer hover:text-blue-800 text-xl">Read more ...</span></a>
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
