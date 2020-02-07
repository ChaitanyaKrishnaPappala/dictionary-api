const {client} = require('../axiosClient')

describe('Create dictionary', () => {
  it('should create a new dictionary and return 201 status code', async () => {
    const res = await client.post('')
    expect(res.status).toEqual(201)
  })
  it('should create a new dictionary and return not null, defined, nonempty id', async () => {
    const res = await client.post('')
    expect(res.data.id).not.toEqual((undefined || null || ''))
  })
})
