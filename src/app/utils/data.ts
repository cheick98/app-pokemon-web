// my importations
import { IPokemon, PokemonType } from '../models/pokemon.model'

export const data: IPokemon[] = [
    {
        numero: '001', nom: 'Bulbizarre', couleur: '#74A290', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png',
        description1: `Au début de sa vie, il se nourrit des nutriments accumulés dans la graine sur son dos. Cela lui permet de grandir`,
        description2: `Il porte une graine sur son dos depuis la naissance. Elle croît à mesure qu’il grandit`,
        taille: '0.7', categorie: 'Graine', poids: '6.9',
        talents: [{ titre: 'Engrais', description: `Augmente la puissance des capacités de type Plante du Pokémon quand il a perdu une certaine quantité de PV` }],
        types: [PokemonType.PLANTE, PokemonType.POISON],
        faiblesses: [PokemonType.FEE, PokemonType.GLACE, PokemonType.VOL, PokemonType.PSY],
        evolutions: {
            precedent: '001',
            courant: '002',
            suivant: '003'
        }
    },
    {
        numero: '002', nom: 'Herbizarre', couleur: '#82B0B9', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png',
        description1: `Plus il s’expose au soleil, plus il emmagasine d’énergie, ce qui permet au bourgeon sur son dos de se développer`,
        description2: `Le bourgeon sur son dos grandit en absorbant des nutriments. Il dégage un doux parfum quand il éclot`,
        taille: '1.0', categorie: 'Graine', poids: '13.0',
        talents: [{ titre: 'Engrais', description: 'Augmente la puissance des capacités de type Plante du Pokémon quand il a perdu une certaine quantité de PV' }],
        types: [PokemonType.PLANTE, PokemonType.POISON],
        faiblesses: [PokemonType.FEE, PokemonType.GLACE, PokemonType.VOL, PokemonType.PSY],
        evolutions: {
            precedent: '001',
            courant: '002',
            suivant: '003'
        }
    },
    {
        numero: '003', nom: 'Florizarre', couleur: '#418384', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png',
        description1: `Ce Pokémon est capable de transformer la lumière du soleil en énergie. Il est donc encore plus fort en été`,
        description2: `Lorsqu’il déploie ses grands pétales pour capter la lumière du soleil, de l’énergie lui parcourt tout le corps`,
        taille: '2.0', categorie: 'Graine', poids: '100.0',
        talents: [{ titre: 'Engrais', description: 'Augmente la puissance des capacités de type Plante du Pokémon quand il a perdu une certaine quantité de PV' }],
        types: [PokemonType.PLANTE, PokemonType.POISON],
        faiblesses: [PokemonType.FEE, PokemonType.GLACE, PokemonType.VOL, PokemonType.PSY],
        evolutions: {
            precedent: '001',
            courant: '002',
            suivant: '003'
        }
    },
    {
        numero: '004', nom: 'Salamèche', couleur: '#E9AA7C', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png',
        description1: `La flamme au bout de sa queue représente sa vitalité. Quand Salamèche n’est pas au meilleur de sa forme, elle faiblit`,
        description2: `Quand il est en bonne santé, la flamme au bout de sa queue continue de flamboyer même si elle est légèrement aspergée d’eau`,
        taille: '0.6', categorie: 'Lézard', poids: '8.5',
        talents: [{ titre: 'Brasier', description: 'Augmente la puissance des capacités de type Feu du Pokémon quand il a perdu une certaine quantité de PV' }],
        types: [PokemonType.FEU],
        faiblesses: [PokemonType.EAU, PokemonType.SOL, PokemonType.ROCHE],
        evolutions: {
            precedent: '004',
            courant: '005',
            suivant: '006'
        }
    },
    {
        numero: '005', nom: 'Reptincel', couleur: '#BC5C4D', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/005.png',
        description1: `En agitant sa queue enflammée, il peut élever la température ambiante de manière exponentielle et ainsi tourmenter ses adversaires`,
        description2: `Ce Pokémon au sang chaud est constamment à la recherche d’adversaires. Il ne se calme qu’une fois qu’il a gagné`,
        taille: '1.1', categorie: 'Flamme', poids: '19.0',
        talents: [{ titre: 'Brasier', description: 'Augmente la puissance des capacités de type Feu du Pokémon quand il a perdu une certaine quantité de PV' }],
        types: [PokemonType.FEU],
        faiblesses: [PokemonType.EAU, PokemonType.SOL, PokemonType.ROCHE],
        evolutions: {
            precedent: '004',
            courant: '005',
            suivant: '006'
        }
    },
    {
        numero: '006', nom: 'Dracaufeu', couleur: '#CA8551', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png',
        description1: `Quand Dracaufeu s’énerve réellement, la flamme au bout de sa queue devient bleue`,
        description2: `Ses ailes lui permettent de voler très haut dans le ciel. Plus il accumule d’expérience en combat, plus la température de ses flammes augmente`,
        taille: '1.7', categorie: 'Flamme', poids: '90.5',
        talents: [{ titre: 'Brasier', description: 'Augmente la puissance des capacités de type Feu du Pokémon quand il a perdu une certaine quantité de PV' }],
        types: [PokemonType.FEU, PokemonType.VOL],
        faiblesses: [PokemonType.EAU, PokemonType.ELECTRIK, PokemonType.ROCHE],
        evolutions: {
            precedent: '004',
            courant: '005',
            suivant: '006'
        }
    },
    {
        numero: '007', nom: 'Carapuce', couleur: '#8FC4D1', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png',
        description1: `Ce Pokémon crache une écume redoutable. Après sa naissance, son dos gonfle et durcit pour former une carapace`,
        description2: `Lorsqu’il naît, sa carapace est molle, mais elle gagne tout de suite en élasticité et reprend sa forme initiale quand on appuie dessus`,
        taille: '0.5', categorie: 'Minitortue', poids: '9.0',
        talents: [{ titre: 'Torrent', description: 'Augmente la puissance des capacités de type Eau du Pokémon quand il a perdu une certaine quantité de PV' }],
        types: [PokemonType.EAU],
        faiblesses: [PokemonType.PLANTE, PokemonType.ELECTRIK],
        evolutions: {
            precedent: '007',
            courant: '008',
            suivant: '009'
        }
    },
    {
        numero: '008', nom: 'Carabaffe', couleur: '#AFBDDB', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/008.png',
        description1: `Sa longue queue touffue est un symbole de longévité. Les personnes âgées apprécient donc particulièrement ce Pokémon`,
        description2: `Il se cache souvent dans l’eau pour guetter ses proies. Ses oreilles lui permettent de rester stable quand il nage à grande vitesse`,
        taille: '1.0', categorie: 'Tortue', poids: '22.5',
        talents: [{ titre: 'Torrent', description: 'Augmente la puissance des capacités de type Eau du Pokémon quand il a perdu une certaine quantité de PV' }],
        types: [PokemonType.EAU],
        faiblesses: [PokemonType.PLANTE, PokemonType.ELECTRIK],
        evolutions: {
            precedent: '007',
            courant: '008',
            suivant: '009'
        }
    },
    {
        numero: '009', nom: 'Tortank', couleur: '#6B88B1', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/009.png',
        description1: `Il augmente délibérément sa masse corporelle pour contrer le recul de ses puissants jets d’eau`,
        description2: `Sa carapace est armée de canons hydrauliques. Grâce à eux, cet impressionnant Pokémon peut charger ses adversaires avec la force d’une fusée`,
        taille: '1.6', categorie: 'Carapace', poids: '85.5',
        talents: [{ titre: 'Torrent', description: 'Augmente la puissance des capacités de type Eau du Pokémon quand il a perdu une certaine quantité de PV' }],
        types: [PokemonType.EAU],
        faiblesses: [PokemonType.PLANTE, PokemonType.ELECTRIK],
        evolutions: {
            precedent: '007',
            courant: '008',
            suivant: '009'
        }
    },
    {
        numero: '010', nom: 'Chenipan', couleur: '#75A465', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/010.png',
        description1: `Pour se protéger, il émet par ses antennes une odeur nauséabonde qui fait fuir ses ennemis`,
        description2: `Ses petites pattes munies de ventouses lui permettent de monter les pentes et de grimper aux murs sans se fatiguer`,
        taille: '0.3', categorie: 'Ver', poids: '2.9',
        talents: [{ titre: 'Écran Poudre', description: 'Le Pokémon dispose d’un écran naturel qui le protège des effets additionnels des attaques ennemies' }],
        types: [PokemonType.INSECTE],
        faiblesses: [PokemonType.FEU, PokemonType.VOL, PokemonType.ROCHE],
        evolutions: {
            precedent: '010',
            courant: '011',
            suivant: '012'
        }
    },
    {
        numero: '011', nom: 'Chrysacier', couleur: '#83A851', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/011.png',
        description1: `En attendant sa prochaine évolution, il ne peut que durcir sa carapace et rester immobile pour éviter de se faire attaquer`,
        description2: `Bien que son corps soit entouré d’une carapace solide, l’intérieur est si mou qu’il ne résisterait pas à une attaque violente`,
        taille: '0.7', categorie: 'Cocon', poids: '9.9',
        talents: [{ titre: 'Mue', description: 'Le Pokémon soigne parfois ses altérations de statut en muant' }],
        types: [PokemonType.INSECTE],
        faiblesses: [PokemonType.FEU, PokemonType.VOL, PokemonType.ROCHE],
        evolutions: {
            precedent: '010',
            courant: '011',
            suivant: '012'
        }
    },
    {
        numero: '012', nom: 'Papilusion', couleur: '#585175', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/012.png',
        description1: `Ce Pokémon raffole du nectar des fleurs. Il est capable de dénicher des champs fleuris même s’ils n’ont qu’une quantité infime de pollen`,
        description2: `Ce Pokémon raffole du nectar des fleurs. Il est capable de dénicher des champs fleuris même s’ils n’ont qu’une quantité infime de pollen`,
        taille: '1.1', categorie: 'Papillon', poids: '32.0',
        talents: [{ titre: 'Œil Composé', description: 'Les yeux à facettes du Pokémon augmentent la Précision de ses capacités' }],
        types: [PokemonType.INSECTE, PokemonType.VOL],
        faiblesses: [PokemonType.FEU, PokemonType.ELECTRIK, PokemonType.GLACE, PokemonType.VOL, PokemonType.ROCHE],
        evolutions: {
            precedent: '010',
            courant: '011',
            suivant: '012'
        }
    },
]