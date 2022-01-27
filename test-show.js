const string = `
 
  .background {
    background-color: #1facec;
  }
 
  .hairOut {
    width: 91%;
    height: 112%;
    border-radius: 65% 50% 0 50%;
    background-color: #00a0e8;
  }
  .hairInner {
    width: 80%;
    height: 80%;
    border-radius: 68% 50% 0 50%;
    background-color: #ffffff;
  }
  .eye-left,
  .eye-right {
    position: absolute;
    width: 51%;
    height: 87%;
    border: 2px solid;
    background-color: #ffffff;
    border-radius: 60% 60% 60% 60% / 70% 70% 50% 50%;
  }

  .blackLeft,
  .blackRight {
    width: 22%;
    height: 25%;
    border: 2px solid;
    background-color: #000;
    border-radius: 60% 60% 60% 60% / 70% 70% 50% 50%;
  }
  .blackLeft::before,
  .blackRight::before {
    width: 55%;
    height: 60%;
  }
  .nose {
    width: 9%;
    height: 11%;
    background-color: #e00026;
  }
  .nose::before {
    border: 2px solid;
    width: 35%;
    height: 35%;
    background-color: #fdfcfa;
    border: none;
  }
  .faceLeft,
  .faceRight {
    width: 9%;
    height: 11%;
  }
  .beard {
    width: 51%;
    height: 25%;
    border: none;
  }
  .beard > li {
    width: 39%;
    height: 2px;
    border: 1px solid;
  }
   .mouthA {
    width: 2px;
    height: 38%;
    border: 1px solid;
  }
  .mouthB {
    top: 58%;
    left: 50%;
    border: solid 2px;
    transform: translateX(-50%);
    width: 58%;
    height: 25%;
    border-top: none;
    border-radius: 0 0 50% 50%/0 0 100% 100%;
  }
  .scarf {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 47%;
    height: 5%;
    border-radius: 13px;
    background-color: #db012a;
  }
  .scarf .ringBelow,
  .scarf .ringTop,
  .scarf .bar,
  .scarf .circle {
    left: 50%;
    transform: translateX(-50%);
    background-color: #fce439;
  }
  .scarf .ringTop {
    top: 34%;
    width: 12%;
    height: 77%;
    border-radius: 50% 50% 0 0/100% 100% 0 0;
    border-bottom: none;
  }
  .scarf .ringBelow {
    top: 136%;
    width: 14%;
    height: 130%;
    border-radius: 0 0 50% 50%/0 0 100% 100%;
    border-top: none;
  }
  @media (max-width: 500px) {
    .scarf .ringBelow {
      height: 120%;
    }
  }
  .scarf .bar {
    top: 110%;
    width: 15%;
    height: 27%;
    border-radius: 3px;
    background-color: #edd102;
  }
  .scarf .circle {
    top: 160%;
    width: 5%;
    height: 80%;
    border-radius: 50%;
    background-color: #edd102;
  }
  `;
export default string;
