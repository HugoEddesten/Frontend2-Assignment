import styled from "styled-components"

const DeliveryPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 2rem 0;
`

const DeliveryPageContent = styled.div`
    margin: 0 2rem 2rem 2rem;
    background-color: #F0F0F0;
    padding: 1rem;
`

const Delivery = () => {
    return (
        <div>
            <DeliveryPageDiv>
                    <DeliveryPageContent>
                        <h2>Leverans</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ex, quibusdam repudiandae, velit impedit quam et ad quia, vel incidunt nobis sequi sunt nostrum quo hic iure ratione eaque deserunt?
                        Enim dolorem a deleniti facere, officiis ducimus, quod architecto officia veritatis odio alias libero magni non facilis minus totam explicabo? Exercitationem vitae placeat recusandae doloremque praesentium et itaque deserunt tempora?
                        Repellat vel recusandae magnam nisi beatae, nulla culpa dolorum facere obcaecati voluptatem laborum quo necessitatibus, dolor fugiat exercitationem ullam iusto cum assumenda. Sint dolorum odit impedit quod praesentium! Cupiditate, incidunt.</p>
                    </DeliveryPageContent>
                    <DeliveryPageContent>
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
                    </DeliveryPageContent>
            </DeliveryPageDiv>
        </div>
    )
}

export default Delivery