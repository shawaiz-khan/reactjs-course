import "../App.css";

export default function NavBar() {
    const navItems = [
        "Home",
        "About",
        "Products",
        "Contact",
    ]
    return (
        <div className='nav-container'>
            <h1 className='nav-logo'>My First Site</h1>
            <ul className='nav-list'>
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className='nav-list-item'
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div >
    )
}
