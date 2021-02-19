const baseUrl = "https://brc.swung0x48.com:5516"
const loginEndPoint = "/api/v1/user/session"
function login() {
    let output = document.getElementById("output")
    const email = document.getElementById("email").value
    //output.value += email
    const password = document.getElementById("password").value

    let body = { "email": email, "password": password }

    output.value = "Logging in..."
    fetch(baseUrl + loginEndPoint, {
            body: JSON.stringify(body),
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json().then(data => ({status: res.status, body: data})))
        .then(res => {
            if (res.status === 200) {
                let ret = "\n\nWelcome back, " + res.body.username
                ret += "\n欢迎回来，" + res.body.username
                ret += "\nYour API token: " + res.body.refreshToken
                ret += "\n你的 API token: " + res.body.refreshToken
                output.value += ret
            } else {
                output.value += "\n\nAn error occurred. \nError:\n"
                output.value += "\n\n发生了以下错误:\n"
                output.value += "\n" + res.body.errors.join("\n")
            }
        })
}