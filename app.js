const inp = document.getElementById('inp')
const btns = document.querySelectorAll('button')

screenval = "0"
decimalvalue = true

for (item of btns) {
    item.addEventListener('click', (e) => {
        buttontext = e.target.innerText


        if (buttontext == 'CE') {
            ch = screenval.charAt(screenval.length - 1)
            if (ch == '.') {
                decimalvalue = true
            }

            if (screenval.length >= 1) {
                if (screenval.length == 1 && screenval == '0')
                    return
                else if (screenval.length == 1) {
                    screenval = 0
                    inp.value = screenval
                    return
                }
                screenval = screenval.slice(0, screenval.length - 1)
                inp.value = screenval
            }

        }

        else if (buttontext == "AC") {
            screenval = "0"
            decimalvalue = true
            inp.value = screenval

        }

        else if (e.target.className == 'opr') {
            ch = screenval.charAt(screenval.length - 1)

            if (isNaN(ch) == true) {
                arrval = screenval.split('')

                if (buttontext == '=') {
                    if(ch == ')'){
                        ans = eval(screenval)
                        screenval = ans.toString()
                        decimalvalue = true
                    }

                    else{
                        arrval.pop()
                        screenval = arrval.join('')
                        ans = eval(screenval)
                        screenval = ans.toString()
                        decimalvalue = true
                    }
                   

                }

                else {

                    if(buttontext == 'X'){
                        buttontext = '*'
                    }
                    arrval[arrval.length - 1] = buttontext
                    decimalvalue = true
                    screenval = arrval.join('')
                }

            }

            else {

                if (buttontext == '=') {

                    ans = eval(screenval)

                    screenval = ans.toString()
                    if (screenval.includes('.') == true) {

                        decimalvalue = false
                    }

                    else {
                        decimalvalue = true
                    }
                }
                else {
                    if(buttontext == 'X'){
                        buttontext = '*'
                    }

                    decimalvalue = true
                    screenval += buttontext
                }

            }

            inp.value = screenval
        }



        else {

            if (screenval.length == 1 && screenval == 0) {
                if (buttontext == '.') {
                    screenval += buttontext
                    decimalvalue = false
                }

                else if (buttontext == '00')
                    screenvalue = '0'

                else
                    screenval = buttontext
            }


            else {

                if (buttontext == '.') {
                   
                    ch = screenval.charAt(screenval.length - 1)

                    if (isNaN(ch) == true && ch != '.') {
                        decimalvalue = false
                        screenval += '0.'
                    }

                    else if (ch == '.') {
                        return
                    }

                    else {
                        if (decimalvalue == false) {
                            return
                        }
                        decimalvalue = false
                        screenval += buttontext

                    }

                }

                else {
                    screenval += buttontext
                }

            }
            inp.value = screenval
        }

    })

}

