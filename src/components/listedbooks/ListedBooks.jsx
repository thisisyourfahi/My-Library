import ReadList from './readlist/ReadList';
import Wishlist from './wishlist/Wishlist';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBooks = () => {
    return (
        <div>
            <div className='p-4 text-center mt-10 space-y-2'>
                <div className="dropdown dropdown-center">
                    <div tabIndex={0} role="button" className="btn btn-accent m-1">Sort By ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Pages</a></li>
                        <li><a>Rating</a></li>
                        <li><a>Year of Publishing</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read List</Tab>
                        <Tab>Wish List</Tab>
                    </TabList>

                    <TabPanel>
                        <ReadList />
                    </TabPanel>
                    <TabPanel>
                        <Wishlist />
                    </TabPanel>
                </Tabs>
            </div>
            
        </div>
    );
};

export default ListedBooks;