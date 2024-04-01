import { useEffect, useState } from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";

const Quotes = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        fetch('/data/quotes.json')
            .then(res => res.json())
            .then(data => setQuotes(data))
    }, [])

    return (
        <div className="w-[92%] md:max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                {
                    quotes.map((quote, index) => <div
                        key={index}
                    >
                        <div className="p-4 gap-6 flex items-center rounded-xl shadow-xl">
                            <img className="w-[120px] h-[120px] object-cover rounded-full" src={quote.img} alt="" />
                            <div>
                                <BiSolidQuoteLeft /><h3 className="text-[#757575] text-lg">{quote.quote}</h3>
                                <div className="flex justify-end font-bold">
                                    <h3>- {quote.name}</h3>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Quotes;