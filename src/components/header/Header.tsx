import { Logo, Menu, Search } from "@/components/vectors";

export default function Header() {
  return (
    <header className={"h-14 border-b-gray2 border-b px-4 flex items-center justify-center"}>
      <Menu className={"h-8 w-8 text-gray0 absolute left-4 flex items-center"}
            role="menu"/>
      <Logo className={"w-24 text-gray0"}
            role="img"/>
      <Search className={"h-8 w-8 text-gray0 absolute right-4 flex items-center"}
              role="search"/>
    </header>
  )
}