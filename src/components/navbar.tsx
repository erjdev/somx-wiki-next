import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex flex-col pb-4 sm:flex-row sm:pb-0 items-center gap-4 justify-between">
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
  <Link href="/" className="pt-2 relative text-2xl font-bold tracking-widest mx-4 flex-shrink-0 flex items-center gap-2 text-purple-100">
    <img className="absolute -bottom-2 -right-4 w-8 h-8" src="/pictures/bandana-transparent.png" alt="bandana" />
    <img className="absolute -bottom-3 -left-4 w-8 h-8" src="/pictures/shortsword-transparent.png" alt="bandana" />
    <span className="border-b-4 border-[rgb(42,5,86)]">SoMX Wiki</span>
  </Link>;

export default Navbar;
