const string = `*,
*::before,
*::after {
    box-sizing: border-box;
}

* {
    margin: 0;
    padding: 0;
}

body {
    background-color: #93b8ca;
    min-height: 100vh;
}

.face1 {
    position: relative;
    width: 420px;
    height: 400px;
    background-color: #1e90ff;
    border: 2px solid #000;
    border-radius: 50% 50% 44% 44%;
    left: 50%;
    margin-left: -210px;
    top: 40px;
}

.face1 .face2 {
    position: absolute;
    width: 360px;
    height: 300px;
    border: 2px solid black;
    background-color: #fff;
    left: 50%;
    margin-left: -180px;
    border-radius: 50% 50% 45% 45%;
    bottom: 0;
}

.collar {
    width: 320px;
    height: 50px;
    position: relative;
    border: 2px solid black;

    margin-left: -160px;
    left: 50%;
    border-radius: 30px;
    background-color: #FF0000;
}

.bell1 {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    border: 2px solid black;
    background-color: #FFFF00;
    position: absolute;
    margin-left: -25px;
    top: 15px;
    left: 50%;
    overflow: hidden;
}

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }

    33% {
        transform: rotate(-5deg);
    }

    66% {
        transform: rotate(5deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

.bell1:hover {
    animation: wave 300ms infinite linear;

}



.bell1 .bell2 {
    width: 60px;
    height: 6px;
    border: 2px solid black;
    top: 15px;
    position: inherit;
    margin-left: -30px;
    left: 50%;
}

.bell1 .bell3 {
    width: 16px;
    height: 10px;

    position: absolute;
    top: 25px;
    left: 50%;
    margin-left: -8px;
    border-radius: 50%;
    background-color: black;
}

.bell1 .bell3::after {
    content: '';
    display: block;
    width: 2px;
    height: 30px;
    background-color: black;
    left: 50%;
    margin-left: -1px;
    position: absolute;
}

.eye {
    width: 90px;
    height: 110px;
    background-color: #fff;
    border: 2px solid black;
    border-radius: 46%;
    position: absolute;
    margin-left: -45px;
    left: 50%;
    top: -54px;

}

.eye.left {
    transform: translateX(-45px);
}

.eye.right {
    transform: translateX(45px);
}

.eye::after {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: black;
    top: 60px;
}

.eye.left::after {
    left: 60px;
}

.eye.right::after {
    right: 60px;
}

.nose {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ff0000;
    border: 2px solid #000;
    position: absolute;
    left: 50%;
    margin-left: -25px;
    top: 38px;
}

.nose .shadow {
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #fff;
    border-radius: 50%;
    left: 25px;
    top: 10px;
    box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, .4);
}

.whisker {
    height: 2px;
    width: 100px;
    background-color: black;
    position: absolute;
    margin-left: -50px;
    left: 50%;

}

.whisker.top {
    top: 100px;
}

.whisker.top.left {
    transform: translateX(-100px) rotate(20deg);
}

.whisker.top.right {
    transform: translateX(100px) rotate(-20deg);
}

.whisker.mid {
    top: 130px;
}

.whisker.mid.left {
    transform: translateX(-100px);
}

.whisker.mid.right {
    transform: translateX(100px);
}

.whisker.bottom {
    top: 160px;
}

.whisker.bottom.left {
    transform: translateX(-100px) rotate(-20deg);
}

.whisker.bottom.right {
    transform: translateX(100px) rotate(20deg);
}

.mouth1 {
    width: 2px;
    height: 140px;
    position: absolute;
    background-color: black;
    margin-left: -1px;
    left: 50%;
    top: 88px;
}

.mouth2 {
    position: absolute;
    border-radius: 0 0 45% 45%;
    border-bottom: 2px solid black;
    height: 200px;
    width: 240px;
    margin-left: -120px;
    left: 50%;
    top: 30px;
}`
export default string;