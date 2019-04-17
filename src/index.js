#!/usr/bin/env node
import cli from 'commander'
import { create } from './utils/menu'

cli
  .command('description')
  .alias('d')
  .action(() => {
    console.log('Creates a react component for you')
  })

cli
  .command('create')
  .alias('c')
  .action(() => {
    create()
  })

cli.parse(process.argv)