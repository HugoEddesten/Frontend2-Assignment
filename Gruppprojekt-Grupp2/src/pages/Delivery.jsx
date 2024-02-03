import styled from "styled-components"

const DeliveryPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const DeliveryPageContent = styled.div`
    margin: 0 25rem 2rem 25rem;
    padding: 1rem;
`

const Delivery = () => {
    return (
        <div>
            <DeliveryPageDiv>
                    <DeliveryPageContent>
                        <h2>Leverans</h2>
                        <p>
                            Fraktkostnaden beror på leveransdestination och val av leveransalternativ. Den exakta kostnaden visas vid utcheckningen.<br /><br />

                            Vi strävar efter att behandla och skicka din order så snabbt som möjligt. Leveranstiderna kan variera beroende på leveransdestination och valt fraktsätt.<br /><br />

                            Kontakta oss omedelbart om det uppstår problem med leveransen eller om du inte har mottagit din order inom den förväntade tidsramen.<br /><br />
                            Email: kundtjanst@superyarnstore.com <br />
                            Telefon: 08-123&nbsp;45&nbsp;67 <br /> <br />
                        </p>
                    </DeliveryPageContent>
            </DeliveryPageDiv>
        </div>
    )
}

export default Delivery