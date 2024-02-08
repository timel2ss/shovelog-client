"use client"

import { useEffect, useRef } from "react"
import { setSideMenuState } from "@/lib/redux/features/category/categorySlice"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import { RootState } from "@/lib/redux/store"

export default function SideMenu({
  children
}: {
  children: React.ReactNode
}) {
  const sideMenuRef = useRef<HTMLDivElement>(null)
  const isEnabledSideMenu = useAppSelector((state: RootState) => state.category.isEnabledSideMenu)
  const dispatch = useAppDispatch()

  const handleClickOutside = (event: Event) => {
    if (sideMenuRef.current && !sideMenuRef.current.contains(event.target as Node)) {
      dispatch(setSideMenuState(false))
      document.body.style.backgroundColor = 'white'
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isEnabledSideMenu])

  return (
    <aside ref={sideMenuRef}
           className={isEnabledSideMenu
             ? "fixed top-0 -left-60 translate-x-60 duration-300 ease-in-out " +
             "bg-white w-64 h-full border-r border-r-gray5 overflow-y-auto z-10 px-8"
             : "w-0"}>
      <div className={isEnabledSideMenu ? "" : "hidden"}>
        {children}
      </div>
    </aside>
  )
}