function Menu(props) {
    return (
        <button className='main--body--items'>
            <span>{props.icon}</span>
            <span>{props.title}</span>
        </button>
    )
}

export default Menu;