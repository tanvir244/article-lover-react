import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineWatchLater } from "react-icons/md";
import { getDataFromStorage, saveItemsToStorage } from "../Utility/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ArticleDetails = () => {
    const { id } = useParams();
    const articles = useLoaderData();
    const idInt = parseInt(id);
    const article = articles.find(article => parseInt(article.id) === idInt);
    const { image, author, author_img, details_1, details_2, details_3, publishing_time, category } = article;

    const handleReadButton = () => {
        const getReadItemsFromLS = getDataFromStorage("readItems");
        const existReadItems = getReadItemsFromLS.find(id => id === idInt);
        const getSaveItemsFromLS = getDataFromStorage("saveItems");
        const existSaveItems = getSaveItemsFromLS.find(id => id === idInt);
        if (!existReadItems) {
            if (!existSaveItems) {
                getDataFromStorage("readItems");
                saveItemsToStorage("readItems", idInt);
                toast.success('Read completed');
            }else{
                toast.error("This article Saved For Later, so you can read it later from saved articles");
            }
        } else {
            toast.warning('Already read!');
        }
    }
    const handleSaveButton = () => {
        const getReadItemsFromLS = getDataFromStorage("readItems");
        const existReadItems = getReadItemsFromLS.find(id => id === idInt);
        const getSaveItemsFromLS = getDataFromStorage("saveItems");
        const existSaveItems = getSaveItemsFromLS.find(id => id === idInt);
        if (!existSaveItems) {
            if (!existReadItems) {
                getDataFromStorage("saveItems");
                saveItemsToStorage("saveItems", idInt);
                toast.success('Saved Successfully');
            } else {
                toast.error("This article has Read Already, so no need to Save For Later");
            }
        } else {
            toast.warning('Already saved!');
        }
    }

    return (
        <div className="w-[92%] md:max-w-6xl mx-auto py-12 px-8 shadow-[0_0_8px_0_rgba(0,0,0,.15)] rounded-2xl">
            <div className="w-[90%] mx-auto">
                <h1 className="text-3xl font-bold">{article.title}</h1>
                <div className="flex gap-16 items-center mt-6 mb-4 w-[96%] mx-auto">
                    <div className="flex items-center gap-4">
                        <img className="h-[50px] w-[50px] rounded-full" src={author_img} alt="" />
                        <p className="font-bold">{author}</p>
                    </div>
                    <p className="text-[#757575] font-medium"><span className="text-xl font-bold">#</span> {category}</p>
                    <p className="text-[#757575] font-medium flex items-center gap-2"><span className="text-xl font-bold"><MdOutlineWatchLater /></span> {publishing_time}</p>
                </div>
                <img className="h-[80vh] w-full rounded-2xl" src={image} alt="" />
                <div className="space-y-10 mt-12">
                    <p>{details_1}</p>
                    <p>{details_2}</p>
                    <p>{details_3}</p>
                    <div className="flex justify-end gap-4">
                        <button onClick={handleReadButton} className="bg-[#2fbbb3] py-3 px-12 text-white text-lg font-semibold rounded-xl">Already Read</button>
                        <button onClick={handleSaveButton} className="bg-[#07b151] py-3 px-12 text-white text-lg font-semibold rounded-xl">Save for later</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ArticleDetails;