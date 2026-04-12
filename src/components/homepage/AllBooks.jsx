import React, { use } from 'react';
import Book from './Book';

const booksPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {
    const books = use(booksPromise);

    return (
        <div className='mt-12 mb-12 space-y-8 px-4'>
            <h2 className='text-4xl font-bold text-center'>Books</h2>
            <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-20'>
                {
                    books.map((book, ind) => <Book key={ind} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default AllBooks;