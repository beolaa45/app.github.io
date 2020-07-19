$(document).ready(function() {
    

    let checkName = $("#check__name");
    let select = $("#thanhpho");
    let checkAddress = $("#check__address");
    let checkPhone = $("#check__phone");
    let checkRadio = $("input[type='radio']:checked");
    let paySunmit = $("#pay__submit")

    let errcheckName = $("#check__name ~ .error");
    let errselect = $("#thanhpho ~ .error");
    let errcheckAddress = $("#check__address ~ .error");
    let errcheckPhone = $("#check__phone ~ .error");
    let errcheckRadio = $(".pay__radio ~ .error");
    
    let errcheckNameBool = true;
    let errselectBool = true;
    let errcheckAddressBool = true;
    let errcheckPhoneBool = true;
    let errcheckRadioBool = true

    errcheckName.hide();
    errselect.hide();
    errcheckAddress.hide();
    errcheckPhone.hide();
    errcheckRadio.hide();

    

    checkName.focusout(function(){
        let str = $(this).val().trim()
        if(str.length < 1){
            errcheckName.show()
            return errcheckNameBool = true
        }

        errcheckName.hide();
        errcheckNameBool = false;
    })

    select.focusout(function(){
        let str = $(this).val()
        
        if(str.length == 0){
            errselect.show();
            return errselectBool = true;

        }

        errselect.hide()
        errselectBool = false
    });

    checkAddress.focusout(function(){
        let str = $(this).val().trim()
        

        if(str.length < 1){
            errcheckAddress.show();
            return errcheckAddressBool = true;

        }

        errcheckAddress.hide()
        errcheckAddressBool = false
    })

    checkPhone.focusout(function(){
        let str = $(this).val()

        if(str.length < 4){
            errcheckPhone.show();
            return errcheckPhoneBool = true
        }

        errcheckPhone.hide();
        errcheckPhoneBool = false
    })


    
    paySunmit.submit(function(e){
        console.log(checkRadio)
        if(checkRadio > 0){
            errcheckRadioBool = false;
            errcheckRadio.hide();
           
        }else {
            errcheckRadio.show();
            errcheckRadioBool = true
        }
       

       
        return false
    })
})