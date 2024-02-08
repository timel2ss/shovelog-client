import { Logo, Search } from "@/components/vectors"
import MenuButton from "@/components/header/MenuButton"

export default function Header() {
  return (
    <>
      <header className={"h-14 border-b-gray3 border-b px-4 flex items-center justify-center"}>
        <MenuButton/>
        <Logo className={"w-24 text-gray0 cursor-pointer"}
              role="img"/>
        <Search className={"h-8 w-8 text-gray0 absolute right-4 flex items-center cursor-pointer"}
                role="search"/>
      </header>
    </>
  )
}