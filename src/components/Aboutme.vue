<template>
    <div class="div_main">
<div class="first_divin1"><h2>About me</h2></div>
<div class="first_divin2">
    <div><img src="@/assets/emam.jpeg" alt=""></div>
    <div>
        <div class="div_ptag1"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
        <div class="div_ptag2"><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
        </div>
</div>


    </div>
</template>

<style scoped>
.div_main{
    height:450px;
    width:60%;
    background-color:white;
margin:50px 0 0 350px;
display:flex;
flex-direction: column;
}
.first_divin1{
    margin:40px 0 0 50px;
}
.first_divin2{
    display:flex;
    margin-top:20px;
    margin-left:50px;
    
}
.div_ptag1{
    width:650px;
margin-left: 30px;
}
.div_ptag2{
margin-top:20px;
width:650px;
margin-left: 30px;

}
@media only screen and (max-width:1688px) {
.div_ptag1{
    width:90%;
}
.div_ptag2{
    width:90%;
}
}

@media only screen and (max-width:896px) {
    .first_divin2{
        display:flex;
        flex-direction: column;
    }
    .div_main{
        margin-left:200px;
    }
}
@media only screen and (max-width:734px) {
    .div_main{
        height:800px;
    }

}
</style>