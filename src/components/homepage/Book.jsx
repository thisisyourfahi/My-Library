import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Navigate, useNavigate } from 'react-router';

const Book = ({ book }) => {
    const { author, bookName, category, image, rating, tags } = book;
    // console.log(author, bookName, category, image, rating)
    // console.log(book);
    const navigate = useNavigate();

    const handleBookDetails = () => {
        navigate(`/bookDetails/${book.bookId}`)
    }
    return (
        <div onClick={() => handleBookDetails()} className="card bg-base-100 border border-gray-400 hover:cursor-pointer hover:shadow-xl">
            <figure className='p-4'>
                <img
                    src={image}
                    alt={bookName}
                    className='w-96 rounded-xl h-[500px]' />
            </figure>
            <div className="card-body">
                <div className='flex flex-wrap gap-2'>
                    {
                        tags.map(tag => {
                            return <div className="badge badge-info">{tag}</div>
                        })
                    }
                </div>
                <h2 className="card-title text-xl">
                    {bookName}
                </h2>
                <p className='text-md'><span className='font-semibold'>By:</span> {author}</p>

                <div className="card-actions justify-end border-t border-dashed pt-4 border-gray-400">
                    <p className='font-bold'>{category}</p>
                    <div className='flex items-center '>
                        <p clas>{rating}</p>
                        <CiStar size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;