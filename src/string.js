let a = 123

const data = [
  { first: 'Jane', last: 'Bond' },
  { first: 'Lars', last: 'Croft' },
]

const gridData = [
  {
    name: '123',
    score: [
      {
        title: 'chinese',
        score: 90
      },
      {
        title: 'english',
        score: 70
      }

    ]
  },

  {
    name: '789',
    score: [
      {
        title: 'chinese',
        score: 50
      },
      {
        title: 'english',
        score: 20
      }

    ]
  }
]

let template = `
<ul>
  <% for(let i=0; i < data.length; i++) { %>
    <li><%= data[i].first %></li>
  <% } %>
</ul>
`

let gridTemp = `
  <table>
    <% for(let i=0; i<data.length; i++) { %>
      <tr>
        <% let score = data[i]['score'] %>
        <% for(let j=0; j < score.length; j++ ){ %>
          <td>
            <%= data[i]['name'] + ' get: ' %>
            <%= score[j]['title'] + ':' + score[j]['score'] %>
          </td>
        <% } %>
      </tr>
    <% } %>
  </table>
`

function fill() {
  console.info(`i\'m templage string '\n' ${a}`)
  document.querySelector('#test-template').innerHTML = `
    <h1>${a}</h1>
  `
}

function createTable(gridData = data) {
  
  let html = `<ul>
    ${gridData.map(item => {
      return `<li>${item.first}<i>${item.last}</i></li>`
    }).join('')}
  </ul>`

  document.querySelector('#grid-data').innerHTML = html
}

function compile(template, data){
  let newTemp
  const evalExpr = /<%=(.+?)%>/g
  const expr = /<%([\s\S]+?)%>/g
  let totalHtml = ''

  newTemp = template.replace(/\n/g, '').replace(evalExpr, '`) \n getHtml($1) \n getHtml(`').replace(expr, '`) \n $1 \n getHtml(`')

  newTemp = 'getHtml(`' + newTemp + '`)'

  function getHtml(html){
    totalHtml += html
  }

  function parse(data){
    eval(newTemp)
  }

  parse(data)

  return totalHtml
}

function testForTemplate(){
  let html = compile(template, data)

  document.querySelector('#user-defined-tmp').innerHTML = html
}

function getComplexTemp() {
  let html = compile(gridTemp, gridData)
  // console.info('==1==', html)
  document.querySelector('#user-defined-tmp-c').innerHTML = html
}

export default {
  fill,
  createTable,
  testForTemplate,
  getComplexTemp
}
