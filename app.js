const speding = document.querySelectorAll(".day");
let stush = 0;
let all = 0;

// fetch data
fetch("data.json")
  .then((resualt) => {
    let mydata = resualt.json();
    return mydata;
  })
  .then((infoData) => {
    // loop through the info data and get the begest amount and put it in the stush
    infoData.forEach((obj) => {
      stush < obj["amount"] ? (stush = obj["amount"]) : false;
    });

    // set the height of the elements and the color of the longest one
    for (let i = 0; i < infoData.length; i++) {
      if (infoData[i]["amount"] / stush / 1 == 1) {
        speding[i].children[0].children[0].style.backgroundColor = "#76b5bc";
      }
      speding[i].children[0].children[0].style.height = `${((infoData[i]["amount"] / stush) * 100).toFixed(2)}%`;
      speding[i].children[0].children[0].dataset.price = `${infoData[i]["amount"]}$`;
      speding[i].children[1].textContent = infoData[i]["day"];

      //   all += infoData[i]["amount"];
      //   console.log(`This week = ${all}$ , the month (week x 4) = ${all * 4 + 1.25664}$`);
    }
  });
