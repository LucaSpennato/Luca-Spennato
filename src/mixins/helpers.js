// function fixedFontAwesomeIconsPath(string){
    
//     let correctedStringPath;

//     switch (string) {
//         case 'database': 
//             correctedStringPath = 'fa-solid fa-database';
//             break;
//         case 'css3':
//         case 'git':
//             correctedStringPath = 'fa-brands fa-' + string + '-alt';
//             break;
//         case 'group':
//             correctedStringPath = 'fa-solid fa-people-group';
//             break;
//         case 'italian':
//             correctedStringPath = 'fa-solid fa-pizza-slice';
//             break;
//         case 'eng':
//             correctedStringPath = 'fa solid fa-crown';
//             break;
//         default:
//         correctedStringPath = 'fa-brands fa-' + string;
//         break;
//     }

//     return correctedStringPath;
// }

// export { fixedFontAwesomeIconsPath }

export const helpers = {
    methods:{
       fixedFontAwesomeIconsPath(string){
    
            let correctedStringPath;
        
            switch (string) {
                case 'database': 
                    correctedStringPath = 'fa-solid fa-database';
                    break;
                case 'css3':
                case 'git':
                    correctedStringPath = 'fa-brands fa-' + string + '-alt';
                    break;
                case 'group':
                    correctedStringPath = 'fa-solid fa-people-group';
                    break;
                case 'italian':
                    correctedStringPath = 'fa-solid fa-pizza-slice';
                    break;
                case 'eng':
                    correctedStringPath = 'fa solid fa-crown';
                    break;
                default:
                correctedStringPath = 'fa-brands fa-' + string;
                break;
            }
        
            return correctedStringPath;
        }
    }
}
