// ========================= [ Модальные окна ] ==========================
const GetJson = {
    "loading": "<div id='Loading' class='Base_Settings_Window'>"+
                    "<img class='Loading_Image' src='assets/img/icons/loading.svg' alt='Загрузка...'>"+
                    "<h1>Загрузка...</h1>"+
                "</div>",
    "auth": "<div id='Login' class='Base_Settings_Window Close_BG'>"+
                "<h1 class='Name_Window'>Авторизация</h1>"+
                "<div class='Stick_Window'></div>"+
                "<div class='Auth_Block Base_Settings_Inner_Window'>"+
                    "<input class='Base_Settings_Input' placeholder='*Почта' name='email' type='text'>"+
                    "<input class='Base_Settings_Input' placeholder='*Пароль' name='password' type='password'>"+
                    "<div class='Line_Window'>"+
                        "<p>Нету аккаунта?</p>"+
                        "<a data-id-button='Go_To_Register_Auth'>Зарегистрироваться</a>"+
                    "</div>"+
                    "<input class='DontActive_Submit' type='submit' value='Авторизоваться'>"+
                "</div>"+
                "<div class='Stick_Window'></div>"+
            "</div>",
    "reg": "<div id='Register' class='Base_Settings_Window Close_BG'>"+
                "<h1 class='Name_Window'>Регистрация</h1>"+
                "<div class='Stick_Window'></div>"+
                "<div class='Reg_Block Base_Settings_Inner_Window'>"+
                    "<div class='Base_Settings_Input_Line'>"+
                        "<input class='Base_Settings_Input' placeholder='*Имя' name='name' type='text'>"+
                        "<input class='Base_Settings_Input' placeholder='*Фамилия' name='surname' type='text'>"+
                    "</div>"+
                    "<input class='Base_Settings_Input Size_Input_SecondName' placeholder='*Отчество ( Необязательно )' name='secondname' type='text'>"+
                    "<div class='Base_Settings_Input_Line'>"+
                        "<input class='Base_Settings_Input' placeholder='*Номер телефона' name='phone' type='text'>"+
                        "<input class='Base_Settings_Input' placeholder='*Почта' name='email' type='text'>"+
                    "</div>"+
                    "<div class='Base_Settings_Input_Line'>"+
                        "<input class='Base_Settings_Input' placeholder='*Пароль' name='password' type='password'>"+
                        "<input class='Base_Settings_Input' placeholder='*Пароль повторно' name='passwordrepeat' type='password'>"+
                    "</div>"+
                    "<div class='Column_Window'>"+
                        "<p>Создавая личный кабинет, вы соглашаетесь с нашими</p>"+
                        "<a>Условиями использования</a>"+
                        "<p>и</p>"+
                        "<a>Политикой Конфиденциальности</a>"+
                    "</div>"+
                    "<input class='DontActive_Submit' type='submit' value='Регистрация'>"+
                "</div>"+
                "<div class='Stick_Window'></div>"+
            "</div>",
    "more_about": "<div id='More_AboutCompany' class='Base_Settings_Window Close_BG'>"+
                        "<h1 class='Name_Window'>Подробней о Нас</h1>"+
                        "<div class='Stick_Window'></div>"+
                        "<div class='More_About_Company_Block Base_Settings_Inner_Window'>"+
                            "<ul class='Ul_Line Scroll_Window'>"+
                                "<li>Гималайская соль получила свое название из-за местонахождения. Она добывается преимущественно в гималайских горах, в Пакистане. В этой стране нет крупных промышленных предприятий, загрязняющих окружающую среду, а добывают соль по-старинке вручную, без использования взрывчатых веществ. После чего сушат на солнышке. Благодаря этим факторам соль считается экологически чистым продуктом, что привлекает тех, кто стремится сделать свой рацион более безопасным для здоровья.</li>"+
                                "<li class='Stick_Li'><div class='Stick_Inner_Window'></div></li>"+
                                "<li>В составе обычной поваренной соли – 97-99% одного-единственного компонента: хлорида натрия. Соль содержит 84 микроэлемента, включая железо, благодаря которому она имеет розовый цвет.</li>"+
                                "<li class='Stick_Li'><div class='Stick_Inner_Window'></div></li>"+
                                "<li class='Li_None_Type'>"+
                                    "<ul class='Ul_Line Ul_Line_Double'>"+
                                        "<li>Обычная розовая соль из Австралии, Боливии, Непала, Польши, Перу, Чили, США. Вкус такой же, как обычной поваренной соли, отличается только розовым цветом;</li>"+
                                        "<li>Садочная розовая соль из Крыма. Розовый цвет придает микроводоросль;</li>"+
                                        "<li>Соль гималайская чёрная (кала намак, санчал).</li>"+
                                    "</ul>"+
                                "</li>"+
                                "<li class='Stick_Li'><div class='Stick_Inner_Window'></div></li>"+
                                "<li>Привлекательный внешний вид соли сделал ее популярным материалом для отделки и изготовления интерьерных аксессуаров. Дизайн здесь переплетается с физиотерапией – ингалирование солью является одним из распространенных методов иммунной поддержки организма, активно используется в лечении простудных заболеваний, для облегчения проявлений аллергии, стрессового состояния.</li>"+
                                "<li class='Stick_Li'><div class='Stick_Inner_Window'></div></li>"+
                                "<li>При нагревании кристаллы начинают ионизировать воздух в помещении – такой процесс сопровождает работу соляной лампы, нагревание соляной глыбы в парной сауны или бани. Интерьерные аксессуары из гималайской соли – оригинальное решение для создания особенной атмосферы дома или в офисе. Пропуская свет, кристаллическая структура соляной глыбы мягко его рассеивает, в результате получается приятное свечение розово-янтарного цвета.</li>"+
                                "<li class='Stick_Li'><div class='Stick_Inner_Window'></div></li>"+
                                "<li class='Li_None_Type'>"+
                                    "<ul class='Ul_Line Ul_Line_Double'>"+
                                        "<li>Можно использовать соль и в уходе за лицом и телом. Ванны с ее добавлением благотворно влияют на общее состояние организма, расслабляют и заряжают силами, а соляной пилинг позволяет обновить кожу, сделать ее мягкой и упругой. Пилинг хорошо сочетать с другими косметическими процедурами, например, делать его после посещения бани или сауны.</li>"+
                                        "<li>Розовая гималайская соль – отличный способ избежать проблем с кожей. Ее используют в лечение акне (воспаление сальных желез), угревой сыпи и даже псориаза. Соль «вытягивает» из эпидермиса токсины, обладает уникальными очищающими и отшелушивающими свойствами.</li>"+
                                        "<li>Гималайская розовая соль – отличный способ повышения иммунитета. Ее кристаллы помогают бороться с респираторными заболеваниями, их используют в качестве профилактики гриппа, а ингаляции с солью избавят вас от синусита (воспаления околоносовых пазух) и сухого кашля.</li>"+
                                    "</ul>"+
                                "</li>"+
                            "</ul>"+
                        "</div>"+
                        "<div class='Stick_Window'></div>"+
                    "</div>",
    "feedback": "<div id='Feedback'>"+
                    "<div class='Header_Feedback'>"+
                        "<h1 class='Name_Header_Feedback'>Обратная связь</h1>"+
                        "<div class='Stick_Feedback'></div>"+
                        "<a class='Close_Feedback'>X</a>"+
                    "</div>"+
                    "<div class='Inner_Feedback'>"+
                        "<div class='Common_Feedback Column_Window Position_Feedback'>"+
                            "<h1>Хотите, чтобы мы с вами связались?</h1>"+
                            "<div class='Stick_Feedback'></div>"+
                            "<a data-id-button='Request_Button_Feedback' class='Button_Feedback'>Заявка на звонок</a>"+
                            "<h1>Хотите, чтобы вы сами с нами связались?</h1>"+
                            "<div class='Stick_Feedback'></div>"+
                            "<a data-id-button='Contacts_Button_Feedback' class='Button_Feedback'>Наши контакты</a>"+
                        "</div>"+
                        "<div class='Request_Feedback Column_Window Position_Feedback' style='display: none;'>"+
                            "<input type='text' class='Feedback_Input' placeholder='*Как к вам обращаться?'>"+
                            "<input type='text' class='Feedback_Input' placeholder='*Номер телефона/Почта'>"+
                            "<input type='text' class='Feedback_Input' placeholder='*Когда удобно вам позвонить?'>"+
                            "<input type='submit' value='Отправить'>"+
                        "</div>"+

                        "<div class='Contacts_Request Column_Window Position_Feedback' style='display: none;'>"+
                            "<a data-copy='1' class='Contacts_Request_H1'>+7 (952) 735-82-68</a>"+
                            "<div class='Stick_Feedback'></div>"+
                            "<a data-copy='1' class='Contacts_Request_H1'>+7 (904) 547-98-63</a>"+
                            "<div class='Stick_Feedback'></div>"+
                            "<a data-copy='1' class='Contacts_Request_H1'>ipivanov2020@mail.ru</a>"+
                            "<div class='Stick_Feedback'></div>"+
                        "</div>"+
                    "</div>"+
                "</div>",
}
// =======================================================================

