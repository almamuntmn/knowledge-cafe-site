import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {


    return (
        <div className="md: w-1/3 ml-4 bg-[rgba(17,17,17,0.05)]">
            <h2 className="text-2xl font-bold pt-4">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=> <Bookmark bookmark={bookmark}></Bookmark>)
            }

        </div>
    );
};

export default Bookmarks;