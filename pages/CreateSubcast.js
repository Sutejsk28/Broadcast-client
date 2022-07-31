import React from 'react'

const CreateSubcast = () => {
  return (
    <div className='center++ flex justify-center' >
        <div className="p-4 m-8 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
            <h1 className='text-2xl mb-4' >Create Subcast</h1>
            <form className="space-y-6" action="#">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Subcast Name</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="name" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Subcast Description</label>
                    <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="description" required />
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
            </form>
        </div>
    </div>
  )
}

export default CreateSubcast