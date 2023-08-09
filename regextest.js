// cnpjs:
// 45.546.851/0001-72, 42.108.893/0001-33, 73.317.272/0001-93, 69.474.548/0001-70

console.log('CNPJ')
console.log(' ')

function cleanCNPJ(cnpj) {
  return cnpj.replace(/\D/g, '');
}

const cnpjs = ['45_546_851/0001-72', '42-108_893 0001/33', '73-317 2720001_93', '69_474-548 0001.70']

cnpjs.forEach(function(cnpj) {
  console.log(cleanCNPJ(cnpj))
});
console.log(' ')
console.log('cnpj`s formatados:')
console.log(' ')

cnpjs.forEach(function(cnpj){
  console.log(cleanCNPJ(cnpj).replace(/([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{4})([0-9]{2})/, '$1.$2.$3/$4-$5'));
})
console.log(' ')

console.log('placas de carro')

console.log(' ')

// placas de carro:
// JSP-9227, KXJ-3917, LIT-3264, KQD-5844

function cleanPlacas(placa) {
  return placa.replace(/\W/g, '');
};

const placas = ['JS-P 92.27', 'KX.J-39-17', 'L=IT-32 64', 'KQD  -5 84 4', 'L SD -2 45 2'];

placas.forEach(function(placas){
  console.log(cleanPlacas(placas))
});

console.log(' ')
console.log('placas formatadas:')
console.log(' ')

placas.forEach(function(placas){
  console.log(cleanPlacas(placas).replace(/([A-Z]{3})([\d]{4})/, '$1-$2'))
});