import HorizontalProductList from "../components/HorizontalProductList"
import Temporary2 from '../assets/garn/bomull.jpg'
import Temporary1 from '../assets/Temporary1.webp'

export const items = [
    {name: "Massa material", price: 79, materials: ["Akryl", "Ull", "Alpacka", "Polyester"], imgName: Temporary1},
    {name: "Ull Tunn Kit", price: 99, materials: ["Ull"], imgName: Temporary2},
    {name: "Bomull Kit", price: 79, materials: ["Bomull"], imgName: Temporary1},
    {name: "Alpacka Tunn Kit", price: 59, materials: ["Alpacka"], imgName: Temporary2},
    {name: "Bomull Kit", price: 79, materials: ["Bomull"], imgName: Temporary1},
    {name: "Ull Tunn Kit", price: 99, materials: ["Ull"], imgName: Temporary2},
]

export default function Cart() {
    return (
        <div>
            <h1>Välkommen till Super Yarn Company!</h1>
            <HorizontalProductList products={items}/>
        </div>
        
    )
}