"use client"

import { Menu } from "@/components/vectors"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/lib/redux/store"
import { setSideMenuState } from "@/lib/redux/features/category/categorySlice"

export default function MenuButton() {
  const dispatch = useDispatch()
  const { isEnabledSideMenu } = useSelector((state: RootState) => state.category)
  const enableSideMenu = () => {
    if (!isEnabledSideMenu) {
      dispatch(setSideMenuState(true))
      document.body.style.backgroundColor = '#BFBFBF'
    }
  }

  return (
    <Menu className={"h-8 w-8 text-gray0 absolute left-4 flex items-center cursor-pointer"}
          role="menu" onClick={enableSideMenu}/>
  )
}