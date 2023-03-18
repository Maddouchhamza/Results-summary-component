import data from "./data.json";

let getCategory = (myJson) => {
  return (document.querySelector(".card").innerHTML += `      <div
  style="background-color: ${myJson.color};" class="flex items-center justify-between rounded-lg py-3 px-4"
>
  <div class="flex items-center">
    <div class="mr-2" id="Reaction-img">
      <img src=${myJson.icon} alt="" />
    </div>
    <div id="Reaction" class="font-bold" style="color:${myJson.txtColor};">${myJson.category}</div>
  </div>
  <div class="flex items-center font-bold">
    <div id="Reaction-score">${myJson.score}&nbsp</div>
    <div class="text-gray-500">/ 100</div>
  </div>
</div>

         `);
};

let category = data.map(getCategory);
console.log(category);
