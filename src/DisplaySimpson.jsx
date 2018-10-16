import  React  from  'react';

const  DisplaySimpson = ({ simpson }) => {
    return (
        <div  className="DisplaySimpson">
            <img  src={simpson.image}  alt="picture"  />
            <ul>
                <li>quote : {simpson.quote}</li>
                <li>
                    character : {simpson.character}
                </li>
                <li>characterDirection : {simpson.characterDirection}</li>
                
            </ul>
        </div>
    );
};

export  default  DisplaySimpson;
