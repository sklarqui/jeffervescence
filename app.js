const app = {
    init(selectors) {
        this.flicks=[]
        this.max=0
  
        this.list=document.querySelector(selectors.listSelector)
   this.template=document.querySelector(selectors.templateSelector)
        document.querySelector(selectors.formSelector).addEventListener('submit',this.addMovie.bind(this))
   
        
},
    
    addMovie(ev) {
        ev.preventDefault()
        const movieName= ev.target.movieName.value
    
        const f =ev.target
        const flick = { 
            id: this.max+1,
            name: f.movieName.value,
            good: 'meh',
    }
    const listItem =this.renderListItem(flick)
   // this.list.appendChild(listItem)
   this.list.insertBefore(listItem,this.list.firstChild)
//this.flicks[this.flicks.length]=flick
//this.flicks.push(flick)
this.flicks.unshift(flick)

this.max++
//f.movieName.value=''
f.reset()  
  },

    renderListItem(flick){
        const item =this.template.cloneNode(true)//document.createElement('.flick.template')
       item.querySelector('.flick-name').textContent=flick.name
        item.dataset.id = flick.id
        item.classList.remove('template')
        item.querySelector('.remove').addEventListener('click',this.removeMovie)
    return item
    //     const para =document.createElement('p')
    //     const but = document.createElement('button')
        
    //     item.class=flick.id
    //     but.addEventListener('click',this.promote.bind(this))
    //     but.style.width='70px'
    //     but.style.height='100px'
    //    but.textContent = 'Promote'
    //    but.style.border='2px solid red'
    //    but.class=flick.id
    //       const delt = document.createElement('button')
    //     delt.addEventListener('click',this.delete.bind(this))
    //     delt.style.width='70px'
    //     delt.style.height='100px'
    //    delt.textContent = 'Deleate'
    //    delt.style.border='2px solid red'
    //    delt.class=flick.id
    //    const up = document.createElement('button')
    //     up.addEventListener('click',this.flickUp.bind(this))
    //     up.style.width='50px'
    //     up.style.height='100px'
    //    up.textContent = 'Up'
    //    up.style.border='2px solid red'
    //    up.class=flick.id
    //    const down = document.createElement('button')
    //     down.addEventListener('click',this.flickDown.bind(this))
    //     down.style.width='50px'
    //     down.style.height='100px'
    //    down.textContent = 'Down'
    //    down.class=flick.id
    //    down.style.border='2px solid red'
    //     //item.textContent
    //     para.textContent = flick.name
    //     item.appendChild(para)
    //     item.appendChild(but)
    //     item.appendChild(delt)
    //     item.appendChild(up)
    //     item.appendChild(down)     
    },
removeMovie(ev) {
ev.target.closest('.flick').remove()

},
//     promote(ev){
// const but =ev.target
// if(but.style.backgroundColor==='pink'){
//     but.style.backgroundColor='green'
// }
// else{

// but.style.backgroundColor='pink'
// }
//     },
//     delete(ev){
        
//         console.log(ev.target)
//  console.log(document.querySelector('ul').querySelectorAll('li'))
// const listy=document.querySelector('ul').querySelectorAll('li')

// for(let i=0; i<listy.length;i++){
//     console.log(listy[i].id)
//     console.log(ev.target.class)
// if(listy[i].class===ev.target.class){
// console.log('ewew')
// listy[i].remove()}
// }

//     },
//     flickUp(ev){

// const listy=document.querySelector('ul').querySelectorAll('li')
// for(let i=0; i<listy.length;i++){
//     console.log(listy[i].id)
//     console.log(ev.target.class)
// if(listy[i].class===ev.target.class){
// if(i>0){

// temp=listy[i].querySelector('p').textContent
// listy[i].querySelector('p').textContent=listy[i-1].querySelector('p').textContent
// listy[i-1].querySelector('p').textContent=temp
// this.colorSwitch(listy[i],listy[i-1])
// }


// }
// }

//     },
//     flickDown(ev){
// const listy=document.querySelector('ul').querySelectorAll('li')
// for(let i=0; i<listy.length;i++){
//     console.log(listy[i].id)
//     console.log(ev.target.class)
// if(listy[i].class===ev.target.class){
// if(i<listy.length-1){
// temp=listy[i].querySelector('p').textContent
// listy[i].querySelector('p').textContent=listy[i+1].querySelector('p').textContent
// listy[i+1].querySelector('p').textContent=temp
// this.colorSwitch(listy[i],listy[i+1])
// //this.wordSwitch(listy[i].querySelector('p').textContent,listy[i+1].querySelector('p').textContent)
// }


// }
//     }
// },
// wordSwitch(first, second){
// const temp =first
// first=second
// second=temp
// },
// colorSwitch(piece, part){
//     console.log(piece)
// console.log(piece.querySelector('button'))
// console.log(part.querySelector('button'))
// const temp=piece.querySelector('button').style.backgroundColor
// piece.querySelector('button').style.backgroundColor=part.querySelector('button').style.backgroundColor
// part.querySelector('button').style.backgroundColor=temp
// },

}
app.init({formSelector: '#flick-form',
  listSelector: '#flick-list',
  templateSelector: '.flick.template'
})