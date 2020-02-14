const style = `/*
* 画一个cuphead的角色：
* 先铺上背景，画上茶杯的轮廓；
* 上半部分暂停或者结束后可以上下滚动；
* 下半部分移动端显示不下可以左右滑动；
*/

.cuphead {
  position: relative;
  height: 320px;
  width: 640px;
}

.face {
  border: 5px solid #1d1b1d;
  border-radius: 0px 30px 350px 320px;
  width: 350px;
  height: 230px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-3deg);
  background-color: #e1e1e1;
  z-index: 1;
  overflow: hidden;
}

/*
* 脸已经画好，加上五官👀；
*/

.nose {
  border: 3px solid #1d1b1d;
  border-radius: 17px 30px 17px 30px;
  height: 40px;
  width: 40px;
  position: absolute;
  top: 58%;
  left: 60%;
  transform: translateY(-50%) rotate(-50deg);
  background-color: #db4227;
  z-index: 3;
}

.ear {
  border: 5px solid #1d1b1d;
  border-radius: 50%;
  position: absolute;
  top: 59%;
  left: 22%;
  width: 150px;
  height: 150px;
  transform: translate(-50%, -50%) rotate(-3deg);
  background-color: #e1e1e1;
}

.ear::before {
  content: '';
  display: block;
  border: 5px solid #1d1b1d;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 55%;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%) rotate(-3deg);
  background-color: #fecf34;
  overflow: hidden;
}

.eye {
  border: 5px solid #1d1b1d;
  border-radius: 100px / 90px;
  width: 160px;
  height: 180px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-55%, -105%);
  background-color: #FFFFFF;
  z-index: 2;
  overflow: hidden;
}

.eye.right {
  width: 140px;
  border-radius: 100px / 90px;
  transform: translate(40%, -105%) rotate(-11deg);
  z-index: 1;
}

.eyeball {
  border: 5px solid #1d1b1d;
  border-radius: 50%;
  width: 55px;
  height: 100px;
  transform: translate(47%, 72%);
  background-color: #1d1b1d;
}

.eyeball:before {
  content: '';
  display: block;
  border: 15px solid transparent;
  border-right: 20px solid #ffffff;
  position: absolute;
  top: 30%;
  left: 35%;
  transform: rotate(-9deg);

}

.eyeball.right {
  width: 50px;
  height: 90px;
  transform: translate(31%, 74%) rotate(11deg);
}

/*
* 嘴巴做的有点复杂，还可以改的更好；
*/
.mouth {
  /*border: 3px solid rosybrown;*/
  height: 140px;
  width: 200px;
  position: absolute;
  top: 50%;
  left: 25%;
  z-index: 3;
}

.mouth-bottom-left {
  border: 4px solid #1d1b1d;
  border-radius: 0px 0px 0px 50px;
  position: absolute;
  top: 50%;
  left: 30%;
  width: 50px;
  height: 50px;
  background-color: #1d1b1d;
  overflow: hidden;
}

.mouth-bottom {
  border: 3px solid #1d1b1d;
  position: absolute;
  top: 50%;
  left: 54%;
  width: 50px;
  height: 50px;
  background-color: #1d1b1d;
}

.mouth-bottom-right {
  border: 3px solid #1d1b1d;
  border-radius: 0px 25px 25px 0px;
  position: absolute;
  top: 50%;
  left: 71%;
  width: 50px;
  height: 50px;
  background-color: #1d1b1d;
}

.mouth-top-left {
  border: 1px solid #1d1b1d;
  border-radius: 50px 10px 0px 0px;
  position: absolute;
  top: 33%;
  left: 30%;
  width: 40px;
  height: 25px;
  background-color: #1d1b1d;
}

.mouth-top-right {
  border: 1px solid #1d1b1d;
  border-radius: 50%;
  position: absolute;
  transform: translate(-14%, -87.5%);
  width: 200px;
  height: 200px;
  background-color: #e1e1e1;
  z-index: 2;
}

.mouth-wrap {
  /*border: 1px solid green;*/
  border-top-left-radius: 5px;
  position: absolute;
  top: 34%;
  left: 45%;
  width: 77px;
  height: 30px;
  overflow: hidden;
}

.mouth-space {
  /*border: 1px solid red;*/
  position: absolute;
  top: -3%;
  width: 60px;
  height: 30px;
  background-color: #1d1b1d;
  z-index: 1;
}

.mouth-bottom-left:after {
  content: '';
  display: block;
  border: 3px solid #1d1b1d;
  border-radius: 0px 35px 0 0;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 15%;
  background-color: #db4227;
  z-index: 2;
}

.tongue {
  border: 3px solid #1d1b1d;
  border-radius: 0px 40px 0 0;
  width: 40px;
  height: 35px;
  position: absolute;
  top: 27%;
  left: -35%;
  background-color: #db4227;
  z-index: 1;
}

/*
* 最后插上吸管；
*/
.straw-bottom {
  border: 5px solid #1d1b1d;
  width: 50px;
  height: 100px;
  position: absolute;
  top: 7%;
  left: 25%;
  transform: rotate(-20deg);
  background-color: #FFFFFF;
}
.straw-bottom:after {
  content: '';
  display: block;
  border-top: 5px solid #1d1b1d;
  border-bottom: 5px solid #1d1b1d;
  margin-top: 20px;
  width: 40px;
  height: 35px;
  background-color: #db4227;
}

.straw-top {
  border: 5px solid #1d1b1d;
  border-radius: 10px 0px 0 10px;
  width: 90px;
  height: 50px;
  position: absolute;
  top: 3%;
  left: 15%;
  transform: translate(1%, 2%) rotate(8deg);
  background-color: #db4227;
}

.straw-top-cover1 {
  border-left: 5px solid #1d1b1d;
  border-right: 5px solid #1d1b1d;
  border-radius: 10px 0px 0 10px;
  width: 25px;
  height: 41px;
  position: absolute;
  top: 3%;
  left: 15%;
  transform: translate(1%, 2%) rotate(8deg);
  background-color: #FFFFFF;
  z-index: 1;
}

.straw-top-cover2 {
  /*border-left: 5px solid #1d1b1d;*/
  border-right: 5px solid #1d1b1d;
  width: 45px;
  height: 60px;
  position: absolute;
  top: -42%;
  left: 12%;
  transform: translate(-64%, 2%) rotate(33deg);
  background-color: #FFFFFF;
  z-index: 1;
}

.straw-top-wrap {
  /*border: 1px solid green;*/
  border-left: 5px solid #1d1b1d;
  margin-left: 40px;
  margin-top: 10px;
  width: 35px;
  height: 40px;
  position: absolute;
  top: 1%;
  left: 16%;
  transform: translate(0%, 14%) rotate(8deg);
  z-index: 1;
  overflow: hidden;
}
/*
* 大功告成！
*/`
export default style
