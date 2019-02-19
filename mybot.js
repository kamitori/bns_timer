/*
* @Author: Nguyễn Minh Trí
* @Date:   2019-02-19 16:08:06
* @Last Modified by:   Admin
* @Last Modified time: 2019-02-19 16:22:16
*/
const Discord = require('discord.js')
const client = new Discord.Client()
var moment = require('moment');

client.on('ready', () => {
	var list_mess_rong = [
		'Tới giờ đi rồng kìa tụi mày'
	];
	var list_check = [
		{
			time: '2:59:00 AM',
			mess: list_mess_rong[0],
			note: 'Rồng 10h'
		},
		{
			time: '6:59:00 AM',
			mess: list_mess_rong[0],
			note: 'Rồng 14h'
		},
		{
			time: '10:59:00 AM',
			mess: list_mess_rong[0],
			note: 'Rồng 18h'
		},
		{
			time: '2:59:00 PM',
			mess: list_mess_rong[0],
			note: 'Rồng 22h'
		},
	];
	var cur_time = moment().format('LTS');
	setInterval(function(){
		list_check.forEach(function(rec){
			var generalChannel = client.channels.get("547007272623276034") // Replace with known channel ID
			// if(cur_time == rec.time){
   			//generalChannel.send(rec.mess) 
			// }
			generalChannel.send('Xin chào bé Lê Zăn Đạt');
			console.log('Message has send');
		})
	}, 5000)

    console.log("Connected as " + client.user.tag);
})


bot_secret_token = "NTQ3MzMxNzA5NjA4MTMyNjA4.D01P3Q.JJs9XNaSOXuWU_pr00V1GX-BEaY"

client.login(bot_secret_token)