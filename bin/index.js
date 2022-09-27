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

if (fs.existsSync(path.resolve(__dirname, '../.env'))) {
  fs.unlinkSync(path.resolve(__dirname, '../.env'))
  log('✅ .env file deleted / unlinked')
} else log("⏩ .env file doesn't exist")

if (fs.existsSync(path.resolve(__dirname, `../.env.${arg}`))) {
  fs.symlinkSync(
    path.resolve(__dirname, `../.env.${arg}`),
    path.resolve(__dirname, '../.env')
  )
  log(`✅ .env.${arg} file linked`)
} else console.log('❌ No such file .env.' + arg)
