import React, { useContext } from 'react';
import { bookContext } from '../../../contexts/BookProvider';
import ListedBookUi from '../../shared/ListedBookUi';

const ReadList = () => {
    const {readBooks} = useContext(bookContext);

    return (
        <div className='pt-4'>
            <p>Readlist books: {readBooks.length}</p>
            <div className='pt-4 space-y-4 mb-20'>
                {
                    readBooks.map(book => <ListedBookUi key={book.bookId} book={book}/>)
                }
            </div>
        </div>
    );
};

export default ReadList;