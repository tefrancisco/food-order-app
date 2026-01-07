import { useContext } from 'react'
import CartContext from '../store/CartContext.jsx'
import UserProgressContext from '../store/UserProgressContext.jsx'
import Modal from './UI/Modal.jsx'
import { currencyFormatter } from '../util/formatting.js'
import Button from './UI/Button.jsx'

export default function Cart() {
    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price , 0
    )

    function handleCloseCart() {
        userProgressCtx.hideCart()
    }

    return (
        <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
            <h2>Your cart</h2>
            <ul>
                {cartCtx.items.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.quantity}
                    </li>
                ))}
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart}>Close</Button>
                <Button textOnly onClick={handleCloseCart}>Go to Checkout</Button>
            </p>
        </Modal >
    )
}