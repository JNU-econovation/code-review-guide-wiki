const fs = require('fs')
const chalk = require('chalk')
const getNotes = ()=>'Your notes...'

const findNote = (title)=>{
    const foundNote = loadNotes().filter(note => note.title === title)

    if(foundNote.length > 0) return foundNote
    return 0
}

const removeNote = (title)=>{

    const notes = loadNotes()
    const notesToKeep = notes.filter(note=>note.title !== title)

    if(notesToKeep.length < notes.length){
        console.log(chalk.bgRed("Note removed!"))
        saveNotes(notesToKeep)
        return
    }

    console.log(chalk.bgGreen("No Note Found!"))
}


const addNote = (title, body)=>{
    const notes = loadNotes()

    if(findNote(title)){
        console.log(chalk.bgRed('Note title taken!'))
        return
    }
    
    notes.push({
        title : title,
        body : body
    })
        
    saveNotes(notes)
    console.log(chalk.bgGreen('New note Added'))
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote
}