// ============= [ Анимация появление элементов на экране ] ==============
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
// =======================================================================

// ============ [ Функция Открытия/Закрытия Модального Окна ] ============
function Open_Modal_Window(type, modal, where='body') {
    if(type) {
        $(where).prepend(modal);
    }
    else {
        $(modal).animate({
            opacity: 0
        }, 500, () => {
            $(modal).remove();
        });
    }
}
// =======================================================================

// =================== [ Закрыть Модального через Фон ] ==================
$('body').click((e) => {
    if (e.originalEvent.target.classList.contains('Close_BG')) {
        Open_Modal_Window(false, '.Base_Settings_Window');
    }
});
// =======================================================================

// ===================== [ Открыть подробнее О нас ] =====================
$('.Last_Li_About').click(() => {
    Open_Modal_Window(true, GetJson['more_about']);
});
// =======================================================================

// ================== [ Кнопка закрытия Обратной связи ] =================
$('body').on('click', '.Close_Feedback', () => {
    Open_Modal_Window(false, '#Feedback');
});
// =======================================================================

// ============= [ Кнопка Заявка на звонок в Обратной связи ] ============
$('body').on('click', 'a[data-id-button="Request_Button_Feedback"]', () => {
    $('.Common_Feedback').animate({
        opacity: 0
    }, 500, () => {
        $('.Name_Header_Feedback').text('Заявка на звонок');

        $('.Request_Feedback').css('display', '');
        $('.Request_Feedback').css('opacity', '0');
        $('.Common_Feedback').css('display', 'none');
        $('.Request_Feedback').animate({
            opacity: 1
        }, 500);
    });
});
// =======================================================================

