<template>
    <div 
    class="dmain">
    <div 
    class="left_header">
        <h3 
        style="display:inline-block; color:white"
        >
        <i 
        class="fas fa-arrow-left"
        >
        </i> Back</h3>
        <button 
        style="margin-left:15px"
        >Desktop</button>
        <button>Tablet</button>
        <button>Mobile</button>
    </div>

    <div class="center_header">
<h4 
class="tedad_header"
>
{{this.tedadedownload1}} downloads</h4>
<button 
class="download_header" 
@click="blockdownload()">Download
</button>

 <div class="downloadpo" :class="[{downloadblock:classblock},{classnonebeshe:classnone}]">
        <div
         @click="close()" class="zabdar_header">
         <i class="fas fa-times"></i>
         </div>

        <div 
        class="aks_header_download"
        >
        <img
        class="top_header_hover"
        src="@/assets/icn_design_face_good.svg"
         alt=""
         ><img 
         style="margin-left:25px" 
         class="top_header_hover"
         src="@/assets/icn_dev_face_good1.svg" 
         alt=""
         >
         </div>
        <div class="text-up_btn"> <h2>Select how to download your Energy Template:</h2>
        <div>
        <button @click="headerdownload()" class="btn_download_block">HTML</button>
        <button @click="headerdownload()" class="btn_download_block">JAVASCRIPT</button>
        <button @click="headerdownload()" class="btn_download_block">Vue.js</button>
          <button @click="headerdownload()" class="btn_download_block">All</button></div>
        </div>
        <div class="div_icon_health"><i
         id="icon_health_header" 
         class="fas fa-heart"
         >
         </i></div>
         <div class="h3_under_qalb"><h3>Spread the love for Mashup Template:</h3></div>
         <div class="btn_end_click">
             <button class="btn_majaziunder1"><i id="font_under_hover" class="fab fa-facebook-f"></i></button>
             <button class="btn_majaziunder2"><i id="font_under_hover" class="fab fa-invision"></i></button>
             <button class="btn_majaziunder3"><i id="font_under_hover" class="fab fa-tumblr"></i></button>
         </div>
         <div class="img_hover_under"><img 
         class="img_hover_menu"
         src="@/assets/akshover1.jpg"
          alt=""
          ></div>
    </div>
            </div>

<div class="right_header">
    <button class="btn-right_header"><i id="icon_header-right" class="fab fa-facebook-f"></i></button>
    <button class="btn-right_header"><i id="icon_header-right" class="fab fa-invision"></i></button>
    <button class="btn-right_header"><i id="icon_header-right" class="fab fa-tumblr"></i></button>
</div>
    </div>

</template>

<script>
import axios from 'axios'
export default{
           beforeCreate(){
 axios.get("https://jsonplaceholder.typicode.com/posts")
.then(response=>{
  this.tedadedownload1 = response.data[10].id
})
},

data(){
    return{
        classblock:false,
    classnone:false,
tedadedownload1:""
    }
},
 methods:{
        headerdownload(){
            this.tedadedownload1++,
            axios.post("toServer",this.tedadedownload1)
        },
close(){
    this.classnone=true;
     this.classblock=false
},
blockdownload(){
    this.classblock=true;
      this.classnone=false;
}
    }




}
</script>
<style scoped>
.dmain{
    height:90px;
width:100%;
    background-color: black;
    display:flex;
}
.left_header button{
border: 3px solid white;
background-color: black;
color:white;
height:50px;
width:90px;
margin-left:3px;
font-size:20px
}
.left_header{
    padding:20px 100px 0 400px;
    width:35%;

}
.download_header{
    background-color:white;
    height:50px;
    width: 90px;
    font-size: 17px;
    font-family: Khand,sans-serif;
}
.center_header{
    display: flex;
    margin:20px 130px 0 0;
    width:35%;
}
.tedad_header{
    color:white;
      margin:20px 10px 0 0;
}
.downloadpo{
    height:1036px;
    width:800px;
    background-color:white;
    position:absolute;
    top:24px;
    right:530px;
    display:none;

}
.btn-right_header{
height:50px;
width:60px;
border:3px solid white;
background-color: black;
margin-left:20px
}
#icon_header-right{
    font-size:25px;
    color:white;
    
}
.right_header{
    margin-top:17px;
    width:35%
}
.zabdar_header{
    float:right;
    margin:30px;
    font-size: 40px;
}
.aks_header_download{
    margin:100px 0 0 200px;
}
.classnonebeshe{
display:none;
    background-color: red;
}
.downloadblock{
    display:block;
}
.text-up_btn{
    margin:40px 0 0 120px;
    font-size:15px;
    letter-spacing: .08px;
    font-family:Khand,Helvetica,Arial,sans-serif;
    font-weight: 500px;
}
.btn_download_block{
    width:120px;
    height:50px;
    margin: 30px 0 0 10px;
    border:3px solid black;
    font-weight: bold;
    font-size:16px
}
#icon_health_header{
    font-size:40px;
    color:rgb(202, 89, 133);
}
.div_icon_health{
    margin:70px 0 15px 350px;
}
.h3_under_qalb{
    margin-left:220px
}
.btn_end_click{
    margin:20px 0 0 260px
}
.btn_majaziunder1,.btn_majaziunder2,.btn_majaziunder3{
    height:40px;
width:55px;
margin-left:10px
}
.btn_majaziunder1{
border:3px solid black;
}
.btn_majaziunder2{
border:3px solid rgb(59, 167, 209);
}
.btn_majaziunder3{
border:3px solid blue;
}
#font_under_hover{
    font-size:30px
}
.img_hover_under{
    margin-top:20px
}
@media only screen and (max-width: 1689px) {
  .left_header {
  padding-left:50px
  }
  .center_header{
         margin-right: 50px;
  }

}
@media only screen and (max-width: 1260px) {
     .left_header {
  display:none;
  }
   .center_header{
        width:50%;
        margin-left:20px;
        margin-right:0;
  }
  .right_header{
      width:50%;
  }
  .downloadpo{
      position:absolute;
 right:60px;
  }
}
@media only screen and (max-width:860px) {
 .downloadpo{
      position:absolute;
 right:0;
  }
}
@media only screen and (max-width:800px) {
.img_hover_menu,.img_hover_under{
    width:100%;
}
.downloadpo{
     width:100%
  }

    }
@media only screen and (max-width:516px) {
     .dmain{
         flex-direction:column;
         height:140px;
         width:100%;
     }
      .text-up_btn{
    width:70%;
}
  .div_icon_health,.h3_under_qalb,.right_header, .center_header,.btn_end_click,.aks_header_download{
      width:100%;
      margin-left:10px;
      margin-top:10px;
      display:flex;
      justify-content: center;
  }
 
  .zabdar_header{
      float:right;
  }
}
@media only screen and (max-width:268px) {
    *{
width:100%
    }
}
</style>