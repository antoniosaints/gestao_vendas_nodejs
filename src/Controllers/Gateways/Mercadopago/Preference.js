import { MercadoPagoConfig, Preference } from "mercadopago";
import "dotenv/config";

const createPreference = async (req, res) => {
  const client = new MercadoPagoConfig({
    accessToken: process.env.APIMERCADOPAGO,
  });
  const preference = new Preference(client);

  const {products} = req.body;

  const itens = []

  products.forEach(p => {
    itens.push({
      title: "Camisa",
      description: "Camisa gola polo - 1 Und",
      quantity: 1,
      currency_id: "BRL",
      unit_price: 20
    })
  })

  preference
    .create({
      body: {
        items: itens,
        payer: {
          name: "Antonio",
          surname: "Costa",
          email: "costaantonio238@gmail",
        },
        back_urls: {
          success: "http://localhost:3001/",
          failure: "http://localhost:3001/",
          pending: "http://localhost:3001/",
        },
        auto_return: "approved",
        notification_url: "https://webhook.cas.net.br/webhook",
      },
    })
    .then((response) => res.json(response)).catch((err) => console.error(err));
};

export {
  createPreference
};
