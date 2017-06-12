const app = {
    init(selectors) {
        this.flicks=[]
        this.max=0
  
        this.list=document.querySelector(selectors.listSelector)
   this.template=document.querySelector(selectors.templateSelector)
        document.querySelector(selectors.formSelector).addEventListener('submit',this.addMovieViaForm.bind(this))
   
      this.load()  
},
addFlick(flick){
    console.log(flick)
 const listItem =this.renderListItem(flick)

   this.list.insertBefore(listItem,this.list.firstChild)

this.max++
this.flicks.unshift(flick)
this.save()
},
    
    addMovieViaForm(ev) {
        ev.preventDefault()
        const movieName= ev.target.movieName.value
    
        const f =ev.target
        const flick = { 
            id: this.max+1,
            name: f.movieName.value,
            year: f.movieYear.value,
            good: 'white',
    }
this.addFlick(flick)
f.reset()
   
   // this.list.appendChild(listItem)
//this.flicks[this.flicks.length]=flick
//this.flicks.push(flick)



//f.movieName.value=''
  
  },

    renderListItem(flick){
        const item =this.template.cloneNode(true)//document.createElement('.flick.template')
       item.querySelector('.flick-name').textContent=flick.name
        item.querySelector('.flick-year').textContent=flick.year
        item.dataset.id = flick.id
        item.classList.remove('template')
        item.querySelector('.remove').addEventListener('click',this.removeMovie.bind(this))
        item.querySelector('.favorite').addEventListener('click',this.promote.bind(this))
        item.querySelector('.up').addEventListener('click',this.flipUp.bind(this))
        item.querySelector('.down').addEventListener('click',this.flipDown.bind(this))
        item.querySelector('.flick-name').addEventListener('input',this.edited.bind(this))
   if(flick.good==='red'){
       this.prom(item)
   }
    return item   
    },
removeMovie(ev) {
const listI=ev.target.closest('.flick')
console.log(listI)
listI.remove()


//remove from arrray in general splice(?,1)

for(let i =0; i < this.flicks.length;i++){
    console.log(listI.dataset.id)
    
    const currentId=this.flicks[i].id.toString()
    console.log(currentId)
if(currentId===listI.dataset.id){
    this.flicks.splice(i,1)
    this.save()
    break
}

}
//JSON
},
save(){
    console.log(this.flicks)
localStorage.setItem('flicks',JSON.stringify(this.flicks))

},
load(){
//get the json string out of local storage, 
const flicksJSON=localStorage.getItem('flicks')
//turn it into an array
const flicksArray=JSON.parse(flicksJSON)
//this.flicks=flicksArray
console.log(flicksArray)
if(flicksArray){
flicksArray.reverse().map(this.addFlick.bind(this))

}
for(let i=0;i<this.flicks.length;i++){
if(this.flicks[i].id>this.max){
this.max=this.flicks[i].id+1
}
}
},

flipUp(ev){
console.log('up')
const listI=ev.target.closest('.flick')
// const nod=this.list.childNode
// if(nod[]===)

console.log(listI)
console.log()

if(this.list.firstChild!==listI){
const prevSib=listI.previousSibling
this.list.insertBefore(listI,prevSib)
console.log(prevSib)
}

for(let i =0; i < this.flicks.length;i++){
    const currentId=this.flicks[i].id.toString()
if(currentId===listI.dataset.id&&i>0){
    const temp=this.flicks[i]
    this.flicks[i]=this.flicks[i-1]
    this.flicks[i-1]=temp
    this.save()
    break
}

}

},
flipDown(ev){
console.log('down')
const listI=ev.target.closest('.flick')
const nextSib=listI.nextSibling
//console.log(this.list.childNodes)
console.log(this.list.lastChild.Sibling)
//console.log(nextSib)
if(this.list.lastChild.previousSibling!==listI.nextSibling){

this.list.insertBefore(nextSib,listI)
}

for(let i =0; i < this.flicks.length;i++){
    const currentId=this.flicks[i].id.toString()
if(currentId===listI.dataset.id&&i<this.flicks.length-1){
    console.log(this.flicks[i])
    console.log(this.flicks[i+1])
    const temp=this.flicks[i]
    this.flicks[i]=this.flicks[i+1]
    this.flicks[i+1]=temp
    this.save()
    break
}

}

},
promote(ev){
console.log('prom')
const listI=ev.target.closest('.flick')
if(listI.style.backgroundColor!=='red'){
listI.style.backgroundColor='red'
}
else{
listI.style.backgroundColor='white'
}

for(let i =0; i < this.flicks.length;i++){
    const currentId=this.flicks[i].id.toString()
    console.log(currentId)
    console.log(listI.dataset.id)
if(currentId===listI.dataset.id){
    
    this.flicks[i].good=listI.style.backgroundColor
    console.log(this.flicks[i].good)
    this.save()
    break
}

}

},
prom(listI){
listI.style.backgroundColor='red'

},
edited(ev){
console.log('edited')
const listI=ev.target.closest('.flick')


for(let i =0; i < this.flicks.length;i++){
    const currentId=this.flicks[i].id.toString()
    console.log(currentId)
    console.log(listI.dataset.id)
if(currentId===listI.dataset.id){
    
    this.flicks[i].name=ev.target.textContent
    
    this.save()
    break
}

}


},


}
app.init({formSelector: '#flick-form',
  listSelector: '#flick-list',
  templateSelector: '.flick.template',

})


 