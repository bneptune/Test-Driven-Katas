const {expect} = require('chai')
const wrap = require('./wrap')

describe('wrap', () => {
    it ('Returns an empty string if empty string is passed in', () => {
        expect(wrap('', 10)).to.equal("")
    })
})