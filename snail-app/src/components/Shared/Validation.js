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
    v => v > 0 || 'Velikost musí být kladná'
]

export const selectRules = [
    v => !!v || 'Musíte vybrat položku'
]

export const textRules = [
    v => !!v || 'Pole je povinný',
    v => v.length <= 25 || 'Pole musí mít méně než 25 znaků',
]

export const usernameRules = [
    v => !!v || '',
    v => /^[a-zA-Z0-9]{3,15}$/.test(v) || 'Přihlasovací jméno musí mýt 3-15 znakú, obsahovat múže jenom písmena bez diakritiky a čísla'
]

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export const emailRules = [
    v => !!v || 'E-mail je povinný',
    v => emailRegex.test(v) || 'E-mail musí být validní'
]

export const passwordRules = [  
    v => !!v || 'Heslo je povinný',
    v => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*,:;])(?=.{8,})/.test(v) || 'Heslo musí obsahovat minimálne 8 znakú, velké písmeno, číslo a specialní znak'
]

export const phoneRules = [
    v => v <= 9999999999 || 'Telefonní číslo musí být méně než 10 cifer',
    v => v >= 0 || 'Telefonní číslo musí být kladné'
]

export const fileRules = [
    value => !value || value.size < 2000000 || 'Obrázek musí mít méně než 2MB',
]

export const intRules = [
    v => Number.isInteger(Number(v)) || 'Hodnota musí být celé číslo'
]