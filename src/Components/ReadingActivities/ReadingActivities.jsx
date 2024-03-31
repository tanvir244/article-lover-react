import { useLoaderData } from "react-router-dom";
import { getDataFromStorage } from "../Utility/localStorage";
import { useEffect, useState } from "react";
import DisplayItem from "../DisplayItem/DisplayItem";

const ReadingActivities = () => {
    const articles = useLoaderData();
    const [showing, setShowing] = useState([]);
    const [displayItem, setDisplayItem] = useState([]);
    const [clickedRead, setClickedRead] = useState(false);
    const [clickedSave, setClickedSave] = useState(false);


    useEffect(() => {
        handleButton('read');
    }, []);

    const handleButton = (trigger = 'read' && !clickedRead) => {
        if (trigger === 'read') {
            const getReadItemsFromStorage = getDataFromStorage("readItems");
            const readItemsArray = [];
            for (const id of getReadItemsFromStorage) {
                const findReadStorageItems = articles.find(article => parseInt(article.id) === id);
                readItemsArray.push(findReadStorageItems);
            }
            setDisplayItem(readItemsArray);
            setShowing(readItemsArray);
            setClickedRead(true);
            setClickedSave(false);
        }
        else if (trigger === 'save' && !clickedSave) {
            const getSaveItemsFromStorage = getDataFromStorage("saveItems");
            const saveItemsArray = [];
            for (const id of getSaveItemsFromStorage) {
                const findSaveStorageItems = articles.find(article => parseInt(article.id) === id);
                saveItemsArray.push(findSaveStorageItems);
            }
            setDisplayItem(saveItemsArray);
            setShowing(saveItemsArray);
            setClickedSave(true);
            setClickedRead(false);
        }
    }

    const handleSortButton = (filter) => {
        if (filter === "all") {
            setShowing(displayItem);
        }
        else if (filter === "history") {
            const historyOnly = displayItem.filter(item => item.category === "History");
            setShowing(historyOnly);
        }
        else if (filter === "biography") {
            const biographyOnly = displayItem.filter(item => item.category === "Biography");
            setShowing(biographyOnly);
        }
        else if (filter === "politics") {
            const politicsOnly = displayItem.filter(item => item.category === "Politics");
            setShowing(politicsOnly);
        }
    }
    

    const clickedStyle = {
        backgroundColor: '#2b3440',
        color: 'white'
    }
    const unClickedStyle = {
        backgroundColor: '#f2f2f2',
        color: 'black'
    }

    return (
        <div className="w-[92%] max-w-6xl mx-auto">
            <div style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0)), url('/images/reading-activities.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
                className="h-[30vh] rounded-xl"
            >
                <h3 className="flex justify-center h-full items-center text-5xl text-white font-bold font-dm-serif">Reading Activities</h3>
            </div>
            <div className="text-center my-4">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#07b151] px-12 text-white font-semibold text-lg">Sort by</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleSortButton("all")}><a>All</a></li>
                        <li onClick={() => handleSortButton("history")}><a>History</a></li>
                        <li onClick={() => handleSortButton("biography")}><a>Biography</a></li>
                        <li onClick={() => handleSortButton("politics")}><a>Politics</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-2">
                <button onClick={() => handleButton('read')} className="btn btn-ghos text-base font-semibold rounded-xl" style={clickedRead ? clickedStyle : unClickedStyle}>Already Read</button>
                <button onClick={() => handleButton('save')} className="btn btn-ghos text-base font-semibold rounded-xl" style={clickedSave ? clickedStyle : unClickedStyle}>Save for later</button>
            </div>
            <div className="grid grid-cols-3 mt-4 gap-4">
                {
                    showing.map(item => <DisplayItem
                        key={item.id}
                        item={item}
                    ></DisplayItem>)
                }
            </div>
        </div>
    );
};

export default ReadingActivities;