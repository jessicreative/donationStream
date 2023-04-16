import React from "react";

export default function Orgs() {

    const [names, setNames] = React.useState([]);
    const callAPI = async () => {
        try {
            const res = await fetch(
        `https://api.endaoment.org/v1/sdk/orgs`
            );
            const data = await res.json();
            console.log(data);
    setNames(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
        <center>
                <button onClick={callAPI} type="button" 
                class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 
                focus:outline-none bg-white rounded-lg border border-gray-200 
                hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 
                focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 
                dark:text-gray-400 dark:border-gray-600 dark:hover:text-white 
                dark:hover:bg-gray-700 my-10">
                    Get Organizations
                </button>
            </center>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Contract Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ein
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                {names.map((name) => (
                    <tr key={name.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {name.name}
                        </th>
                        <td className="px-6 py-4">
                            {name.contractAddress}
                        </td>
                        <td className="px-6 py-4">
                            {name.ein}
                        </td>
                        <td className="px-6 py-4">
                            {name.nteeDescription}
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Donate</a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </div>
    );
  }
  