#!/usr/bin/env node
import cli from 'commander'
import { create } from './utils/menu'

cli
  .command('description', 'See package description')
  .alias('d')
  .action(() => {
    console.log('Create react components from command line')
  })

cli
  .command('create', 'Creates a react component')
  .alias('c')
  .action(() => {
    create()
  })

cli.parse(process.argv)