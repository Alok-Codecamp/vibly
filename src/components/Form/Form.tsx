"use client";
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { CiMicrophoneOn, CiSearch } from 'react-icons/ci';


declare global{
  interface Window{
   SpeechRecognition?: any;
    webkitSpeechRecognition?: any;
  }
}

const Form = () => { 
     const form = useForm();
     const [isListening, setIsListening] =useState(false);
     const [recoginition, setRecogintion] = useState<any>(null);
const { 
    register, 
    handleSubmit,
    setValue,
    
    } = form;
    const SpeechRecognition =
       typeof window !== "undefined" && (window.SpeechRecognition || window.webkitSpeechRecognition);

       const startSpeechRecogintion = () =>{
        console.log('starting')
        if(!SpeechRecognition) {
          alert("Speech Recognition is not supported in this browser.");
          return;
        }
        
       

       const recog  = new SpeechRecognition();
        recog.continuous = false;
        recog.interimResults = true;
        recog.lang = "en-US";

        recog.onStart = ()=>setIsListening(true);
        recog.onend = ()=>{
          setIsListening(false);
          console.log("Speech recognition ended.");
        };

        recog.onresult = (event: any) =>{
          let transcript = "";

          for (let i = event.resultIndex; i < event.results.length; i++){
            transcript += event.results[i][0].transcript;
          }
          setValue("searchText", transcript);
        }


        recog.start();
        setIsListening(true);
        setRecogintion(recog);
      }
      const stopListening = () =>{
        recoginition.stop();
        setIsListening(false);
      }
        
  
  // const watchedSearchText = watch("searchText", "");
//   console.log(watchedSearchText)
  const onSubmit = (data: any) => {
    console.log(data);
    
  }


  return (
    
        <form action="" onSubmit={handleSubmit(onSubmit)} className='flex items-center justify-center'>
              <CiSearch className='-mr-10'/>
              <Input type="text" {...register("searchText")}  placeholder="search on vibly" 
              className='rounded-3xl pl-14'
              />
              {
                !isListening?(
                  <button type='button' onClick={startSpeechRecogintion} className='ml-2 text-blue-500'><CiMicrophoneOn  color='black' size={24} className='-ml-10'/></button>
                ):(
                  <button type='button' onClick={stopListening} className='-ml-10 text-red-500 bg-gray-400 rounded-full p-1'>Stop</button>
                  )
              }
            </form>
    
  )
}

export default Form