var budgetController = (function(){
    var Expense = function(id, description, value){
        this.id = id,
        this.description = description,
        this.value = value,
        this.percentage = -1
    };

    Expense.prototype.calcPercentage = function(totalIncome){
        if(totalIncome > 0){
            this.percentage = Math.round((this.value / totalIncome) * 100);
        }else{
            this.percentage = -1
        }
    };

    Expense.prototype.getPercentage = function(){
        return this.percentage;
    }

    var Income = function(id, description, value){
        this.id = id,
        this.description = description,
        this.value = value
    };

    var calculateTotal = function(type){
        var sum = 0;
        data.allItem[type].forEach(function(el){
            sum += el.value;
        });
        data.totals[type] = sum
    }

    var data = {
        allItem: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: 0
    };

    return {
        addItem: function(type, des, val){
            var newItem, ID;
           
            if(data.allItem[type].length > 0){
                ID = (data.allItem[type].length -1) + 1;
            }else {ID = 0}
            

            if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            }else if (type === 'inc'){
                newItem = new Income(ID, des, val)
            }
            data.allItem[type].push(newItem);

            return newItem;
        },
        testing: function(){
            console.log(data)
        },
        deleteItem: function(type, id){

            
            var ids, index;
           ids = data.allItem[type].findIndex(function(e){
                return e.id === id;
            });
            if(ids !== -1){
                
               index=  data.allItem[type].splice(ids, 1);
                
            }
            console.log(data.allItem)
        },
        caculateBudget: function(){
            //sum inc and exp
            calculateTotal('inc');
            calculateTotal('exp');
            //calculate the percentage of inc vs exp
            data.budget = data.totals.inc - data.totals.exp;
            if(data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100)
            }else {
                data.percentage = -1;
            }
            

        },
        getBudget: function(){
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },

        calculetePercenttages: function(){

            data.allItem.exp.forEach(function(el){
                el.calcPercentage(data.totals.inc);
            })
        },

        getPercentages: function(){
            var allPerc = data.allItem.exp.map(function(el){
                return el.getPercentage();
            });
            return allPerc;
        }
    }

})();
 
var UIController = (function(){

    var DOMstring = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeList: '.income__list',
        expensesList: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercentages: '.item__percentage',
        dayLabel: '.budget__title--month'

    };



    return {
        
        getInput: function(){
            return {
                type: document.querySelector(DOMstring.inputType).value,
                description: document.querySelector(DOMstring.inputDescription).value,
                value: parseInt(document.querySelector(DOMstring.inputValue).value)
                
            } 
        },
        getDOMstring: function(){
            return DOMstring;
        },
        addListItem: function(obj, type){
            var html, newHtml, element;
            if(type === 'inc'){
                element = DOMstring.incomeList;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }else if(type === 'exp'){
                element = DOMstring.expensesList;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

           
                document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
            },

            clearFields: function(){
                var fields, fieldsArr;
  
                fields = document.querySelectorAll(DOMstring.inputDescription +',' + DOMstring.inputValue);
                fieldsArr =  Array.prototype.slice.call(fields);

                fieldsArr.forEach(function(e) {
                    e.value = '';
                });
                fieldsArr[0].focus();
                console.log(fieldsArr)
                
          },
          displayBudget: function(obj){

            document.querySelector(DOMstring.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstring.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstring.expensesLabel).textContent = obj.totalExp;
            

            if(obj.percentage > 0){
                document.querySelector(DOMstring.percentageLabel).textContent = obj.percentage + '%';
            }else {
                document.querySelector(DOMstring.percentageLabel).textContent = '--';
            }
          },
          deleteListItem: function(selecID){
              var el = document.getElementById(selecID);
              el.remove()
          },
          displayPercentages: function(percentages){

            var fields = document.querySelectorAll(DOMstring.expensesPercentages);
            
            for(var i = 0; i < fields.length; i++){
                if(percentages[i] > 0){
                    fields[i].textContent = percentages[i]
                }else {
                    fields[i].textContent = '--'
                }
               
            };
          },
          displayMonth: function(){
            var now, month, year;
            now = new Date;
            month = now.getMonth();
            year = now.getFullYear();

            document.querySelector(DOMstring.dayLabel).textContent = month + ' / ' + year

          }

        }
        
    
})();

var controller = (function(budgetCtrl, UItrl){
    var DOM = UItrl.getDOMstring();
    
     var setupEventListener = function(){
        

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(e){
        if(e.keyCode === 13 || e.which === 13){
           ctrlAddItem();

        }

        
    });
    document.querySelector('.container').addEventListener('click', ctrlDeleteItem);
     };

   

     var updateBudget = function(){
        budgetCtrl.caculateBudget();
        var budget = budgetCtrl.getBudget();
        UItrl.displayBudget(budget)
     };


    var ctrlAddItem = function(){

       
       var input = UItrl.getInput();

       var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
       console.log(budgetCtrl.testing());

       UItrl.addListItem(newItem, input.type);

       UItrl.clearFields();  

        updateBudget(); 
        updatePercentages();
        
    }

      var updatePercentages = function(){
          console.log('1')
          budgetCtrl.calculetePercenttages();
          var percentages = budgetCtrl.getPercentages();
          console.log(percentages);
          UItrl.displayPercentages(percentages)
      };

    var ctrlDeleteItem = function(event){
     
        var itemID, splitID, type, ID
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        console.log(itemID);
        if(itemID){
            splitID = itemID.split('-');
            type = splitID[0];
            ID =parseInt(splitID[1]);
            budgetCtrl.deleteItem(type, ID);
            UItrl.deleteListItem(itemID);
            updateBudget(); 

            updatePercentages();
            


        };
        
    }

    return {
        init: function(){
            UItrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            })
            console.log('Application has started')
            setupEventListener();
            UItrl.displayMonth();
        }
    };
    
})(budgetController, UIController);

controller.init()