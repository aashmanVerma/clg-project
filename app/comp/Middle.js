"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { ethers } from "ethers";

export default function Middle() {
  const [amount, setAmount] = useState(false);
  const [visible, setVisible] = useState(false);

  const donate = async()=>{
    try {
        if (!window.ethereum) {
            throw new Error("no wallet found")
        } else {
            await window.ethereum.send("eth_requestAccounts");
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const tx = await signer.sendTransaction({
                to: "0x53770cf2C02C7f08FE4c2849a686e4eaF0D3d454",
                value: ethers.utils.parseEther(amount)
            })
            console.log(tx);
            if (tx) {
                setVisible(true);
            }
        }
    } catch (error) {
        console.log(error.message);
    }
  }

  return (
    <div className="w-[85%] sm:w-[75%] md:w-[65%] lg:w-[60%] mx-auto my-10">
      <div className="flex flex-col gap-y-4 content-center flex-wrap lg:flex-row lg:gap-x-4">
        <div className="w-[19rem]">
          <Card>
            <CardHeader>
              <CardTitle>Red Cross Society</CardTitle>
              <CardDescription>
                Emergency Relief Fund for Natural Disasters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="pic1" height={200} width={300} src="/c1.jpeg" />
              <br />
              <Input
                type="number"
                placeholder="amount in eth"
                onChange={(e) => {
                  if (e.target.value != null && e.target.value != "") {
                    setAmount(e.target.value);
                  }
                }}
              />
            </CardContent>
            <CardFooter>
              <Button onClick={donate}>Donate</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="w-[19rem]">
          <Card>
            <CardHeader>
              <CardTitle>Save the Children</CardTitle>
              <CardDescription>
                Education Program for Underprivileged Children
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="pic1" height={200} width={300} src="/c2.jpg" />
              <br />
              <Input
                type="number"
                placeholder="amount in eth"
                onChange={(e) => {
                  if (e.target.value != null && e.target.value != "") {
                    setAmount(e.target.value);
                  }
                }}
              />
            </CardContent>
            <CardFooter>
              <Button onClick={donate}>Donate</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      {
        visible && 
        alert("Thanks for the donation")
      }
    </div>
  );
}
