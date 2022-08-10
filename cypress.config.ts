const { defineConfig } = require('cypress')
import { readPdf } from 'cypress/scripts/readPdf'
const { promisify } = require('util')
const pdf2html = require('pdf2html')

const toHtml = promisify(pdf2html.html)

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions,
    ) {
      on('task', {
        readPdf,
        toHtml,
      })
    },
    baseUrl: 'http://localhost:3000',
    trashAssetsBeforeRuns: false,
  },
})
