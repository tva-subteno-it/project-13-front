export default async function signInFormAction({request}: {request: Request}) {
    const body = await request.formData();
    const {remember : rememberMe} = Object.fromEntries(body)
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
        return {...data.body, rememberMe}
    } else {
        return data
    }
}