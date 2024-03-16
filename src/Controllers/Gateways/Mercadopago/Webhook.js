const gerenciaPagamentoWebhook = (req, res) => {
    console.log("Webhook");
    res.json({
        status: 200
    });
}

export {
    gerenciaPagamentoWebhook
}