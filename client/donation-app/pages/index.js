import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
// import Orgs from "./orgs";
// import Stream from "./stream";
import { Framework } from "@superfluid-finance/sdk-core";
import {
  Button,
  Form,
  FormGroup,
  FormControl,
  Spinner,
  Card
} from "react-bootstrap";
import { ethers } from "ethers";

export default function Home() {

  const [names, setNames] = React.useState([]);
  const [selectedContract, setSelectedContract] = React.useState("");
  const [recipient, setRecipient] = React.useState("");
  const [isButtonLoading, setIsButtonLoading] = React.useState(false);
  const [flowRate, setFlowRate] = React.useState("");
  const [flowRateDisplay, setFlowRateDisplay] = React.useState("");
  const [currentAccount, setCurrentAccount] = React.useState("");
  const [org, setOrg] = React.useState("");
  const [verifyImage, setVerifyImage] = React.useState("");
  const [captchaText, setCaptchatText] = React.useState("");
  const [verified, setVerified] = React.useState(false);

  //Getting organizations
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
  
const callAPIorgsSearch = async (input) => {
  console.log("sk7: callAPIorgsSearch ", input)
  var category_ntee_map = {
    'arts': 'A',
    'education': 'B',
    'health': 'E',
    'legal': 'I',
    'employment': 'J'
  }
  input = category_ntee_map[input.toLowerCase()]
  try {
      var url = 
  `https://api.endaoment.org/v1/sdk/orgs/search?nteeMajorCodes=`+input+`&deployedStatus=deployed&count=15&offset=0`
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

  //querying ZKaptcha API
  const getCaptcha = async () => {
    const captchaAPI = "https://sx2mbwnkk9.execute-api.us-east-2.amazonaws.com/default/zkaptcha-py";
    try {
      const response = await fetch(captchaAPI);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const resptext = await response.text();
      const b64data = JSON.parse(resptext).png;
      const pngData = b64data.replace(/-/g, '+').replace(/_/g, '/');
      setVerifyImage("data:image/png;base64," + pngData);

      console.log("data:image/png;base64," + pngData);

      return "data:image/png;base64," + pngData;
    } catch (error) {
      console.error("Error fetching captcha:", error);
      return null;
    }
  }

  //Streaming
  let account;

  //where the Superfluid logic takes place
  async function createNewFlow(recipient, flowRate) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();

    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    const sf = await Framework.create({
      chainId: Number(chainId),
      provider: provider
    });

    const superSigner = sf.createSigner({ signer: signer });

    console.log(signer);
    console.log(await superSigner.getAddress());
    const daix = await sf.loadSuperToken("fDAIx");

    console.log(daix);

    try {
      const createFlowOperation = daix.createFlow({
        sender: await superSigner.getAddress(),
        receiver: recipient,
        flowRate: flowRate
        // userData?: string
      });

      console.log(createFlowOperation);
      console.log("Creating your stream...");

      const result = await createFlowOperation.exec(superSigner);
      console.log(result);

      console.log(
        `Congrats - you've just created a money stream!
      `
      );
    } catch (error) {
      console.log(
        "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
      );
      console.error(error);
    }
  }

    const connectWallet = async () => {
      try {
        const { ethereum } = window;

        if (!ethereum) {
          alert("Get MetaMask!");
          return;
        }
        const accounts = await ethereum.request({
          method: "eth_requestAccounts"
        });
        console.log("Connected", accounts[0]);
        setCurrentAccount(accounts[0]);
        account = currentAccount;
        // Setup listener! This is for the case where a user comes to our site
        // and connected their wallet for the first time.
        setupEventListener()
      } catch (error) {
        console.log(error);
      }
    };

    const checkIfWalletIsConnected = async () => {
      console.log("runs");
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      const chain = await window.ethereum.request({ method: "eth_chainId" });
      let chainId = chain;
      console.log("chain ID:", chain);
      console.log("global Chain Id:", chainId);
      if (accounts.length !== 0) {
        account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
        // Setup listener! This is for the case where a user comes to our site
        // and ALREADY had their wallet connected + authorized.
        // setupEventListener()
      } else {
        console.log("No authorized account found");
      }
    };

    useEffect(() => {
      checkIfWalletIsConnected();
    }, []);

    function calculateFlowRate(amount) {
      if (typeof Number(amount) !== "number" || isNaN(Number(amount)) === true) {
        alert("You can only calculate a flowRate based on a number");
        return;
      } else if (typeof Number(amount) === "number") {
        if (Number(amount) === 0) {
          return 0;
        }
        const amountInWei = ethers.BigNumber.from(amount);
        const monthlyAmount = ethers.utils.formatEther(amountInWei.toString());
        const calculatedFlowRate = monthlyAmount * 3600 * 24 * 30;
        return calculatedFlowRate;
      }
    }

    // function CreateButton({ isLoading, children, ...props }) {
    //   return (
    //     <Button variant="success" className="button" {...props}>
    //       {isButtonLoading ? <Spinner animation="border" /> : children}
    //     </Button>
    //   );
    // }

    // const handleRecipientChange = (e) => {
    //   setRecipient(() => ([e.target.name] = e.target.value));
    // };

    const handleFlowRateChange = (e) => {
      setFlowRate(() => ([e.target.name] = e.target.value));
      let newFlowRateDisplay = calculateFlowRate(e.target.value);
      setFlowRateDisplay(newFlowRateDisplay.toString());
    };

    const handleCaptchaChange = (e) => {
      setCaptchatText(() => ([e.target.name] = e.target.value));
    };

    const proverAPI = "https://urrc4cdvzg.execute-api.us-east-2.amazonaws.com/default/zkaptchaprover"
    const getProof = async (currentAccount, captchaText) => {
      console.log(""+ currentAccount + captchaText);
      return await fetch(proverAPI, {
        method: 'POST',
        // ex: walletadress = "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B"
        // ex: captcha_text = "z4Tlw1"
        body: JSON.stringify({"pkey": currentAccount, "preimage": captchaText})
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        const parsedData = JSON.parse(data)
        const decodedProof = Buffer.from(parsedData['proof'], 'base64');
        console.log("successful zkaptcha")
        setVerified(!verified);
        //show organizations
        //later show begin donation
        return decodedProof
      })
      .catch(error => {
        console.error('Error during POST request:', error);
      });
}
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


function populateTable() {
  console.log("sk7: populateTable")
let input = document.querySelector('.searchbar').value
input=input.toLowerCase();
let x = document.getElementsByClassName('section');
  let noresult = document.querySelector('.noresult');
  let list= document.querySelector('.list').childElementCount;
  let i = 0;
for (i = 0; i < x.length; i++) {
  if (x[i].innerHTML.toLowerCase() === input.toLowerCase()) { 
    x[i].style.display="none";
          list -= 1;
          console.log("sk7: input = element ", i, x[i], "innerHTML: ", )
          callAPIorgsSearch(input);
          getCaptcha();
  } else { 
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

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="mb-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Fluilanthropy
        </h1>

        {verified ? 
          <div>
              <div class="grid md:grid-cols-2 gap-8">
                  <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                      <a href="#" class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                          You
                      </a>
                      <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                          {currentAccount === "" ? (
                              <center>
                                  <button id="connectWallet" onClick={connectWallet} type="button" 
                                  class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium 
                                  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                      Connect Wallet
                                  </button>
                              </center>
                          ) : (
                          <Card>
                              {`${currentAccount.substring(0, 25)}...${currentAccount.substring(
                              38
                              )}`}
                          </Card>
                          )}
                      </h2>
                  </div>
                  <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                      <a href="#" class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                          {/* <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path clip-rule="evenodd" fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"></path>
                          </svg> */}
                          {org === "" ? (
                            <h1>Organization</h1>
                          ) : (
                            org
                          )}
                      </a>
                      <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                        {selectedContract === "" ? (
                              <center>
                                <h1></h1>
                                  {/* <button id="connectWallet" onClick={connectWallet} type="button" 
                                  class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium 
                                  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                      Connect Wallet
                                  </button> */}
                              </center>
                          ) : (
                          <Card>
                              {`${selectedContract.substring(0, 25)}...${selectedContract.substring(
                              38
                              )}`}
                          </Card>
                          )}
                      </h2>
                  </div>
              </div>

              {/* <h1>orgs</h1> */}
              
              <form>
                  <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                          {/* <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                          focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 my-5
                          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "name="recipient" placeholder="Recipient address"
                          onChange={handleRecipientChange} value={recipient} required
                      /> */}
                      <center>
                        <input
                            class="bg-gray-50 border border-gray-300 
                            text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 my-5
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="flowRate"
                            value={flowRate}
                            onChange={handleFlowRateChange}
                            placeholder="Enter a flowRate in wei/second"
                            required
                        />
                      </center>
                  </div>
                  <center>
                      <button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none 
                      focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 
                      mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                      type="button" onClick={() => {
                          // getCaptcha();
                          setIsButtonLoading(true);
                          createNewFlow(selectedContract, flowRate);
                          setTimeout(() => {
                          setIsButtonLoading(false);
                          }, 1000);
                      }}>Begin Donation</button>
                  </center>
              </form>
              <center>
                <div>
                    <p>Your flow will be equal to:</p>
                    <p>
                    <b>{flowRateDisplay !== " " ? flowRateDisplay : 0}</b> DAIx/month
                    </p>
                </div>
              </center>
          </div>
        : 
        <div></div>
      }


        {!verified ? 
          <div>
              <center>
          <div>
            {verifyImage && (
              <img src={verifyImage} width={300} height={400} alt="Uploaded Image" />
            )}
          </div>
        </center>
        <form>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <center>
              <input
                  class="bg-gray-50 border border-gray-300 
                  text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
                  dark:border-gray-600 dark:placeholder-gray-400 my-5
                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="ZKaptcha"
                  value={captchaText}
                  onChange={handleCaptchaChange}
                  placeholder="Enter the letters you see in the image."
                  required
              />
            </center>
          </div>
          <center>
            <button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none 
            focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 
            mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            type="button" onClick={() => {
                getProof(currentAccount, captchaText);
            }}>Verify I'm Human</button>
          </center>
        </form>
          </div>
        : 
        <div></div>
      }
          {/* <center>
                  <button onClick={() => {
                      callAPI();
                      getCaptcha();
                    }} type="button" 
                  class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 
                  focus:outline-none bg-white rounded-lg border border-gray-200 
                  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 
                  focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 
                  dark:text-gray-400 dark:border-gray-600 dark:hover:text-white 
                  dark:hover:bg-gray-700 my-10">
                      Get Organizations
                  </button>
              </center> */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="search-area">
            <div onclick="hideallfunction()" id="hideall"></div>
            <div id="search-section-js" className="searchsection">
                <div role="search" className="search">
                    <input tabIndex="1" id="search-bar-js" className="searchbar bg-gray-50 border border-gray-300 
                  text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
                  dark:border-gray-600 dark:placeholder-gray-400 my-5
                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="search" aria-label="Search text" placeholder="Search for organization category: 'Arts, Education, Health, Legal, and Employment'..." name="search" />
                    {/* <button tabIndex="-1" className="searchbutton" id="close-img-js" aria-label="Cancel"><img src="../media/close/round_close_black_24dp.png" alt="cancel" class="closeimg globalsearchremove searchbutton" id="close-img-js" aria-label="Cancel" /></button>
                    <button tabIndex="2" className="searchbutton" id="search-img-js" aria-label="Search"><img src="../media/search/round_search_black_24dp.png" alt="search" class="searchimg" /></button> */}
                </div>
                <div className="middle">
                    <div className="borderbetween globalsearchremove"></div>
                </div>
                <div className="middle">
                <ul tabIndex="3" className="list globalsearchremove" style={{display:'none'}}>
                    <li className="section" role="option">Arts</li>
                    <li className="section" role="option">Education</li>
                    <li className="section" role="option">Health</li>
                    <li className="section" role="option">Legal</li>
                    <li className="section" role="option">Employment</li>
                    <li className="noresult">No Result</li>
                </ul>
                </div>
            </div>
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
                              <button onClick={() => {
                                setSelectedContract(name.contractAddress);
                                setOrg(name.name)
                    }} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Donate</button>
                          </td>
                      </tr>
                  ))}
                  </tbody>
              </table>
          </div>
      </main>
    </div>
  );
}

