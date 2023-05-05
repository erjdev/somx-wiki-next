import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row items-center gap-4 justify-between">
      <NavLinkLogo />
      <NavLinkList>
        <NavLinkListItem href="/weapons">Weapons</NavLinkListItem>
        <NavLinkListItem href="/armor">Armor</NavLinkListItem>
        <NavLinkListItem href="/helmets">Helmets</NavLinkListItem>
        <NavLinkListItem href="/shields">Shields</NavLinkListItem>
        <NavLinkListItem href="/boots">Boots</NavLinkListItem>
        <NavLinkListItem href="/rings">Rings</NavLinkListItem>
        <NavLinkListItem href="/necks">Necks</NavLinkListItem>
      </NavLinkList>
      {/* <NavLinkList>
        <NavLinkListItem href="/items">Items</NavLinkListItem>
        <NavLinkListItem href="/quests">Quests</NavLinkListItem>
        <NavLinkListItem href="/locations">Locations</NavLinkListItem>
        <NavLinkListItem href="/ranks">Ranks</NavLinkListItem>
        <NavLinkListItem href="/monsters">Monsters</NavLinkListItem>
        <NavLinkListItem href="/spells">Spells</NavLinkListItem>
      </NavLinkList> */}
    </nav>
  )
}

const NavLinkList: React.FC<React.PropsWithChildren> = ({ children }) =>
  <ul className="flex flex-wrap lg:flex-nowrap items-center gap-4 p-4 text-sm">
    {children}
  </ul>;

const NavLinkListItem: React.FC<React.PropsWithChildren<{href: string}>> = ({ href, children }) =>
  <li className="opacity-80 scale-100 hover:opacity-100 hover:underline hover:scale-110 underline-offset-4 transition">
    <Link className="decoration-blue-700" href={href}>
      {children}
    </Link>
  </li>;

const NavLinkLogo: React.FC = () =>
  <Link href="/" className="text-2xl font-bold tracking-widest mx-4 flex-shrink-0 border-b-4 border-blue-700">SoMX Wiki</Link>;

export default Navbar;
