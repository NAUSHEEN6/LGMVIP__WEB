const data = [
    {
        Name: "2022101132",
        Name1:"SAI",
        Telugu:"99",
        Hindi:"98",
        English:"98",
        Maths:"100",
        Science:"99",
        Social:"98",
        Total:"592",
        Result:"PASS",
        Grade:"A+",
    
    },
    {
        Name: "2022101156",
        Name1:"RAM",
        Telugu:"99",
        Hindi:"97",
        English:"96",
        Maths:"100",
        Science:"99",
        Social:"98",
        Total:"589",
        Result:"PASS",
        Grade:"A+",

      
    },
    {
        Name: "2022101118",
        Name1:"RAJU",
        Telugu:"96",
        Hindi:"97",
        English:"97",
        Maths:"99",
        Science:"97",
        Social:"99",
        Total:"585",
        Result:"PASS",
        Grade:"A+",
      
    },
    {
        Name: "2022101128",
        Name1:"RANI",
        Telugu:"95",
        Hindi:"96",
        English:"98",
        Maths:"98",
        Science:"99",
        Social:"97",
        Total:"583",
        Result:"PASS",
        Grade:"A",
    },
    {
        Name: "2022101142",
        Name1:"RAMU",
        Telugu:"92",
        Hindi:"99",
        English:"97",
        Maths:"99",
        Science:"100",
        Social:"97",
        Total:"584",
        Result:"PASS",
        Grade:"A",
    },
    {
        Name: "2022101153",
        Name1:"SITA",
        Telugu:"92",
        Hindi:"96",
        English:"97",
        Maths:"98",
        Science:"96",
        Social:"96",
        Total:"575",
        Result:"PASS",
        Grade:"A",
    },
    {
        Name: "2022101136",
        Name1:"DEVI",
        Telugu:"94",
        Hindi:"92",
        English:"96",
        Maths:"94",
        Science:"93",
        Social:"96",
        Total:"565",
        Result:"PASS",
        Grade:"B",
    },
    {
        Name: "2022101120",
        Name1:"RAVAN",
        Telugu:"92",
        Hindi:"94",
        English:"94",
        Maths:"95",
        Science:"96",
        Social:"98",
        Total:"569",
        Result:"PASS",
        Grade:"B",
    },
    {
        Name: "2022101163",
        Name1:"RAVI",
        Telugu:"94",
        Hindi:"93",
        English:"96",
        Maths:"94",
        Science:"94",
        Social:"91",
        Total:"562",
        Result:"PASS",
        Grade:"B",
    },
    {
        Name: "2022101112",
        Name1:"BHANU",
        Telugu:"96",
        Hindi:"92",
        English:"96",
        Maths:"95",
        Science:"93",
        Social:"95",
        Total:"567",
        Result:"PASS",
        Grade:"B",
    }
]
let sleep = ms => {  
    return new Promise(resolve => setTimeout(resolve, ms));  
    };  
const results = document.getElementById('results')
const submit= document.getElementById('submit')
submit.addEventListener("click", function() {
    const Name = document.getElementById('num-box').value;
    results.innerHTML=`<div class="loader">Loading...</div>`
    sleep(2000).then(() => {   
        for(let i = 0; i < data.length; i++){
            if(data[i].Name == Name){ 
                console.log(data[i].marks)
                results.innerHTML =
                "<h3>"+"Roll Number : "+data[i].Name+"</h3>"+
                "<h3>"+"Name : "+data[i].Name1+"</h3>"+
                "<h3>" + "Telugu : " + data[i].Telugu +"</h3>" + 
                 "<h3>" + "Hindi : " + data[i].Hindi +"</h3>" + 
                 "<h3>" + "English : " + data[i].English +"</h3>" + 
                 "<h3>" + "Mathematics : " + data[i].Maths +"</h3>" + 
                 "<h3>" + "Science : "  + data[i].Science +"</h3>"+
                 "<h3>" + "Social-Studies : " + data[i].Social +"</h3>"+
                 "<h3>" + "Total : " + data[i].Total +"</h3>" +
                 "<h3>" + "Result : " + data[i].Result +"</h3>" +
                 "<h3>" + "Grade : " + data[i].Grade +"</h3>"  
                return;
            }
        }
        results.innerHTML = "<h3>" + "No information ! " + "</h3>" 
    }); 
    
})