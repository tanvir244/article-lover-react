import PropTypes from 'prop-types';
import { MdOutlineWatchLater } from "react-icons/md";
import { Link } from 'react-router-dom';

const Article = ({ article }) => {
    const { id, image, title, short_details, publishing_time, category } = article;

    return (
        <Link to={`/article_details/${id}`}>
            <div className="border rounded-xl block h-full">
                <img className="rounded-t-xl h-[226px] w-full object-cover" src={image} alt="" />
                <div className="px-4 py-6 space-y-4">
                    <div className='flex-grow'>
                        <h3 className="font-bold text-xl">{title}</h3>
                    </div>
                    <div>
                        <p>{short_details}</p>
                    </div>
                    <div className="flex items-center gap-12 font-semibold">
                        <p>{category}</p>
                        <p className='flex items-center gap-2'><span><MdOutlineWatchLater /></span> {publishing_time}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Article.propTypes = {
    article: PropTypes.object.isRequired,
}

export default Article;