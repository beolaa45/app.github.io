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
            price: 100,
            amount: 1,
            total: function()  {
                
              return  this.price * this.amount
            }
        }
    ]
    let table = $("#cart__table");
        
    function render(arr) {
      let arrHtml = arr.map(obj => {
        return `<tr class="cart__row" data-id="${obj.id}">
        <td> <i class="far fa-trash-alt"></i></td>
        <td> <img src="./img/cart-1.png" alt="${obj.name}" title="${obj.name}"/></td>
        <td>${obj.name}</td>
        <td>${obj.price},000 đ</td>
        <td> 
          <div class="cart__select"><i class="fas fa-minus" ></i><span class="details__number-basket">1                                </span><i class="fas fa-plus"></i></div>
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
        let count = 1;
       let index = $(this).closest(".cart__row").data("id");
       

       for(const obj of arrList) {
           if(obj.id === index && obj.amount > 1) {
               console.log(obj.amount)
               obj["amount"] = obj.amount - 1
               
           }

           
       }

       render(arrList)

       

    //   let arrNew = arrList.filter(obj => {
    //        return obj.id === index
    //    })
    //   let objNew = {
    //        ...arrNew[0],
    //         amount : count + arrNew[0].amount
    //    }
    //    let arrNew2 = arrList.filter(obj => {
    //     return obj.id !== index
    // })
    //   arrNew2.push(objNew)

    //    console.log(arrNew2)

    //    render(arrNew2)
    })
})