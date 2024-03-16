const gerenciaPagamentoWebhook = (req, res) => {
    console.log("Webhook");
    res.json(req.body);
}

export {
    gerenciaPagamentoWebhook
}