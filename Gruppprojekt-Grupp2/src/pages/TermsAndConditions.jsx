import styled from "styled-components"

const TermsAndConditionsPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    margin: 2rem 0;
`

const TermsAndConditionsPageContent = styled.div`
    margin: 0 2rem 2rem 2rem;
    background-color: #F0F0F0;
    padding: 1rem;
`

const TermsAndConditions = () => {
    return (
        <div>
            <TermsAndConditionsPageDiv>
                    <TermsAndConditionsPageContent>
                        <h2>Köpvillkor</h2>
                        <p>
                            Vi strävar efter att erbjuda korrekt information om våra produkter, inklusive bilder och beskrivningar. Vid eventuella frågor eller förtydliganden, kontakta vår kundtjänst innan du gör din beställning. <br /><br />

                            Alla priser anges i den valuta som anges på vår webbplats. Priserna inkluderar moms.<br /><br />

                            En orderbekräftelse skickas till den e-postadress du anger vid beställningen. Kontrollera att alla uppgifter är korrekta och kontakta oss omedelbart om något verkar felaktigt.<br /><br />

                            Vi accepterar olika betalningsmetoder, inklusive kreditkort och andra elektroniska betalningsalternativ. Betalningen debiteras vid beställningstillfället.<br /><br />
                            Super Yarn Store förbehåller sig rätten att ändra dessa köpvillkor. Eventuella ändringar kommer att publiceras på vår webbplats och träder i kraft omedelbart efter publicering.<br /> <br />

                            Tack för att du väljer Super Yarn Store! Vi är här för att göra din garnshopping till en fantastisk upplevelse.
                      
                        </p>
                    </TermsAndConditionsPageContent>
                </TermsAndConditionsPageDiv>
        </div>
    )
}

export default TermsAndConditions