import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Pagination from '../components/Pagination'
// import newsDummy from '../utils/dummyNews.json'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { axiosRequest } from '../api';
const News_URL = "news"

const News = () => {
    const { t } = useTranslation();
    const [Data, setData] = useState([]);

    const GetNews = () => {
        axiosRequest.get(News_URL)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                if (status !== 'SUCCESS') {
                    setData(data)
                }
                else {
                    setData(data)
                }
            })
            .catch(error => {
                if (error.code !== "ERR_NETWORK") {
                    // Notify(error.response.data.message, "error");
                }
                else {
                    // Notify(error.message, "error");
                }
            })
    }
    const [currentPage, setCurrentpage] = useState(1)
    const [postsPerPage] = useState(3)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = Data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentpage(pageNumber)

    useEffect(() => {
        GetNews();
    }, [])

    return (
        <>
            <Navbar />
            <div className="flex flex-col px-4 lg:px-40 py-10">
                <h1 className="text-lg lg:text-3xl font-bold">{t("latestNews")}</h1>
                <hr className="mt-3" />
                {
                    currentPosts.map((news, index) => {
                        return (
                            <div key={index} className="flex flex-col lg:flex-row py-4 lg:py-10 ">
                                <div className="flex flex-col lg:pr-10 lg:w-1/2">
                                    
                                    <img src={news.image} className="w-full lg:w-[700px] lg:h-[400px] rounded-sm shadow-xl" alt='newsImage' />
                                </div>
                                <div className="flex flex-col lg:w-1/2">
                                <h1 className="text-md lg:text-2xl font-bold py-2">{news.title}</h1>
                                    <p className="mt-3 lg:mt-10 mb-3 w-full text-md lg:text-lg">{news.description}</p>
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
                totalPosts={Data.length}
                paginate={paginate}
            />
        </>
    )
}

export default News
