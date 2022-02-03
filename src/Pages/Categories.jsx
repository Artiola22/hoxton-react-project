import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CategoryCard from "../components/CategoryCard"

function Categories(){
    //fetch categories from server
    const [categories, setCategories] = useState([])

    useEffect (() => {
        fetch('http://localhost:3000/categories')
        .then( resp => resp.json())
        .then( categoriesFromServer => setCategories(categoriesFromServer))
    }, [])


    return(
        <section className="categories-container main-wrapper">
            <ul className="categories-container__list"> 
            {categories.map(category => 
                 <CategoryCard key={category.id} category={category} />
             )}
            

               
                
            </ul>

        </section>
    )
}
export default Categories