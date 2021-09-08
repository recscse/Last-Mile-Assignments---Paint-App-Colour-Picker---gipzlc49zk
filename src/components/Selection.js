import React,{useState} from 'react';

const Selection = (props) => {
    const [sty, upStyle] = useState({ background: '' });
    const up = () => {
        console.log("up");
        console.log(props.ik);
        props.applyColor(upStyle)
    };
    return (
        <div onClick={up} className="fix-box" style={sty}>
            <h2 className="Subheading">Selection</h2>
        </div>
    )
}
export default Selection;