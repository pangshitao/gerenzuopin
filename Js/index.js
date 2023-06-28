

let swiperbuttonnext = document.querySelector('.swiper-button-next');
let swiperbuttonprev = document.querySelector('.swiper-button-prev')
let AAA = document.getElementById('AAA');
AAA.onmouseover = function () {

  swiperbuttonnext.style.display = "block";
  swiperbuttonprev.style.display = "block";

}
AAA.onmouseout = function () {

  swiperbuttonnext.style.display = "none";
  swiperbuttonprev.style.display = "none";

}



let pictureg = document.querySelectorAll('.pictureGGG')
let picturef = document.querySelectorAll('.pictureFFF')
let picturee = document.querySelectorAll('.pictureEEE')
let pictured = document.querySelectorAll('.pictureDDD')
let picturea = document.querySelectorAll('.pictureAAA');
let pictureb = document.querySelectorAll('.pictureBBB');
let picturec = document.querySelectorAll('.pictureCCC');
function showMask(ele) {
  ele.onmouseenter = function () {
    let picture1img = this.querySelector('.hidden img');
    let black = this.querySelector(".black");
    black.style.display = "block";
    picture1img.style.transform = "scale(1.2)";
  }
  ele.onmouseleave = function () {
    let picture1img = this.querySelector('.hidden img');
    let black = this.querySelector(".black");
    black.style.display = "none";
    picture1img.style.transform = "scale(1)";
  }
}

for (let i = 0; i < picturea.length; i++) {
  showMask(picturea[i])
}
for (let i = 0; i < pictureb.length; i++) {
  showMask(pictureb[i])
}
for (let i = 0; i < picturec.length; i++) {
  showMask(picturec[i])
}
for (let i = 0; i < pictured.length; i++) {
  showMask(pictured[i])
}
for (let i = 0; i < picturee.length; i++) {
  showMask(picturee[i])
}
for (let i = 0; i < picturef.length; i++) {
  showMask(picturef[i])
}
for (let i = 0; i < pictureg.length; i++) {
  showMask(pictureg[i])
}




~function () {
  let nMclefttitle1_2_onelist = document.querySelectorAll('.nMclefttitle1_2_one');
  let nMcleftcontentlist = document.querySelectorAll('.nMcleftcontent');
  const changeTab = function (curIn) {
    nMcleftcontentlist.forEach((item, index) => {
      if (curIn === index) {
        item.classList.remove("none");
        nMclefttitle1_2_onelist[index].classList.remove("none");
        return;
      }
      item.classList.add("none");
      nMclefttitle1_2_onelist[index].classList.add("none");
    })
  }
  nMclefttitle1_2_onelist.forEach((item, index) => {
    item.myww = index;
    item.onmouseenter = function () {
      item.style.color = "#00A9FF";
      changeTab(this.myww)
    }
    item.onmouseleave = function () {
      item.style.color = "";
    }
  })

}()




!(function () {
  let LBTleft_liList = document.querySelectorAll('.LBTleft_li');
  let listenBookContantList = document.querySelectorAll('.listenBookContant');

  const changeTab = function (curIn) {
    LBTleft_liList.forEach((item, index) => {
      if (curIn === index) {
        listenBookContantList[index].classList.remove("aaa");
        item.classList.add("blueBlue")
        return;
      }
      listenBookContantList[index].classList.add("aaa");
      LBTleft_liList[index].classList.remove("blueBlue")
    })
  }
  LBTleft_liList.forEach((item, index) => {
    item.myindex = index;
    item.onmouseenter = function () {
      changeTab(this.myindex)
    }
  })
})();




(function () {

  let hotlist = document.querySelectorAll('.hotsingertitle_left_ul_li')
  let hotContent = document.querySelectorAll('.hotsingerContent')


  const changeCab = function (curIn) {
    hotlist.forEach((item, index) => {
      if (curIn === index) {
        hotContent[index].classList.remove("none");
        item.classList.add("blueBlue");
        return
      }
      hotContent[index].classList.add("none");
      hotlist[index].classList.remove("blueBlue")
    })

  }

  hotlist.forEach((item, index) => {
    item.myhh = index;
    item.onmouseenter = function () {
      changeCab(this.myhh)
    }
  })
})();




(function () {
  let backlTop = document.querySelector('.backlTop');
  let rightFixed = document.querySelector('.rightFixed');
  let html = document.documentElement || document.body;

  backlTop.onmousedown = function () {
    html.scrollTop = 0;
    rightFixed.style = "position:absolute;top:770px";
    return
  }
})();





(function () {
  let rightFixed = document.querySelector('.rightFixed');
  window.onscroll = function () {
    if (window.pageYOffset > 375) {
      rightFixed.style = "position: fixed; top: 342px;";
    }
    if (window.pageYOffset < 375) {
      rightFixed.style = "position: absolute; top: 770px;";
    }
  };
})();
