import PropTypes from 'prop-types';
import { MdOutlineWatchLater } from "react-icons/md";

const Article = ({ article }) => {
    const { image, title, short_details, details_1, details_2, details_3, publishing_time, category } = article;

    return (
        <div className="border rounded-xl block h-full">
            <img className="rounded-t-xl h-[226px] w-full" src={image} alt="" />
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
    );
};

Article.propTypes = {
    article: PropTypes.object.isRequired,
}

export default Article;