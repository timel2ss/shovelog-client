import { category, categoryItem } from "@/api/category"
import Link from "next/link"
import { Inter } from "next/font/google"

type CategoryProps = {
  category: category
}

const inter = Inter({ subsets: ['latin'] })

export default function Category({ category }: CategoryProps) {
  console.log(category)
  return (
    <>
      <ul>
        <Link href={"#"}>
          <div className={`h-10 pt-1.5 mt-1 border-t-gray4 border-t flex items-center text-gray0 ${inter.className}`}>
            {category.name}
          </div>
        </Link>

        {category.items.map((categoryItem: categoryItem) =>
          <li key={categoryItem.id}>
            <Link href={"#"}>
              <div className={`h-9 pl-2.5 flex items-center text-gray2 ${inter.className}`}>
                {`- ${categoryItem.itemName}`}
              </div>
            </Link>
          </li>
        )}
      </ul>
    </>
  )
}