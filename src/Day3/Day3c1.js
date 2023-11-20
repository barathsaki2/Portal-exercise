import React ,{useState} from "react";
function ToggleMessage(){
    const[showMessage,setShowMessage]=useState(false);

    const toggleMessage=()=>{
        setShowMessage(!showMessage);
    };
    return(
        <div>
            <button onClick={toggleMessage}>{showMessage ? 'hide message': 'ShowMessage'}</button>
            {showMessage && <p>HI!! How are you!</p>}

        </div>
    );
}
