// selecionar os elementos
const amount = document.getElementById('amount')

// adicionar o evento de input formatado
amount.oninput = () => {
  let value = amount.value.replace(/\D/g, '')

  // transformar o valor em centavos
  value = Number(value) / 100

  // utilizei a função já criada criada
  amount.value = formatCurrancyBRL(value)
}

function formatCurrancyBRL(value) {
  value = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return value
}