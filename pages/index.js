import React, { useState } from "react";

function IndexPage() {


  const [words, setWords] = useState("this is a random list of words")
  const [input, setInput] = useState('')

  return (
    <div>
      <div className="grid h-screen place-items-center">
        <div className="flex flex-col gap-y-12">
          <div>
            {
              words.split("").map((e, key)=>{
                if(input.charAt(key).match(e)){
                  return <span className="text-green-500">{e}</span>
                }else{
                  return <span className="text-red-600">{e}</span>  
                }
              })
            }
            </div>
          <div>
            <textarea placeholder="Type here" onChange={e=>setInput(e.target.value)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
