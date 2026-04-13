import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import BookCardDetails from '../components/BookCard/BookCardDetails';

const BookDetails = () => {
    const books = useLoaderData();
    const params = useParams();
    
    const book = books.find(book => book.bookId == params.bookId);

    return (
        <div>
            {
                <BookCardDetails book={book}/>
            }
        </div>
    );
};

export default BookDetails;