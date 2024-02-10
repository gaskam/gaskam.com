export const defaultMessage = "<span class='title'>WELOME TO GASKAM.COM TERMINAL</span>";
export const defaultError =
    "<br><br>Command not found, type 'help' to see all commands";

// Help
export function help(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
        <br>
    <br>Here is a list of available commands:
    <br>
    <br>help- list all commands except easteregg
    <br>ls- definded later
    <br>tree- list of all files of the project (like GitHub)
    <br>about- Shows some very very useful informations (the boring ones) about us
    <br>projects- a presentation of all projects   
    <br>support- support us with a donation
    <br>github- link to the GitHub page
    <br>discord- link to the Discord server
    <br>youtube- link to the YouTube channel 
    <br>jobs- job opportunities (jobs.gaskam.com)
    <br>dev- developers area (dev.gaskam.com)
    <br>lang- change language (en, fr, es, it, de, pt, ru, zh, ja, ko)
    <br>theme- change theme (light, dark)
    <br>reload- reload the page
    <br>events- list of all events
    <br>community- list of all community projects which use our tools
    <br>clear- clear the terminal
    <br>contact- contact us
    <br>privacy- privacy policy
    <br>terms- terms of service
    <br>credits- list of all contributors
    <br>news- list of all news
    <br>faq- list of all frequently asked questions
    <br>ask- ask a question
    <br>newsletter- subscribe to the newsletter
    <br>feedback- send us a feedback
    <br>login - login to the website
    <br>register- register to the website
    <br>profile- your profile
    <br>settings- your settings
    <br>logout- logout from the website
    <br>search- search for something
        `;
    }
}

// Ls
export function ls(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Tree
export function tree(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// About
export function about(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Projects
export function projects(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    <br>You can sort by language with --typescript, --javascript, --bun, --lua, --python, --cpp
    `;
    }
}
export function projectsTypescript(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function projectsJavascript(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function projectsBun(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function projectsLua(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function projectsPython(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function projectsCpp(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Support
export function support(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// GitHub
export function github(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    <br>You can sort by profile with --gaskam, --botmaker, --patafix
    `;
    }
}
export function githubGaskam(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function githubBotmaker(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function githubPatafix(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Discord
export function discord(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Youtube
export function youtube(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Jobs
export function jobs(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Dev
export function dev(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Lang
export function lang(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Change the language of the terminal
    <br>lang --default - set the language with your system language
    <br>lang --en - set the language to english
    <br>lang --fr - set the language to french
    <br>lang --es - set the language to spanish
    <br>lang --de - set the language to german
    <br>lang --it - set the language to italian
    <br>lang --ru - set the language to russian
    <br>lang --pt - set the language to portuguese
    <br>lang --ja - set the language to japanese
    <br>lang --zh - set the language to chinese
    <br>lang --ko - set the language to korean
    `;
    }
}
export function langDefault(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function langEn(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function langFr(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function langEs(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function langDe(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function langIt(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function langRu(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function langPt(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function langJa(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function langZh(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function langKo(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Theme
export function theme(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Change the theme of the terminal
    <br>theme --default - set the theme with your system preference
    <br>theme --light - set the theme to light
    <br>theme --dark - set the theme to dark
    `;
    }
}
export function themeDefault(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function themeLight(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function themeDark(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Reload
export function reload(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Events
export function events(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Community
export function community(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Contact
export function contact(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Privacy
export function privacy(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function privacyPdf(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Terms
export function terms(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function termsPdf(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Credits
export function credits(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// News
export function news(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// FAQ
export function faq(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Ask
export function ask(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Newsletter
export function newsletter(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Feedback
export function feedback(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Login
export function login(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function loginGithub(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function loginGoogle(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function loginDiscord(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function loginTwitter(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function loginApple(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function loginMicrosoft(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function loginEmail(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Register
export function register(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function registerGithub(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function registerGoogle(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    
    <br>
    `;
    }
}
export function registerDiscord(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function registerTwitter(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function registerApple(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function registerMicrosoft(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function registerEmail(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Logout
export function logout(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Profile
export function profile(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Settings
export function settings(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Search
export function search(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
