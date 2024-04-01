import { MdOutlineWatchLater } from "react-icons/md";
import PropType from "prop-types";
import { Link } from "react-router-dom";

const DisplayItem = ({ item }) => {
    const { id, image, title, short_details, publishing_time, category } = item;

    return (
        <Link to={`/article_details/${id}`}>
            <div className="gap-4 p-4 shadow-2xl h-full">
                <img className="w-full h-[226px] object-cover" src={image} alt="" />
                <div className="space-y-4 mt-4">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <div className="flex gap-8">
                        <p className="text-sm font-bold flex items-center gap-2"><span className="text-xl">#</span> {category}</p>
                        <p className="text-[#757575] font-medium flex items-center gap-2 text-sm"><span className="text-xl font-bold"><MdOutlineWatchLater /></span> {publishing_time}</p>
                    </div>
                    <p>{short_details}</p>
                </div>
            </div>
        </Link>
    );
};

DisplayItem.propTypes = {
    item: PropType.object.isRequired
}

export default DisplayItem;