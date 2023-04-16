import React, { useEffect } from "react";
import {Helmet} from "react-helmet";
// import searchbarjs from "./searchbar.js";

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

    useEffect(() => {
        // const script = document.createElement("script");
        // script.src = '../pages/searchbar.js'; // whatever url you want here
        // script.charset = "utf-8";
        // script.async = true;
        // script.onload = function () {
        //     !function (e, t, s, i) { var n = "InfogramEmbeds", o = e.getElementsByTagName("script")[0], d = /^http:/.test(e.location) ? "http:" : "https:"; if (/^\/{2}/.test(i) && (i = d + i), window[n] && window[n].initialized) window[n].process && window[n].process(); else if (!e.getElementById(s)) { var r = e.createElement("script"); r.async = 1, r.id = s, r.src = i, o.parentNode.insertBefore(r, o) } }(document, 0, "infogram-async", "https://e.infogram.com/js/dist/embed-loader-min.js");
        // };
        // document.head.appendChild(script);
        afterload();
    }, []);

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
            <Helmet>
                <script src="./searchbar.js" async defer></script>
            </Helmet>
            
            </div>
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
        </div>
    );
  }
  function afterload() {
    document.querySelector('.searchbar').value = "";
console.log("hello sk7"); 

const list = document.querySelector('.list');

// const searchimg = document.getElementById("search-img-js"); 
// searchimg.addEventListener('click', searchshow);
// searchimg.addEventListener('keyup', enterkeyShow);

const searchbar = document.querySelector('.searchbar'); 
searchbar.addEventListener('keyup', search);

// const closeimg = document.getElementById("close-img-js"); 
// closeimg.addEventListener('click', closeimgfunction);
// closeimg.addEventListener('keyup', enterkeyClose);

// Hide All function when you click anywhere on the background
function hideallfunction(){
    console.log("sk7: hideallfunction");
    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.remove('show'))
    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.add('hide'))
    document.querySelector('.searchbar').value = "";
    document.querySelector('.searchbar').setAttribute("placeholder", "Search...");
    document.getElementById('close-img-js').setAttribute("tabindex", "-1");
    window.setTimeout(hideallfunction2, 500);
}

function hideallfunction2(){
    console.log("sk7: hideallfunction2")
    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.remove('add'))
    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.add('remove'))
}

//showing the list under circumstances (if it's not empty, you show the list with the result when you click on the search icon.
// if it isn't empty it focuses on the search bar so you'd type something.)
function searchshow(){
    console.log("sk7: searcshow")
    let input = document.querySelector('.searchbar').value

    if (input !== "") {
        document.querySelector('.list').classList.add('add');
        // document.querySelector('.closeimg').classList.add('add');
        document.querySelector('.borderbetween').classList.add('add');
        document.querySelector('.searchbar').setAttribute("placeholder", "Search...");
        // document.getElementById('close-img-js').setAttribute("tabindex", "4");
        populateTable();
        window.setTimeout(searchshow2, 100);
    } else {
        document.querySelector('.searchbar').focus();
        document.querySelector('.searchbar').setAttribute("placeholder", "Please search something...");
    }
}

const callAPIorgsSearch = async () => {
    try {
        url = 
    `https://api.endaoment.org/v1/sdk/orgs/search`
        console.log("Call API ", url)
        const res = await fetch(
            url
        );
        const data = await res.json();
        console.log(data);
setNames(data);
    } catch (err) {
        console.log(err);
    }
};

function populateTable() {
    console.log("sk7: populateTable")
	let input = document.querySelector('.searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('section');
    let noresult = document.querySelector('.noresult');
    let list= document.querySelector('.list').childElementCount;
    let i = 0;
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase() === input.toLowerCase()) { // If innerHTML does not include input
			x[i].style.display="none";
            list -= 1;
            console.log("sk7: input = element ", i, x[i], "innerHTML: ", )
            data = callAPIorgsSearch(input);
		} else { // if it does include input
			x[i].style.display="list-item";
            list += 1;
            console.log("sk7: input does not equal element ", i, x[i])
		}

        if (list === 1) {
            noresult.style.display="list-item";
        } else {
            noresult.style.display="none";
        }

    }
}

function searchshow2(){
    console.log("searchshow2")
    document.querySelector('.list').classList.add('show');
    // document.querySelector('.closeimg').classList.add('show');
    document.querySelector('.borderbetween').classList.add('show');
}

//global search function
function search() {
    console.log("sk7: search function")
	let input = document.querySelector('.searchbar').value
	input=input.toLowerCase();
    console.log("sk7: input ", input)
	let x = document.getElementsByClassName('section');
    console.log("sk7: x ", x)
    let noresult = document.querySelector('.noresult');
    console.log("sk7: noresult ", noresult)
    let list= document.querySelector('.list').childElementCount;
    console.log("sk7: list ", list)
    let i = 0;
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) { // If innerHTML does not include input
			x[i].style.display="none";
            list -= 1;
            console.log("sk7: input not found in element ", i, x[i], "innerHTML: ", )
		} else { // if it does include input
			x[i].style.display="list-item";
            list += 1;
            console.log("sk7: input found in element ", i, x[i])
		}

        if (list === 1) {
            noresult.style.display="list-item";
        } else {
            noresult.style.display="none";
        }

    }
}

//function for when you click ENTER or ESC on keyboard when interacting with the search bar.
searchbar.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      event.preventDefault();
      searchshow();
    } else if (event.keyCode === 27) {
        event.preventDefault();
        closeimgfunction();
        document.querySelector('.searchbar').setAttribute("placeholder", "Search...");
    }
  }); 

list.addEventListener("keyup", function(event) {
    if (event.keyCode === 27) {
        event.preventDefault();
        closeimgfunction();
    }
  }); 

//the function for the X button and closing the list
function closeimgfunction() {
    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.remove('show'))
    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.add('hide'))
    document.querySelector('.searchbar').value = "";
    // document.getElementById('close-img-js').setAttribute("tabindex", "-1");
    window.setTimeout(closeimgfunction2, 500);
}

function closeimgfunction2() {
    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.remove('add'))
    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.add('remove'))
}

//keyboard functions
function enterkeyShow(event) {
    if (event.keyCode === 13) {
        searchshow();
    }
}

function enterkeyClose(event) {
    if (event.keyCode === 13) {
        closeimgfunction();
        document.querySelector('.searchbar').setAttribute("placeholder", "Search...");
    }
}

function esckey(event) {
    if (event.keyCode === 27) {
        closeimgfunction();
        document.querySelector('.searchbar').setAttribute("placeholder", "Search...");
}
}
  }