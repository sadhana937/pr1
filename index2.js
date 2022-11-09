const main=document.querySelector('main');
let htmlString="";

for(var i=1;i<=15;i++)
{
  htmlString +=`<div class="sgpa">  
  <table>
  <tr>
        <td>Subject ${i}:</td>
        <td><select id="grade" name="grade${i}">
<option value="NULL"></option>
  <option value="S">S</option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
  <option value="D">D</option>
  <option value="E">E</option>
  <option value="F">F</option>

</select>
  </td>
        <td><input type="number" name="credit 1" value="credit 1" min="1" max="10"></td>
      </tr>
    </table>
    </div>
  `}
  main.innerHTML=htmlString;
console.log(htmlString);