

const main=document.querySelector('main');
let htmlString="";
// import {sem} from "semester.html";
for(var i=1;i<=sem;i++)
{
  htmlString +=`<div class="cgpa">


  <table>
  
    <tr>
      <td>Semester${i}:</td>
      <td><input class="semcol" type="number" name="SGPA" value="SGPA" min="1" max="10">
</td>
      <td><input class="semcol "type="number" name="credit " value="credit" min="1" max="10"></td>
    </tr>
  </table>
  </div>`
}
main.innerHTML=htmlString;
console.log(htmlString);


