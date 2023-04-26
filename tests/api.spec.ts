import{expect, test} from '@playwright/test'


test.describe.parallel('Simple API testing', ()=>{
    const baseURL= 'https://reqres.in/api'

    test('API Test', async({request}) => {
        const response = await request.get(`${baseURL}/users/2`)
        expect(response.status()).toBe(200)

        const respBody = JSON.parse(await response.text())
        console.log(respBody)
    })

    test('GET Request', async({request}) => {
        const response = await request.get(`${baseURL}/users/2`)
        expect(response.status()).toBe(200)

        const respBody = JSON.parse(await response.text())

        expect(respBody.data.id).toBe(2)
        expect(respBody.data.first_name).toContain('Janet')
        expect(respBody.data.last_name).toBe('Weaver')
        console.log(respBody)
    })

    test('POST Request', async({request})=> {
        const response = await request.post(`${baseURL}/users`, {
            data: {
                id: 4700,
                name: 'Noah'
            },
        })
        const respBody = JSON.parse(await response.text())
        console.log(respBody)
        expect(respBody.id).toBe(4700)
    })

    test('PUT Request', async({request})=>{
        const response = await request.put(`${baseURL}/users/2`, {
            data: {
                name:"new name",
                job: "new job",
            },
        })
        const respBody = JSON.parse(await response.text())
        expect(response.status()).toBe(200)
        expect(respBody.name).toBe("new name")
        expect(respBody.updatedAt).toBeTruthy()
    })
    test('DELETE Request', async({request})=>{
        const response = await request.delete(`${baseURL}/users/2`)
        expect(response.status()).toBe(204)
    })
})