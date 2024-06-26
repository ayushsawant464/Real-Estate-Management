import { useNavigate } from "react-router-dom";

const RealEstateCard = ({ realEstate ,isSeller }) => {
    const navigate = useNavigate();

    return(
      <div className={`bg-gradient-to-r mx-4 my-4 from-black to-Black w-96 shadow-2xl rounded-lg overflow-hidden transform transition duration-500 hover:scale-105`}>
      <div className="p-6">
        <div className={`${realEstate.status === "Available" ? 'blur-0' : 'blur-md'} w-auto h-64 rounded-lg overflow-hidden border-2 border-Red relative cursor-pointer`}>
          <img
            src={realEstate.imageUrl}
            alt={realEstate.title}
            className="w-full h-full object-cover absolute inset-0"
            />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-Black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
        </div>
        <div className={`${realEstate.status === "Available" ? 'blur-0' : 'blur-md'} flex items-center mt-4`}>
          <div>
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-Red">{realEstate.title}</h2>
            <p className="text-white">{realEstate.location}</p>
          </div>
        </div>
        <div className={`${realEstate.status === "Available" ? 'blur-0' : 'blur-md'} mt-6`}>
            {realEstate.description.length > 100 ? <p className="text-gray-400">{realEstate.description.slice(0, 101) + '...'}</p> : <p className="text-gray-400">{realEstate.description}</p>}
        </div>
        {realEstate.status === 'Available' && <p className={`mt-4 text-lg font-semibold text-green-600 ${realEstate.status === "Available" ? 'blur-0' : 'blur-md'}`}>{realEstate.status}</p>}
        {realEstate.status === 'Sold Out' && <p className={`mt-4 text-lg font-semibold text-red-800`}>{realEstate.status}</p>}
        <div className="flex justify-between items-center mt-2">
          <p className={`${realEstate.status === "Available" ? 'blur-0' : 'blur-md'} text-xl font-semibold text-white`}>Price: <span className={`${realEstate.status === "Available" ? 'blur-0' : 'blur-md'} text-Red`}>${realEstate.price}</span></p>
          <button className="bg-Red blur-0 z-10 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
          onClick={()=>{
            isSeller?navigate(`/seller/property/${realEstate._id}`):navigate(`/property/${realEstate.isRent === true ? "rent" : "buy"}/${realEstate._id}`)}}>
            View Details
          </button>
        </div>
      </div>
    </div>
    )
};
  
  export default RealEstateCard;
  