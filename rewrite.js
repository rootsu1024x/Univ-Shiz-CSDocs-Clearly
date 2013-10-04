//黒魔術
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

//赤魔術
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

//以下は普通のコード
function headingImageRewrite(){
	$("h2").css("background-image","none");
	$("h2").css("text-align","left");
	$("h3").css("background-image","none");
	$("h3").css("text-align","left");
}

function rewrite(){
	addIndex();
	headingImageRewrite();
	//このへんを書き換えることでハイライト文字列を変更可能
	highlightText("ダウンロード","#FFFF00");
	highlightText("考察","#FFFF00");
	highlightText("検討","#FFFF00");
	highlightText("加点","#FFFF00");
	highlightText("レポート","#00FF00")
	highlightText("添付","#00FF00")
}

$(function(){
	$(window).keydown(function(e){
		if(e.ctrlKey && e.keyCode == 81){//Ctrl+qでリライト
			rewrite();
		}
	});
});