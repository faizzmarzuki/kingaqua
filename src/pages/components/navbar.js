export default function Navbar() {
    return(
    <div className="flex flex-row gap-10 bg-black/70 px-6 py-4 sticky top-0 z-30 backdrop-blur">
        <a href="#" className="sm:text-xl hover:text-yellow-400 text-white text-2xl">Home</a>
        <a href="#" className="sm:text-xl hover:text-yellow-400 text-white text-2xl">About</a>
        <a href="#" className="sm:text-xl hover:text-yellow-400 text-white text-2xl">Services</a>
        <a href="#" className="sm:text-xl hover:text-yellow-400 text-white text-2xl">Blog</a>
        <a href="#" className="sm:text-xl hover:text-yellow-400 text-white text-2xl">Contact</a>
    </div>
    )
}