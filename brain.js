let value = document.querySelector('#select')
let checkBtn = document.querySelector('#btn')
let exText = document.querySelector('#extext')
let exExample = document.querySelector('#exExample')
let defaultFunc = document.querySelector('#defaultFunc')
let result = document.querySelector('#result')

render(value.value)

function createElements (...array) {
	return array.map( el => {
		return document.createElement(el)
	} )
}

function render(params) {
    exText.innerHTML = null
    exExample.innerHTML = null
    defaultFunc.value = ''

    let temp = obj[params]
    let [ span1, h3] = createElements('span', 'h3')

    span1.textContent = temp.shart
    h3.textContent = 'Examples:'
    exExample.append(h3)

    for(let i of temp.example){
        let [ span2, br] = createElements('span', 'br')
        span2.textContent = i
        exExample.append(span2, br)
    }

    exText.append(span1)
    defaultFunc.value = temp.default
}

function check1(params){
    let temp = obj[params]
    let a = ``
    a += defaultFunc.value
    for(let i of temp.test){
        let func = new Function( a + `return arrayOfMultiples(${i[0][0]}, ${i[0][1]})`)
    try {
        if(func()+'' == i[1]+''){
            console.log(true);
            let [ span, br ] = createElements('span', 'br')
            span.innerHTML = '<span style="color: rgb(27, 233, 27)">&#10003;</span>'
            span.append(` Test passed: [${func()}]`)
            setTimeout(() => {
                result.append(span, br)
            }, 1000);
        }
        else {
            let [ span, br ] = createElements('span', 'br')
            span.innerHTML = '<i class="fa fa-close" style="font-size:20px;color:red"></i>'
            span.append(`FAILED: Expected: [${i[1]}], instead got: [${func()}] `)
            setTimeout(() => {
                result.append(span, br)
            }, 1000);
        }
        } catch (error) {
        let [ span, br ] = createElements('span', 'br')
            span.innerHTML = '<i class="fa fa-close" style="font-size:20px;color:red"></i>'
            span.append(`FAILED: ${error}`)
            setTimeout(() => {
                result.append(span, br)
            }, 1000);
    }
    }
}


function check2(params){
    let temp = obj[params]
    let a = ``
    a += defaultFunc.value
    for(let i of temp.test){
        let func = new Function( a + `return num_of_digits(${i[0]})`)
    try {
        if(func()+'' == i[1]){
            let [ span, br ] = createElements('span', 'br')
            span.innerHTML = '<span style="color: rgb(27, 233, 27)">&#10003;</span>'
            span.append(` Test passed: [${func()}]`)
            setTimeout(() => {
                result.append(span, br)
            }, 1000);
        }
        else {
            let [ span, br ] = createElements('span', 'br')
            span.innerHTML = '<i class="fa fa-close" style="font-size:20px;color:red"></i>'
            span.append(`FAILED: Expected: [${i[1]}], instead got: [${func()}] `)
            setTimeout(() => {
                result.append(span, br)
            }, 1000);
        }
        } catch (error) {
        let [ span, br ] = createElements('span', 'br')
            span.innerHTML = '<i class="fa fa-close" style="font-size:20px;color:red"></i>'
            span.append(`FAILED: ${error}`)
            setTimeout(() => {
                result.append(span, br)
            }, 1000);
    }
    }
}

function check3(params){
    let temp = obj[params]
    let a = ``
    a += defaultFunc.value
    for(let i of temp.test){
        let func = new Function( a + `return isRepdigit(${i[0]})`)
    try {
        if(func() == i[1]){
            let [ span, br ] = createElements('span', 'br')
            span.innerHTML = '<span style="color: rgb(27, 233, 27)">&#10003;</span>'
            span.append(` Test passed: ${func()}`)
            setTimeout(() => {
                result.append(span, br)
            }, 1000);
        }
        else {
            let [ span, br ] = createElements('span', 'br')
            span.innerHTML = '<i class="fa fa-close" style="font-size:20px;color:red"></i>'
            span.append(`FAILED: Expected: ${i[1]}, instead got: ${func()} `)
            setTimeout(() => {
                result.append(span, br)
            }, 1000);
        }
        } catch (error) {
        let [ span, br ] = createElements('span', 'br')
            span.innerHTML = '<i class="fa fa-close" style="font-size:20px;color:red"></i>'
            span.append(`FAILED: ${error}`)
            setTimeout(() => {
                result.append(span, br)
            }, 1000);
    }
    }
}


value.onchange = () => {
    result.innerHTML = null
    render(value.value)
}

checkBtn.onclick = () => {
    result.innerHTML = null
    if(value.value == 'ex1') check1(value.value)
    if(value.value == 'ex2') check2(value.value)
    if(value.value == 'ex3') check3(value.value)
}