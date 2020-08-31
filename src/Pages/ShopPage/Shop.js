import React from 'react'
import SHOP_DATA from './shopData'

import CollectionPreview from  '../../Components/Collection-preview/CollectionPreview'

 const Shop = () => {

    const [collections] = React.useState(SHOP_DATA)

    return (
        <div className="shopPage">
           {
               collections.map(({ id, ...otherCollectionProps}) => (
                   <CollectionPreview key={id} {...otherCollectionProps}/>
               ))
           }
        </div>
    )
}

export default Shop
