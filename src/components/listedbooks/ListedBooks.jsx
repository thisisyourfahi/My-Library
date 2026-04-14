import React, { useContext, useState } from 'react';
import { bookContext } from '../../contexts/BookProvider';
import ReadList from './readlist/ReadList';
import Wishlist from './wishlist/Wishlist';

const ListedBooks = () => {
    const {readBooks, wishlistBooks} = useContext(bookContext);
    const [readlist, setReadlist] = useState(true);

    return (
        <div>
            <div className='bg-gray-300 rounded-md p-10 text-center mt-10 space-y-2'>
                <p className='text-2xl font-semibold'>Listed books will be displayed here.</p>
                <div>
                    <button className='btn btn-primary btn-lg'>Sort By</button>
                </div>
            </div>
            <div className='mt-10 space-x-2 border-b pb-4 border-gray-400'>
                <button onClick={() => setReadlist(!readlist)} className="btn btn-primary btn-outline">Read List</button>
                <button onClick={() => setReadlist(!readlist)} className="btn btn-accent btn-outline">Wishlist</button>
            </div>
            <div>
                {
                    readlist ? <ReadList /> : <Wishlist />
                }
            </div>
        </div>
    );
};

export default ListedBooks;