export{
    createSkill,
    findById,
    findAll,
    updateById,
    removeById
}


const skills = [
    {_id: 10001, name: 'HTML', isDifficult: false, aptitude: 5, description: 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.'},
    {_id: 10002, name: 'CSS', isDifficult: false, aptitude: 4, description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'},
    {_id: 10003, name: 'JavaScript', isDifficult: true, aptitude: 3, description: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'},
    {_id: 10004, name: 'Express', isDifficult: true, aptitude: 2, description: 'Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.'}
]

let idTracker = 10005


const createSkill = (data, callback) => {
    try {
        if(data.name === '') throw new Error ('Please enter a valid skill name.')
        if(typeof JSON.parse(data.isDifficult) !== 'boolean') throw new Error ('Please choose a difficulty.')
        if(parseInt(data.aptitude) === null || parseInt(data.aptitude) === NaN) throw new Error ('Please select your aptitude for this skill.')
        if(data.description === '') throw new Error ('Please enter a description.')
        skills.push({
            _id: idTracker,
            name: data.name,
            isDifficult: JSON.parse(data.isDifficult),
            aptitude: parseInt(data.aptitude),
            description: data.description
        })
        idTracker++
        return callback(null, skills)
    } catch (error) {
        console.log(error)
        return callback(error, null)
    }
}

const findById = (id, callback) => {
    try {
      const skill = skills.find(skill => skill._id === parseInt(id))
      if (!skill) throw new Error ('No skill was found.')
      return callback(null, skill)
    } catch (error) {
      console.log(error)
      return callback(error, null)
    }
  }

const findAll = (callback) => {
    try {
        if(skills.length === 0) throw new Error ('There are no skills. Try creating one!')
        return callback(null, skills)
    } catch (error) {
        return callback(error, null)
    }
}

const updateById = (id, data, callback) => {
    try {
        if(data.name === '') throw new Error ('Please enter a valid skill name.')
        if(typeof JSON.parse(data.isDifficult) !== 'boolean') throw new Error ('Please choose a difficulty.')
        if(parseInt(data.aptitude) === null || parseInt(data.aptitude) === NaN) throw new Error ('Please select your aptitude for this skill.')
        if(data.description === '') throw new Error ('Please enter a description.')
        const index = skills.findIndex(skill => skill._id === parseInt(id))
        skills[index].name = data.name
        skills[index].isDifficult = JSON.parse(data.isDifficult)
        skills[index].aptitude = parseInt(data.aptitude)
        skills[index].description = data.description
        return callback(null, skills)
    } catch (error) {
        return callback(error, null)
    }
}

const removeById = (id, callback) => {
    try {
        const skill = skills.find(skill => skill._id === parseInt(id))
        if (!skill) throw new Error ('No skill was found.')
        const index = skills.findIndex(skill => skill._id === parseInt(id))
        skills.splice(index, 1)
        return callback(null, skills)
    } catch (error) {
        return callback(error, null)
    }
}