// let list=[]
const list1=document.querySelector('.container ul')
const btnList=document.querySelector('#btnList')
        function store(){
            let data=document.getElementById('text').value
            document.getElementById('text').value=" "
            // list.push(data)
            // let show=document.getElementById('para').innerText=list
            // // console.log(list);


                 const myLi=document.createElement('li')
                 myLi.innerHTML=data
                  list1.appendChild(myLi)

                 const mySpan=document.createElement('span')
                 mySpan.innerHTML='x'
                 myLi.appendChild(mySpan)
            
                 const close=document.querySelectorAll('span')
                 for(let i=0;i<close.length;i++){
                     close[i].addEventListener('click',()=>{
                         close[i].parentElement.style.display="none"
                     })
                 }

                }

    
    function add()
    {
        document.getElementById('add').style.display="none"
        document.querySelector('.container').style.display="block"
    }