function processForm(e) {
  if (e.preventDefault) e.preventDefault();
  let count = document.getElementById("count").value;
  let selectKind = document.getElementById("select_kind").value;
  let result = '';
  if (selectKind == "paragraphs")
    result = generateByParagraphs(count);
  else
    result = generateByWords(count);

  document.getElementById("generate_result").innerHTML = result;
  return false;
}

const baseWords = ['Nautilus', 'Thresh', 'Rakan', 'Yasuo', 'Draven', 'Yuumi', 'Nami', 'Veigar', 'LeBlanc'];
function generateByParagraphs(count) {

  let randomParagraphs = '';


  for (i = 0; i < count; i++) {
    let wordsCount = Math.floor(Math.random() * (20 - 10 + 1) + 10);
    let currentParagraph = '';
    for (j = 0; j < wordsCount; j++)
      currentParagraph += (baseWords[Math.floor(Math.random() * baseWords.length)] + ' ');

    randomParagraphs += "<p class='paragraph'>" + currentParagraph + '</p>';
  }
  return randomParagraphs;
}

function generateByWords(count) {

  let randomParagraph = '';
  for (i = 0; i < count; i++)
    randomParagraph += (baseWords[Math.floor(Math.random() * baseWords.length)]) + ' ';


  return "<p class='paragraph'>" + randomParagraph + '</p>';
}


var form = document.getElementById('generate_form');
if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}