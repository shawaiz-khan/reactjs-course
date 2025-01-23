import "../App.css";

export default function NavBar() {
    const navItems = [
        "Home",
        "About",
        "Products",
        "Contact",
    ]
    return (
        <div className='flex bg-neutral-100 justify-between items-center px-5 py-4'>
            <h1 className='font-bold text-2xl'>My First Site</h1>
            <ul className='flex gap-4'>
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className='cursor-pointer hover:text-red-700 transition-all duration-300 ease-in'
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div >
    )
}
