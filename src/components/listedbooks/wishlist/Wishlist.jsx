import React, { useContext } from 'react';
import { bookContext } from '../../../contexts/BookProvider';
import ListedBookUi from '../../shared/ListedBookUi';

const Wishlist = () => {
    const { wishlistBooks } = useContext(bookContext);

    return (
        <div className='pt-4'>
            <p>Wishlist books: {wishlistBooks.length}</p>
            <div className='pt-4 space-y-4 mb-20'>
                {
                    wishlistBooks.map(book => <ListedBookUi key={book.bookId} book={book} />)
                }
            </div>
        </div>
    );
};

export default Wishlist;