 //DECLARATIONS 
      let year1 = document.getElementById("year1")
        let year2 = document.getElementById("year2")
        let year3 = document.getElementById("year3")
        let cash1 = document.getElementById("cash1")
        let cash2 = document.getElementById("cash2")
        let cash3 = document.getElementById("cash3")
        let check1= document.getElementById("check1")
        let check2 = document.getElementById("check2")
        let check3= document.getElementById("check3")
        let save1 = document.getElementById("save1")
        let save2 = document.getElementById("save2")
        let save3 = document.getElementById("save3")
        let assets1 = document.getElementById("assets1")
        let assets2 = document.getElementById("assets2")
        let assets3 = document.getElementById("assets3")
        let loans1 = document.getElementById("loans1")
        let loans2 = document.getElementById("loans2")
        let loans3 = document.getElementById("loans3")
        let expense1 = document.getElementById("expense1")
        let expense2 = document.getElementById("expense2")
        let expense3 = document.getElementById("expense3")
        let credit1 = document.getElementById("credit1")
        let credit2 = document.getElementById("credit2")
        let credit3 = document.getElementById("credit3")
        let liability1 = document.getElementById("liability1")
        let liability2 = document.getElementById("liability2")
       let liability3 = document.getElementById("liability3")
        let worth1 = document.getElementById("worth1")
        let worth2 = document.getElementById("worth2")
        let worth3 = document.getElementById("worth3")
        let button = document.getElementById("button")

        
 //FUNCTIONS     
        function edit(){
            year1.innerHTML = `<input type="number" id="y1">`
            year2.innerHTML = `<input type="number" id="y2">`
            year3.innerHTML = `<input type="number" id="y3">`
            cash1.innerHTML = `<input type="number" id="ca1">`
            cash2.innerHTML = `<input type="number" id="ca2">`
            cash3.innerHTML = `<input type="number" id="ca3">`
            check1.innerHTML = `<input type="number" id="ch1">`
            check2.innerHTML = `<input type="number" id="ch2">`
            check3.innerHTML = `<input type="number" id="ch3">`
            save1.innerHTML = `<input type="number" id="sa1">`
            save2.innerHTML = `<input type="number" id="sa2">`
            save3.innerHTML = `<input type="number" id="sa3">`
              loans1.innerHTML = `<input type="number" id="lo1">`
              loans2.innerHTML = `<input type="number" id="lo2">`
              loans3.innerHTML = `<input type="number" id="lo3">`
              expense1.innerHTML = `<input type="number" id="ex1">`
              expense2.innerHTML = `<input type="number" id="ex2">`
              expense3.innerHTML = `<input type="number" id="ex3">`
              credit1.innerHTML = `<input type="number" id="cr1">`
              credit2.innerHTML = `<input type="number" id="cr2">`
              credit3.innerHTML = `<input type="number" id="cr3">`
              button.innerHTML = '<tr><button onclick="save()" id="save">Save</button></tr>'
              document.getElementById("ytext").innerHTML = 'Years:'
           
        }
        function save(){
            year1.innerHTML = document.getElementById("y1").value
            year2.innerHTML = document.getElementById("y2").value
            year3.innerHTML = document.getElementById("y3").value
        cash1.innerHTML = document.getElementById("ca1").value
        cash2.innerHTML = document.getElementById("ca2").value
        cash3.innerHTML = document.getElementById("ca3").value
        check1.innerHTML = document.getElementById("ch1").value
        check2.innerHTML = document.getElementById("ch2").value
        check3.innerHTML = document.getElementById("ch3").value
        save1.innerHTML = document.getElementById("sa1").value
        save2.innerHTML = document.getElementById("sa2").value
        save3.innerHTML = document.getElementById("sa3").value
        loans1.innerHTML = document.getElementById("lo1").value
        loans2.innerHTML = document.getElementById("lo2").value
        loans3.innerHTML = document.getElementById("lo3").value
        expense1.innerHTML = document.getElementById("ex1").value
        expense2.innerHTML = document.getElementById("ex2").value
        expense3.innerHTML = document.getElementById("ex3").value
        credit1.innerHTML = document.getElementById("cr1").value
        credit2.innerHTML = document.getElementById("cr2").value
        credit3.innerHTML = document.getElementById("cr3").value
        assets1.innerHTML = JSON.parse(cash1.innerHTML) + JSON.parse(check1.innerHTML) + JSON.parse(save1.innerHTML)
        assets2.innerHTML = JSON.parse(cash2.innerHTML) + JSON.parse(check2.innerHTML) + JSON.parse(save2.innerHTML)
        assets3.innerHTML = JSON.parse(cash3.innerHTML) + JSON.parse(check3.innerHTML) + JSON.parse(save3.innerHTML)
        liability1.innerHTML = JSON.parse(loans1.innerHTML) + JSON.parse(expense1.innerHTML) + JSON.parse(credit1.innerHTML)
        liability2.innerHTML = JSON.parse(loans2.innerHTML) + JSON.parse(expense2.innerHTML) + JSON.parse(credit2.innerHTML)
        liability3.innerHTML = JSON.parse(loans3.innerHTML) + JSON.parse(expense3.innerHTML) + JSON.parse(credit3.innerHTML)
        worth1.innerHTML = assets1.innerHTML - liability1.innerHTML
        worth2.innerHTML = assets2.innerHTML - liability2.innerHTML
        worth3.innerHTML = assets3.innerHTML - liability3.innerHTML
        button.innerHTML = '<tr><button onclick="edit()" id="edit">Edit</button></tr>'
        document.getElementById("ytext").innerHTML = ''
        }
        
