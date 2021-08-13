import '../../index.css'

const Header = () => {
  return (
    <div className="header">
      <ul className="ul_header">
        <li className="li_header">
          <a className="a_header" href="/">
            Home
          </a>
        </li>
        <li className="li_header">
          <a className="a_header" href="/post">
            Post
          </a>
        </li>
      </ul>
    </div>
  )
}
export default Header
