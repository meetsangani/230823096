function Radiobutton(props) {
    return (
        <>
        <label style={{fontSize : '22px', fontFamily : 'fantasy'}}> 
            <input type="radio" value={props.typeName} onClick={ (e) =>props.setType(e.target.value)} checked={props.type === props.typeName} style={{border: "20px solid #EFE5CE" , height:'18px',width:'18px' , marginLeft:'50px' , marginTop:'15px',marginBottom:'15px'}} />
            {props.typeName}
          </label>
        </>
    )
}

export default Radiobutton;