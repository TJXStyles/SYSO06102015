

var VpCurPage = 1;

var VpmyPage = 0;
var VpLock = false;
function VpBlur( lnk ) {
	try {
		lnk.blur();
	} catch(e) {};
}
/*
 * VpNext() and VpPrev()
 * are called from previous and next buttons
 */
function VpNext( lnk ) {
//debugger 
	VpBlur( lnk );
	//if( VpmyPage >7)VpmyPage=0;
	if((VpCurPage < 3)&&(!VpLock)) { 
		VpSlideDoubleLeft(); 
	}
}

function VpPrev( lnk ) {
//debugger
	VpBlur( lnk );
	//if( VpmyPage <0)VpmyPage=7;
	if((VpCurPage > 1)&&(!VpLock)) {
		VpSlideDoubleRight();
	}
	
}


function LockVp( intDur ) {
	var LockDur = intDur * 100;
	VpLock = true;
	setTimeout(function() { VpLock = false; },LockDur);
}
function VpSlideLeft() {
	//LockVp(3);
	new Effect.MoveBy( 'VidCtnt0', 0, -336 , {duration: 0.3} );
	new Effect.MoveBy( 'VidCtnt1', 0, -336 , {duration: 0.3} );
	new Effect.MoveBy( 'VidCtnt2', 0, -336 , {duration: 0.3} );
	VpCurPage++;
	VpUpdateBtns();
}

function VpSlideDoubleLeft() {
	//LockVp(6);
	//new Effect.MoveBy( 'VidCtnt0', 0, -336 , {duration: 0.6} );
	//new Effect.MoveBy( 'VidCtnt1', 0, -336 , {duration: 0.6} );
	//new Effect.MoveBy( 'VidCtnt2', 0, -336 , {duration: 0.6} );
	//new Effect.MoveBy( 'VidCtnt3', 0, -336 , {duration: 0.6} );
	//new Effect.MoveBy( 'VidCtnt4', 0, -336 , {duration: 0.6} );
	//new Effect.MoveBy( 'VidCtnt5', 0, -336 , {duration: 0.6} );
	 /*
	$('VidCtnt'+VpmyPage).hide();
	$('VidCtnt'+(VpmyPage+1)).hide();
	$('VidCtnt'+(VpmyPage+2)).show();
	$('VidCtnt'+(VpmyPage+3)).show();
	*/
	document.getElementById('VidCtnt'+VpmyPage).style.display='none' 
	document.getElementById('VidCtnt'+(VpmyPage+1)).style.display='none'
	document.getElementById('VidCtnt'+(VpmyPage+2)).style.display='block'
	document.getElementById('VidCtnt'+(VpmyPage+3)).style.display='block'
	VpCurPage++;
	VpmyPage=VpmyPage+2;
 
	//VpCurPage++;
	//VpMoveDot();
	VpUpdateBtns();
}

function VpSlideRight() {
	//LockVp(3);
	new Effect.MoveBy( 'VidCtnt0', 0, 336 , {duration: 0.3} );
	new Effect.MoveBy( 'VidCtnt1', 0, 336 , {duration: 0.3} );
	new Effect.MoveBy( 'VidCtnt2', 0, 336 , {duration: 0.3} );
	VpCurPage--; 
	//VpMoveDot();
	VpUpdateBtns();
}

function VpSlideDoubleRight() {
	//LockVp(6); 
	/*
 	$('VidCtnt'+VpmyPage).hide();
	$('VidCtnt'+(VpmyPage+1)).hide();
	$('VidCtnt'+(VpmyPage-1)).show();
	$('VidCtnt'+(VpmyPage-2)).show();
 */
 
	document.getElementById('VidCtnt'+VpmyPage).style.display='none' 
	document.getElementById('VidCtnt'+(VpmyPage+1)).style.display='none'
	document.getElementById('VidCtnt'+(VpmyPage-1)).style.display='block'
	document.getElementById('VidCtnt'+(VpmyPage-2)).style.display='block'
 	VpCurPage--;
 	VpmyPage=VpmyPage-2;
 	 
	//VpCurPage--;
	//VpMoveDot();
	VpUpdateBtns();
}

function VpUpdateBtns() {
	if(VpCurPage > 1) {
		$('VidBtnL').style.cursor ='auto';
		$('VidBtnL').src = '/xtr/icn/left_red_btn.gif';
		$('VidBtnL').onmouseover = function() { this.src='/xtr/icn/left_red_over_btn.gif'; }
		$('VidBtnL').onmouseout = function() { this.src='/xtr/icn/left_red_btn.gif'; }
	}
	else {
		$('VidBtnL').style.cursor ='default';
		$('VidBtnL').src = '/xtr/icn/left_gray_btn.gif';
		$('VidBtnL').onmouseover = function() {}
		$('VidBtnL').onmouseout = function() {}
	}

	if(VpCurPage < 3) {
		$('VidBtnR').style.cursor ='auto';
		$('VidBtnR').src = '/xtr/icn/right_red_btn.gif';
		$('VidBtnR').onmouseover = function() {this.src = '/xtr/icn/right_red_over_btn.gif';}
		$('VidBtnR').onmouseout = function() {this.src = '/xtr/icn/right_red_btn.gif';}
	}
	else {
		$('VidBtnR').style.cursor ='default';
		$('VidBtnR').src = '/xtr/icn/right_gray_btn.gif';
		$('VidBtnR').onmouseover = function() {}
		$('VidBtnR').onmouseout = function() {}
	}
}