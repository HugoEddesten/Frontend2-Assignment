import styled from "styled-components"

const CartPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 2rem 0;
`

const CartPageContent = styled.div`
    margin: 0 2rem 2rem 2rem;
    background-color: #F0F0F0;
    padding: 1rem;
`

const Cart = () => {
    return (
        <div>
            <CartPageDiv>
                    <CartPageContent>
                        <h2>Varukorg</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ex, quibusdam repudiandae, velit impedit quam et ad quia, vel incidunt nobis sequi sunt nostrum quo hic iure ratione eaque deserunt?
                        Enim dolorem a deleniti facere, officiis ducimus, quod architecto officia veritatis odio alias libero magni non facilis minus totam explicabo? Exercitationem vitae placeat recusandae doloremque praesentium et itaque deserunt tempora?
                        Repellat vel recusandae magnam nisi beatae, nulla culpa dolorum facere obcaecati voluptatem laborum quo necessitatibus, dolor fugiat exercitationem ullam iusto cum assumenda. Sint dolorum odit impedit quod praesentium! Cupiditate, incidunt.</p>
                    </CartPageContent>
                    <CartPageContent>
                        <h2>Ok</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ex, quibusdam repudiandae, velit impedit quam et ad quia, vel incidunt nobis sequi sunt nostrum quo hic iure ratione eaque deserunt?
                        Enim dolorem a deleniti facere, officiis ducimus, quod architecto officia veritatis odio alias libero magni non facilis minus totam explicabo? Exercitationem vitae placeat recusandae doloremque praesentium et itaque deserunt tempora?
                        Repellat vel recusandae magnam nisi beatae, nulla culpa dolorum facere obcaecati voluptatem laborum quo necessitatibus, dolor fugiat exercitationem ullam iusto cum assumenda. Sint dolorum odit impedit quod praesentium! Cupiditate, incidunt.</p>
                    </CartPageContent>
            </CartPageDiv>
        </div>
    )
}

export default Cart