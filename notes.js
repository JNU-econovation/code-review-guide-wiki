const fs = require('fs')
const chalk = require('chalk')

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
    
    const duplicateNote = notes.find((note)=>note.title === title)

    if(duplicateNote){
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
const getNotes = ()=>chalk.blue('Your notes...')

const listNotes = ()=>{
    const notes = loadNotes()
    
    console.log(getNotes())
    notes.forEach(note =>console.log(note.title))
    
}

const readNote = (title)=>{
    const notes = loadNotes()
    const foundNote = notes.find(note=>note.title === title)
    if(!foundNote){
        console.log(chalk.red("No Note Found!"))
        return
    }

    console.log(chalk.bgGreen(foundNote.title) + chalk.blue(' ' + foundNote.body))
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
}

