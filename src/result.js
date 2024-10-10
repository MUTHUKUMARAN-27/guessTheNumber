import React from "react";
function Result ({secretno,term}) {
    let result;
    if(term){
    if(term > secretno){
        if(term > (secretno+3))
        {
            result='Too Higher';
        }
        else{
            result='Higher';
        }
        
    }
    else if(term < secretno){
        if(term < (secretno-3))
            {
                result='Too Lower';
            }
            else{
                result=' Lower';
            }
          
    }
    else if(term == secretno){
        result="Woohoo! Correct";
    }
    else{
        result="Enter valid input";
    }
}

    return <h3>You Gussed: {result}</h3>
}
export default Result;