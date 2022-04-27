const initstate={
    scheme: 'auto',
    // schemeDir: 'ltr',
    sidebarcolor: 'white',
    sidebarType: [],
    sidebarActiveStyle: 'roundedAll',
    navbarstyle : 'sticky'
    
}

// Action/Dispatch
// Action for schememode
export const ModeAction = (value) => {
    if (value === 'dark') {
        document.body.classList.remove('auto')
        document.body.classList.remove('light')
        document.body.classList.add('dark')
    }
    else if (value === 'light'){
        document.body.classList.remove('dark')
        document.body.classList.remove('auto')
        document.body.classList.add('light')
    }
     else {
        document.body.classList.remove('dark')
        document.body.classList.remove('light')
        document.body.classList.add('auto')
    }
    return {type: 'DARKMODE', value}
}

//Acton for SchemeDirection
// export const SchemeDirAction = (value) => {
//     if (value === 'rtl') {
//         document.body.parentElement.setAttribute('dir','rtl')
//         const dirModes = document.querySelectorAll(".offcanvas-end ")
//         Array.from(dirModes, (dirMode) => {
//             dirMode.classList.remove('offcanvas-end')
//             return dirMode.classList.add('offcanvas-start')
//       }
//         )}
    
//      else {
//         document.body.parentElement.setAttribute('dir','ltr')
//         const dirModes = document.querySelectorAll(".offcanvas-start ")
//         Array.from(dirModes, (dirMode) => {
//             dirMode.classList.remove('offcanvas-start')
//             return dirMode.classList.add('offcanvas-end')
//             }
//         )}
    
//     return {type: 'SCHEMEDIRMODE', value}
// }

// action for sidebarcolor
export const SidebarColorAction = (value) => {
    if (value === 'dark') {
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-color')
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-white')
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-transparent')
        document.getElementsByTagName('ASIDE')[0].classList.add('sidebar-dark')
    }
    else if (value === 'color'){
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-dark')
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-white')
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-transparent')
        document.getElementsByTagName('ASIDE')[0].classList.add('sidebar-color')
    }
    else if (value === 'transparent'){
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-color')
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-white')
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-dark')
        document.getElementsByTagName('ASIDE')[0].classList.add('sidebar-transparent')
    }
    else{
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-dark')
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-color')
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-transparent')
        document.getElementsByTagName('ASIDE')[0].classList.add('sidebar-white')
    }
    return {type: 'SIDEBARCOLORMODE', value}
    }

    // Action for sidebartypeaction

export const SidebarTypeAction = (value) => {
    if (value === 'mini') {
                    if (document.getElementsByClassName('mode')[1].classList.contains('active')) {
                        document.getElementsByClassName('mode')[1].classList.remove('active')
                        document.querySelector('.sidebar-default').classList.remove("sidebar-mini")
                    } else {
                        document.getElementsByClassName('mode')[1].classList.add('active')
                        document.querySelector('.sidebar-default').classList.add("sidebar-mini")
                    }
        }
        
    else if(value === 'hover') {
            if (document.getElementsByClassName('mode')[3].classList.contains('active')) {
                document.getElementsByClassName('mode')[3].classList.remove('active')
                document.querySelector('.sidebar-default').classList.remove("sidebar-hover")
                document.querySelector('.sidebar-default').classList.remove("sidebar-mini")
            } else {
                document.getElementsByClassName('mode')[3].classList.add('active')
                document.querySelector('.sidebar-default').classList.add("sidebar-hover")
                document.querySelector('.sidebar-default').classList.add("sidebar-mini")
            }
        }
        else{
                    if (document.getElementsByClassName('mode')[5].classList.contains('active')) {
                        document.getElementsByClassName('mode')[5].classList.remove('active')
                        document.querySelector('.sidebar-default').classList.remove("sidebar-boxed")
                    } else {
                        document.getElementsByClassName('mode')[5].classList.add('active')
                        document.querySelector('.sidebar-default').classList.add("sidebar-boxed")
                    }
        }

        
    return {type: 'SIDEBARTYPEMODE', value}
}

// action for sidebaractivestyle

