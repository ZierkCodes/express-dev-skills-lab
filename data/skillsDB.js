export{
    createSkill,
    findById,
    findAll,
    updateById,
    removeById
}


const skills = [
    {_id: 10001, name: 'HTML', isDifficult: false, aptitude: 5},
    {_id: 10002, name: 'CSS', isDifficult: false, aptitude: 4},
    {_id: 10003, name: 'JS', isDifficult: true, aptitude: 3},
    {_id: 10004, name: 'express', isDifficult: true, aptitude: 2}
]

let idTracker = 10005


const createSkill = (data, callback) => {
    try {
        if(data.name === '') throw new Error ('Please enter a valid skill name.')
        if(typeof JSON.parse(data.isDifficult) !== 'boolean') throw new Error ('Please choose a difficulty.')
        if(parseInt(data.aptitude) === null || parseInt(data.aptitude) === NaN) throw new Error ('Please select your aptitude for this skill.')
        skills.push({
            _id: idTracker,
            name: data.name,
            isDifficult: JSON.parse(data.isDifficult),
            aptitude: parseInt(data.aptitude)
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
        const index = skills.findIndex(skill => skill._id === parseInt(id))
        skills[index].name = data.name
        skills[index].isDifficult = JSON.parse(data.isDifficult)
        skills[index].aptitude = parseInt(data.aptitude)
        return callback(null, skills[index])
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