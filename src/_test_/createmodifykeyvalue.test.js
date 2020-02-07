const {client} = require('../axiosClient')

describe('Create or modify key value pairs', () => {
  const id = 'a72e322d-2d5e-4607-8954-391673a0609d'
  let key = 'testmodifykey1' + Math.random()
  let body = {
    value: 'testmodifyvalue1' + Math.random()
  }
  it('should create a new key/value pair', async () => {
    const res = await client.post(`/${id}/keys/${key}`, body)
    expect(res.status).toEqual(200)
  })
  it('should modify an existing key/value pair', async () => {
    key = 'testmodifykey1'
    body = {
      value: 'newtestmodifyvalue2'
    }
    const res = await client.post(`/${id}/keys/${key}`, body)
    expect(res.status).toEqual(200)
  })
  it('should modify an existing key/value pair by not passing a key', async () => {
    body = {
      value: 'testmodifyvalue2'
    }
    try {
      const res = await client.post(`/${id}/keys`, body)
      expect(res.status).toEqual(204)
    } catch (e) {
      expect(e.response.status).toEqual(404)
    }
  })
})
