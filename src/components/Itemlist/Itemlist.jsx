import Item from "../Item/Item"

const ItemList = ({products}) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '4fr 4fr 4fr', gridTemplateRows: '4fr 4fr 4fr' }}>
            {
                products.map(prod => {
                    return (
                        <Item  key={prod.id} {...prod} />
                    )
                })
            }
        </div>
    )
}

export default ItemList