// console.log("Hello World")
// let vezetekNev = "0"
// let keresztNev = "László"
// let szamlalo = 0
// console.log(vezetekNev + " " + keresztNev, szamlalo)

// if (vezetekNev == szamlalo) {
//     console.log("A vezetéknév egyenlő a számlálóval")
// } else{
//     console.log("A vezetéknév nem egyenlő a számlálóval")
// }

function login() {
    console.log("katt")
    let passwordfield = document.querySelector('#pass')
    // console.log(passwordfield.value)
    if (passwordfield.value == 'nagytitok') {
        document.location = "titkosoldal.html"
    } else {
        passwordfield.value = ""
    }
}