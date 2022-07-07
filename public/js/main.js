let notes = document.querySelectorAll('.note')
notes.forEach((item)=>(item.addEventListener('click',toggle)))

let trash = document.querySelectorAll(".fa-trash")
trash.forEach((item)=>{item.addEventListener('click',deleteNote)})


async function toggle(evt){
    try{
        const id = evt.target.parentNode.parentNode.dataset.id
        let complete = evt.target.parentNode.parentNode.getAttribute('class').split(' ')[1]
        if(complete === 'false'){
            console.log('complete false')
            await fetch('/notes/markNoteComplete',{
                method:'PUT',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({
                    id:id,
                })
            })
        }else{
            await fetch('/notes/markNoteIncomplete',{
                method:'PUT',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({
                    id:id,
                })
            })
        }
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function deleteNote(evt){
    try{
        let id = evt.target.parentNode.parentNode.dataset.id
        await fetch('/notes',{
            method:'DELETE',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                id:id,
            })
        })
        location.reload()
    }catch(err){
        console.log(err)
    }
}