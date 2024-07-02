import { createContext, useState } from "react";
import run from "../config/gemini";

 export const Context=createContext();
 const ContextProvider=(props) =>{

    const [input,setInput]=useState("")
    const [recentPrompt,setRecentPrompt]=useState("")
    const [prevPrompt,setPrevPrompt]=useState([])
    const [showResult,setShowResult]=useState(false)
    const [loading,setLoading]=useState(false)
    const[resultData,setResultData]=useState("")

    const delatPara=(index,nextWord)=>{

        setTimeout(function(){

            setResultData(prev=>prev+nextWord)
        } ,75*index) 
    }
 const newChat=()=>{
    setLoading(false)
    setShowResult(false)

 }


    const onSet=async(prompt)=>{
        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;
        if (prompt!==undefined){
            response=await run(prompt)
            setRecentPrompt(prompt)

        }
        else{
            setPrevPrompt(prev=>[...prev,input])
            setRecentPrompt(input)
            response=await run(input)
        }
        
        let responseArray=response.split("**")
        let newresponse="";
        for (let i=0;i<responseArray.length;i++){
            if(i===0 || i%2!==1){
                newresponse+=responseArray[i];

            }
            else{
                newresponse+="<b>"+responseArray[i]+"</b>"
            }


        }
        let newResponse2=newresponse.split("*").join("</br>")
        let newresponseArray=newResponse2.split(" ");
        for(let i=0;i<newresponseArray.length;i++){
            const nextWord=newresponseArray[i];
            delatPara(i,nextWord+" ")
        }
        setLoading(false)
        setInput("")
        
    }
    


    const contextValue={
        prevPrompt,
        setPrevPrompt,
        onSet,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat

    }
    return (
        <Context.Provider value={contextValue}>
            {
                props.children
            }
        </Context.Provider>

    );

 }
 export default ContextProvider