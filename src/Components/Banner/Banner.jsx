
const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url('/images/banner.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }} 
        className="border rounded-2xl h-[60vh] md:h-[80vh] font-abril">
            <h1 className="text-6xl  text-center font-semibold text-white mt-20">Article Lovers</h1>
        </div>
    );
};

export default Banner;