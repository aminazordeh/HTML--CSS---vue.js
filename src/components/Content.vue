<template>
 <div
 class="main_content">
         <div class="containalldiv">
             <div class="nameandfamily">
         <h1 style="color:white">I am Amin Azordeh</h1>
         <h6 style="margin:10px 0  0 140px;color:white">Web designer</h6>
         <div class="icon-first-content"><i id="first-content-logo" class="fab fa-twitter"></i>
         <i id="first-content-logo" class="fab fa-instagram"></i>
         <i id="first-content-logo" class="fab fa-whatsapp"></i>
         <i id="first-content-logo" class="fab fa-telegram"></i></div>
             </div> 
         </div>
     <aboutme />
     </div>   


</template>
<style scoped>
.main_content{
   background-image: linear-gradient(
180deg
,#ff0060 0,#ff6975);
    width:100%;
    height:2500px;
  
}
.containalldiv{
  padding-top:70px;
  font-size:25px;
  width:100%;
  margin-left: 700px;


    
}
#first-content-logo{
    color:white;
    margin-left:40px;
}
.icon-first-content{
    margin-top:20px;
    margin-left:50px
}
.nameandfamily{

 width:100%;
}
@media only screen and (max-width:1132px) {
    .containalldiv{
margin-left:20%;
    }
}

@media only screen and (max-width:532px) {
   .containalldiv{
margin-left:0;
    }
}
</style>
<script>
import Aboutme from '@/components/Aboutme.vue'
export default{
    components:{Aboutme}
}
</script>