// ============== [ Кнопка Наши Контакты в Обратной связи ] ==============
$('body').on('click', 'a[data-id-button="Contacts_Button_Feedback"]', () => {
    $('.Common_Feedback').animate({
        opacity: 0
    }, 500, () => {
        $('.Name_Header_Feedback').text('Наши контакты');

        $('.Contacts_Request').css('display', '');
        $('.Contacts_Request').css('opacity', '0');
        $('.Common_Feedback').css('display', 'none');
        $('.Contacts_Request').animate({
            opacity: 1
        }, 500);
    });
});
// =======================================================================

// ==================== [ Функция копирования текста ] ===================
$(document).ready(function(){
    $('body').on('click', 'a[data-copy="1"]', function() {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(this).text()).select();
        document.execCommand("copy");
        $temp.remove();
    });
});
// =======================================================================

// ========================== [ Загрузка сайта] ==========================
document.addEventListener("DOMContentLoaded", function(event) {
    $('#Loading').remove();
});
// =======================================================================

// ===================== [ Открытие Обратной связи ] =====================
$('#FeedBack_Button').click(() => {
    if ($('#Feedback').length > 0) {
        Open_Modal_Window(false, '#Feedback');
    }
    else {
        Open_Modal_Window(true, GetJson['feedback']); 
    }
});
// =======================================================================

// ==================== [ Открытие Меню пользователя ] ===================
$('body').on('click', '#Avatar_Button', () => {
    if($('#Avatar').length > 0) {
        if($('#Avatar').css('display') == 'none') {
            $('#Avatar').css('display', '');
            $('#Avatar').css('opacity', '0');
            $('#Avatar').animate({
                opacity: 1
            }, 500);
        }
        else {
            $('#Avatar').animate({
                opacity: 0
            }, 500, () => {
                $('#Avatar').css('display', 'none');
            });
        }
    }
    else {
        Open_Modal_Window(true, GetJson['auth']); 
    }
});
// =======================================================================

// =========== [ Закрытие авторизации Открытие Регистрации ] =============
$('body').on('click', 'a[data-id-button="Go_To_Register_Auth"]', () => {
    Open_Modal_Window(false, '#Login');
    Open_Modal_Window(true, GetJson['reg']); 
});
// =======================================================================

$('body').on('click', '.Left_Arrow', (e) => {
    const attr = 'img[data-'+e.target.dataset.typeArrow+']';
    const all_img = document.querySelectorAll(attr);

    for(let i = 0; i < all_img.length; i++) {
        if($(all_img[i]).css('display') == 'block') {
            $(all_img[i]).animate({
                opacity: 0
            }, 500, () => {
                $(all_img[i]).css('display', 'none');
                let select_element = 0;
                if(i == 0) { select_element = all_img.length-1; }
                else { select_element = i-1; }
                
                $(all_img[select_element]).css('display', 'block');
                $(all_img[select_element]).animate({
                    opacity: 1
                }, 500);
            });
        }
    }
});

$('body').on('click', '.Right_Arrow', (e) => {
    const attr = 'img[data-'+e.target.dataset.typeArrow+']';
    const all_img = document.querySelectorAll(attr);

    for(let i = 0; i < all_img.length; i++) {
        if($(all_img[i]).css('display') == 'block') {
            $(all_img[i]).animate({
                opacity: 0
            }, 500, () => {
                $(all_img[i]).css('display', 'none');
                let select_element = 0;
                if(i != all_img.length-1) { select_element = i+1; }
                
                $(all_img[select_element]).css('display', 'block');
                $(all_img[select_element]).animate({
                    opacity: 1
                }, 500);
            });
        }
    }
});