import { MercadoPagoConfig, Payment } from "mercadopago";
import "dotenv/config";
const createPayment = async (req, res) => {
  const client = new MercadoPagoConfig({
    accessToken: process.env.APIMERCADOPAGO,
  });
  const payment = new Payment(client);

  payment
    .create({
      body: {
        transaction_amount: 0.01,
        description: "Camisa gola polo - 1 Und",
        payment_method_id: "pix",
        payer: {
          email: "costaantonio238@gmail.com",
        },
      },
    })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getPayment = async (req, res) => {
  const client = new MercadoPagoConfig({
    accessToken: process.env.APIMERCADOPAGO,
  });
  const payment = new Payment(client);

  const idPayment = req.query.id;
  payment
    .get({
      id: idPayment,
    })
    .then(
      ({
        id,
        status,
        date_approved,
        date_created,
        date_last_updated,
        date_of_expiration,
        payment_method,
        point_of_interaction,
      }) => {
        const returnedData = {
          id,
          status,
          date_approved,
          date_created,
          date_last_updated,
          date_of_expiration,
          payment_method,
          point_of_interaction,
        };
        res.json(returnedData);
      }
    )
    .catch((err) => {
      console.error(err);
    });
};

const cancelPayment = async (req, res) => {
  const client = new MercadoPagoConfig({
    accessToken: process.env.APIMERCADOPAGO,
  });
  const payment = new Payment(client);

  const idPayment = req.query.id;
  payment
    .cancel({
      id: idPayment,
    })
    .then(
      ({
        id,
        status,
        date_approved,
        date_created,
        date_last_updated,
        date_of_expiration,
        payment_method,
        point_of_interaction,
      }) => {
        const returnedData = {
          id,
          status,
          date_approved,
          date_created,
          date_last_updated,
          date_of_expiration,
          payment_method,
          point_of_interaction,
        };
        res.json(returnedData);
      }
    )
    .catch((err) => {
      console.error(err);
    });
};

const refoundPayment = async (req, res) => {
  const id = req.query.id;
  const url = `${process.env.URLMERCADOPAGOAPI}/${id}/refunds`;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.APIMERCADOPAGO}`,
    },
  })
    .then(() => {
      res.json({
        status: 200,
        message: "Sua reembolso foi concluído",
        id,
      });
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => console.log("Sua reembolso foi concluído"));
};

const statusPayment = async (req, res) => {
  const id = req.query.id;
  res.render("mercadopago/resultado", {
    paymentIdController: id,
  });
};

export {
  createPayment,
  getPayment,
  cancelPayment,
  refoundPayment,
  statusPayment,
};
