import styled from "styled-components"

const SuccessfulCheckoutPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const SuccessfulCheckoutPageContent = styled.div`
    margin: 0 25rem 2rem 25rem;
    padding: 1rem;
`

const SuccessfulCheckout = () => {
    return (
        <div>
            <SuccessfulCheckoutPageDiv>
                    <SuccessfulCheckoutPageContent>
                    <h2>Du har bra smak! Lyckad beställning - på egen sida?</h2>
                        <p>1000 tack för din beställning!<br />
                            Du kommer höra från oss igen när dina varor har packats och skickats. <br />
                            Ha det bra så länge! <br /><br />
                            Gladeliga hälsningar från Super Yarn Company <br /><br />
                            
                            Roliga/trevliga bilder?<br />
                            Nåt glatt i alla fall, kanske en selfie på oss tre, för att pigga upp <br /> <br />

                             Har du frågor så tveka inte att kontakta oss. <br />
                             Du kan nå oss på e-postadressen kundservice@superyarncompany.se eller via telefon på 08-123&nbsp;45&nbsp;67. Alla vardagar 10.00-12.00, 12.30-16.00.
                            
                            </p>
                    </SuccessfulCheckoutPageContent>
            </SuccessfulCheckoutPageDiv>
        </div>
    )
}

export default SuccessfulCheckout