// Necessario criar um arquivo chamado warnings.json contendo apenas { }
const fs = require("fs");
const ms = require('ms');

let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
module.exports.run = async (client,message,args) => {
    // !warn @Usuario <razão>
    if(message.guild.member(message.author.id).hasPermissions("ADMINISTRATOR")) { // Permissão necessaria para usar o comando
    } else {
        return message.channel.send(`\`${message.guild.member(message.author).nickname || message.author.username}\`, Sem permissão!`); // Mensagem enviada caso não tenha a permissão necessaria  
    }
    let usuario = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]) // Pega a primeira @menção.
    if(!usuario) return message.reply("Você não mencionou um usuario.") // Mensagem caso não tenha mencionado 
    let reason = args.join(" ").slice(22); // Pega o motivo, apos a menção !warn @menção motivo <
    if(!reason) return message.reply('Você deve adicionar um motivo.') // Mensagem caso não tenha motivo
    if(!warns[usuario.id]) warns[usuario.id] = {
        warns: 0 // Numero de warns inicial.
    };
    warns[usuario.id].warns++; // Adiciona + 1 ao numero de warns do usuario.
    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)
    })
    if(warns[usuario.id].warns == 1){
        // Coloque aqui oq ira acontecer ao chegar ao numero de warns 1
        } 
        if(warns[usuario.id].warns == 2){
        // Coloque aqui oq ira acontecer ao chegar ao numero de warns 2
        } 
        if(warns[usuario.id].warns == 3){

        // Coloque aqui oq ira acontecer ao chegar ao numero de warns 3
        } 
        // Caso queira colocar + um numero de warns, copie e cole e mude de 3 para 4, e assim vai...
    }
    module.exports.help = {
        name: "warn",
        aliases: ['']
    }