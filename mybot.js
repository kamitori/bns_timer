/*
* @Author: Nguyễn Minh Trí
* @Date:   2019-02-19 16:08:06
* @Last Modified by:   Admin
* @Last Modified time: 2019-02-19 16:08:33
*/
const Discord = require('discord.js')
const client = new Discord.Client()
var moment = require('moment');

client.on('ready', () => {
    console.log("Connected as " + client.user.tag);
    console.log(moment.format('d-m-Y H:i:s'));
})


bot_secret_token = "NTQ3MzMxNzA5NjA4MTMyNjA4.D01P3Q.JJs9XNaSOXuWU_pr00V1GX-BEaY"

client.login(bot_secret_token)