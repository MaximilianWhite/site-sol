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
    "select_color": "<div id='Select_Color' class='Base_Settings_Window Close_BG'>"+
                        "<h1 class='Name_Window'>Выбор цвета</h1>"+
                        "<div class='Stick_Window'></div>"+
                        "<div class='Select_Color_Block Base_Settings_Inner_Window'>"+
                            "<div class='Arrows_Select_Color_Block'>"+
                                "<a class='Left_Arrow' data-type-arrow='select-color'></a>"+
                                "<a class='Right_Arrow' data-type-arrow='select-color'></a>"+
                            "</div>"+
                            "<div class='Block_Images_Select_Color'>"+
                                "<img src='assets/img/TestProduct/id21.jpeg' style='display: block; opacity: 1' alt='Товар' data-select-color='0'>"+
                                "<img src='assets/img/TestProduct/id22.jpeg' style='display: none; opacity: 0' alt='Товар' data-select-color='1'>"+
                                "<img src='assets/img/TestProduct/id23.jpeg' style='display: none; opacity: 0' alt='Товар' data-select-color='2'>"+
                                "<img src='assets/img/TestProduct/id24.jpeg' style='display: none; opacity: 0' alt='Товар' data-select-color='3'>"+
                            "</div>"+
                            "<div class='Button_Select_Color'>"+
                                "<a>Выбрать</a>"+
                            "</div>"+
                        "</div>"+
                        "<div class='Stick_Window'></div>"+
                    "</div>",
    "basket": "<div id='Basket' class='Base_Settings_Window Close_BG'>"+
                    "<h1 class='Name_Window'>Корзина</h1>"+
                    "<div class='Stick_Window'></div>"+
                    "<div class='Product_Block Base_Settings_Inner_Window'>"+
                        "<div class='Product_Display_Block'>"+
                            "<div class='Product_Item Product_Item_First'>"+
                                "<a id='Delete_Basket'>X</a>"+
                                "<img src='assets/img/TestProduct/id21.jpeg' alt='Товар'>"+
                                "<h1>Соляная плитка</h1>"+
                                "<div class='Vertical_Stick_Window'></div>"+
                                "<h1>Цена: 500 руб.</h1>"+
                                "<div class='Vertical_Stick_Window'></div>"+
                                "<h1>Кол-во:</h1>"+
                                "<input type='text' value='1'>"+
                                "<h1>шт.</h1>"+
                            "</div>"+
                        "</div>"+
                        "<a class='Product_Button'>Продолжить</a>"+
                    "</div>"+
                    "<div class='Stick_Window'></div>"+
                "</div>",
    "orders": "<div id='Orders' class='Base_Settings_Window Close_BG'>"+
                    "<h1 class='Name_Window'>Мои заказы</h1>"+
                    "<div class='Stick_Window'></div>"+
                    "<div class='Product_Block Base_Settings_Inner_Window'>"+
                        "<div class='Product_Display_Block'>"+
                            "<div class='Product_Item Product_Item_First'>"+
                                "<img src='assets/img/TestProduct/id21.jpeg' alt='Товар'>"+
                                "<div class='Product_Block_Column'>"+
                                    "<h1>Заказ #1</h1>"+
                                    "<div class='Horizontal_Stick_Window'></div>"+
                                    "<h1>Соляная плитка</h1>"+
                                "</div>"+
                                "<div class='Vertical_Stick_Window'></div>"+
                                "<div class='Product_Block_Column'>"+
                                    "<h1>500 руб.</h1>"+
                                    "<div class='Horizontal_Stick_Window'></div>"+
                                    "<h1>2 шт.</h1>"+
                                "</div>"+
                                "<div class='Vertical_Stick_Window'></div>"+
                                "<h1>Состояние:</h1>"+
                                "<h1>В ожидание</h1>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                    "<div class='Stick_Window'></div>"+
                "</div>",
    "lk": "<div id='Profile' class='Base_Settings_Window Close_BG'>"+
            "<h1 class='Name_Window'>Личный кабинет</h1>"+
            "<div class='Stick_Window'></div>"+
            "<div class='Profile_Block Base_Settings_Inner_Window'>"+
                "<div class='First_Path_Profile_Block'>"+
                    "<div class='First_Profile_Block'>"+
                        "<h1>Абрашов</h1>"+
                        "<h1>Максим</h1>"+
                        "<h1>Александрович</h1>"+
                    "</div>"+
                    "<div class='Vertical_Stick_Profile'></div>"+
                    "<div class='Second_Profile_Block'>"+
                        "<ul>"+
                            "<li>"+
                                "<h1>Статус:</h1>"+
                                "<a>Покупатель</a>"+
                            "</li>"+
                        "</ul>"+
                        "<div class='Horizontal_Stick_Profile'></div>"+
                        "<ul>"+
                            "<li>"+
                                "<h1>Моя корзина:</h1>"+
                                "<a>8 товаров</a>"+
                            "</li>"+
                        "</ul>"+
                        "<div class='Horizontal_Stick_Profile'></div>"+
                        "<ul>"+
                            "<li>"+
                                "<h1>Мои заказы:</h1>"+
                                "<a>5 товаров</a>"+
                            "</li>"+
                        "</ul>"+
                        "<div class='Horizontal_Stick_Profile'></div>"+
                        "<a>Настройки</a>"+
                        "<div class='Horizontal_Stick_Profile'></div>"+
                        "<a>Выйти из аккаунта</a>"+
                        "<div class='Horizontal_Stick_Profile'></div>"+
                    "</div>"+
                "</div>"+
                "<div class='Second_Path_Profile_Block'>"+
                    "<a class='Common_Button_Window'>Мои заказы</a>"+
                    "<a class='Common_Button_Window'>Моя корзина</a>"+
                "</div>"+
            "</div>"+
            "<div class='Stick_Window'></div>"+
        "</div>",
    "settings": "<div id='Settings' class='Base_Settings_Window Close_BG'>"+
                    "<h1 class='Name_Window'>Настройки</h1>"+
                    "<div class='Stick_Window'></div>"+
                    "<div class='Settings_Block Base_Settings_Inner_Window'>"+
                        "<div class='Arrows_Settings_Block'>"+
                            "<a class='Left_Arrow' data-type-arrow='settings-window'></a>"+
                            "<a class='Right_Arrow' data-type-arrow='settings-window'></a>"+
                        "</div>"+
                        "<div class='Settings_Path_Display_Block' data-settings-window style='display: block; opacity: 1'>"+
                            "<div class='Settings_Path_Block'>"+
                                "<h1>Изменение данных</h1>"+
                                "<div class='Horizontal_Stick_Window Settings_Stick'></div>"+
                                "<input type='text' value='Абрашов' placeholder='*Фамилия'>"+
                                "<input type='text' value='Максим' placeholder='*Имя'>"+
                                "<input type='text' value='Александрович' placeholder='*Отчество'>"+
                                "<a class='Common_Button_Window'>Изменить</a>"+
                            "</div>"+
                        "</div>"+
                        "<div class='Settings_Path_Display_Block' data-settings-window style='display: none; opacity: 0'>"+
                            "<div class='Settings_Path_Block'>"+
                                "<h1>Изменение пароля</h1>"+
                                "<div class='Horizontal_Stick_Window Settings_Stick'></div>"+
                                "<input type='text' placeholder='*Пароль'>"+
                                "<input type='text' placeholder='*Повторение пароля'>"+
                                "<a class='Common_Button_Window'>Изменить</a>"+
                            "</div>"+
                        "</div>"+
                        "<div class='Settings_Path_Display_Block' data-settings-window style='display: none; opacity: 0'>"+
                            "<div class='Settings_Path_Block'>"+
                                "<h1>Изменение почты</h1>"+
                                "<div class='Horizontal_Stick_Window Settings_Stick'></div>"+
                                "<input type='text' placeholder='*Почта'>"+
                                "<input type='text' placeholder='*Повторение почты'>"+
                                "<a class='Common_Button_Window'>Изменить</a>"+
                            "</div>"+
                        "</div>"+
                        "<div class='Settings_Path_Display_Block' data-settings-window style='display: none; opacity: 0'>"+
                            "<div class='Settings_Path_Block'>"+
                                "<h1>Изменение номера телефона</h1>"+
                                "<div class='Horizontal_Stick_Window Settings_Stick'></div>"+
                                "<input type='text' placeholder='*Почта'>"+
                                "<input type='text' placeholder='*Повторение почты'>"+
                                "<a class='Common_Button_Window'>Изменить</a>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                    "<div class='Stick_Window'></div>"+
                "</div>",
    "processingorders": "<div id='Processing' class='Base_Settings_Window Close_BG'>"+
                            "<h1 class='Name_Window'>Оформление покупки</h1>"+
                            "<div class='Stick_Window'></div>"+
                            "<div class='Processing_Block Base_Settings_Inner_Window'>"+
                                "<div class='Processing_Up_Block'>"+
                                    "<div class='Processing_Left_Block'>"+
                                    ""+
                                        "<div class='Processing_Product_Display_Block'>"+
                                            "<div class='Processing_Product_Block'>"+
                                                "<img src='assets/img/TestProduct/id21.jpeg' alt='Товар'>"+
                                                "<div class='Processing_Product_Path_Block'>"+
                                                    "<h1>Соляная плитка</h1>"+
                                                    "<div class='Processing_Product_Stick'></div>"+
                                                    "<div class='Processing_Product_Inform'>"+
                                                        "<h1>5 шт.</h1>"+
                                                        "<h1>500 руб.</h1>"+
                                                    "</div>"+
                                                "</div>"+
                                            "</div>"+
                                        "</div>"+
                                        ""+
                                    "</div>"+
                                    "<div class='Vertical_Stick_Processing'></div>"+
                                    "<div class='Processing_Right_Block Scroll_Window'>"+
                                        "<div class='Processing_Inner_Display_Block' data-processing-window='1' style='display: block; opacity: 1'>"+
                                            "<div class='Processing_Inner_Path_Block'>"+
                                                "<input type='text' placeholder='*Страна' data-value='country' data-date='0'>"+
                                                "<input type='text' placeholder='*Область/Округ/Республика' data-value='obl' data-date='0'>"+
                                                "<input type='text' placeholder='*Город' data-value='city' data-date='0'>"+
                                                "<input type='text' placeholder='*Улица' data-value='street' data-date='0'>"+
                                                "<input type='text' placeholder='*№ дома/строения' data-value='house' data-date='0'>"+
                                                "<input type='text' placeholder='*Квартира' data-value='apartment'>"+
                                                "<input type='text' placeholder='*Комментарий' data-value='comment'>"+
                                            "</div>"+
                                        "</div>"+
                                        "<div class='Processing_Inner_Display_Block' data-processing-window='2' style='display: none; opacity: 0'>"+
                                            "<div class='Processing_Inner_Path_Block Scroll_Window'>"+
                                                "<div class='Processing_Inner_Row_Block'>"+
                                                    "<input type='radio' name='delivery' data-radio='Екатеринбург' checked>"+
                                                    "<img src='assets/img/icons/FirstVersionDelivery.svg' alt='Доставка'>"+
                                                    "<div class='Processing_Inner_Column_Block'>"+
                                                        "<h1>Доставка по Екатеринбургу и 30км. от Екатеринбурга</h1>"+
                                                        "<div class='Processing_Inner_Stick'></div>"+
                                                        "<p>Доставка совершается по Екатеринбургу и от Екатеринбурга на 30км ( Дальше 30 км. от Екатеринбурга мы не довозим ). Если вы живете дальше 30 км. от Екатеринбурга, то заказывайте доставку Транспортной компанией.</p>"+
                                                    "</div>"+
                                                "</div>"+
                                                "<div class='Processing_Inner_Row_Block'>"+
                                                    "<input type='radio' name='delivery' data-radio='Транспортная компания'>"+
                                                    "<img src='assets/img/icons/SecondVersionDelivery.svg' alt='Доставка'>"+
                                                    "<div class='Processing_Inner_Column_Block'>"+
                                                        "<h1>Доставка Транспортной Компанией</h1>"+
                                                        "<div class='Processing_Inner_Stick'></div>"+
                                                        "<p>Доставка совершается Транспортной компанией. Цена меняется из-за размера, веса и дальности отправки груза. Если вы хотите заказать доставку Транспортной компанией, то после оформления заказа, вам придет на почту счект оплаты и с вами свяжется менеджер.</p>"+
                                                    "</div>"+
                                                "</div>"+
                                                "<div class='Processing_Inner_Row_Block'>"+
                                                    "<input type='radio' name='delivery' data-radio='Самовывоз'>"+
                                                    "<img src='assets/img/icons/ThirdVersionDelivery.svg' alt='Доставка'>"+
                                                    "<div class='Processing_Inner_Column_Block'>"+
                                                        "<h1>Самовывоз</h1>"+
                                                        "<div class='Processing_Inner_Stick'></div>"+
                                                        "<p>С вами обговаривается время, когда Вы или транспортная компания с Вашей стороны, сможете приехать и забрать товар.</p>"+
                                                    "</div>"+
                                                "</div>"+
                                            "</div>"+
                                        "</div>"+
                                        "<div class='Processing_Inner_Display_Block' data-processing-window='3' style='display: none; opacity: 0'>"+
                                            "<div class='Processing_Inner_Path_Block Scroll_Window'>"+
                                                "<div class='Processing_Inner_Row_Block'>"+
                                                    "<input type='radio' name='payment' data-radio='Наличные' checked>"+
                                                    "<img src='assets/img/icons/VersionPayCash.svg' alt='Оплата'>"+
                                                    "<div class='Processing_Inner_Column_Block'>"+
                                                        "<h1>Оплата наличными при получении</h1>"+
                                                        "<div class='Processing_Inner_Stick'></div>"+
                                                        "<p>Оплата происходит при получении товара.</p>"+
                                                    "</div>"+
                                                "</div>"+
                                                "<div class='Processing_Inner_Row_Block'>"+
                                                    "<input type='radio' name='payment' data-radio='Сбербанк'>"+
                                                    "<img src='assets/img/icons/VersionPaySber.svg' alt='Оплата'>"+
                                                    "<div class='Processing_Inner_Column_Block'>"+
                                                        "<h1>Оплата по Сбербанку</h1>"+
                                                        "<div class='Processing_Inner_Stick'></div>"+
                                                        "<p>Оплата производиться через Сбербанк. Вы можете и внести предоплату, и оплатить товар при получении. Вам на почту будет отправлены реквизиты Сбербанка.</p>"+
                                                    "</div>"+
                                                "</div>"+
                                                "<div class='Processing_Inner_Row_Block'>"+
                                                    "<input type='radio' name='payment' data-radio='Реквизиты'>"+
                                                    "<img src='assets/img/icons/VersionPayRequisites.svg' alt='Оплата'>"+
                                                    "<div class='Processing_Inner_Column_Block'>"+
                                                        "<h1>Оплата по реквизитам</h1>"+
                                                        "<div class='Processing_Inner_Stick'></div>"+
                                                        "<p>Оплата производится по реквизитам. Вы можете и внести предоплату, и оплатить товар при получении. Вам на почту будут отправлены реквизиты.</p>"+
                                                    "</div>"+
                                                "</div>"+
                                            "</div>"+
                                        "</div>"+
                                        "<div class='Processing_Inner_Display_Block' data-processing-window='4' style='display: none; opacity: 0'>"+
                                            "<div class='Processing_Inner_Path_Block Processing_Align'>"+
                                                "<ul> <li data-check-country='Страна'>Страна: </li> </ul>"+
                                                "<div class='Processing_Inner_Stick'></div>"+
                                                "<ul> <li data-check-obl='Область/Округ/Регион'>Область/Округ/Регион: </li> </ul>"+
                                                "<div class='Processing_Inner_Stick'></div>"+
                                                "<ul> <li data-check-city='Город'>Город: </li> </ul>"+
                                                "<div class='Processing_Inner_Stick'></div>"+
                                                "<ul> <li data-check-street='Улица'>Улица: </li> </ul>"+
                                                "<div class='Processing_Inner_Stick'></div>"+
                                                "<ul> <li data-check-house='Дом'>Дом: </li> </ul>"+
                                                "<div class='Processing_Inner_Stick'></div>"+
                                                "<ul> <li data-check-apartment='Квартира'>Квартира: </li> </ul>"+
                                                "<div class='Processing_Inner_Stick'></div>"+
                                                "<ul> <li data-check-delivery='Тип доставки'>Тип доставки: Екатеринбург</li> </ul>"+
                                                "<div class='Processing_Inner_Stick'></div>"+
                                                "<ul> <li data-check-payment='Тип оплаты'>Тип оплаты: Наличные</li> </ul>"+
                                                "<div class='Processing_Inner_Stick'></div>"+
                                                "<ul> <li data-check-comment='Комментарий'>Комментарий: </li> </ul>"+
                                                "<div class='Processing_Inner_Stick'></div>"+
                                            "</div>"+
                                        "</div>"+
                                        ""+
                                    "</div>"+
                                "</div>"+
                                "<div class='Processing_Down_Block'>"+
                                    "<a class='Common_Button_Window' data-button-process='1' data-process-back='1' data-process-next='2' style='opacity: 0.5; pointer-events: none'>Далее</a>"+
                                    "<a class='Common_Button_Window' data-button-process='2' data-process-back='2' data-process-next='1' style='display: none;'>Назад</a>"+
                                    "<a class='Common_Button_Window' data-button-process='2' data-process-back='2' data-process-next='3' style='display: none;'>Далее</a>"+
                                    "<a class='Common_Button_Window' data-button-process='3' data-process-back='3' data-process-next='2' style='display: none;'>Назад</a>"+
                                    "<a class='Common_Button_Window' data-button-process='3' data-process-back='3' data-process-next='4' style='display: none;'>Далее</a>"+
                                    "<a class='Common_Button_Window' data-button-process='4' data-process-back='4' data-process-next='3' style='display: none;'>Назад</a>"+
                                    "<a class='Common_Button_Window' data-button-process='4' data-process-back='4' data-process-next='5' style='display: none;'>Оформить</a>"+
                                "</div>"+
                            "</div>"+
                            "<div class='Stick_Window'></div>"+
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

