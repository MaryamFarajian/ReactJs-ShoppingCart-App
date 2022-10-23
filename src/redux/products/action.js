import {SET_PRODUCTS} from "./actionType";
const products=[
    {
        id:1,
        name:"Samsung Galaxy S20",
        description:"lorem ipsum dolor sit amet,consectetur adipisicing elit.",
        image:"https://images.samsung.com/is/image/samsung/p6pim/nz/sm-g780glvdxnz/gallery/nz-galaxy-s20-fe-g780-384785-sm-g780glvdxnz-thumb-426053832",
        price:300,
    },
    {
        id:2,
        name:"Iphone 14 pro max",
        description:"lorem ipsum dolor sit amet,consectetur adipisicing elit.",
        image:"https://farako.com/uploads/18-Productspicture22-09-07-11-55-04-3669.jpg",
        price:700,
    },
    {
        id:3,
        name:"Samsung Note 20 Ultra",
        description:"lorem ipsum dolor sit amet,consectetur adipisicing elit.",
        image:"https://dkstatics-public.digikala.com/digikala-products/24c4c717fd8709df7f90aee1977f715d0bc2f6f2_1654517766.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        price:800,
    },
    {
        id:4,
        name:"Samsung S22 Ultra",
        description:"lorem ipsum dolor sit amet,consectetur adipisicing elit.",
        image:"https://gandoom.com/wp-content/uploads/2022/06/samsung-galaxy-s22-ultra-512gb-1.jpg",
        price:600,
    },
]
export const getProducts=()=>{
return{ 
    type:SET_PRODUCTS,
    payload:products
}
}