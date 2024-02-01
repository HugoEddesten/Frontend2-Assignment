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
<b> Beställning och Betalning</b> <br /><br />

Vi strävar efter att erbjuda korrekt information om våra produkter, inklusive bilder och beskrivningar. Vid eventuella frågor eller förtydliganden, kontakta vår kundtjänst innan du gör din beställning. <br /><br />

Alla priser anges i den valuta som anges på vår webbplats. Priserna inkluderar moms.<br /><br />

En orderbekräftelse skickas till den e-postadress du anger vid beställningen. Kontrollera att alla uppgifter är korrekta och kontakta oss omedelbart om något verkar felaktigt.<br /><br />

Vi accepterar olika betalningsmetoder, inklusive kreditkort och andra elektroniska betalningsalternativ. Betalningen debiteras vid beställningstillfället.<br /><br />

Fraktkostnaden beror på leveransdestination och val av leveransalternativ. Den exakta kostnaden visas vid utcheckningen.<br /><br />

Vi strävar efter att behandla och skicka din order så snabbt som möjligt. Leveranstiderna kan variera beroende på leveransdestination och valt fraktsätt.<br /><br />

Kontakta oss omedelbart om det uppstår problem med leveransen eller om du inte har mottagit din order inom den förväntade tidsramen.<br /><br />

Om du ångrar ditt köp har du rätt att returnera varan inom 14 dagar från mottagningsdatumet. Varan måste returneras i oanvänt skick och i originalförpackning.<br /><br />

Återbetalning behandlas inom rimlig tid efter att vi har mottagit den returnerade varan. Eventuell återbetalning kommer att göras till det ursprungliga betalningsmedlet.<br /><br />

För frågor om våra produkter eller andra ärenden, kontakta vår kundtjänst via: <br />
Email: kundtjanst@superyarnstore.com <br />
Telefon: 08-123&nbsp;45&nbsp;67 <br /> <br />

Super Yarn Store förbehåller sig rätten att ändra dessa köpvillkor. Eventuella ändringar kommer att publiceras på vår webbplats och träder i kraft omedelbart efter publicering.<br /> <br />

Tack för att du väljer Super Yarn Store! Vi är här för att göra din garnshopping till en fantastisk upplevelse.
                      
                        </p>
                    </TermsAndConditionsPageContent>
                </TermsAndConditionsPageDiv>
        </div>
    )
}

export default TermsAndConditions