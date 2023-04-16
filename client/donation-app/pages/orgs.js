import React from "react";
// import {Helmet} from "react-helmet";
import searchbarjs from "./searchbar.js";

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
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="search-area">
            <div onclick="hideallfunction()" id="hideall"></div>
            <div id="search-section-js" className="searchsection">
                <div role="search" className="search">
                    <input tabIndex="1" id="search-bar-js" className="searchbar" type="search" aria-label="Search text" placeholder="Search..." name="search" />
                    {/* <button tabIndex="-1" className="searchbutton" id="close-img-js" aria-label="Cancel"><img src="../media/close/round_close_black_24dp.png" alt="cancel" class="closeimg globalsearchremove searchbutton" id="close-img-js" aria-label="Cancel" /></button>
                    <button tabIndex="2" className="searchbutton" id="search-img-js" aria-label="Search"><img src="../media/search/round_search_black_24dp.png" alt="search" class="searchimg" /></button> */}
                </div>
                <div className="middle">
                    <div className="borderbetween globalsearchremove"></div>
                </div>
                <div className="middle">
                <ul tabIndex="3" className="list globalsearchremove">
                    <li className="section" role="option">Content 1</li>
                    <li className="section" role="option">Content 2</li>
                    <li className="section" role="option">Content 3</li>
                    <li className="section" role="option">Content 4</li>
                    <li className="section" role="option">Content 5</li>
                    <li className="section" role="option">Content 6</li>
                    <li className="noresult">No Result</li>
                </ul>
                </div>
            </div>
            {/* <Helmet>
                <script src="./searchbar.js" defer></script>
            </Helmet> */}
            </div>
            <button onClick={callAPI}>Make API call</button>
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
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
    );
  }
  