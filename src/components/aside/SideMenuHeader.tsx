import { Inter } from "next/font/google"
import { Logo } from "@/components/vectors"

const inter = Inter({ subsets: ['latin'] })

export default function SideMenuHeader() {
  return (
    <div className={"border-b-gray4 border-b-2"}>
      <div className={"flex items-center justify-center pt-14"}>
        <Logo className={"w-24 text-gray0 cursor-pointer"}/>
      </div>
      <p className={`text-center text-xs pt-4 text-gray2 ${inter.className}`}>shovel + blog</p>
      <p className={`text-center text-xs py-2 text-gray2 ${inter.className}`}>삽질하며 배운 내용을 정리합니다</p>
    </div>
  )
}
