export enum PokemonType {
    ACIER = 'acier',
    COMBAT = 'combat',
    DRAGON = 'dragon',
    EAU = 'eau',
    ELECTRIK = 'électrik',
    FEE = 'fée',
    FEU = 'feu',
    GLACE = 'glace',
    INSECTE = 'insecte',
    NORMAL = 'normal',
    PLANTE = 'plante',
    POISON = 'poison',
    PSY = 'psy',
    ROCHE = 'roche',
    SOL = 'sol',
    SPECTRE = 'spectre',
    TENEBRES = 'ténèbres',
    VOL = 'vol',


    INCONNU = 'inconnu',
    OBSCUR = 'obscur',
    STELLAIRE = 'stellaire',
}

export interface IPokemonProperties {
    iconUrl: string
    couleur: string
}

export const PokemonTypeProperties: { [key: string]: IPokemonProperties } = {
    [PokemonType.ACIER]: { iconUrl: '', couleur: '#60A2B9' },
    [PokemonType.COMBAT]: { iconUrl: '', couleur: '#FF8100' },
    [PokemonType.DRAGON]: { iconUrl: '', couleur: '#4F60E2' },
    [PokemonType.EAU]: { iconUrl: '', couleur: '#2481F0' },
    [PokemonType.ELECTRIK]: { iconUrl: '', couleur: '#FAC100' },
    [PokemonType.FEE]: { iconUrl: '', couleur: '#EF71F0' },
    [PokemonType.FEU]: { iconUrl: '', couleur: '#E72324' },
    [PokemonType.GLACE]: { iconUrl: '', couleur: '#3DD9FF' },
    [PokemonType.INSECTE]: { iconUrl: '', couleur: '#92A212' },
    [PokemonType.NORMAL]: { iconUrl: '', couleur: '#A0A2A0' },
    [PokemonType.PLANTE]: { iconUrl: '', couleur: '#3DA224' },
    [PokemonType.POISON]: { iconUrl: '', couleur: '#923FCC' },
    [PokemonType.PSY]: { iconUrl: '', couleur: '#EF3F7A' },
    [PokemonType.ROCHE]: { iconUrl: '', couleur: '#B0AB82' },
    [PokemonType.SOL]: { iconUrl: '', couleur: '#92501B' },
    [PokemonType.SPECTRE]: { iconUrl: '', couleur: '#713F71' },
    [PokemonType.TENEBRES]: { iconUrl: '', couleur: '#4A3A38' },
    [PokemonType.VOL]: { iconUrl: '', couleur: '#82BAF0' },

    [PokemonType.INCONNU]: { iconUrl: '', couleur: '#689A8D' },
    [PokemonType.OBSCUR]: { iconUrl: '', couleur: '#45454A' },
    [PokemonType.STELLAIRE]: { iconUrl: '', couleur: '#B26BDF' },
}

export interface IPokemon {
    numero: string
    nom: string
    imageUrl: string
    couleur: string
    generation: number

    description1: string
    description2?: string

    taille: string
    categorie: string
    poids: string
    talents: { titre: string, description: string }[]

    types: PokemonType[]
    faiblesses: PokemonType[]

    evolutions: {
        precedent?: string
        courant: string
        suivant?: string
    }
}