let notes = document.querySelectorAll('.note')
notes.forEach((item)=>(item.addEventListener('click',toggle)))

let trash = document.querySelectorAll(".fa-trash")
trash.forEach((item)=>{item.addEventListener('click',deleteNote)})


async function toggle(evt){
    try{
        let note = evt.target.innerText
        let complete = evt.target.getAttribute('class')
        console.log(note,complete)
        await fetch('/',{
            method:'PUT',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                note:note,
                complete:complete,
            })
        })
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function deleteNote(evt){
    try{
        let note = evt.target.parentNode.previousElementSibling.innerText
        console.log(note)
        await fetch('/',{
            method:'DELETE',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                note:note,
            })
        })
        location.reload()
    }catch(err){
        console.log(err)
    }
}