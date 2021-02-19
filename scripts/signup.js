const baseUrl = "https://brc.swung0x48.com:5516"
const signupEndPoint = "/api/v1/user"

function signup() {
    const email = document.getElementById("email").value
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirm_password").value

    if (password !== confirmPassword) {
        alert("Password does not match!")
        return
    }
    
    alert("邮件系统还未上线，因此验证邮件功能暂不可用。请将下面生成的链接粘贴到浏览器中访问。如果你看到一串带大括号的神秘代码，说明邮箱验证已经通过。")
    output.value = "Email system is not available now. \n Please copy the generated link to browser. \nIf you see a json response, you're now verified."
    output.value += "邮件系统还未上线，因此验证邮件功能暂不可用。请将下面生成的链接粘贴到浏览器中访问。如果你看到一串带大括号的神秘代码，说明邮箱验证已经通过。"
    let body = { email: email, username: username, password: password }
    fetch(baseUrl + signupEndPoint, {
        body: JSON.stringify(body),
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => res.json().then(data => ({status: res.status, body: data})))
    .then(res => {
        if (res.status === 200) {
            let ret = "\n\nWelcome , " + username
            ret += "\nYour API token: " + res.body.refreshToken
            output.value += ret
        } else {
            output.value += "\n\n" + res.body.errors.join("\n")
        }
    })
}