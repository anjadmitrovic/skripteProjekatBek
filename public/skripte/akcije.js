function init(){
  getAll()
}

function getAll() {
  fetch('http://localhost:8000/admin/akcije', {
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
          `${element.popust}`
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

const content = document.querySelector("#content")

document.getElementById("add").addEventListener("click", (e)=>{
  e.preventDefault()

  const popust = document.getElementById("popust").value
  const tretmanId = document.getElementById("tretmanId").value
  //const usluga = document.getElementById("usluga").value

  fetch('http://localhost:8000/admin/akcije',{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        popust:popust,
        tretmanId: tretmanId
      })
  })
})

document.getElementById('delete-btn').addEventListener('click', (e)=>{
  e.preventDefault()

  const id = document.getElementById('deleteSelect').value

  fetch('http://localhost:8000/admin/akcije', {
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
              // select.innerHTML = ""
              // select1.innerHTML = ""
              
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

  const ime = document.getElementById('novoIme').value
  const selected = document.getElementById('editSelect').value


  fetch('http://localhost:8000/admin/akcije', {
      method:'PUT',
      headers:{
          'Content-Type' : 'application/json',
         // 'Authorization': `Bearer ${token}` 
      },

      body: JSON.stringify({
          popust: ime,
          id: selected
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

