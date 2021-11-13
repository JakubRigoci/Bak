/* eslint-disable no-useless-escape */

export const nameRules = [
    v => !!v || 'Jméno je povinné',
    v => v.length <= 15 || 'Jméno musí být méně než 15 znaků',
]

export const commentRules = [
    v => !!v || 'Kometář je povinný',
    v => v.length <= 60 || 'Komentář musí být méně než 60 znaků',
]

export const numberRules = [
    v => !!v || 'Velikost je povinná',
    v => v < 1000000 || 'Velikost musí být méně než 7 cifer',
    v => v >= 0 || 'Velikost musí být kladná'
]

export const selectRules = [
    v => !!v || 'Musíte vybrat položku'
]

export const textRules = [
    v => !!v || 'Pole je povinný',
    v => v.length <= 25 || 'Pole musí mít méně než 25 znaků',
]

export const emailRules = [
    v => !!v || 'E-mail je povinný',
    v => /.+@.+\..+/.test(v) || 'E-mail musí být validní'
]

export const passwordRules = [  
    v => !!v || 'Heslo je povinný',
    v => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(v) || 'Heslo musí obsahovat minimálne 8 znakú, velké písmeno, číslo a specialní znak'
]

export const phoneRules = [
    v => v <= 9999999999 || 'Telefonní číslo musí být méně než 10 cifer'
]