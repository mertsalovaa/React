import React from 'react';

const Photo = ({ src }) => {
   const styles = {
       heigth: "20px",
       outline: "none"
    //    width: "20px"
   }
    return (
        <div className="d-flex justify-content-between">
            <img className="img-thumbnail" src={src} alt="..." />
       <button className="btn" onClick={Delete()} style={styles}><i class="fas fa-times"></i></button>
        </div>
    )
}

function Delete(event)
{

}

export default Photo;