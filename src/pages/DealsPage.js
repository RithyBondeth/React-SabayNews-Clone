import React from 'react'
import { dealsCategoryData, mainDealCategoryData } from '../data/category-data/dealsCategoryData'
import { DetailCategory } from '../components/DetailCategory'

export const DealsPage = () => {
    return (
        <div>
            <DetailCategory 
                mainCategory={mainDealCategoryData}
                subCategory={dealsCategoryData}
            />
        </div>
    )
}