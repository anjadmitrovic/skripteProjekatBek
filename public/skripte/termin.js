function init(){
  getAll()
}

function getAll() {
  fetch('http://localhost:8000/admin/termin', {
    method:'GET',
    headers:{
      "Content-Type":"application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
    if(!data.msg){
      data.forEach(element => {
        const li = document.createElement("li")
        const text = document.createTextNode(
          `${element.dan} ${element.vreme} `
        )
        const option = document.createElement('option')
        option.textContent = element.id
        deleteSelect.appendChild(option)

        const option2 = document.createElement('option')
        option2.textContent = element.id
        editSelect.appendChild(option2)


        li.appendChild(text)
        content.appendChild(li)
      })
    }
    })
}

const editSelect = document.getElementById('editSelect')
const deleteSelect = document.getElementById('deleteSelect')

document.getElementById("add").addEventListener("click", (e)=>{
  e.preventDefault()

  const tretmanId = document.getElementById("tretmanId").value
  const userId = document.getElementById("userId").value
  const termin = document.getElementById("termin").value
  const terminvreme = document.getElementById("terminvreme").value


  fetch('http://localhost:8000/admin/termin',{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        tretmanId: tretmanId,
        userId: userId,
        termin: termin,
        terminvreme: terminvreme
      })
  })
  
})


document.getElementById('delete-btn').addEventListener('click', (e)=>{
  e.preventDefault()

  const id = document.getElementById('deleteSelect').value

  fetch('http://localhost:8000/admin/termin', {
      method:'DELETE',
      headers:{
          'Content-Type' : 'application/json',
          
      },
      body: JSON.stringify({
          id:id
      })
  })
      .then(res => res.json())
      .then(data =>{
          if(!data.msg){
              
              content.innerHTML = ""
            
              deleteSelect.innerHTML = ""
              getAll()

          }else{
              const p = document.createElement('p')
              p.innerHTML = `${data.msg}`

              content.appendChild(p)
          }
      })
})

document.getElementById('edit-btn').addEventListener('click', (e)=>{
  e.preventDefault()

  const termin = document.getElementById('novoIme').value
  const selected = document.getElementById('editSelect').value
  //const terminvreme = document.getElementById('noviTermin').value


  fetch('http://localhost:8000/admin/termin', {
      method:'PUT',
      headers:{
          'Content-Type' : 'application/json',
         // 'Authorization': `Bearer ${token}` 
      },

      body: JSON.stringify({
          ime: termin,
          id: selected,
         
      })
  })
      .then(res => res.json())
      .then(data =>{
          if(!data.msg){

              content.innerHTML = ""
              

              getAll()
            

          }else{
              const p = document.createElement('p')
              p.innerHTML = `${data.msg}`

                content.appendChild(p)
            }
        })
})