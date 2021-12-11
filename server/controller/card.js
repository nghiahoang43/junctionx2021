import { Card } from "../model/card.js";
import { OK, NOT_FOUND, FAIL } from "../shared/response.js";

const createCard = async (req, res, next) => {
  try {
    const bodyData = req.body;
    let { label, type, isRequired, count} = bodyData;
    if (type !== '')
    console.log(count)
    if (label !== "" && type !== "" && isRequired !== "") {
      const card = new Card(bodyData);
      const result = await Card.create(card);
      console.log(count)
      return res.json(OK([result]));
    }
    return res.json(FAIL([]))
  } catch (e) {
    return res.json(FAIL([]));
  }
};

const deleteCard = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
}

export { createCard };
