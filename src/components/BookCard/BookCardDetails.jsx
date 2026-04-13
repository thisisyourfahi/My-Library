import React, { useContext } from 'react';
import BookProvider, { bookContext } from '../../contexts/BookProvider';


const BookCardDetails = ({book}) => {
    const {handleMarkAsRead, handleAddToWishlist} = useContext(bookContext);
    
    return (
        <div className='flex items-center gap-8 mt-10'>
            {/* book image */}
            <div className='bg-gray-200 flex justify-center items-center h-175 rounded-md flex-1'>
                <img src={book.image} alt="" className='w-96 rounded-xl h-125'/>
            </div>

            {/* book details text information */}
            <div className='space-y-4 flex-1'>
                <div className='space-y-2'>
                    <h2 className="text-5xl font-bold">{book.bookName}</h2>
                    <h4 className='text-xl font-semibold'>By: {book.author}</h4>
                </div>
                <div className='border-t border-gray-400 pt-2 pb-2 border-b'>
                    <p>{book.category}</p>
                </div>
                <div>
                    <p>
                        <span className='font-semibold'>Review: </span>
                        {book.review}
                    </p>
                </div>
                <div className='border-b border-gray-400 pb-2'>
                    <span className='font-semibold'>Tag: </span>
                    {
                        book.tags.map((tag, ind) => <div key={ind} className="badge badge-info mr-2">{tag}</div>)
                    }
                </div>
                <div className='space-y-2'>
                    <p>Number of Pages: <span className='font-semibold'>{book.totalPages}</span></p>
                    <p>Publisher: <span className='font-semibold'>{book.publisher}</span></p>
                    <p>Year of Publishing: <span className='font-semibold'>{book.yearOfPublishing}</span></p>
                    <p>Rating: <span className='font-semibold'>{book.rating}</span></p>
                </div>
                <div className='space-x-4'>
                    <button onClick={() => handleMarkAsRead(book)} className='btn btn-primary btn-outline'>Mark as Read</button>
                    <button onClick={() => handleAddToWishlist(book)} className='btn btn-accent btn-outline'>Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookCardDetails;