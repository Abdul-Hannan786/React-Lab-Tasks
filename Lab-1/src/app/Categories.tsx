"use client"

 
type CategoryType = {
    categories: string[]
}

const Categories = ({categories}: CategoryType) => {

    const selectCategory = (categoryName: string) => {
        console.log(categoryName)
    }

  return (
    <>

        {
            categories.map((category, i) => (
                <button 
                     key={category + i} 
                     onClick={() => {selectCategory(category)}} 
                     style={{padding: "5px", marginLeft: "10px"}}>{category}
                </button>
            ))
        }

    </>
  )
  
}

export default Categories