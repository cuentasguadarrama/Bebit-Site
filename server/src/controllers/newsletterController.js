import db from "../../db.js";
import { v4 as uuidv4 } from "uuid";

// Add suscriber to the database
db.connect();

const subscribeNewsletter = async (req, res) => {
  const { email } = req.body;
  const uuid = uuidv4();
  try {
    await db.query(
      "INSERT INTO subscriber (subscriber_email, subscriber_uuid) VALUES ($1, $2)",
      [email, uuid]
    );

    // Log the request body to the console
    console.log("Newsletter subscription request received:", req.body);
    // Respond with a success message
    res.status(200).send(`Subscription request received for email: ${email}`);
  } catch (err) {
    // Log the error to the console
    console.log(err);
    // Respond with an error message
    res.status(200).send(`This email is already subscripted.`);
  }
};

export { subscribeNewsletter };
