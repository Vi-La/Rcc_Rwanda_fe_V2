import React from "react";
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
      }
    return ( 
        <div className="w-full flex items-center justify-center pb-10">
            <div className="p-1 px-4 shadow flex mt-3">
                {pageNumbers.map( number => (
                <div key={number} onClick={() => paginate(number)} className="text-black text-2xl hover:flex hover:items-center hover:justify-center hover:rounded-md cursor-pointer hover:bg-primary-400 hover:w-8 hover:text-gray-400 px-4">{number}</div>
                ))}
            </div>
        </div>
     );
}
export default Pagination;
