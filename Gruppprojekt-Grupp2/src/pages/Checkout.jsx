import styled from "styled-components"

const CheckoutPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 2rem 0;
`

const CheckoutPageContent = styled.div`
    margin: 0 2rem 2rem 2rem;
    background-color: #F0F0F0;
    padding: 1rem;
`

const Checkout = () => {
    return (
        <div>
            <CheckoutPageDiv>
                    <CheckoutPageContent>
                        <form action="">
                            <label htmlFor="">Hejsan</label>
                            <input type="text" />
                            <button><a href="./SuccessfulCheckout">Beställ</a></button>
                        </form>
                    </CheckoutPageContent>
            </CheckoutPageDiv>
        </div>
    )
}

export default Checkout