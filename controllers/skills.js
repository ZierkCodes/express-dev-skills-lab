import * as skillsDB from '../data/skillsDB.js'

export {
    createSkill,
    findById,
    findAll,
    updateById,
    removeById
}

function createSkill(req, res) {
    skillsDB.createSkill(req.body, (error, skills) => {
        res.redirect('/skills')
    }) 
}

function findById(req, res) {
    skillsDB.findById(req.params.id, (error, skill) => {
        if(error) {
            return res.json(error)
        }
        return res.json(skill)
        // res.render('/skills/single-skill', {})
    })
}

function findAll(req, res) {
    skillsDB.findAll((error, skills) => {
        if(error) {
            return res.json(error)
        }
        return res.json(skills)
        // res.render('/skills/all-skills', {})
    })
}

function updateById(req, res) {
    skillsDB.updateById(req.params.id, req.body, (error, skill) => {
        console.log(error)
        console.log(skill)
        if(error) {
            return res.json(error)
        }
        return res.json(skill)

    })
}

function removeById(req, res) {
    skillsDB.removeById(req.params.id, (error, skills) => {
        if(error) {
            return res.json(error)
        }
        return res.json(skills)
    })
}