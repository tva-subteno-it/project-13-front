export default async function signInFormAction({params, request}: {request: Request, params: any}) {
    const body = await request.formData();
    const data = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(body)),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw response.json()
        }
    }).catch(error => {
        return error
    });

    if (data?.body) {
        return data.body
    } else {
        return data
    }
}