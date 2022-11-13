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

        /**
         * Fix the path for fontawesome icons,
         * in the cases will correct the strings
         * for solid type icons, brands and '-alt'
         * 
         * @param string 
         * @case 'database'
         * @return 'fa-solid fa-database'
         * @case 'spring'
         * @return fa-solid fa-leaf'
         * @case 'css3', 'git'
         * @return 'fa-brand fa-' + string + '-alt'
         * @case 'italian'
         * @return 'fa-solid fa-pizza-slice'
         * @case 'eng'
         * @return 'fa solid fa-earth-americas'
         * @default 'fa-brands fa-' + string
         */
       fixedFontAwesomeIconsPath(string){
    
            let correctedStringPath;
        
            switch (string) {
                case 'database': 
                    correctedStringPath = 'fa-solid fa-database';
                    break;
                case 'spring':
                    correctedStringPath = 'fa-solid fa-leaf';
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
                    correctedStringPath = 'fa solid fa-earth-americas';
                    break;
                default:
                correctedStringPath = 'fa-brands fa-' + string;
                break;
            }
        
            return correctedStringPath;
        }
    }
}
