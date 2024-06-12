import React, { useState , useEffect } from 'react';
import House1 from '../../assets/House1.jpg';
import { useParams,useNavigate} from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import PropertyForm from '../../components/PropertyForm';

const PropertyDetail = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate()
  const {id} = useParams()
  const fetchData = async()=>{
      try {
          const response = await axiosInstance.get(`/property/get/${id}`);
          console.log(response.data);
          setData(response.data);

        } catch (error) {
          console.error('Error fetching todos:', error);
        }


  }
  const [formVisible, setFormVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [refresh,setRefresh]= useState(false)
  const handleDelete = async () => {
    try {
        await axiosInstance.delete(`/property/delete/${id}`);
        alert("Property Deleted Succesfully")
        navigate('/admin')
    } catch (error) {
        console.error('Error deleting property:', error);
    }
};


  const handleSubmit = async (propertyData) => {
    try {
      const response = await axiosInstance.post(`/property/update/${id}`, propertyData);
      console.log(response.data);
      setData(response.data);
      setFormVisible(false);
      setRefresh((prevRefresh) => !prevRefresh); 
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };
  useEffect(()=>{fetchData()},[refresh])
  return (
    <>
    {data &&<>
                    <nav className='flex justify-between px-8 py-6 bg-slate-400  items-center'>
            
                    <h2 className='text-2xl font-bold'>Admin Page - User Information</h2>
                    <button className='bg-slate-800 px-5 py-3 rounded-lg hover:bg-slate-900 text-slate-200' onClick={()=>{signOut(firebaseAuth)}}>Log-Out</button>
              
                      </nav>
    <div className="w-full max-w-2xl mx-auto bg-gradient-to-l from-black to-Black text-white shadow-lg rounded-lg overflow-hidden mt-8 mb-8">

      <div className="aspect-w-16 aspect-h-9">
        <img src={data.imageUrl} alt={data.title} className="w-full h-full object-cover object-center" />
      </div>
      <div className="p-6">
        <h2 className="text-3xl text-Red font-bold mb-2">{data.title}</h2>
        <p className="text-White mb-4">{data.location}</p>
        <p className="text-gray-400 mb-6">{data.description}</p>
        <div className="flex flex-col">
          <div className="flex mb-2">
            <p className="text-lg font-semibold w-1/3">Price:</p>
            <p className="text-lg font-semibold w-2/3"><span className="text-Red">${data.price}</span></p>
          </div>
          <div className="flex mb-2">
            <p className="text-lg font-semibold w-1/3">Type:</p>
            <p className="text-lg font-semibold w-2/3">{data.type}</p>
          </div>
          <div className="flex mb-2">
            <p className="text-lg font-semibold w-1/3">Status:</p>
            <p className={`text-lg font-semibold w-2/3 text-${data.status === 'Available' ? 'green' : 'red'}-600`}>{data.status}</p>
          </div>
          <div className="flex">
            <p className="text-lg font-semibold w-1/3">Size:</p>
            <p className="text-lg font-semibold w-2/3">{data.size}</p>
          </div>
        </div>
      </div>
    </div></>}
<div className='flex gap-6 justify-center'>

<button
onClick={() => setFormVisible(!formVisible)}
className="bg-red-600 font-bold text-white px-4 py-2 rounded mb-4"
>
{formVisible ? "Cancel" : "Update Property"}
</button>
<button
                onClick={() => setShowModal(true)}
                className="bg-red-600 font-bold text-white px-4 py-2 rounded mb-4"
                >
                Delete Property
</button>
                </div>

{data && formVisible && <PropertyForm onSubmit={handleSubmit} data={data}/>}
{showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg">
                        <p>Are you sure you want to delete this property?</p>
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
</>
  );
};

export default PropertyDetail;