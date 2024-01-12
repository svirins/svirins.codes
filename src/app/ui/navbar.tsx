import { NAV_LINKS } from '@/app/lib/constants'
import NavItem from '@/app/ui/nav-item'
export function Navbar() {
  return (
    <div className="flex flex-col justify-center">
      <nav className="flex items-center justify-between w-full relative  mx-auto  pb-8 md:pb-16">
        <div>
          {NAV_LINKS.map((item, index) => (
            <NavItem key={index} href={item.href} text={item.text} />
          ))}
        </div>
      </nav>
    </div>
  )
}
