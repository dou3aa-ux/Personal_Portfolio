import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
    <nav className="
        flex items-center justify-between
        px-[8%] py-5
        /* --- UPDATED COLORS HERE --- */
        bg-[#fff5f7] 
        border-b-2 border-pink-100 
        sticky top-0 z-50
    ">

      {/* Logo / name */}
        <NavLink to="/" className="font-bold text-xl text-pink-500 transition-opacity hover:opacity-80">
          Assila Douaa.dev
        </NavLink>

      {/* Links */}
        <div className="flex gap-8">
        {[
            { to: '/',         label: 'Home'     },
            { to: '/about',    label: 'About'    },
            { to: '/projects', label: 'Projects' },
            { to: '/vlogs',    label: 'Vlogs'    },
            { to: '/contact',  label: 'Contact'  },
        ].map(link => (
            <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
                `text-sm font-bold transition-all duration-200 px-3 py-1 rounded-full ${
                isActive
                  ? 'text-white bg-pink-400'
                  : 'text-pink-400 hover:bg-pink-50'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

    </nav>
  )
}

export default Navbar