export const SidebarActiveStyleAction = (value) => {
    if (value === 'roundedOneSide') {
        document.getElementsByTagName('ASIDE')[0].classList.add('navs-rounded')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-rounded-all')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-pill')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-pill-all')
            
    }
    else if (value === 'roundedAllSide'){
        document.getElementsByTagName('ASIDE')[0].classList.add('navs-rounded-all')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-rounded')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-pill')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-pill-all')
    }
    else if (value === 'pill'){
        document.getElementsByTagName('ASIDE')[0].classList.add('navs-pill')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-rounded')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-rounded-all')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-pill-all')
    }
    else{
        document.getElementsByTagName('ASIDE')[0].classList.add('navs-pill-all')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-rounded')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-pill')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-rounded-all')

    }
    return {type: 'SIDEBARACTIVESTYLEMODE', value}

    }

   
// action for navbarstyleaction 

export const NavbarstyleAction = (value) => {
    if (value === 'glass') {
        document.getElementsByTagName('NAV')[0].classList.add('nav-glass')
        document.getElementsByClassName('iq-navbar-header')[0].classList.remove('navs-bg-color')
        document.getElementsByTagName('NAV')[0].classList.remove('navs-transparent')
        document.getElementsByTagName('NAV')[0].classList.remove('navs-sticky')
        document.getElementsByTagName('NAV')[0].classList.remove('navs-bg-color')
    }
    else if (value === 'color') {
        document.getElementsByTagName('NAV')[0].classList.add('navs-bg-color')
        document.getElementsByClassName('iq-navbar-header')[0].classList.add('navs-bg-color')
        document.getElementsByTagName('NAV')[0].classList.remove('navs-transparent')
        document.getElementsByTagName('NAV')[0].classList.remove('nav-glass')
        document.getElementsByTagName('NAV')[0].classList.remove('navs-sticky')
    }
    else if (value === 'transparent') {
        document.getElementsByTagName('NAV')[0].classList.add('navs-transparent')
        document.getElementsByClassName('iq-navbar-header')[0].classList.remove('navs-bg-color')
        document.getElementsByTagName('NAV')[0].classList.remove('navs-bg-color')
        document.getElementsByTagName('NAV')[0].classList.remove('nav-glass')
        document.getElementsByTagName('NAV')[0].classList.remove('navs-sticky')
    }
    else{
        document.getElementsByTagName('NAV')[0].classList.add('navs-sticky')
        document.getElementsByClassName('iq-navbar-header')[0].classList.remove('navs-bg-color')
        document.getElementsByTagName('NAV')[0].classList.remove('navs-transparent')
        document.getElementsByTagName('NAV')[0].classList.remove('nav-glass')
        document.getElementsByTagName('NAV')[0].classList.remove('navs-bg-color')
    }

    return {type: 'NAVBARSTYLEMODE', value}
}

// Mutations/Reducer
const Mode = (state = initstate,action) =>{
    switch (action.type) {
        case 'DARKMODE':
            return Object.assign({}, state, {
                scheme: action.value
            })
        // case 'SCHEMEDIRMODE':
        //     return Object.assign({}, state, {
        //         schemeDir: action.value
        //     })
        case 'SIDEBARCOLORMODE':
            return Object.assign({}, state, {
                sidebarcolor: action.value
            })
        case 'SIDEBARTYPEMODE':
            return Object.assign({}, state, {
                sidebarType: [...state.sidebarType, action.value],
               
            })
        case 'SIDEBARACTIVESTYLEMODE':
            return Object.assign({}, state, {
                sidebarActiveStyle: action.value
                
            })
        case 'NAVBARSTYLEMODE':
            return Object.assign({}, state, {
                navbarstyle: action.value
                
            })
        default:
            return state
    }
}
// Selectores
export const getDarkMode = (state) => state.mode.scheme;
// export const getDirMode = (state) => state.mode.schemeDir;
export const getSidebarColorMode = (state) => state.mode.sidebarcolor;
export const getSidebarTypeMode = (state) => state.mode.sidebarType;
export const getSidebarActiveMode = (state) => state.mode.sidebarActiveStyle;
export const getNavbarStyleMode = (state) => state.mode.navbarstyle;

export default Mode