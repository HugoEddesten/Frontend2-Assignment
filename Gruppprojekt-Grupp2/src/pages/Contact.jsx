import styled from "styled-components"

const ContactPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const ContactPageContent = styled.div`
    margin: 0 25rem 2rem 25rem;
    padding: 1rem;
`

const Contact = () => {
    return (
        <div>
            <ContactPageDiv>
                <ContactPageContent>
                    <h2>Kontakta oss</h2>
                    <p>
                   
                        Vi strävar efter att ge dig den bästa möjliga upplevelsen när det gäller kundtjänst och support. Här finns information om hur du kan nå oss för att få svar på dina frågor eller dela dina tankar. <br /><br />

                        Behöver du hjälp med en beställning, har frågor om våra produkter eller bara vill prata garn? <br />
                        Vår kundtjänst är här för att hjälpa dig! <br /> <br />
                        Email: kundtjanst@superyarnstore.com <br />
                        Telefon: 08-123&nbsp;45&nbsp;67 <br />
                        Arbetstider: Mån-Fre 9:00-18:00 <br /><br />

                        Vi uppskattar din åsikt och strävar alltid efter att förbättra oss. Om du har feedback eller förslag, tveka inte att kontakta oss. <br /> <br />

                        Följ oss på sociala medier!<br />
                        Häng med i vårt garncommunity genom att följa oss på sociala medieplattformar. Dela dina projekt och ta del av våra senaste nyheter! <br />
                        Logga in via knappen längst upp till höger på sidan.<br /><br />

                        Har du andra frågor eller behöver hjälp med något specifikt? Vi ser fram emot att höra från dig och hjälpa till på alla sätt vi kan! <br /><br />

                        Tack för att du väljer Super Yarn Store för ditt garnäventyr!
                    </p>
                </ContactPageContent>
                
            </ContactPageDiv>
        </div>
    )
}

export default Contact