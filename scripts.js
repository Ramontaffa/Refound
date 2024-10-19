// selecionar os elementos
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const expense = document.getElementById('expense')
const category = document.getElementById('category')

// seleciona os elementos da lista
const expenseList = document.querySelector('ul')

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

form.onsubmit = (event) => {
  event.preventDefault()

  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  }

  expenseAdd(newExpense)
}

function expenseAdd (newExpense) {
  try {
    // cria o elemento (li) para adicionar na lista
    const expenseItem = document.createElement('li')
    expenseItem.classList.add('expense')

    // adiciona o icone da categoria
    const expenseIcon = document.createElement('img')
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
    expenseIcon.setAttribute("alt", newExpense.category_name)

    // adiciona as informações no item
    expenseItem.append(expenseIcon)

    // adiciona o item a lista
    expenseList.append(expenseItem)

  } catch (error) {
    alert('Erro ao adicionar despesa')
  }
}
