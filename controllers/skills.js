import * as skillsDB from '../data/skillsDB.js'

export {
    createSkill,
    findById,
    findAll,
    updateById,
    removeById
}

function createSkill(req, res, next) {
    skillsDB.createSkill(req.body, (error, skills) => {
        if(error) {
            req.error = error
        }
        return next()
    }) 
}

function findById(req, res) {
    skillsDB.findById(req.params.id, (error, skill) => {
        if(error) {
            return res.json(error)
        }
        return res.json(skill)
    })
}

function findAll(req, res) {
    skillsDB.findAll((error, skills) => {
        if(!error && req.error) {
            error = req.error
        }
        let skill = null
        return res.render('skills/all-skills', {error, skills, skill})
    })
    
}

function updateById(req, res, next) {
    skillsDB.updateById(req.params.id, req.body, (error, skills) => {
        if(error) {
            req.error = error
        }
        return next()
    })
}

function removeById(req, res) {
    skillsDB.removeById(req.params.id, (error, skills, skill) => {
        return res.render('skills/all-skills', {error, skills, skill})
    })
}