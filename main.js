const app = new Vue ({
    el: "#root",
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
        ],
        currentActive: 0,
        startInput: "",
        search: "",
        filtro: []
    },
    methods: {
        showTab: function(message,index) {
            this.currentActive = index;
            message = message[this.currentActive];
        },
        pushMessage: function() {
            if (this.startInput != "") {
                this.contacts[this.currentActive].messages.push({
                    date: dayjs().format('DD-MM-YYYY, HH:mm:ss'),
                    message: this.startInput,
                    status: 'sent' 
                })
                this.startInput = "";
                setTimeout( () => {
                    this.contacts[this.currentActive].messages.push({
                        date: dayjs().format('DD-MM-YYYY, HH:mm:ss'),
                        message: "ok",
                        status: 'received' 
                    })
                },1000)
            }     
        },
        searchContact: function(contact) {
            if (this.search != "") {
                let listaNomi = [];
                for (let i = 0; i < contact.length; i++) {
                listaNomi.push(contact[i].name);
                // console.log(listaNomi[i])
                const listaNomiUp = listaNomi[i].toUpperCase();
                const ricerca = listaNomiUp.search(this.search.toUpperCase());
                // console.log(ricerca);
                    if(ricerca < 0) {
                        
                    contact[i].visible = false;
                    console.log(contact[i].visible);
                    }
                }
            } else {
                for (let i = 0; i < contact.length; i++) {
                    contact[i].visible = true;
                }
            }
        }
    }
})