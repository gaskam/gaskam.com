import * as command from "./commands.ts";

let timeout = -1;
document.addEventListener("keydown", function (event) {
    const inputElement = document.getElementById("input");
    const terminalElement = document.getElementById("terminal");
    if (inputElement) {
        switch (event.key) {
            case "Backspace":
                inputElement.innerText = inputElement.innerText.slice(0, -1);
                break;
            case "Enter":
                if (
                    inputElement.innerText.includes("<") ||
                    inputElement.innerText.includes(">")
                ) {
                    return;
                }

                if (inputElement.innerText === "clear") {
                    if (terminalElement) {
                        terminalElement.innerHTML = command.defaultMessage;
                    }
                    inputElement.innerText = "";
                    break;
                }

                if (terminalElement) {
                    terminalElement.innerHTML += `<br>gaskam.com $\u00A0${inputElement.innerText}`;
                }

                switch (inputElement.innerText) {
                    case "help":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.help;
                        }
                        break;
                    case "ls":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.ls;
                        }
                        break;
                    case "tree":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.tree;
                        }
                        break;
                    case "about":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.about;
                        }
                        break;
                    case "projects":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.projects;
                        }
                        break;
                    case "projects --typescript":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.projectsTypescript;
                        }
                        break;
                    case "projects --javascript":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.projectsJavascript;
                        }
                        break;
                    case "projects --bun":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.projectsBun;
                        }
                        break;
                    case "projects --lua":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.projectsLua;
                        }
                        break;
                    case "projects --python":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.projectsPython;
                        }
                        break;
                    case "projects --cpp":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.projectsCpp;
                        }
                        break;
                    
                    case "support":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.support;
                        }
                        break;
                    case "github":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.github;
                        }
                        break;
                    case "github --gaskam":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.githubGaskam;
                        }
                        break;
                    case "github --patafix":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.githubPatafix;
                        }
                        break;
                    case "github --botmaker":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.githubBotmaker;
                        }
                        break;
                    case "discord":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.discord;
                        }
                        break;
                    case "youtube":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.youtube;
                        }
                        break;
                    case "jobs":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.jobs;
                        }
                        break;
                    case "dev":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.dev;
                        }
                        break;
                    case "lang":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.lang;
                        }
                        break;
                    case "lang --default":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.langDefault;
                        }
                        break;
                    case "lang --en":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.langEn;
                        }
                        break;
                    case "lang --fr":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.langFr;
                        }
                        break;
                    case "lang --es":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.langEs;
                        }
                        break;
                    case "lang --it":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.langIt;
                        }
                        break;
                    case "lang --de":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.langDe;
                        }
                        break;
                    case "lang --pt":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.langPt;
                        }
                        break;
                    case "lang --ru":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.langRu;
                        }
                        break;
                    case "lang --zh":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.langZh;
                        }
                        break;
                    case "lang --ja":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.langJa;
                        }
                        break;
                    case "lang --ko":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.langKo;
                        }
                        break;
                    case "theme":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.theme;
                        }
                        break;
                    case "theme --default":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.themeDefault;
                        }
                        break;
                    case "theme --light":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.themeLight;
                        }
                        break;
                    case "theme --dark":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.themeDark;
                        }
                        break;
                    case "reload":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.reload;
                        }
                        break;
                    case "events":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.events;
                        }
                        break;
                    case "community":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.community;
                        }
                        break;
                    case "contact":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.contact;
                        }
                        break;
                    case "privacy":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.privacy;
                        }
                        break;
                    case "privacy --pdf":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.privacyPdf;
                        }
                        break;
                    case "terms":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.terms;
                        }
                        break;
                    case "terms --pdf":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.termsPdf;
                        }
                        break;
                    case "credits":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.credits;
                        }
                        break;
                    case "news":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.news;
                        }
                        break;
                    case "faq":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.faq;
                        }
                        break;
                    case "ask":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.ask;
                        }
                        break;
                    case "newsletter":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.newsletter;
                        }
                        break;
                    case "feedback":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.feedback;
                        }
                        break;
                    case "login":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.login;
                        }
                        break;
                    case "login --github":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.loginGithub;
                        }
                        break;
                    case "login --discord":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.loginDiscord;
                        }
                        break;
                    case "login --google":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.loginGoogle;
                        }
                        break;
                    case "login --twitter":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.loginTwitter;
                        }
                        break;
                    case "login --microsoft":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.loginMicrosoft;
                        }
                        break;
                    case "login --apple":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.loginApple;
                        }
                        break;
                    case "login --email":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.loginEmail;
                        }
                        break;
                    case "register":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.register;
                        }
                        break;
                    case "register --github":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.registerGithub;
                        }
                        break;
                    case "register --discord":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.registerDiscord;
                        }
                        break;
                    case "register --google":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.registerGoogle;
                        }
                        break;
                    case "register --twitter":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.registerTwitter;
                        }
                        break;
                    case "register --microsoft":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.registerMicrosoft;
                        }
                        break;
                    case "register --apple":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.registerApple;
                        }
                        break;
                    case "register --email":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.registerEmail;
                        }
                        break;
                    case "profile":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.profile;
                        }
                        break;
                    case "settings":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.settings;
                        }
                        break;
                    case "logout":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.logout;
                        }
                        break;
                    case "search":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.search;
                        }
                        break;
                    default:
                        break;
                }

                inputElement.innerText = "";
                break;
            case " ":
                inputElement.innerText += "\u00A0";
                break;
            case /^[a-zA-Z0-9\-]$/.test(event.key) && event.key:
                inputElement.innerText += event.key;
                break;
            default:
                return;
        }

        const cursorElement = document.getElementById("cursor");
        cursorElement?.classList.add("write");

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            cursorElement?.classList.remove("write");
        }, 1000);
    }
});
