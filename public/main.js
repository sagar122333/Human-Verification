let image_src = [
    "http://4.bp.blogspot.com/_PBCY21Jql8s/TFlNXTJr9eI/AAAAAAAAAAM/ejH2twaAKaY/s320/African-Lion.jpg",
    "https://www.animalfactsencyclopedia.com/images/lemurfacts.jpg.pagespeed.ce.Gwy7CaK1bC.jpg",
    "https://www.animalfactsencyclopedia.com/images/kangaroofacts.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Giant_Panda_2004-03-2.jpg/199px-Giant_Panda_2004-03-2.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/100px-African_Bush_Elephant.jpg"
  ];
  
  let points = [0, 1, 2, 3, 4, Math.floor(Math.random() * 5)];
  let selected = [false, false, false, false, false, false];
  let count = 0;
    const verify = () => {
      count = 0;
      let li = [];
      for (let i = 0;i < selected.length; i++) {
        if (selected[i] == true) 
          li.push(i);
      }
      reset();
      let p = document.getElementById("para");
      if (points[li[0]] == points[li[1]])
        p.innerText = "You are a human. Congratulations!";
      else
        p.innerText = "We can't verify you as a human. You selected the non-identical tiles.";
      refresh();
    }
  
    const reset = () => {
      count = 0;
      document.getElementById("btn").style.visibility = "hidden";
      document.getElementById("reset").style.visibility = "hidden";
      for (let i = 0; i < selected.length; i++) {
        if (selected[i] == true) {
          let img = document.getElementById("img" + i);
          img.style.border = "0px";
          selected[i] = false;
        }
      }
    }
  
    const show = (val) => {
      if(count < 2){
        if(selected[Number(val)] == false){
          selected[Number(val)] = true;
          count++;
        }
        document.getElementById("para").innerText = "";
        let img = document.getElementById("img" + val);
        img.style.border = "3px solid blue";
        if (count >= 1){
          document.getElementById("reset").style.visibility = "visible";
        }
        if (count == 2) 
          document.getElementById("btn").style.visibility = "visible";
      }
    }
  
    const refresh = () => {
      points = [0, 1, 2, 3, 4, Math.floor(Math.random() * 5)];
      points.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      for (let i = 0; i < points.length; i++) {
        let img = document.getElementById("img" + i);
        img.setAttribute("src", image_src[points[i]]);
        img.setAttribute("data-ns-test", "img"+(points[i]+1));
      }
    }