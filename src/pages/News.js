import React from 'react'
import Navbar from '../components/Navbar'
import newsDummy from '../utils/dummyNews.json'

const News = () => {
    console.log("dummy data",newsDummy)
    return (
        <>
            <Navbar />
            <div className="flex flex-col px-40 py-10">
                {
                    newsDummy.map((news, index) => {
                        return(
                            <div key={index} className="flex flex-row py-10 justify-center">
                                <div className="flex flex-col pr-10">
                                <img src={news.img} />
                                <span className="mt-2">Read more ...</span>
                                </div>
                                <div className="flex flex-col">
                                    <h1>Description</h1>
                                    <p>{news.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default News
