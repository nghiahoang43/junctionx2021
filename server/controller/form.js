import { Form } from "../model/form.js";
import { OK, FAIL, NOT_FOUND } from "../shared/response.js";

const createForm = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
}

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

export { getSingleForm, getAllForm };
