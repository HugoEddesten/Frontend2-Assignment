import styled from "styled-components"

const ContactPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 2rem 0;
`

const ContactPageContent = styled.div`
    margin: 0 2rem 2rem 2rem;
    background-color: #F0F0F0;
    padding: 1rem;
`

const Contact = () => {
    return (
        <div>
            <ContactPageDiv>
                <ContactPageContent>
                    <h2>Checkout</h2>
                    <p>
                        Här ska det ligga ett formulär
                    </p>
                </ContactPageContent>
                <ContactPageContent>
                    <h2>Sidomeny med kundvagnen</h2>
                    <p>Här ligger kundvagnen</p>
                </ContactPageContent>
            </ContactPageDiv>
        </div>
    )
}

export default Contact