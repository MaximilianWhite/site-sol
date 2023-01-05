// =======================================================================

// =============== [ Слушатель Input в Оформление заказа ] ===============
$('body').on('change keyup paste', 'input[data-value="country"], input[data-value="obl"], input[data-value="city"], input[data-value="street"], input[data-value="house"], input[data-value="apartment"], input[data-value="comment"]', (e) => {
    const val = $(e.target).val();
    const name = "data-check-"+$(e.target).attr('data-value');

    if($(e.target).attr('data-date')) {
        if($(e.target).val().length > 0) { $(e.target).attr('data-date', "1"); }
        else { $(e.target).attr('data-date', "0"); }
    }

    const start = $('li['+name+']').attr(name);
    $('li['+name+']').text(start+": "+val);

    Check_Processing();
});
// =======================================================================

// ================ [ Проверка Input в Оформление заказа] ================
function Check_Processing() {
    const GetAll = document.querySelectorAll('input[data-date]');
    let a = 0;
    for(let i = 0; i < GetAll.length; i++) {
        if($(GetAll[i]).val().length > 0) { a += 1; }
    }

    if(a == 5) {
        $('a[data-button-process="1"]').css('opacity', '');
        $('a[data-button-process="1"]').css('pointer-events', '');
    }
    else {
        $('a[data-button-process="1"]').css('opacity', '0.5');
        $('a[data-button-process="1"]').css('pointer-events', 'none');
    }

    console.log(a);
}

// =======================================================================

// ===================== [ Конец оформления заказа ] =====================
function ConvertInformation() {
    // 1
    const GetAllInputs = document.querySelectorAll('input[data-value]');
    for(let i = 0; i < GetAllInputs.length; i++) {
        const GetValue = "data-check-"+$(GetAllInputs[i]).attr('data-value');
        const start = $('li['+GetValue+']').attr(GetValue);
        const val = $(GetAllInputs[i]).val();
        $('li['+GetValue+']').text(start+": "+val);
    }
    // 2
    const GetAllDelivery = document.querySelectorAll('input[name="delivery"]');
    for(let i = 0; i < GetAllDelivery.length; i++) {
        if($(GetAllDelivery[i]).is(':checked')) {
            const GetValue = $(GetAllDelivery[i]).attr('data-radio');
            const start = $('li[data-check-delivery]').attr('data-check-delivery');
            $('li[data-check-delivery]').text(start+": "+GetValue);
        }
    }
    // 3
    const GetAllPayment = document.querySelectorAll('input[name="payment"]');
    for(let i = 0; i < GetAllPayment.length; i++) {
        if($(GetAllPayment[i]).is(':checked')) {
            const GetValue = $(GetAllPayment[i]).attr('data-radio');
            const start = $('li[data-check-payment]').attr('data-check-payment');
            $('li[data-check-payment]').text(start+": "+GetValue);
        }
    }
}
// =======================================================================

// ================== [ Новый заказ Оформления заказа ] ==================
function NewOrder() {
    console.log('New Order');
}
// =======================================================================

// =================== [ Обнуление Оформления заказа ] ===================
function resetOrder() {
    const GetAllInputs = document.querySelectorAll('input[data-value]');
    for(let i = 0; i < GetAllInputs.length; i++) { 
        $(GetAllInputs[i]).val(''); 
        const GetValue = "data-check-"+$(GetAllInputs[i]).attr('data-value');
        const start = $('li['+GetValue+']').attr(GetValue);
        $('li['+GetValue+']').text(start+": ");
    }
    
    const GetAllDelivery = document.querySelectorAll('input[name="delivery"]');
    $(GetAllDelivery[0]).prop('checked', true);
    const delivery = $('li[data-check-delivery]').attr('data-check-delivery');
    $('li[data-check-delivery]').text(delivery+': ');

    const GetAllPayment = document.querySelectorAll('input[name="payment"]');
    $(GetAllPayment[0]).prop('checked', true);
    const payment = $('li[data-check-payment]').attr('data-check-payment');
    $('li[data-check-payment]').text(payment+': ');
}
// =======================================================================

// ===================== [ Конец оформления заказа ] =====================