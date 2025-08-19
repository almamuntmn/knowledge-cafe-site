import { FaRegBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleAddToBookmark }) => {
    const { title, cover, img, author, date, reading_time, hashtag } = blog;
    return (
        <div className="mb-20">
            <img className="w-full rounded-lg mb-8" src={cover} alt="" />
            <div className="flex justify-between mb-4">
                <div className="flex items-center gap-3">
                    <img className="w-12 h-12 rounded-full" src={img} alt="" />
                    <div className="text-left">
                        <h1 className='text-[24px] font-semibold'>{author}</h1>
                        <p>{date}</p>
                    </div>
                </div>
                <div className='items-center'>
                    <span>{reading_time} min read </span>
                    <button onClick={() => handleAddToBookmark(blog)}
                        className='text-green-600'
                    ><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-xl text-left text-4xl font-bold mb-4">{title}</h2>
            <p className="text-left">
                {
                    hashtag.map(hash => <span><a href="">{hash} </a></span>)
                }
            </p>
        </div>
    );
};

export default Blog;