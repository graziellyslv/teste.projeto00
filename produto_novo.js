fetch('http://localhost:3000/produtos/2', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ preco: 99.9 })
})
  .then((resposta => resposta.json())
  .then((dados => console.log('Atualizado:', dados));
