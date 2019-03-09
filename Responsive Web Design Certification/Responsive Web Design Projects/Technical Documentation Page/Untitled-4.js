let navSelection = [
    'What is EJS?',
    'Getting Started',
    'Example',
    'Usage',
    'Options',
    'Tags',
    'Includes',
    'Custom delimiters',
    'Caching',
    'Custom file loader',
    'Layouts',
    'Client-side support',
    'Using EJS with Express',
    'Support',
    'License'
]

let activeAnchor = document.querySelectorAll('.nav-link');
let navlist = document.querySelector('#navlist');


activeAnchor.forEach(anchor => {
    anchor.addEventListener('click', highlight);
});

function highlight() {
        let linkClicked = this.innerText;
        navlist.innerHTML = '';
        navSelection.forEach(selection => {
            selection === linkClicked ? bold(selection, 'yes') : bold(selection, 'no');
        });
};

function bold(selection, willBold){
    let anchorPoint = '#' + selection.replace(/\s/g, '_');
    let li = document.createElement('li');
    let a = document.createElement('a');
    
    a.setAttribute('href', anchorPoint);
    a.addEventListener('click', highlight);
    if (willBold === 'yes') {
        a.setAttribute('class', 'nav-link active');
        li.innerHTML = `<span class="active-marker"></span>${selection}`
    } else {
        a.setAttribute('class', 'nav-link');
        li.innerText = selection;
    }
    a.append(li);
    navlist.append(a);
};