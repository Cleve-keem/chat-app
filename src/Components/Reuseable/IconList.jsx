function IconList({icons, onClick}){
    return(
        <ul className="flex gap-3">
            {icons.map((icon, index) => (
                <li
                    onClick={onClick}
                    key={index}>
                    <img className="w-4" src={icon} alt="" /> 
                </li>
            ))}
        </ul>
    )
}
export default IconList;