import styled from "styled-components"

const ReturnsPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 2rem 0;
`

const ReturnsPageContent = styled.div`
    margin: 0 2rem 2rem 2rem;
    background-color: #F0F0F0;
    padding: 1rem;
`

const Returns = () => {
    return (
        <div>
            <ReturnsPageDiv>
                    <ReturnsPageContent>
                    
                    </ReturnsPageContent>
                        <h2>Byten och returer</h2>
                        <p>
                            Om du ångrar ditt köp har du rätt att returnera varan inom 14 dagar från mottagningsdatumet. Varan måste returneras i oanvänt skick och i originalförpackning.<br /><br />

                            Återbetalning behandlas inom rimlig tid efter att vi har mottagit den returnerade varan. Eventuell återbetalning kommer att göras till det ursprungliga betalningsmedlet.<br /><br />

                            För frågor om våra produkter eller andra ärenden, kontakta vår kundtjänst via: <br />
                            Email: kundtjanst@superyarnstore.com <br />
                            Telefon: 08-123&nbsp;45&nbsp;67 <br /> <br />
                        </p>
                    

            </ReturnsPageDiv>
        </div>
    )
}

export default Returns