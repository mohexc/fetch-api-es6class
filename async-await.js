class EasyHTTP {
  async get(url) {
    const res = await fetch(url)
    return await res.json()
  }

  async post(url, data) {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data)
    })
    return await res.json()
  }
  // update
  async put(url, data) {
    const res = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data)
    })
    return await res.json()

  }
  // delete
  async delete(url, data) {
    const res = await fetch(url, {
      method: 'delete',
      headers: { 'Content-type': 'application/json' }
    })
    return await `Resource Deleted...`
  }
}