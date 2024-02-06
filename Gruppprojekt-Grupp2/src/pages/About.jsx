import styled from "styled-components"

const AboutPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const AboutPageContent = styled.div`
    margin: 0 30rem 2rem 30rem;
    padding: 1rem;
`

const AboutPageImg = styled.img`
    width: 25rem;
    object-fit: cover;

`

const About = () => {
    return (
        <div>
            <AboutPageDiv>
                    <AboutPageContent>
                        <h2>Om oss</h2>
                        <AboutPageImg src="../src/assets/superyarnstore_owners.jpg"></AboutPageImg>
                        <p>
                   
                            Välkommen till Super Yarn Store, en passionerad gemenskap av garnälskare som delar kärleken till kreativitet och handarbete. Grundat i år, 2024, har vi förvandlat vår entusiasm för garn till en digital oas där du kan upptäcka en färgrik värld av möjligheter. <br /><br />

                            Vi tror på kraften av handarbete och hur det kan förena människor över hela världen. Vår passion är att erbjuda ett brett utbud av garn av högsta kvalitet, från mjuka ullar till färgglada bomullstrådar, för att inspirera ditt nästa projekt. Varje nystan är noggrant utvalt för att möta våra kunders olika behov och önskemål. <br /><br />

                            Vi strävar efter att erbjuda garn av högsta kvalitet från ansvarsfulla källor. Vår miljömedvetenhet genomsyrar allt vi gör, och vi arbetar ständigt för att minska vår påverkan på planeten. När du handlar hos oss, kan du vara säker på att ditt val stöder både din kreativitet och en hållbar framtid. <br /><br />

                            Super Yarn Store är mer än bara en webbshop; det är en plats där likasinnade individer samlas för att dela sina projekt, idéer och erfarenheter. Anslut till vårt gemenskapliga forum, följ med i våra sticka-alongs och virkträffar, och upptäck det fantastiska nätverk av människor som delar din passion. <br /><br />

                            Vi är här för att stödja dig genom varje steg av din handarbetsresa. Vårt dedikerade team är redo att svara på dina frågor, erbjuda inspiration och se till att din upplevelse hos oss är enastående. Oavsett om du är nybörjare eller erfaren, är Super Yarn Store platsen där din kreativitet blomstrar. <br /><br />

                            Välkommen till vår värld av garn!
                        </p>
                    </AboutPageContent>
                    
            </AboutPageDiv>
        </div>
    )
}

export default About