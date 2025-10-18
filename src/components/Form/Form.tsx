"use client";
import React, { useState } from 'react'
import { set, useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { CiSearch } from 'react-icons/ci';


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
    watch,
  formState: { errors}
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
        recog.onend = ()=> setIsListening(false);

        recog.onresult = (event: any) =>{
          let transcript = "";

          for (let i = event.resultIndex; i < event.results.length; i++){
            transcript += event.results[i][0].transcript;
          }
          setValue("searchText", transcript);
        }


        recog.start();
        setRecogintion(recog);
      }
      const stopListening = () =>{
        recoginition.stop();
        setIsListening(false);
      }
        
  
  const watchedSearchText = watch("searchText", "");
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
                  <button type='button' onClick={startSpeechRecogintion} className='ml-2 text-blue-500'>Start</button>
                ):(
                  <button type='button' onClick={stopListening} className='ml-2 text-red-500'>Stop</button>
                  )
              }
            </form>
    
  )
}

export default Form