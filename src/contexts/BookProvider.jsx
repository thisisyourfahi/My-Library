import React, { createContext, useState } from 'react';

export const bookContext = createContext();

const BookProvider = ({ children }) => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);

    const handleMarkAsRead = (book) => {
        const exist = readBooks.find(b => b.bookId == book.bookId);
        if (exist) {
            alert(`${book.bookName} is already in the Read list!`)
        } else {
            alert(`${book.bookName} has been added to the Read list!`)
            setReadBooks([...readBooks, book]);
        }
    }
    const handleAddToWishlist = (book) => {
        const existInReadList = readBooks.find(b => b.bookId == book.bookId);
        if (existInReadList) {
            alert('This book is already on the Read list!');
            return ;
        }
        
        const exist = wishlistBooks.find(b => b.bookId == book.bookId);
        if (exist) {
            alert(`${book.bookName} is already in the Wishlist!`)
        } else {
            alert(`${book.bookName} has been added to the Wishlist!`)
            setWishlistBooks([...wishlistBooks, book]);
        }
    }

    const data = {
        readBooks,
        wishlistBooks,
        handleMarkAsRead,
        handleAddToWishlist,
        setReadBooks,
        setWishlistBooks
    };

    return <bookContext.Provider value={data}>
        {children}
    </bookContext.Provider>
};

export default BookProvider;