// ================= [ Левая стрелка для изображений ] ===================
$('body').on('click', '.Left_Arrow', (e) => {
    const attr = '[data-'+e.target.dataset.typeArrow+']';
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
// =======================================================================

// ================= [ Правая стрелка для изображений ] ==================
$('body').on('click', '.Right_Arrow', (e) => {
    const attr = '[data-'+e.target.dataset.typeArrow+']';
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
// =======================================================================

// =================== [ Кнопки в Оформлении заказа ] ====================
$('body').on('click', 'a[data-button-process]', (e) => {
    const GetNext = Number($(e.target).attr('data-process-next')); // 2
    const GetBack = Number($(e.target).attr('data-process-back')); // 1

    $('div[data-processing-window="'+(GetBack).toString()+'"]').animate({
        opacity: 0
    }, 500, () => {
        const getAllNone = document.querySelectorAll('a[data-button-process="'+(GetBack).toString()+'"]');
        for(let i = 0; i < getAllNone.length; i++) {
            $(getAllNone[i]).css('display', 'none');
        }
        $('div[data-processing-window="'+(GetBack).toString()+'"]').css('display', 'none');
        $('div[data-processing-window="'+(GetNext).toString()+'"]').css('display', 'block');
        $('div[data-processing-window="'+(GetNext).toString()+'"]').animate({
            opacity: 1
        },500, () => {
            const getAllBlock = document.querySelectorAll('a[data-button-process="'+(GetNext).toString()+'"]');
            for(let i = 0; i < getAllBlock.length; i++) {
                $(getAllBlock[i]).css('display', '');
            }
        });
    });

    if (GetNext == 4) {
        ConvertInformation();
    }
    else if (GetNext == 5) {
        NewOrder();
    }
});
// =======================================================================

// =================== [ Кнопки в Оформлении заказа ] ====================
