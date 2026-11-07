function nacrtajTablicuMnozenja() {
  let html = "<table>";

  html += "<tr><th>X</th>";
  for (let col = 1; col <= 10; col++) {
    html += `<th>${col}</th>`;
  }
  html += "</tr>";

  for (let row = 1; row <= 10; row++) {
	let klasaReda = '';
	if (row % 2 === 0) {
	  klasaReda = ' class="parni-red"';
	}
    
    html += `<tr${klasaReda}>`;
    html += `<th>${row}</th>`; //broj reda
    
    for (let col = 1; col <= 10; col++) {
      html += `<td>${row * col}</td>`;
    }
    
    html += "</tr>";
  }

  html += "</table>";

  document.write(html);
}

nacrtajTablicuMnozenja();
