/* eslint-disable react/prop-types */
export default function Btn({children, onClick}){
    return(
        <button className="btn" onClick={onClick}>{children}</button>
    )
}