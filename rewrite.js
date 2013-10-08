var isRewrited = false;
var bookmarked = false;

/* 設定可能 >> */
var bookmarkTag = "[DONE HERE]";
//しおりタグの日本語化 あるいは自由に変更も可能
//var bookmarkTag = "[ここまで終わった]";
/* << 設定可能 */

//List style image , Base64 encoded
var l1 = 'iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QoIDSUm31ZTVgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAA9klEQVQoz4XSvSvFYRjG8c/POUR5yUCmY/S+nLIY6Gw2qywWpfwNSv4IC/+AQSbZzZQSKUkomwwUOV6Xe9DxPOfc49P3ubvu67pgCEsoazEjuMcq2pqBFbzhFovoSUGlgH4whwVc4w7vqQ9dse0Rr1hH0bgRPmPLA6Yxg16coP4XFA9neMIE5vGFG7zkDqzhMrRvojsHdoSEozh2OedbHce4QicGcmmUwq6p8Pc8BZVRjcOesYb2FDiOC3xgJfT+mzEc4hsb6E9Bk9iNZLYw2AgU6MN2+LYXkSZz3okSHGA4Z+5oaNqP6IocWMUpZls1vBLZNm33L/bxMz7HxuDHAAAAAElFTkSuQmCC';
var l2 = 'iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QoIDSAcZC1+oQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABu0lEQVQ4y4XVu49NYRQF8N814zHxGCMYMUFpvBrxioJMIWhIVBONZkL4G4TRaUk06CiEiUQ8GpVCIQjxjMFwJRJERDxjPK5mzWRy7z3nrvasb3/r23utfWABdqNdOTpxAFNb8CzFG+zDpBJeN57gKOaXFVyMn3iNfsws4M3GffzAoZxrQFuK1bAZO/ECVfyq447iHdZjV87cDa9WX7gj6j5GwUFUmghoxzrcwh+cx9x6hfKxirdYi42YhTtRNoZ/4VTRg61YhOf4MLHg2JMe4BNWYBv+YgRf6xSP4CUWYge68ArviwbVh6fpzRHMKOD14Gp4l3NBU0zJ029kaHsKeJVM+xi+4UKR70ZxG8OYhnkFvFo8fDO83qJ0tMVGq+LPRyU+XoYt+IxLCqyxOgP6krhNLrDREpyJ0tOJZwOW4zF+YyD9bIbpE4qdTZKayr8Wvx2OHZqhC8fxHUM514CVOJeknChZAHMwmGLX056G0XfiZOQPJYpFdtqbYg+xphmpA6cS8itpdNGw9meaz7ChLmnj6E3PLiZylZKnDie324uKSQ/uYVOLRdwd3kDJpeMLtq/Ftpbt09/qV/EfXsBlzE8TqWAAAAAASUVORK5CYII=';
var l3 = 'iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QoIDSYZQh0tqAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABGUlEQVRIx73WPSuGURgH8N/zQp7ykoFMj9H78pTFQDabVRaLUj6Dkg9h4QsYZJLdTCmRkoSyyUCRx+tyDaib5dz3Wc7y63TOuc7170Af5lH190jtDOAGSygX6NTxjCvMoaMIVwn0iSnM4gLXePllUztQi93d4QkrKOXpKjG/xa5uMY4JdOIQzW8+mat8w00c4x4jmME7LvGYo/sxpnEWtVpDe0FOa1zRfjyWhdQuq8+aOMA52tCT2mWlSyXaYSz68aQIV0UjHsYDltFSgDOMU7xiMeqTuxvCHj6wiu6MxZK6UWxF0qyjN2OxZK6ELmxEn21H5OXt1LAZIb6L/owTpHYGowY7EW2lgpwGjjD5z4chtVOPLC0X6b4AyqqZmloa270AAAAASUVORK5CYII=';

function addIndex(){
	$("h1").after('<p id="IDX"><a name="allidx">インデックス</a></p><ul id="CTS"></ul>')
	var jqh2s = $("h2");
	for(var i=0;i<jqh2s.length;i++){
		$("ul#CTS").append('<li><a href="#h2idx'+i+'">'+$('h2:eq('+i+')').html()+'</a></li>')
		if($('h2:eq('+i+')'+'+ul h3').size() > 0){
			var jqh3s = $('h2:eq('+i+')'+'+ul h3');
			$("ul#CTS").append('<ul id="CTSH3I'+i+'">')
			for(var j=0;j<jqh3s.length;j++){
				$('ul#CTSH3I'+i).append('<li><a href="#h3idx'+j+'">'+$('h2:eq('+i+')'+'+ul h3:eq('+j+')').html()+'</a></li>')
				$('h2:eq('+i+')'+'+ul h3:eq('+j+')').html('<a name="h3idx'+j+'">'+$('h2:eq('+i+')'+'+ul h3:eq('+j+')').html()+'</a> <a href="#allidx">GoTop</a>')
			}
		}
		$('h2:eq('+i+')').html('<a name="h2idx'+i+'">'+$('h2:eq('+i+')').html()+'</a> <a href="#allidx">GoTop</a>');
	}
	$("ul#CTS").after("<hr>");
}

