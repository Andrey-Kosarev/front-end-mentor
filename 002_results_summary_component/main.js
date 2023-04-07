const data =[
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ]

let table = document.getElementById('summary-inner-table');


for (let d of data) {
    console.log(d)

    let eL = document.createElement('div');
    let catEl = document.createElement('div');
    let imgEl = document.createElement('img');
    let scoreEl = document.createElement('div');
    let strongEl = document.createElement('strong')
    strongEl.innerHTML = d.score;


    imgEl.setAttribute('src', d.icon)

    eL.classList.add('summary-table-score');
    eL.classList.add(d.category.toLowerCase());
    catEl.classList.add('table-score-category')
    catEl.appendChild(imgEl)
    catEl.append(d.category)

    scoreEl.classList.add('table-score-score')
    scoreEl.appendChild(strongEl)
    scoreEl.append('/100')

    eL.appendChild(catEl)
    eL.appendChild(scoreEl);

    table.appendChild(eL)
}