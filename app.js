console.log('starting app')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

const argv = yargs.argv
const command = process.argv[2]
console.log('process', process.argv)
console.log('yargs', argv)

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log('note created')
    console.log('------')
    console.log(`title: ${note.title}`)
    console.log('------')
    console.log(`body: ${note.body}`)
    console.log('------')
  } else {
    console.log('note already exist')
  }
} else if (command === 'list') {
  notes.getAll(argv.title, argv.body)
} else if (command === 'read') {
  notes.getNote(argv.title, argv.body)
} else if (command === 'remove') {
  notes.removeNote(argv.title, argv.body)
} else {
  console.log('command not recognized')
}
