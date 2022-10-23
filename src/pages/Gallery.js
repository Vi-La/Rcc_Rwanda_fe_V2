import React, { useEffect, useState } from 'react'
import { Zoom } from 'react-reveal'
import { GalleryData } from '../dummyData/Data'
import Navbar from '../components/Navbar'
import '../assets/style/galley.css'
import { axiosRequest } from '../api'
import Pagination from '../components/Pagination'
const gallery_URL = "gallery"

const Gallery = () => {

    const [Data, setData] = useState([]);

    const Getgallery = () => {
        axiosRequest.get(gallery_URL)
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
    const [postsPerPage] = useState(16)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = Data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentpage(pageNumber)

    useEffect(() => {
        Getgallery();
    }, [])

    return (
        <>
            <Navbar />
            <div className="flex flex-wrap items-center justify-center">
                <div className="unslate_co--section">
                    <div className="container">
                        <div className="relative"><div className="loader-portfolio-wrap"><div className="loader-portfolio"></div></div> </div>
                        <div id="portfolio-single-holder"></div>
                        <div className="portfolio-wrapper xl:px-24 px-6">
                            <div className="flex align-items-center mb-4 gsap-reveal gsap-reveal-filter">
                                <Zoom>
                                    <h2 className="mr-auto heading-h2"><span className="gsap-reveal text-black font-bold font-lexend">Our Gallery</span></h2>
                                </Zoom>
                            </div>
                            <div id="posts" className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-3 md:gap-0">
                                {currentPosts.map((item) => (
                                    <div className="item web branding isotope-mb-2" key={item._id}>
                                        <div className="portfolio-item md:p-2 ajax-load-page isotope-item gsap-reveal-img" data-id="1">
                                            <div className="overlay">
                                                <span className="wrap-icon icon-link2"></span>
                                                <div className="portfolio-item-content">
                                                    <a href={item.image} download className='cursor-pointer'><h3>{item.name}</h3></a>
                                                    <p>{item.date}</p>
                                                </div>
                                            </div>
                                            <img
                                                src={item.image}
                                                className="lazyload object-cover w-[400px] h-[100px] md:w-[100%] sm:h-[200px] xl:h-[300px]"
                                                alt="Images"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={Data.length}
                paginate={paginate}
            />
        </>
    )
}

export default Gallery
