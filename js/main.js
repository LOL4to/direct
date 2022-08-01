
document.addEventListener("DOMContentLoaded", function() {

  
    //--------------- Мобильное меню ---------------//
    var menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", function() {
        document.querySelector(".header__navbar").classList.toggle("header__navbar--visible");
        document.body.classList.toggle("body--visible");
    });
    // document
    //     .querySelector(".navbar")
    //     .addEventListener("click", ({ target, currentTarget }) => {
    //         if (innerWidth > 670) return;
    //         if (target.classList.contains("header__link")) {
    //             currentTarget.classList.remove("header__navbar--visible");
    //             document.body.classList.remove("body--visible");
    //         }
    //     });


document.getElementsByClassName('about__more')[0].onmouseover = function() {
  document.getElementsByClassName('about__wrap')[0].style.display = 'flex';
  document.getElementsByClassName('about__wrap')[0].style.top = '100%';
  document.getElementsByClassName('about__wrap')[0].style.transition = '2s';
}
document.getElementsByClassName('about__more')[0].onmouseout = function() {
  document.getElementsByClassName('about__wrap')[0].style.display = 'none';
  document.getElementsByClassName('about__wrap')[0].style.top = '-100%';
}



  //--------- CASES__MODAL - модальное окно для секции cases---------//
  // var showMoreBtn = document.querySelector(".button-back");
	var showMoreBtn0 = document.querySelector("[data-toggle=btn-back-0]");
	var showMoreBtn1 = document.querySelector("[data-toggle=btn-back-1]");
	var showMoreBtn2 = document.querySelector("[data-toggle=btn-back-2]");
	var showMoreBtn3 = document.querySelector("[data-toggle=btn-back-3]");
	var showMoreBtn4 = document.querySelector("[data-toggle=btn-back-4]");
  showMoreBtn0.addEventListener("click", function () {
    document.querySelector(".cases__modal").classList.toggle("cases__modal--hidden");
  })
  showMoreBtn1.addEventListener("click", function () {
    document.querySelector(".cases__modal").classList.toggle("cases__modal--hidden");
  })
  showMoreBtn2.addEventListener("click", function () {
    document.querySelector(".cases__modal").classList.toggle("cases__modal--hidden");
  })
  showMoreBtn3.addEventListener("click", function () {
    document.querySelector(".cases__modal").classList.toggle("cases__modal--hidden");
  })
  showMoreBtn4.addEventListener("click", function () {
    document.querySelector(".cases__modal").classList.toggle("cases__modal--hidden");
  })
    	//Закрыть окно кнопкой "Назад"
	var modalBackBtn = $(".cases__modal-back");
	modalBackBtn.on("click", modalBack);
	function modalBack(event) {
		event.preventDefault();
		var casesModal = $(".cases__modal");
		casesModal.removeClass("cases__modal--hidden");
	}

  // var modalBack = document.querySelector(".button-back");
  // modalBack.addEventListener("click", function () {
  //   document.querySelector(".cases__modal").classList.toggle("cases__modal--hidden");
  // })

  const swiperAct = new Swiper('.actives__swiper', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        clickable: true,
        grabCursor : true,

});
  const swiperCli = new Swiper('.clients__swiper', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        clickable: true,
        grabCursor : true,
});


//footer button изменение содержимого на галочку при клике

  formBtn = document.querySelector('.footer-button');
  formBtn.addEventListener('click', function () {
    document.querySelector(".footer__checkmark").classList.toggle("chekmark--visible");
  document.getElementsByClassName('footer-button')[0].style.display = 'none';
  document.getElementsByClassName('footer__checkmark')[0].style.display = 'block';
  })


  // Валидация form
	$(".form").each(function () {
		$(this).validate({
			errorClass: "invalid",
			messages: {
				email: {
					required: "Введите адрес электронной почты",
					email: "Формат эл.почты name@domain.com",
					minlength: "брат введёшь 100 знаков, а?",
				},
				phone: {
					required: "Телефон обязателен",
					minlength: "Введите номер полностью",
				},
			},
		});
	});
	var phone = $('input[name="phone"]');
	$(phone).mask("+7(999) 999-99-99", {
		completed: function () {
			alert("Вы ввели номер телефона: " + this.val());
		},
	});

});