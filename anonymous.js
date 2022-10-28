function anonymous(thing) {
    if("clipboard" in navigator) {navigator.clipboard.writeText(thing)} else {alert("I can't send thing to clipboard.")}
}
