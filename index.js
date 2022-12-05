const bands = ['The plot in you', 'The Devil wears prada', 'pierce the vell', 'Norma jean', 'The bled', 'say anything', 'The midmay state', 'we came as Romas', 'counterparts', 'oh sleeper', 'A stylish prive', 'ohhh shit'];

function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);


document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');

console.log(sortedBands);



const Name =['Ashir','Eshan', 'Shahmeer', 'Ahad', 'Shayan', 'Alyan', 'arsalan', 'Basil'];

function strip(NameNew) {
    return NameNew.replace(/^(a |s |b )/i, '').trim();

}

const sortedName = Name.sort((a,b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#Name').innerHTML = sortedName.map(Name => `<li>${Name}</li>`).join('');

console.log(sortedName);