
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
    <style>
    {`
        @import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Qwitcher+Grypen:wght@400;700&family=Style+Script&display=swap');
    `}
</style>
  <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <h1 className="mx-2 fancy-font">Ask.i</h1>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/akshay-sasikumar-52b3a1245/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
        </a>
        <a href="https://github.com/akshaysasikumar30" target="_blank" rel="noopener noreferrer">
            <FaGithub />
        </a>
        <a href="https://www.instagram.com/ask.i__/?next=%2F" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
        </a>
    </div>
  </nav>
  </>
  )
}

export default Navbar