function highlightText(str,colorCode){
	var m = $("body").html().split(str).length - 1;
	var i = 0;
	for(var j=0;j<m;j++){
		i = $("body").html().indexOf(str,i)
		var s1 = $("body").html().substring(0,i);
		var s2 = $("body").html().substring(i+str.length,$("body").html().length);
		i += ('<span style="background-color:'+colorCode+'">'+str+'</span>').length;
		$("body").html(s1+'<span style="background-color:'+colorCode+'">'+str+'</span>'+s2);
	}
}

function boldingText(str){
	var m = $("body").html().split(str).length - 1;
	var i = 0;
	for(var j=0;j<m;j++){
		i = $("body").html().indexOf(str,i)
		var s1 = $("body").html().substring(0,i);
		var s2 = $("body").html().substring(i+str.length,$("body").html().length);
		i += ('<span style="font-weight:bold">'+str+'</span>').length;
		$("body").html(s1+'<span style="font-weight:bold">'+str+'</span>'+s2);
	}
}

function headingImageRewrite(){
	$("h2").css("background-image","none");
	$("h2").css("text-align","left");
	$("h3").css("background-image","none");
	$("h3").css("text-align","left");
}

function normalizeUnorderedList(){
	$("ul").css("list-style-image","none")
}

function usefulizeUnorderedList(){
	$("ul").css("list-style-image","url(data:image/png;base64,"+l1+")")
	$("ul>li>ul").css("list-style-image","url(data:image/png;base64,"+l2+")")
	$("ul>li>ul>li>ul").css("list-style-image","url(data:image/png;base64,"+l3+")")
}

function invisibleCanceler(){
	var sel = document.getSelection();
	var tag = sel.anchorNode.parentNode;
	var c = $(tag).css("color");
	var c = c.substr(4, c.length-1);
	var cc = c.split(",");
	var r = parseInt(cc[0]);
	var g = parseInt(cc[1]);
	var b = parseInt(cc[2]);
	var rr = 255 - r;
	var rb = 255 - b;
	var rg = 255 - g;
	$(tag).css("color","rgb("+rr+","+rg+","+rb+")");
}

function viewBookmark(){
	var b = localStorage['bm'];
	if(b && !bookmarked){
		bookmarked = true;
		$("h2:eq("+b+")").prepend(bookmarkTag);
		$("ul#CTS>li:eq("+b+")>a").prepend(bookmarkTag);
	}
}

function delBookmark(){
	var b = localStorage['bm']
	if(b && bookmarked){
		bookmarked = false;
		$("h2:eq("+b+")").html($("h2:eq("+b+")").html().substring(bookmarkTag.length,$("h2:eq("+b+")").html().length));
		$("ul#CTS>li:eq("+b+")>a").html($("ul#CTS>li:eq("+b+")>a").html().substring(bookmarkTag.length,$("ul#CTS>li:eq("+b+")>a").html().length));
		localStorage['bm'] = undefined;
	}
}

function bookmark(i){
	delBookmark();
	localStorage['bm'] = i;
	viewBookmark();
}

function rewrite(){
	addIndex();
	headingImageRewrite();
	
	/* 設定可能 >> */
	//普通のリストスタイルを有効化するにはこちら
	//normalizeUnorderedList();
	//rootsu1024x Customizedなリストイメージ
	usefulizeUnorderedList();
	/* << 設定可能 */
	
	viewBookmark();
	
	for(var i=0;i<10;i++){
		boldingText("Step"+i);
		boldingText("step"+i);
		boldingText("STEP"+i);
		
		boldingText("Step-"+i);
		boldingText("step-"+i);
		boldingText("STEP-"+i);
		
		boldingText("Step "+i);
		boldingText("step "+i);
		boldingText("STEP "+i);
	}
	
	/* 設定可能 >> */
	//このへんを書き換えることでハイライト文字列を変更可能
	highlightText("ダウンロード","#FFFF00");
	highlightText("考察","#FFFF00");
	highlightText("検討","#FFFF00");
	highlightText("加点","#FFFF00");
	highlightText("レポート","#00FF00")
	highlightText("添付","#00FF00")
	/* << 設定可能 */
}


$(function(){
	$(window).keydown(function(e){
		if(e.ctrlKey && e.keyCode == 81 && !isRewrited){//Ctrl+qでリライト
			rewrite();
			isRewrited = true;
		}
		if(e.ctrlKey && e.keyCode == 73){//Ctrl+iで選択範囲のインビジブルキャンセラ
			invisibleCanceler(); //インビジブルキャンセラ発動！
		}
		if(e.ctrlKey && e.altKey && e.keyCode <= 57 && e.keyCode >= 48){//Ctrl+alt+1～9で[ここまでやった]の付箋を付ける / 0で付箋解除
			if(e.keyCode == 48){
				delBookmark();
			}else{
				bookmark(e.keyCode - 49);
			}
		}
	});
});