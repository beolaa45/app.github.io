$(document).ready(function(){
    let arrList = [
        {
            id: 1,
            name: "Humburger",
            price: 100,
            amount: 1,
            total: function()  {
                
              return  this.price * this.amount
            }
        },
        {
            id: 2,
            name: "Pizaa",
            price: 200,
            amount: 1,
            total: function()  {
                
              return  this.price * this.amount
            }
        },
        {
            id: 3,
            name: "Phô Mai",
            price: 150,
            amount: 1,
            total: function()  {
                
              return  this.price * this.amount
            }
        }
    ]
    let table = $("#cart__table");
    
    let count = 1;
    function render(arr) {
      let arrHtml = arr.map(obj => {
        return `<tr class="cart__row" data-id="${obj.id}">
        <td> <i class="far fa-trash-alt"></i></td>
        <td> <img src="./img/cart-1.png" alt="${obj.name}" title="${obj.name}"/></td>
        <td>${obj.name}</td>
        <td>${obj.price},000 đ</td>
        <td> 
          <div class="cart__select"><i class="fas fa-minus" ></i><span class="details__number-basket">${obj.amount}                              </span><i class="fas fa-plus"></i></div>
        </td>
        <td>${obj.total()},000 đ</td>
      </tr>`
       })
      

       console.log(arrHtml)
       table.html(arrHtml.join(""))
    }
    
    render(arrList);

    
    $(document).on("click", ".cart__select .fa-minus",function() {
        console.log("ok");
        
       let index = $(this).closest(".cart__row").data("id");
       

       for(const obj of arrList) {
           if(obj.id === index && obj.amount > 1) {
               console.log(obj.amount)
               obj["amount"] = obj.amount - 1;
               
               
           }

           
       }

       render(arrList)

    
    });

    $(document).on("click", ".cart__select .fa-plus",function() {
        console.log("ok");
        
       let index = $(this).closest(".cart__row").data("id");
       

       for(const obj of arrList) {
           if(obj.id === index) {
               console.log(obj.amount)
               obj["amount"] = obj.amount + 1
               
           }

           
       }
       console.log(arrList)
       render(arrList)

    
    })

    $(document).on("click", ".fa-trash-alt", function(){
        let index = $(this).closest(".cart__row").data("id");
        console.log(index);

        let arrNew = arrList.filter(obj => {
            return obj.id !== index
        })
        arrList = arrNew
        console.log(arrNew)

        render(arrList)
    })
})