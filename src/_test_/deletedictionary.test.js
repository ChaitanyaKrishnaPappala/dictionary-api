const {client} = require('../axiosClient')

describe('Delete a dictionary', () => {
  const id1 = '5cd61b21-4181-4de3-9e68-4e1e63a2e803'
  const id2 = 'whoami'
  it('delete dictionary with an existing id', async () => {
    const res = await client.delete(`/${id1}`)
    expect(res.status).toEqual(204)
  })
  it('delete dictionary without passing id', async () => {
    try {
      const res = await client.delete('')
      expect(res.status).toEqual(204)
    } catch (e) {
      expect(e.response.status).toEqual(404)
    }
  })
  it('delete dictionary passing invalid id', async () => {
    try {
      const res = await client.delete(`/${id2}`)
      expect(res.status).toEqual(204)
    } catch (e) {
      expect(e.response.status).toEqual(404)
    }
  })
})
