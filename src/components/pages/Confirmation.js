const Confirmation = ({paymentData}) => {
    return (
        <section className="text-center">
            <h3>Confirm payment</h3>
            <p>Send: {paymentData.amount} ZMW</p>
            <p>To: {paymentData.receiverAccountNumber}</p>
            <p>From account: {paymentData.payerAccountNumber}</p>
            <p>You will get a prompt to confirm on your phone</p>
        </section>

    )
}

export default Confirmation;