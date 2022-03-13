import './css/PreviewImg.css';

function PreviewImg(props){
    return(
      <div className="previewImgContainer">
      <div className="previewImgBox">
        <div style={{display : "flex", justifyContent: "flex-end", width: "100%"}}>
            <button className="previewImgButton" onClick={()=>{props.setShowImg(false)}}>
                <i className="fas fa-times"></i></button>
        </div>
        <div className="imgBox">
            <img src={props.previewImg} 
                style={{ backgroundColor: "var(--color-leftPanel)" , maxHeight:"80%", maxWidth:"80%"}}
<<<<<<< HEAD
                alt={props.previewImg}  title='영수증 사진'
            />
=======
                alt={props.previewImg}  title={props.previewImg}
            />
            {
                console.log(props.previewImg)
            }
>>>>>>> 3e1a58410fc1ebb0a9aeda3f832837a964be3d43
        </div>
      </div>
    </div>
    )
    
  }
  
export default PreviewImg;