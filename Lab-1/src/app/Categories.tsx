"use client"

 
type CategoryType = {
    categories: string[]
    setSelectedCat: (category: string) => void
}

const Categories = ({categories, setSelectedCat}: CategoryType) => {

  return (
    <>

        {
            categories.map((category, i) => (
                <button 
                     key={category + i} 
                     onClick={() => {setSelectedCat(category)}} 
                     style={{padding: "5px", marginLeft: "10px"}}>{category}
                </button>
            ))
        }

    </>
  )
  
}

export default Categories