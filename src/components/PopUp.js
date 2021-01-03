import React from 'react'

 function PopUp({openBtn , setopenBtn , 
                 image , title ,
                 content , avatar,
                 name , role}) {
    return (
       <> { openBtn ? <div>
           <div className = "PopUp">
                <div className = "PopUp-overlay">
                    <div className ="PopUp-container">
                        <span className ="close-PopUp" onClick={() =>setopenBtn(false)}>&times;</span>
                        <img src={image} alt = " "/>
                        <h2 className="PopUp-title">{title}</h2>
                        <p className ="PopUp-content">{content}</p>
                        <div className="author-info">
                            <div className="author-img">
                               <img src={avatar} className ="avatar-bag" alt=" " />
                            </div>
                            <span className ="author-role">{name} - {role}</span>
                        </div>
                    </div>
                </div>
           </div>
       </div> : null} </>)
}

export default PopUp;