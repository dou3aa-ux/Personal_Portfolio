import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
    <nav className="
        flex items-center justify-between
        px-[8%] py-5
        border-b border-pink-50 
    ">

      {/* Logo / name */}
        <NavLink to="/" className="font-bold text-xl text-pink-400 transition-opacity hover:opacity-80">
        Assila Douaa.dev
        </NavLink>

      {/* Links */}
        <div className="flex gap-8">
        {[
            { to: '/',         label: 'Home'     },
            { to: '/about',    label: 'About'    },
            { to: '/projects', label: 'Projects' },
            { to: '/gallery',  label: 'Gallery'  },
            { to: '/vlogs',    label: 'Vlogs'    },
            { to: '/contact',  label: 'Contact'  },
        ].map(link => (
            <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
                `text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'text-pink-400' 
                  : 'text-gray-400 hover:text-pink-400'
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