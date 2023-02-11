function init(){
  getAll()
}

function getAll() {
  fetch('http://localhost:8000/admin/lokacije', {
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
            `${element.adresa} ${element.terminId} ${element.igraonicaId} `
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

  const ime = document.getElementById("ime").value
  const terminId = document.getElementById("terminId").value
  const igraonicaId = document.getElementById("igraonicaId").value


  fetch('http://localhost:8000/admin/lokacije',{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        adresa:ime, 
        terminId: terminId,
        igraonicaId: igraonicaId

      })
  })
  
})

document.getElementById('delete-btn').addEventListener('click', (e)=>{
  e.preventDefault()

  const id = document.getElementById('deleteSelect').value

  fetch('http://localhost:8000/admin/lokacije', {
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


  fetch('http://localhost:8000/admin/lokacije', {
      method:'PUT',
      headers:{
          'Content-Type' : 'application/json',
         // 'Authorization': `Bearer ${token}` 
      },

      body: JSON.stringify({
          adresa: ime,
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