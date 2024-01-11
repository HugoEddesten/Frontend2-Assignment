import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: red;
`

function NavigationBar() {
return (
    <nav>
        <a href="">Super Yarn Company</a>
        <a href="">Super Yarn Company</a>
        <a href="">Super Yarn Company</a>
        <a href="">Super Yarn Company</a>
    </nav>
    )
}

export default NavigationBar