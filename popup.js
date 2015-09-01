/*
 * $.getJSON("https://api.twitch.tv/kraken/games/top/?callback=?", function(data){
	for(i=0; i < (data.top).length; i++){
		$('body').append("<br>"+data.top[i].game.name);
	}
	console.log(data);
});
*/

$.getJSON("https://api.twitch.tv/kraken/streams?game=Magic:%20The%20Gathering", function(data){
	for(i=0; i < (data.streams).length; i++){
		if(typeof data.streams[i].channel.status != "undefined"){
			originalTitle = data.streams[i].channel.status;
		} else{
			originalTitle = data.streams[i].channel.name + " - Title Not Found";
		}

		title = originalTitle;	
		if(title.length > 40)
			title = title.slice(0,40)+"...";
		$('#streams').append("<tr><td><a href='"+data.streams[i].channel.url+"/popout/' target='blank' title='"+originalTitle+"'>"+title+"</a><br><b>   Channel: </b>"+data.streams[i].channel.name+"</td><td align='right'>"+data.streams[i].viewers+"</td></tr>");
	}
	console.log($('#streams').width());
});
