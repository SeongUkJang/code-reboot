document.addEventListener('DOMContentLoaded', function(){
    const screen = document.querySelector('#display')
    const btns = document.querySelectorAll('#buttons button')
    
    let expression = ''


    
    
    
    btns.forEach(btn => {
        btn.addEventListener('click', () =>handleInput(btn.textContent))
    })

    function handleInput(val){
        const lastChar = expression.slice(-1)
        // console.log(val);

        if(isNumberOrDot(val)){
            appendToExpression(val)
        }
        else if(isOperator(val)){

            if(!isOperator(lastChar)) appendToExpression(val)
        }
        else if (val === 'C'){
            clearExpression()
        }
        else if (val === '='){
            calculateResult()
        }
    }

    function isNumberOrDot(val){
        return !isNaN(val) || val === '.'
    }

    function isOperator(val){
        return "+-*/".includes(val)
    }

    function appendToExpression(val){
        expression += val
        screen.value = expression
    }
    
    function clearExpression(){
        expression =''
        screen.value = '0'
    }

    function calculateResult(){
        try {
            const result = eval(expression)
            if(isFinite(result)){
                expression=String(result)
                screen.value=expression
            }
            else {
                throw new Error('계산 오류')
            }
        }
        catch {
            clearExpression()
            screen.value='Error'
        }
    }
})