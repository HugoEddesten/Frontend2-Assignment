import './global.css'
import NavigationBar from './components/NavigationBar.jsx'
import Card from './components/Card.jsx'
import ProductPage from './pages/ProductPage.jsx'

function App() {
    return (
        <div>
            <div>
            <NavigationBar />
            </div>
            
            <div>
            <Card title="Garn" price={89} priceUnit="SEK" />
            </div>
            <ProductPage />
        </div>
    )
}

export default App