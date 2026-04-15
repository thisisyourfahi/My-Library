import React, { useContext } from 'react';
import { bookContext } from '../../../contexts/BookProvider';
import ListedBookUi from '../../shared/ListedBookUi';
import EmptyList from '../EmptyList';

const Wishlist = () => {
    const { wishlistBooks } = useContext(bookContext);

    return (
        <div>
            <p>Wishlist books: {wishlistBooks.length}</p>
            <div className='pt-4 space-y-4 mb-20'>
                {
                    wishlistBooks.length > 0 ?
                        wishlistBooks.map(book => <ListedBookUi key={book.bookId} book={book} />)
                        : 
                        <EmptyList />
}
            </div>
        </div>
    );
};

export default Wishlist;