$(document).ready(function() { 

	// ===========================tabs交換效果
		var tab_now;
		$('.navbar').addClass('active').find('> .tabs div:eq(0)').addClass('current');
		//預設幫上面tabs選項第一個加上current這個class

		
		$('.tabs div a').click(function (g) { 
		 	var navbar = $(this).closest('.navbar'),            //就navbar 
		 		index = $(this).closest('div').index();			//點中的那個tab編號(0 or 1)
		 		         


		 	navbar.find('.tabs > div').removeClass('current');  //移除current
		 	$(this).closest('div').addClass('current');			//幫點中那一個tab加current



		 	if (index==1) {
		 		$(".tab0").slideUp(); 
		 		$(".tab1").slideDown();
		 	} else{
		 		$(".tab1").slideUp(); 
		 		$(".tab0").slideDown();
		 	};
			
		 	g.preventDefault();                                 //不確定幹嘛...
		});

		$('.add').click(function() {
	    	$('.modal-wrapper').toggleClass('open');
	    	$('.tab0').toggleClass('blur');
	     	return false;
	    });


     	$('.btn-close').click(function(){
     		$(".modal-wrapper").removeClass("open");
     		$(".tab0").removeClass("blur");

		});
     

     	$('.btn_nextModal').click(function(){
     		var state="state2";
     		$(".form_step1").toggleClass(state);
     		$(".form_step2").toggleClass(state);
     		$(".btn_submitModal").toggleClass(state);
     		$(".btn_nextModal").toggleClass(state);
		});
});


// 新增==============

// function AddExam(){
// 	var newExamBlock=$('<div class =\"blocks\"></div>');
// 	$(".tab0").prepend(newExamBlock);
// }

function Hide_Modal(e){
	$(".modal-wrapper").removeClass("open");
	$(".tab0").removeClass("blur");
}