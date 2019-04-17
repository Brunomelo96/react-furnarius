#!/usr/bin/env node
import cli from 'commander'
import { create } from './utils/menu'

cli
  .command('description')
  .alias('d')
  .description('See package description')
  .action(() => {
    console.log('Create react components from command line')
  })

cli
  .command('create')
  .alias('c')
  .description('Creates a react component')
  .action(() => {
    create()
  })

cli.parse(process.argv)