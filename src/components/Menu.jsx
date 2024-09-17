function Menu(props) {
    return (
        <button className='main--body--items' onClick={props.toggle}>
            <span>{props.icon}</span>
            <span>{props.title}</span>
        </button>
    )
}

export default Menu;