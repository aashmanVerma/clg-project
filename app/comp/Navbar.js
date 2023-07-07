"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import Web3 from 'web3';


export default function Navbar() {

    const [wallet, setWallet] = useState(false);

    const connectToMetaMask = async ()=>{
        if (typeof window.ethereum != "undefined") {
            try {
                const data = await window.ethereum.request({method : 'eth_requestAccounts'})
                setWallet(data[0]);
                console.log(data[0]);
            } catch (err) {
                console.log("error is "+err.message);
            }
        } else {
            alert("please setup metamask first")
        }
    }


  return (
    <div className='w-[85%] sm:w-[75%] md:w-[65%] lg:w-[60%]  mx-auto py-4 px-2 flex justify-between items-center'>
        <div className='flex gap-x-4 items-center'>
        <svg width="25px" height="25px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M20 12v9.4a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6V12M21.4 7H2.6a.6.6 0 00-.6.6v3.8a.6.6 0 00.6.6h18.8a.6.6 0 00.6-.6V7.6a.6.6 0 00-.6-.6zM12 22V7M12 7H7.5a2.5 2.5 0 110-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        <span className='font-semibold'>Charity</span>
        </div>
        <Button>
            <span className='text-sm md:text-base' onClick={connectToMetaMask}>{wallet?`Connected to ${wallet.slice(0,6)}`: "Connect Metamask"}</span>
        </Button>
    </div>
  )
}
