export type category = {
  id: number,
  name: string,
  description: string,
  items: categoryItem[]
}

export type categoryItem = {
  id: number,
  itemName: string,
  description: string
}

export async function fetchCategories() {
  try {
    const url: string = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/categories`
    const response: Response = await fetch(url)
    return await response.json()
  } catch (e) {
    console.log('Error occurs on fetching API', e)
  }
}