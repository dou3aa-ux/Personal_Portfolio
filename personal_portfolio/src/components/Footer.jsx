function Footer() {
    function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="flex items-center justify-between px-[8%] py-6 border-t border-gray-100 text-sm text-gray-400">
        <p>Made with 💜 by Your Name · {new Date().getFullYear()}</p>
        <button
            onClick={scrollToTop}
            className="hover:text-violet-400 transition-colors duration-200"
        >
        Back to top ↑
        </button>
        </footer>
    )
}

export default Footer