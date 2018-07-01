const codeList = document.getElementsByClassName('xml tei');
console.log(codeList);
console.log(codeList[0].textContent);
Array.from(codeList)
  .forEach((n) => {
    const text = n.textContent.replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    const regex = `&lt;([A-Za-z]*?)(\\s.*?.*?\/{0,1}){0,1}&gt;`;
    const regularExpression = new RegExp(regex, 'g');
    const newSnippet = text.replace(regularExpression, "&lt;<a class='tei-doc-link' href='http://www.tei-c.org/release/doc/tei-p5-doc/en/html/ref-$1.html'>$1</a>$2&gt;");
    n.innerHTML = newSnippet;
  });