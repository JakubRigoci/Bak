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