document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  if(day === "Thursday" ){
    alert('Thanksgiving!')
  }else if(day === "Wednesday"){
    alert('Day before Thanksgiving')
  }else{
    alert('Hungry')
  }

}
