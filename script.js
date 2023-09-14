const textarea = document.getElementsByTagName("textarea")[0];
const chars = document.getElementById("chars");
const words = document.getElementById("words");

textarea.addEventListener("input", function () {
  // character part
  const cleanedValue = this.value.replace(/[\s\n]/g, "");
  const v = cleanedValue.length;
  chars.innerHTML = v;
     

  // words part

  let arr=this.value.split(" ");
  let cleanWords=arr.filter((d)=>{
    return d!=""; 
  })
  words.innerHTML=cleanWords.length;


//   console.log(arr2);
});
