export default function CartPanel({ cartItems, removeFromCart, clearCart, sendOrderToWhatsapp, translate }) {
    const subtotal = cartItems.reduce((total, item) => total + item.priceNumber, 0);
    const tax = subtotal * 0.10;
    const total = subtotal + tax;

    const formatPrice = (value) => `$${value.toFixed(2)}`;

    return (
        <aside className="cart-panel">
            <div className="cart-header">
                <span className="cart-icon">🛒</span>
                <div>
                    <h3>{translate("cartTitle")}</h3>
                    <p>{cartItems.length} {translate("cartItems")}</p>
                </div>
            </div>

            {cartItems.length === 0 ? (
                <p className="cart-empty">{translate("emptyCart")}</p>
            ) : (
                <>
                    <div className="cart-list">
                        {cartItems.map((item) => (
                            <div className="cart-item" key={item.cartId}>
                                {item.image && (
                                    <img
                                        className="cart-item-image"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                )}

                                <div className="cart-item-info">
                                    <strong>{item.name}</strong>
                                    <span>{formatPrice(item.priceNumber)}</span>
                                </div>

                                <button onClick={() => removeFromCart(item.cartId)}>
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <div>
                            <span>{translate("subtotal")}</span>
                            <strong>{formatPrice(subtotal)}</strong>
                        </div>

                        <div>
                            <span>{translate("tax")}</span>
                            <strong>{formatPrice(tax)}</strong>
                        </div>

                        <div className="cart-total">
                            <span>{translate("total")}</span>
                            <strong>{formatPrice(total)}</strong>
                        </div>
                    </div>

                    <button className="cart-whatsapp-btn" onClick={sendOrderToWhatsapp}>
                        {translate("sendWhatsappOrder")}
                    </button>

                    <button className="cart-clear-btn" onClick={clearCart}>
                        {translate("clearCart")}
                    </button>
                </>
            )}
        </aside>
    );
}
