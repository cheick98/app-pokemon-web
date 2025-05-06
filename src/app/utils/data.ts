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
    {
        numero: '013', nom: 'Aspicot', couleur: '#AC8254', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/013.png',
        description1: `L’aiguillon sur son front est très pointu. Il se cache dans les bois et les hautes herbes, où il se gave de feuilles`,
        description2: `L’aiguillon sur son front est très pointu. Il se cache dans les bois et les hautes herbes, où il se gave de feuilles`,
        taille: '0.3', categorie: 'Insectopic', poids: '3.2',
        talents: [{ titre: 'Écran Poudre', description: 'Le Pokémon dispose d’un écran naturel qui le protège des effets additionnels des attaques ennemies' }],
        types: [PokemonType.INSECTE, PokemonType.POISON],
        faiblesses: [PokemonType.FEU, PokemonType.VOL, PokemonType.PSY, PokemonType.ROCHE],
        evolutions: {
            precedent: '013',
            courant: '014',
            suivant: '015'
        }
    },
    {
        numero: '014', nom: 'Coconfort', couleur: '#E5CE77', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/014.png',
        description1: `Il peut à peine bouger. Quand il est menacé, il sort parfois son aiguillon pour empoisonner ses ennemis`,
        description2: `Il peut à peine bouger. Quand il est menacé, il sort parfois son aiguillon pour empoisonner ses ennemis`,
        taille: '0.6', categorie: 'Cocon', poids: '10.0',
        talents: [{ titre: 'Mue', description: 'Le Pokémon soigne parfois ses altérations de statut en muant' }],
        types: [PokemonType.INSECTE, PokemonType.POISON],
        faiblesses: [PokemonType.FEU, PokemonType.VOL, PokemonType.PSY, PokemonType.ROCHE],
        evolutions: {
            precedent: '013',
            courant: '014',
            suivant: '015'
        }
    },
    {
        numero: '015', nom: 'Dardargnan', couleur: '#E2C45C', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/015.png',
        description1: `Il se sert de ses trois aiguillons empoisonnés situés sur les pattes avant et l’abdomen pour attaquer sans relâche ses adversaires`,
        description2: `Il se sert de ses trois aiguillons empoisonnés situés sur les pattes avant et l’abdomen pour attaquer sans relâche ses adversaires`,
        taille: '1.0', categorie: 'Guêpoison', poids: '29.5',
        talents: [{ titre: 'Essaim', description: 'Augmente la puissance des capacités de type Insecte du Pokémon quand il a perdu une certaine quantité de PV' }],
        types: [PokemonType.INSECTE, PokemonType.POISON],
        faiblesses: [PokemonType.FEU, PokemonType.VOL, PokemonType.PSY, PokemonType.ROCHE],
        evolutions: {
            precedent: '013',
            courant: '014',
            suivant: '015'
        }
    },
    {
        numero: '016', nom: 'Roucool', couleur: '#BA9360', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/016.png',
        description1: `De nature très docile, il préfère projeter du sable pour se défendre plutôt que contre-attaquer`,
        description2: `De nature très docile, il préfère projeter du sable pour se défendre plutôt que contre-attaquer`,
        taille: '0.3', categorie: 'Minoiseau', poids: '1.8',
        talents: [
            { titre: 'Regard Vif', description: 'Les yeux perçants du Pokémon empêchent sa Précision de baisser' },
            { titre: 'Pieds Confus', description: 'Augmente l’Esquive du Pokémon s’il est confus' },
        ],
        types: [PokemonType.NORMAL, PokemonType.VOL],
        faiblesses: [PokemonType.ELECTRIK, PokemonType.GLACE, PokemonType.ROCHE],
        evolutions: {
            precedent: '016',
            courant: '017',
            suivant: '018'
        }
    },
    {
        numero: '017', nom: 'Roucoups', couleur: '#AC7C4A', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/017.png',
        description1: `Ce Pokémon est très endurant. Il survole en permanence son territoire pour chasser`,
        description2: `Ce Pokémon est très endurant. Il survole en permanence son territoire pour chasser`,
        taille: '1.1', categorie: 'Oiseau', poids: '30.0',
        talents: [
            { titre: 'Pieds Confus', description: 'Augmente l’Esquive du Pokémon s’il est confus' },
            { titre: 'Regard Vif', description: 'Les yeux perçants du Pokémon empêchent sa Précision de baisser' },
        ],
        types: [PokemonType.NORMAL, PokemonType.VOL],
        faiblesses: [PokemonType.ELECTRIK, PokemonType.GLACE, PokemonType.ROCHE],
        evolutions: {
            precedent: '016',
            courant: '017',
            suivant: '018'
        }
    },
    {
        numero: '018', nom: 'Roucarnage', couleur: '#B59058', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/018.png',
        description1: `Ce Pokémon vole à Mach 2 quand il chasse. Ses grandes serres sont des armes redoutables`,
        description2: `Ce Pokémon vole à Mach 2 quand il chasse. Ses grandes serres sont des armes redoutables`,
        taille: '1.5', categorie: 'Oiseau', poids: '39.5',
        talents: [
            { titre: 'Pieds Confus', description: 'Augmente l’Esquive du Pokémon s’il est confus' },
            { titre: 'Regard Vif', description: 'Les yeux perçants du Pokémon empêchent sa Précision de baisser' },
        ],
        types: [PokemonType.NORMAL, PokemonType.VOL],
        faiblesses: [PokemonType.ELECTRIK, PokemonType.GLACE, PokemonType.ROCHE],
        evolutions: {
            precedent: '016',
            courant: '017',
            suivant: '018'
        }
    },
    {
        numero: '019', nom: 'Rattata', couleur: '#9F81AA', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/019.png',
        description1: `Il peut ronger n’importe quoi avec ses deux dents. Quand on en voit un, il y en a certainement 40 dans le coin`,
        description2: `Il peut ronger n’importe quoi avec ses deux dents. Quand on en voit un, il y en a certainement 40 dans le coin`,
        taille: '0.3', categorie: 'Souris', poids: '3.5',
        talents: [
            { titre: 'Fuite', description: 'Permet de fuir n’importe quel Pokémon sauvage' },
            { titre: 'Cran', description: 'Augmente l’Attaque du Pokémon s’il est affecté par une altération de statut' },
        ],
        types: [PokemonType.NORMAL],
        faiblesses: [PokemonType.COMBAT],
        evolutions: {
            precedent: '019',
            courant: '020',
        }
    },
    {
        numero: '020', nom: 'Rattatac', couleur: '#93673A', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/020.png',
        description1: `Il peut ronger n’importe quoi avec ses deux dents. Quand on en voit un, il y en a certainement 40 dans le coin`,
        description2: `Il peut ronger n’importe quoi avec ses deux dents. Quand on en voit un, il y en a certainement 40 dans le coin`,
        taille: '0.7', categorie: 'Souris', poids: '18.5',
        talents: [
            { titre: 'Fuite', description: 'Permet de fuir n’importe quel Pokémon sauvage' },
            { titre: 'Cran', description: 'Augmente l’Attaque du Pokémon s’il est affecté par une altération de statut' },
        ],
        types: [PokemonType.NORMAL],
        faiblesses: [PokemonType.COMBAT],
        evolutions: {
            precedent: '019',
            courant: '020',
        }
    },
    {
        numero: '021', nom: 'Piafabec', couleur: '#93673A', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/021.png',
        description1: `Il est incapable de voler à haute altitude. Il se déplace très vite pour protéger son territoire`,
        description2: `Il est incapable de voler à haute altitude. Il se déplace très vite pour protéger son territoire`,
        taille: '0.3', categorie: 'Minoiseau', poids: '2.0',
        talents: [
            { titre: 'Regard Vif', description: 'Les yeux perçants du Pokémon empêchent sa Précision de baisser' },
        ],
        types: [PokemonType.NORMAL, PokemonType.VOL],
        faiblesses: [PokemonType.ELECTRIK, PokemonType.GLACE, PokemonType.ROCHE],
        evolutions: {
            precedent: '021',
            courant: '022',
        }
    },
    {
        numero: '022', nom: 'Rapasdepic', couleur: '#A8764E', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/022.png',
        description1: `Un Pokémon très ancien. S’il perçoit un danger, il fuit instantanément à haute altitude`,
        description2: `Un Pokémon très ancien. S’il perçoit un danger, il fuit instantanément à haute altitude`,
        taille: '1.2', categorie: 'Bec-Oiseau', poids: '38.0',
        talents: [
            { titre: 'Regard Vif', description: 'Les yeux perçants du Pokémon empêchent sa Précision de baisser' },
        ],
        types: [PokemonType.NORMAL, PokemonType.VOL],
        faiblesses: [PokemonType.ELECTRIK, PokemonType.GLACE, PokemonType.ROCHE],
        evolutions: {
            precedent: '021',
            courant: '022',
        }
    },
    {
        numero: '023', nom: 'Abo', couleur: '#A5759E', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/023.png',
        description1: `Sa mâchoire peut se désarticuler. Il est ainsi en mesure d’avaler de larges proies, mais ce faisant, il devient trop lourd pour bouger`,
        description2: `On le croise très souvent dans les hautes herbes. Il agite rapidement sa langue pour détecter le danger`,
        taille: '2.0', categorie: 'Serpent', poids: '6.9',
        talents: [
            { titre: 'Mue', description: 'Le Pokémon soigne parfois ses altérations de statut en muant' },
            { titre: 'Intimidation', description: 'Le Pokémon rugit lorsqu’il arrive au combat, ce qui intimide l’ennemi et baisse son Attaque' },
        ],
        types: [PokemonType.POISON],
        faiblesses: [PokemonType.SOL, PokemonType.PSY],
        evolutions: {
            precedent: '023',
            courant: '024',
        }
    },
    {
        numero: '024', nom: 'Arbok', couleur: '#A99FB6', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/024.png',
        description1: `Le motif sur son corps ressemble à un visage menaçant. Les adversaires les plus craintifs fuient à la seule vue de ce Pokémon`,
        description2: `De nature tenace, il ne lâche jamais sa proie une fois qu’il a décidé de la prendre en chasse`,
        taille: '3.5', categorie: 'Cobra', poids: '65.0',
        talents: [
            { titre: 'Mue', description: 'Le Pokémon soigne parfois ses altérations de statut en muant' },
            { titre: 'Intimidation', description: 'Le Pokémon rugit lorsqu’il arrive au combat, ce qui intimide l’ennemi et baisse son Attaque' },
        ],
        types: [PokemonType.POISON],
        faiblesses: [PokemonType.SOL, PokemonType.PSY],
        evolutions: {
            precedent: '023',
            courant: '024',
        }
    },
    {
        numero: '025', nom: 'Pikachu', couleur: '#F1D37A', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png',
        description1: `Quand il s’énerve, il libère instantanément l’énergie emmagasinée dans les poches de ses joues`,
        description2: `Quand plusieurs de ces Pokémon se réunissent, ils provoquent de gigantesques orages`,
        taille: '0.4', categorie: 'Souris', poids: '6.0',
        talents: [
            { titre: 'Statik', description: 'Le Pokémon charge son corps en électricité statique, et tout contact avec lui peut paralyser' },
        ],
        types: [PokemonType.ELECTRIK],
        faiblesses: [PokemonType.SOL],
        evolutions: {
            precedent: '172',
            courant: '025',
            suivant: '026'
        }
    },
    {
        numero: '026', nom: 'Raichu', couleur: '#EFB95D', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/026.png',
        description1: `Il se protège des décharges grâce à sa queue, qui dissipe l’électricité dans le sol`,
        description2: `Ses oreilles se dressent lorsque les poches d’électricité sur ses joues sont chargées`,
        taille: '0.8', categorie: 'Souris', poids: '30.0',
        talents: [
            { titre: 'Statik', description: 'Le Pokémon charge son corps en électricité statique, et tout contact avec lui peut paralyser' },
        ],
        types: [PokemonType.ELECTRIK],
        faiblesses: [PokemonType.SOL],
        evolutions: {
            precedent: '172',
            courant: '025',
            suivant: '026'
        }
    },
    {
        numero: '027', nom: 'Sabelette', couleur: '#EDCF7B', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/027.png',
        description1: `Il vit dans les profonds tunnels qu’il creuse. En cas de danger, il se roule en boule pour encaisser les coups de ses adversaires`,
        description2: `S’il tombe de haut, il peut s’en sortir indemne en se roulant en boule et en rebondissant, quelle que soit la hauteur de sa chute`,
        taille: '0.6', categorie: 'Souris', poids: '12.0',
        talents: [
            { titre: 'Voile Sable', description: 'Augmente l’Esquive du Pokémon lors des tempêtes de sable' },
        ],
        types: [PokemonType.SOL],
        faiblesses: [PokemonType.EAU, PokemonType.PLANTE, PokemonType.GLACE],
        evolutions: {
            precedent: '027',
            courant: '028',
        }
    },
    {
        numero: '028', nom: 'Sablaireau', couleur: '#724D26', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/028.png',
        description1: `Il attaque en se déplaçant rapidement et blesse ses adversaires à l’aide des piques sur son dos et de ses griffes acérées`,
        description2: `Il se roule en boule et attaque ses adversaires à l’aide de ses épines, qui sont constituées de peau durcie`,
        taille: '1.0', categorie: 'Souris', poids: '29.5',
        talents: [
            { titre: 'Voile Sable', description: 'Augmente l’Esquive du Pokémon lors des tempêtes de sable' },
        ],
        types: [PokemonType.SOL],
        faiblesses: [PokemonType.EAU, PokemonType.PLANTE, PokemonType.GLACE],
        evolutions: {
            precedent: '027',
            courant: '028',
        }
    },
    {
        numero: '029', nom: 'Nidoran', couleur: '#C0CEEA', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/029.png',
        description1: `Son odorat est plus développé que celui du mâle. Quand Nidoran♀ cherche à manger, il reste dans le sens du vent, qu’il détecte avec ses vibrisses`,
        description2: `Ce Pokémon se nourrit de Baies en les ouvrant avec ses incisives. Le bout de sa corne est plus arrondi que celui du mâle`,
        taille: '0.4', categorie: 'Vénépic', poids: '7.0',
        talents: [
            { titre: 'Point Poison', description: 'Peut empoisonner l’attaquant lorsque le Pokémon subit une attaque directe' },
            { titre: 'Rivalité', description: 'Le Pokémon déteste la concurrence et inflige plus de dégâts si sa cible est du même sexe. Par contre, il en inflige moins si sa cible est du sexe opposé' },
        ],
        types: [PokemonType.POISON],
        faiblesses: [PokemonType.SOL, PokemonType.PSY],
        evolutions: {
            precedent: '029',
            courant: '030',
            suivant: '031',
        }
    },
    {
        numero: '030', nom: 'Nidorina', couleur: '#B7D2D8', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/030.png',
        description1: `On pense que sa corne frontale s’est atrophiée pour lui permettre de nourrir ses petits sans les blesser`,
        description2: `Si un danger menace le groupe, ces Pokémon se réunissent et l’affrontent en émettant des ultrasons en chœur`,
        taille: '0.8', categorie: 'Vénépic', poids: '20.0',
        talents: [
            { titre: 'Rivalité', description: 'Le Pokémon déteste la concurrence et inflige plus de dégâts si sa cible est du même sexe. Par contre, il en inflige moins si sa cible est du sexe opposé' },
            { titre: 'Point Poison', description: 'Peut empoisonner l’attaquant lorsque le Pokémon subit une attaque directe' },
        ],
        types: [PokemonType.POISON],
        faiblesses: [PokemonType.SOL, PokemonType.PSY],
        evolutions: {
            precedent: '029',
            courant: '030',
            suivant: '031',
        }
    },
    {
        numero: '031', nom: 'Nidoqueen', couleur: '#83ADC6', generation: 1,
        imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/031.png',
        description1: `Il est plus doué pour se défendre que pour attaquer. Grâce à son blindage d’écailles, il protège ses petits de toute agression`,
        description2: `Ce Pokémon calme les petits de son espèce en les plaçant entre ses épines dorsales. Dans ce cas, elles ne libèrent pas de poison`,
        taille: '1.3', categorie: 'Perceur', poids: '60.0',
        talents: [
            { titre: 'Point Poison', description: 'Peut empoisonner l’attaquant lorsque le Pokémon subit une attaque directe' },
            { titre: 'Rivalité', description: 'Le Pokémon déteste la concurrence et inflige plus de dégâts si sa cible est du même sexe. Par contre, il en inflige moins si sa cible est du sexe opposé' },
        ],
        types: [PokemonType.POISON, PokemonType.SOL],
        faiblesses: [PokemonType.EAU, PokemonType.GLACE, PokemonType.SOL, PokemonType.PSY],
        evolutions: {
            precedent: '029',
            courant: '030',
            suivant: '031',
        }
    },
]