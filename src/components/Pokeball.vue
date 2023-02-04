<template>
    <div class="pokeball">
        <div class="pokeball__half pokeball_half--red pokeball_half--red_animation"></div>
        <div class="pokeball__half pokeball_half--gray"></div>
        <div class="pokeball__line"></div>
        <div class="pokeball__innerCircle"></div>
    </div>
</template>

<script>
export default {
  name: "Pokeball",
};
</script>

<style lang="scss" scoped>
*,::before, ::after{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
html{
    font-size: 62.5%;
}
.pokeball{
    width: 20rem;
    height: 20rem;
    position: relative;
    animation-name: catch;
    animation-duration: 2.5s;
    animation-timing-function: linear;
    animation-delay: 2s;
    overflow: hidden;
    margin-left:15%;
}
.pokeball::after{
    content: '';
    position: absolute;
    left:-100%;
    top:10%;
    height: 200%;
    width: 20%;
    background-color: #eeeeee;
    opacity: 0.2;
    transform:translateY(-50%) rotate(35deg);
    animation-name: caught;
    animation-duration: 1.5s;
    animation-timing-function: ease-in;
    animation-delay: 4.5s;
}
.pokeball__half{
    height: 100%;
    width: 100%;
    position: absolute;
    clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%);
    border: 0.2rem solid #222224;
    border-radius: 50%;
}
.pokeball_half--red{
    background-color:#ee1515;
}
.pokeball_half--red_animation{
    animation-name: reveal;
    animation-duration: 1.5s;
    animation-timing-function: ease-in;
    animation-delay: 4.5s;
}
.pokeball_half--gray{
    background-color:#f0f0f0;
    transform: rotate(180deg);
    top:-1%;
}
.pokeball__line{
    position: absolute;
    width: 100%;
    height: 10%;
    background-color:#222224;
    top:50%;
    left:0%;
    transform:translateY(-50%);
}
.pokeball__innerCircle{
    width:33%;
    height: 33%;
    position: absolute;
    background-color:#f0f0f0;
    border:1rem solid #222224;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    border-radius: 50%;
}
.pokeball__innerCircle::before{
    content:'';
    height:100%;
    width:100%;
    top:0;
    left:0;
    background-color: transparent;
    position: absolute;
    border-radius: 50%;
    border: 0.2rem solid #222224;
    transform: scale(0.6);
    animation-name: beep;
    animation-duration: 2.5s;
    animation-timing-function: linear;
    animation-delay: 2s;
}

@keyframes catch{
    0%{
        transform: rotate(0);
        transform-origin: bottom;
    }
    10%{
        transform: rotate(15deg);
        transform-origin: bottom;
    }
    15%{
        transform: rotate(0deg);
        transform-origin: bottom;
    }
    40%{
        transform: rotate(0deg);
        transform-origin: bottom;
    }
    50%{
        transform: rotate(-15deg);
        transform-origin: bottom;
    }
    60%{
        transform: rotate(0deg);
        transform-origin: bottom;
    }
    85%{
        transform: rotate(0deg);
        transform-origin: bottom;
    }
    90%{
        transform: rotate(15deg);
        transform-origin: bottom;
    }
    100%{
        transform: rotate(0);
        transform-origin: bottom;
    }
}

@keyframes beep{
    0%{
        background-color: transparent;
    }
    10%{
        background-color:#ee1515; 
    }
    15%{
        background-color: transparent; 
    }
    40%{
        background-color: transparent;  
    }
    50%{
        background-color:#ee1515; 
    }
    60%{
        background-color: transparent;
    }
    85%{
        background-color: transparent;    
    }
    90%{
        background-color:#ee1515;         
    }
    100%{
        background-color: transparent;
    }
}

@keyframes caught {
    from{
        top:10%;
        left:-100%;
    }
    to{
        top:10%;
        left:170%;
    }
}
@keyframes reveal {
    0%{
        margin-top:auto;
    }
    25%{
        margin-top:-25px;
    }
    50%{
        margin-top:-50px;
    }
    75%{
        margin-top:-75px;
    }
    100%{
        margin-top:-100px;
    }
}
</style>