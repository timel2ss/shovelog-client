import { category, fetchCategories } from "@/api/category"
import Category from "@/components/aside/category/Category"

export default async function Categories() {
  const categories: category[] = await fetchCategories()

  return (
    <div className={"pb-1 border-b-gray4 border-b"}>
      <div className={"h-9 my-2 flex items-center text-gray0 font-bold"}>
        Categories
      </div>
      {categories.map((category: category) =>
        <Category key={category.id} category={category}/>
      )}
    </div>
  )
}