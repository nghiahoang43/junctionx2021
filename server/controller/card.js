import { Card } from "../model/card.js";
import { OK, NOT_FOUND, FAIL } from "../shared/response.js";

const generateCard = async (req, res, next) => {
  try {
    const bodyData = req.body;
    const card = new Card(bodyData);
    const result = await Card.create(card);
    return res.json(OK([result]));
  } catch (e) {
    return res.json(FAIL([]));
  }
};

const deleteCard = async (req, res, next) => {
  try {
  } catch (error) {}
};

const getSingleCard = async (req, res, next) => {
  try {
    const cardId = req.params._id;
    const result = await Card.find({ _id: cardId });
    return res.json(OK([result]));
  } catch (e) {
    return res.json(FAIL([]));
  }
};

export { generateCard, getSingleCard };
