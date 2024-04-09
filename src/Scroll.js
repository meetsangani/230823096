function Scroll(props) {
    return (
        <>
        <div className="scroll-container" style={{ display: "flex",backgroundColor:"#333", overflow: "auto", whiteSpace: "nowrap",padding: "10px"}}>
             <img src={props.image} alt="Cinque Terre" />
             <img src={props.image} alt="Forest" />
             <img src={props.image} alt="Northern Lights" />
             <img src={props.image} alt="Mountains" />
             <img src={props.image} alt="Mountains" />
             <img src={props.image} alt="Mountains" />
             <img src={props.image} alt="Mountains" />
             <img src={props.image} alt="Mountains" />
             <img src={props.image} alt="Mountains" />
        </div>
        </>
    )
}

export default Scroll;