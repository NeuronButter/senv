#! /usr/bin/env node
const fs = require('fs')
const path = require('path')

let arg = process.argv[2] || 'dev'
if (arg == '-q') arg = 'dev'

let log = msg => {
  if (process.argv[process.argv.length - 1] != '-q') {
    console.log(msg)
  }
}

console.log(path.resolve(process.cwd(), './.env'))

if (fs.existsSync(path.resolve(process.cwd(), './.env'))) {
  fs.unlinkSync(path.resolve(process.cwd(), './.env'))
  log('✅ .env file deleted / unlinked')
} else log("⏩ .env file doesn't exist")

if (fs.existsSync(path.resolve(process.cwd(), `./.env.${arg}`))) {
  fs.symlinkSync(
    path.resolve(process.cwd(), `./.env.${arg}`),
    path.resolve(process.cwd(), './.env')
  )
  log(`✅ .env.${arg} file linked`)
} else console.log('❌ No such file .env.' + arg)
