import Navbar from "../components/Navbar";
import { useParams } from "react-router";
import newsDummy from '../utils/dummyNews.json'

const NewsMore = () => {
    const { id } = useParams();    
    const news = JSON.parse(JSON.stringify(newsDummy))
    const currentPost = news.filter((post) => post.id === parseInt(id));
    return ( 
        <main>
            <Navbar />
               {currentPost.map((post, index) => (
                    <div index={index} className="flex flex-col px-4 lg:px-40 py-10">
                        <h1 className="font-bold text-md lg:text-3xl my 2 lg:my-10 py-2 lg:py-2">{post.title}</h1>
                        <hr className="mt-3"/>
                        <img src={post.img} alt="img" className="w-full lg:w-full lg:h-10/12" />
                        <p className="w-full lg:w-10/12 text-md lg:text-lg py-2 lg:py-4">{post.description}</p>
                    </div>
               ))}
        </main>
    )
}
export default NewsMore;