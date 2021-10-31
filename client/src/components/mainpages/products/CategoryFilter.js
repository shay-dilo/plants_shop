import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function FilterCategory() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories
    const [category, setCategory] = state.productsAPI.category
    const [search, setSearch] = state.productsAPI.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <div className="filter_menu">
            <div className="row">
                <a name="category" value={category} onClick={handleCategory} >
                   
              
                     <a name="category" value={category} onClick={handleCategory} >
                <span class="btn-group"> <button className="btn_cat" value=''>All Products  </button></span>
        
                </a> 
                   
                   
                   
                    {
                        categories.map(category => (
                             <button className="btn_cat" value={"category=" + category._id} key={category._id}>
                                {category.name}  &nbsp;
                            </button>
                            
                        ))
                    }
                </a>
            </div>
        </div>
    )
}


export default FilterCategory
