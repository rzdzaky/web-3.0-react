import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import { Loader } from './'

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-white";

const Input = ({placeholder,name,type,value,handleChange}) => (
    <input 
        placeholder={placeholder}
        type={type}
        step="0.0001" 
        value={value}
        onChange={(e) => handleChange(e,name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none white-glassmorphism" />
)

const Welcome = () => {
    const connectWallet = () => {

    }

    return (
        <div className="flex w-full justify-center py-10 items-center">
            <div className="flex md:flex-row flex-col justify-between items-start md:p-2 py-12 px-4 ">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-3xl md:text-5xl text-white text-gradient py-1">
                        Send Crypto <br /> across the world
                    </h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base"> 
                        Explore the crypto world. Buy and sell cryptocurrencies easily on krypto.
                    </p>
                    <button 
                        type="button"
                        onClick={connectWallet}
                        className="flex flex-row items-center justify-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2526bd]">
                        <p className="text-white text-base text-semibold">Connect Wallet</p>
                    </button>

                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className={`rounded-tl-2xl ${commonStyles}`}>
                            Reliability
                        </div>
                        <div className={commonStyles}>
                            Security
                        </div>
                        <div className={`rounded-tr-2xl ${commonStyles}`}>
                            Ethereum
                        </div>
                        <div className={`rounded-bl-2xl ${commonStyles}`}>
                            WEB 3.0
                        </div>
                        <div className={commonStyles}>
                            Low Fees
                        </div>
                        <div className={`rounded-br-2xl ${commonStyles}`}>
                            Blockchain
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1 justify-start items-center w-full md:mt-0 mt-10">
                    <div className="p-3 flex flex-col justify-between items-between rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
                        <div className="flex justify-between items-start">
                            <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                <SiEthereum fontSize={21} color='#fff' />
                            </div>
                            <BsInfoCircle fontSize={17} color='#fff' />
                        </div>
                        <div className="">
                            <p className="text-white font-light text-sm">
                                Address
                            </p>
                            <p className="text-white font-semibold text-lg mt-1">
                                Ethereum
                            </p>
                        </div>
                    </div>
                    <div className="p-2 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <Input placeholder="Address To" name="addressto" type="text" handleChange={()=>{}} />
                        <Input placeholder="Ammount (ETH)" name="ammount" type="number" handleChange={()=>{}} />
                        <Input placeholder="Keyword (Gift)" name="keyword" type="text" handleChange={()=>{}} />
                        <Input placeholder="Enter Message" name="message" type="text" handleChange={()=>{}} />
                        
                        

                        <div className="h-[1px] w-full bg-gray-400 my-2" />
                        {true ? (
                            <Loader />
                        ) : (
                            <button 
                                type="button" 
                                // onClick={handleSubmit} 
                                className="text-white mt-2 border-[1px] w-full p-2 border-[#3d4f7c] rounded-full cursor-pointer">
                                Send Now
                            </button>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Welcome
