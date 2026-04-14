import React from 'react';
import { NavLink } from 'react-router';

const ListedBookUi = ({ book }) => {
    return (
        <div className='flex items-center gap-4 border border-gray-400 p-4 rounded-xl'>
            <div className='bg-gray-200 rounded-xl p-4'>
                <img src={book.image} alt="" className='w-40 rounded-xl h-60' />
            </div>
            <div className='space-y-2 flex-1'>
                <div className='space-y-1'>
                    <h2 className="text-2xl font-bold">{book.bookName}</h2>
                    <h4 className=''>By: {book.author}</h4>
                </div>
                <div className='pb-2'>
                    <span className='font-semibold'>Tag: </span>
                    {
                        book.tags.map((tag, ind) => <div key={ind} className="badge badge-xl badge-soft badge-primary mr-2">{tag}</div>)
                    }
                </div>

                <div className='flex gap-8 border-b border-gray-300 pb-4'>
                    <p>Pages: <span className='font-semibold'>{book.totalPages}</span></p>
                    <p>Publisher: <span className='font-semibold'>{book.publisher}</span></p>
                </div>
                <div className='pt-2 space-x-4'>
                    <div className="badge badge-xl badge-soft badge-primary">Category: {book.category}</div>
                    <div className="badge badge-xl badge-soft badge-secondary">Rating; {book.rating}</div>
                    <NavLink to={`/bookDetails/${book.bookId}`}>
                        <button className='btn btn-info rounded-full'>View Details</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ListedBookUi;