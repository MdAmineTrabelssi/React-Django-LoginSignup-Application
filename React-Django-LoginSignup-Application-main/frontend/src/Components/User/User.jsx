import axios from 'axios';
import React, { useState } from 'react'
import Swal from "sweetalert2";
import { baseUrl } from '../../Constants/Constants';

function User() {
    const Token = localStorage.getItem("user_id");
    const [showModal, setShowModal] = useState(false);
    const [imagefile, setImagefile] = useState("");
    const [image, setImage] = useState("../../../Images/icon.png");

    function convertUrl(url) {
        const pathStart = url.lastIndexOf("/fakepath/") + 10;
        const filename = url.substring(pathStart);
        return "/images/" + filename.replace(/%3A/g, ":");
      }

    const handleSubmit = (e) => {
        const body = JSON.stringify({
          imagefile
        })
        console.log(imagefile)
        setShowModal(false)

        axios
          .post(`${baseUrl}imageEdit/${Token}/`, body, {
            headers: { "Content-Type": "application/json" },
          })
          .then((response) => {
            console.log(response.data.image)
            if (response.status === 200) {
                const firstUrl = convertUrl(response.data.image);
console.log(firstUrl);
                setImage(firstUrl)
            //   navigate("/login");
            } else {
              Swal.fire({
                position: "center",
                icon: "warning",
                title: response.data.error,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              position: "center",
              icon: "warning",
              title: err.data.error,
              showConfirmButton: false,
              timer: 1500,
            });
          });
        
        };
  return (
    <div className='flex justify-center w-full  h-96'>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pt-5 justify-center">
                <div className='flex flex-col items-center justify-center'>
                <img className="" src={`${image}`} alt={image}/>
                <button onClick={() => setShowModal(true)}  className='text-green-500 bg-black rounded'>Add image</button>
                 
                {showModal ? (
                        <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="justify-center text-xl font-semibold">
                                    Add Profile
                                </h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                    </span>
                                </button>
                                </div>
                                {/*body*/}
                                <div className="flex h-full justify-center mt-8">
                                    <div className="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
                                        <div className="m-4">
                                            <label className="inline-block mb-2 text-gray-500">Upload
                                                Image(jpg,png,svg,jpeg)</label>
                                            <div className="flex items-center justify-center w-full">
                                                <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                                    <div className="flex flex-col items-center justify-center pt-7">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                            className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path fillRule="evenodd"
                                                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                                clipRule="evenodd" />
                                                        </svg>
                                                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                            Select a photo</p>
                                                    </div>
                                                    <input onChange={(e) => {
                                                setImagefile(e.target.value);}}
                                        name="imagefile" type="file" accept='image/*, png, jpg, jpeg' className="opacity-0" />
                                                </label>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>

                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {
                                        handleSubmit()
                                    }}
                                >
                                    Save Changes
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                ) : null}

                
                </div>

                <div className='pt-10'>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                </div>
                <div className="flex mt-4 pt-5 space-x-3 md:mt-6">
                    <button href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black bg-[#6ce7ae] rounded-lg hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#6ce7ae] dark:hover:bg-white dark:focus:ring-blue-800">Favourite Destinations</button>
                    <button href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">wallet</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default User