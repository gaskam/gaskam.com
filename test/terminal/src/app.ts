import * as command from "./commands.ts";

let timeout = -1;
document.addEventListener("keydown", function (event) {
    const inputElement = document.getElementById("input");
    const terminalElement = document.getElementById("terminal");
    if (inputElement) {
        switch (event.key) {
            case "Backspace": {
                inputElement.innerText = inputElement.innerText.slice(0, -1);
                break;
            }
            case "Enter": {
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

                const inputWords = inputElement.innerText.split("\u00A0");
                const firstWord = inputWords[0];
                let secondWord = "";

                if (inputWords.length > 1 && inputWords[1].startsWith("--")) {
                    secondWord = inputWords[1].substring(2);
                } else if (inputWords.length > 1) {
                    if (terminalElement) {
                        terminalElement.innerHTML += "<br>&nbsp;&nbsp;It's not a valid argument: don't forget to add -- before the argument!";
                    }
                    secondWord = "";
                }

                switch (firstWord) {
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
                        switch (secondWord) {
                            case "typescript":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.projectsTypescript;
                                }
                                break;
                            case "javascript":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.projectsJavascript;
                                }
                                break;
                            case "bun":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.projectsBun;
                                }
                                break;
                            case "lua":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.projectsLua;
                                }
                                break;
                            case "python":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.projectsPython;
                                }
                                break;
                            case "cpp":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.projectsCpp;
                                }
                                break;
                            case "":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.projects;
                                }
                                break;
                            default:
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.defaultError;
                                }
                                break;
                        }
                        break;                    
                    case "support":
                        if (terminalElement) {
                            terminalElement.innerHTML += command.support;
                        }
                        break;
                    case "github":
                        switch (secondWord) {
                            case "gaskam":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.githubGaskam;
                                }
                                break;
                            case "patafix":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.githubPatafix;
                                }
                                break;
                            case "botmaker":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.githubBotmaker;
                                }
                                break;
                            case "":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.github;
                                }
                                break;
                            default:
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.defaultError;
                                }
                                break;
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
                        switch (secondWord) {
                            case "default":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.langDefault;
                                }
                                break;
                            case "en":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.langEn;
                                }
                                break;
                            case "fr":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.langFr;
                                }
                                break;
                            case "es":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.langEs;
                                }
                                break;
                            case "it":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.langIt;
                                }
                                break;
                            case "de":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.langDe;
                                }
                                break;
                            case "pt":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.langPt;
                                }
                                break;
                            case "ru":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.langRu;
                                }
                                break;
                            case "zh":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.langZh;
                                }
                                break;
                            case "ja":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.langJa;
                                }
                                break;
                            case "ko":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.langKo;
                                }
                                break;
                            case "":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.lang;
                                }
                                break;
                            default:
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.defaultError;
                                }
                                break;
                        }
                        break;
                    case "theme":
                        switch (secondWord) {
                            case "":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.theme;
                                }
                                break;
                            case "--default":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.themeDefault;
                                }
                                break;
                            case "--light":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.themeLight;
                                }
                                break;
                            case "--dark":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.themeDark;
                                }
                                break;
                            default:
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.defaultError;
                                }
                                break;
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
                        switch (secondWord) {
                            case "":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.privacy;
                                }
                                break;
                            case "--pdf":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.privacyPdf;
                                }
                                break;
                            default:
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.defaultError;
                                }
                                break;
                        }
                        break;
                    case "terms":
                        switch (secondWord) {
                            case "":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.terms;
                                }
                                break;
                            case "--pdf":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.termsPdf;
                                }
                                break;
                            default:
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.defaultError;
                                }
                                break;
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
                        switch (secondWord) {
                            case "":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.login;
                                }
                                break;
                            case "--github":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.loginGithub;
                                }
                                break;
                            case "--discord":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.loginDiscord;
                                }
                                break;
                            case "--google":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.loginGoogle;
                                }
                                break;
                            case "--twitter":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.loginTwitter;
                                }
                                break;
                            case "--microsoft":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.loginMicrosoft;
                                }
                                break;
                            case "--apple":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.loginApple;
                                }
                                break;
                            case "--email":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.loginEmail;
                                }
                                break;
                            default:
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.defaultError;
                                }
                                break;
                        }
                        break;
                    case "register":
                        switch (secondWord) {
                            case "":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.register;
                                }
                                break;
                            case "--github":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.registerGithub;
                                }
                                break;
                            case "--discord":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.registerDiscord;
                                }
                                break;
                            case "--google":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.registerGoogle;
                                }
                                break;
                            case "--twitter":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.registerTwitter;
                                }
                                break;
                            case "--microsoft":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.registerMicrosoft;
                                }
                                break;
                            case "--apple":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.registerApple;
                                }
                                break;
                            case "--email":
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.registerEmail;
                                }
                                break;
                            default:
                                if (terminalElement) {
                                    terminalElement.innerHTML += command.defaultError;
                                }
                                break;
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
                        if (terminalElement) {
                            terminalElement.innerHTML += command.defaultError;
                        }
                        break;
                }

                inputElement.innerText = "";
                break;
            }
            case " ":
                inputElement.innerText += "\u00A0";
                break;
            case /^[a-zA-Z0-9\-\,]$/.test(event.key) && event.key:
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
