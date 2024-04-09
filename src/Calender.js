
function Calender(props) {
    return (
        <>
        
            <div style={{ border: '2.5px red', borderStyle: 'dashed', borderRadius: '10px', padding: '10px', margin: '5px', backgroundImage: `url(${props.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                <div >
                    <p style={{ float: "left", color: "black", padding: '0px', margin: '0px', fontFamily: 'revert', fontSize: '18px' }}>
                        <b>{props.date}</b>
                    </p>

                    <p style={{ float: "right", color: "#000000", padding: '0px', margin: '0px', fontFamily: 'revert', fontSize: '18px' }}>
                        <b></b>
                    </p>
                </div>

                <div >
                    <p style={{ color: "black", textAlign: 'center', color: "#376dc4", fontSize: '35px', fontFamily: '-moz-initial', marginBottom: '20px', paddingBottom: '0px' }}>
                        <b>{props.des}</b>
                    </p>

                    <p style={{ color: "black", textAlign: 'center', color: "#376dc4", fontSize: '15px', fontFamily: '-moz-initial', margin: '0px', padding: '0px' }}>
                        {props.slogan}
                    </p>
                </div>

                
            </div>
        </>
    )
}

export default Calender;