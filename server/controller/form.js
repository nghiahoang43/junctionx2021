import { Card } from "../model/card.js";
import { Form } from "../model/form.js";
import { OK, FAIL, NOT_FOUND } from "../shared/response.js";

const createForm = async (req, res, next) => {
  try {
    const bodyData = req.body;
    let { cards } = bodyData;
    const form = new Form(bodyData);
    const result = await Form.create(form);
    const allCard = await Promise.all(
      cards.map((card) => {
        return Card.find({_id: card});
      })
    );
    // const newCard = {
    //   cardId: existedCard._id,
    //   label: existedCard.label,
    //   type: existedCard.type,
    //   isRequired: existedCard.isRequired,
    //   options: existedCard.options,
    // };
    return res.json(OK([result, allCard]));
  } catch (error) {
    return res.json(FAIL([]));
  }
};

const updateForm = async (req, res, next) => {
  try {
    const bodyData = req.body;
    const formId = bodyData._id;
    const updateForm = { _id: formId };
    const newValues = {
      title: bodyData.title,
      cards: bodyData.cards,
    };
    const result = await Form.updateOne(updateForm, newValues);
    return res.json(OK([result]));
  } catch (error) {
    return res.json(FAIL([]));
  }
};

const getAllForm = async (req, res, next) => {
  try {
    const result = await Form.find();
    return res.json(OK([result]));
  } catch (error) {
    return res.json(FAIL([]));
  }
};

const getSingleForm = async (req, res, next) => {
  try {
    const formId = req.params._id;
    const result = await Form.findOne({ _id: formId });
    return res.json(OK([result]));
  } catch (error) {
    return res.json(FAIL([]));
  }
};

export { updateForm, getSingleForm, getAllForm, createForm };
