import ScoreModel from "./score.model.js";

async function getAll() {
    return ScoreModel.find().sort({ Score: -1 });
}

async function get(id) {
    return ScoreModel.findById(id);
}

async function getName(name) {
    return ScoreModel.findOne({ Name: name });
}

async function update(id, value) {
    return ScoreModel.findByIdAndUpdate(id,
        { Score: value },
        { new: true } // To return the updated document
    );
}

async function create(data) {
    const newUser = new ScoreModel({ Name: data.Name, Score: data.Score });
    return newUser.save();
}

async function remove(id) {
    ScoreModel.findByIdAndDelete(userId);
}

export {get, getAll, update, create, remove, getName}