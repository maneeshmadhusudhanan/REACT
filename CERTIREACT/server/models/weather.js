const { Schema} =require('mongoose');
const { model} =require('mongoose');

const certiSchema = new Schema({
    SELECT_COURSE: { type: String, required: true },
    CERTIFICATE_ID: { type: String, required: true },
    CANDIDATE_NAME: { type: String, required: true },
    SELECT_GRADE: { type: String, required: true },
    ISSUE_DATE: {type: String, required: true}
});

const courses = model('courses', courseSchema);

module.exports = courses;
